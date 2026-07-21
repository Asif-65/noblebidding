import { Resend } from "resend";
import { site } from "@/content/site";

export interface EmailAttachment {
  filename: string;
  content: Buffer;
}

interface SendEmailInput {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
}

/**
 * Sends transactional email via Resend. If RESEND_API_KEY is not set, the
 * payload is logged and the call resolves as a no-op success — so forms work
 * in local development without any email provider configured (§8).
 */
export async function sendEmail({ subject, html, replyTo, attachments }: SendEmailInput): Promise<
  { ok: true; delivered: boolean } | { ok: false; error: string }
> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || `Noble Bidding <onboarding@resend.dev>`;

  if (!apiKey) {
    // Development fallback — no provider configured.
    console.info("[email] RESEND_API_KEY not set — logging payload instead of sending.");
    console.info(`[email] to=${to} subject="${subject}"`);
    if (attachments?.length) {
      console.info(`[email] attachments: ${attachments.map((a) => a.filename).join(", ")}`);
    }
    return { ok: true, delivered: false };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo,
      attachments: attachments?.map((a) => ({ filename: a.filename, content: a.content })),
    });
    if (error) {
      console.error("[email] Resend error:", error);
      return { ok: false, error: "Email delivery failed." };
    }
    return { ok: true, delivered: true };
  } catch (err) {
    console.error("[email] send threw:", err);
    return { ok: false, error: "Email delivery failed." };
  }
}

/** Minimal HTML escaper for interpolating user input into email bodies. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
