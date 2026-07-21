import { NextResponse } from "next/server";
import {
  quoteSchema,
  detectSpam,
  fileHasAcceptedExtension,
  ACCEPTED_MIME_TYPES,
  MAX_FILE_BYTES,
  MAX_FILES,
  formatBytes,
} from "@/lib/validation";
import { sendEmail, escapeHtml, type EmailAttachment } from "@/lib/email";

export const runtime = "nodejs";

// Cap total bytes we attach to a single email so we never blow past provider
// limits. Files beyond this are listed by name but not attached.
const MAX_ATTACH_TOTAL = 20 * 1024 * 1024;

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const raw = {
    name: String(form.get("name") ?? ""),
    email: String(form.get("email") ?? ""),
    phone: String(form.get("phone") ?? ""),
    zip: String(form.get("zip") ?? ""),
    details: String(form.get("details") ?? ""),
    company_website: String(form.get("company_website") ?? ""),
    startedAt: form.get("startedAt") ? Number(form.get("startedAt")) : undefined,
  };

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: first?.message || "Please check the form and try again." },
      { status: 422 },
    );
  }
  const data = parsed.data;

  const spam = detectSpam({ company_website: data.company_website, startedAt: data.startedAt });
  if (spam) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  // Validate files server-side — never trust the client (§8).
  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);

  if (files.length > MAX_FILES) {
    return NextResponse.json(
      { ok: false, error: `Too many files. Attach up to ${MAX_FILES}.` },
      { status: 422 },
    );
  }

  const attachments: EmailAttachment[] = [];
  const fileNames: string[] = [];
  let attachedTotal = 0;

  for (const file of files) {
    if (!fileHasAcceptedExtension(file.name)) {
      return NextResponse.json(
        { ok: false, error: `"${file.name}" is not a supported type. Accepted: PDF, DWG, DXF.` },
        { status: 422 },
      );
    }
    // MIME is a soft check — DWG/DXF report inconsistently, so extension is the
    // primary gate above. Reject only clearly-wrong types like text/html.
    if (file.type && !ACCEPTED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { ok: false, error: `"${file.name}" has an unexpected format and was rejected.` },
        { status: 422 },
      );
    }
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { ok: false, error: `"${file.name}" is ${formatBytes(file.size)} — over the ${formatBytes(MAX_FILE_BYTES)} limit.` },
        { status: 422 },
      );
    }

    fileNames.push(`${file.name} (${formatBytes(file.size)})`);
    if (attachedTotal + file.size <= MAX_ATTACH_TOTAL) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
      attachedTotal += file.size;
    }
  }

  const html = `
    <h2>New quote request — Noble Bidding</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>ZIP:</strong> ${escapeHtml(data.zip)}</p>
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(data.details).replace(/\n/g, "<br>")}</p>
    <p><strong>Files (${files.length}):</strong> ${fileNames.length ? escapeHtml(fileNames.join(", ")) : "none attached"}</p>
    ${
      attachments.length < files.length
        ? `<p><em>Note: ${files.length - attachments.length} file(s) exceeded the email attachment cap and were not attached — follow up with the sender.</em></p>`
        : ""
    }
  `;

  const result = await sendEmail({
    subject: `New quote request from ${data.name} (${data.zip})`,
    html,
    replyTo: data.email,
    attachments,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "We could not submit your request right now. Please call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: result.delivered });
}
