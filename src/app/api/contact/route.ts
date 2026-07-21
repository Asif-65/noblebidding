import { NextResponse } from "next/server";
import { contactSchema, detectSpam } from "@/lib/validation";
import { sendEmail, escapeHtml } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Server-side re-validation with the shared schema — never trust the client.
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: first?.message || "Please check the form and try again." },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Spam gate: honeypot + timestamp. Return a generic success so bots learn
  // nothing, but do not send anything.
  const spam = detectSpam({ company_website: data.company_website, startedAt: data.startedAt });
  if (spam) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const html = `
    <h2>New contact message — Noble Bidding</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(data.projectType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;

  const result = await sendEmail({
    subject: `New contact message from ${data.name}`,
    html,
    replyTo: data.email,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "We could not send your message right now. Please call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: result.delivered });
}
