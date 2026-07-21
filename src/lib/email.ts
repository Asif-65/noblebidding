import { Resend } from "resend";
import { site } from "@/content/site";

interface SendEmailInput {
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Sends transactional email via Resend. If RESEND_API_KEY is not set, the
 * payload is logged and the call resolves as a no-op success — so forms work
 * in local development without any email provider configured (§8).
 */
export async function sendEmail({ subject, html, replyTo }: SendEmailInput): Promise<
  { ok: true; delivered: boolean } | { ok: false; error: string }
> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  // Requires CONTACT_FROM_EMAIL's domain to be verified in Resend — falls back
  // to the sandbox sender (which can only deliver to the Resend account's own
  // signup email) if unset.
  const from = `Noble Bidding <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`;

  if (!apiKey) {
    // Development fallback — no provider configured.
    console.info("[email] RESEND_API_KEY not set — logging payload instead of sending.");
    console.info(`[email] to=${to} subject="${subject}"`);
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
