import { NextResponse } from "next/server";
import { quoteRequestSchema, detectSpam, isTrustedBlobUrl, formatBytes } from "@/lib/validation";
import { sendEmail, escapeHtml } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = quoteRequestSchema.safeParse(payload);
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

  // Files were uploaded directly to Blob storage by the client (never through
  // this route's request body — Vercel caps that at 4.5MB). Only trust URLs
  // that actually point at our own store.
  const files = (data.files ?? []).filter((f) => isTrustedBlobUrl(f.url));

  const fileList = files
    .map((f) => `<a href="${escapeHtml(f.url)}">${escapeHtml(f.filename)}</a> (${formatBytes(f.size)})`)
    .join("<br>");

  const html = `
    <h2>New quote request — Noble Bidding</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>ZIP:</strong> ${escapeHtml(data.zip)}</p>
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(data.details).replace(/\n/g, "<br>")}</p>
    <p><strong>Files (${files.length}):</strong><br>${fileList || "none attached"}</p>
  `;

  const result = await sendEmail({
    subject: `New quote request from ${data.name} (${data.zip})`,
    html,
    replyTo: data.email,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "We could not submit your request right now. Please call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: result.delivered });
}
