import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { ACCEPTED_MIME_TYPES, MAX_FILE_BYTES, fileHasAcceptedExtension } from "@/lib/validation";

export const runtime = "nodejs";

// Issues short-lived client tokens so plan uploads go straight from the
// browser to Blob storage — never through this app's request body, which
// Vercel caps at 4.5MB regardless of plan (§ upload size fix).
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!fileHasAcceptedExtension(pathname)) {
          throw new Error("Unsupported file type. Accepted: PDF, DWG, DXF.");
        }
        return {
          allowedContentTypes: ACCEPTED_MIME_TYPES,
          maximumSizeInBytes: MAX_FILE_BYTES,
          addRandomSuffix: true,
        };
      },
      onUploadCompleted: async () => {
        // No-op — the client attaches the returned blob URL to the /api/quote
        // submission itself, so there's no server state to update here.
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed." },
      { status: 400 },
    );
  }
}
