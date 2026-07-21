import { z } from "zod";

/**
 * Zod schemas shared by client forms (react-hook-form resolver) and the API
 * routes (server-side re-validation). Never trust the client — the same schema
 * runs again in app/api/*.
 */

// Project types offered in the contact/quote selects. Keep in sync with
// content where these are rendered.
export const PROJECT_TYPES = [
  "Electrical",
  "Mechanical / HVAC",
  "Plumbing",
  "General Contracting",
  "Low Voltage",
  "Civil / Sitework",
  "Other",
] as const;

// Anti-spam fields shared by every form. The honeypot must stay empty; a real
// user cannot fill a hidden field. `startedAt` is a client timestamp (ms) used
// to reject submissions completed implausibly fast (bots).
const antiSpam = {
  // Honeypot: named to look tempting to bots, hidden from humans via CSS.
  // Intentionally NOT constrained here — a filled value passes schema validation
  // and is caught by detectSpam(), which drops it with a generic success so
  // bots cannot distinguish the honeypot from a normal accepted submission.
  company_website: z.string().optional(),
  startedAt: z.coerce.number().optional(),
};

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(30)
    .regex(/^[\d+()\-.\s]+$/, "Enter a valid phone number."),
  projectType: z.enum(PROJECT_TYPES, {
    errorMap: () => ({ message: "Select a project type." }),
  }),
  message: z.string().trim().min(10, "Tell us a little more — at least 10 characters.").max(2000),
  ...antiSpam,
});

export type ContactValues = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(30)
    .regex(/^[\d+()\-.\s]+$/, "Enter a valid phone number."),
  zip: z
    .string()
    .trim()
    .regex(/^\d{5}(-\d{4})?$/, "Enter a valid 5-digit ZIP code."),
  details: z
    .string()
    .trim()
    .min(10, "Describe the project — at least 10 characters.")
    .max(3000),
  ...antiSpam,
});

export type QuoteValues = z.infer<typeof quoteSchema>;

// ---- File upload constraints (used client + server side) ----

export const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20MB
export const MAX_FILES = 10;

// Accepted extensions and their MIME types. DWG/DXF have inconsistent MIME
// reporting across browsers, so we accept a permissive set and also fall back
// to extension checks.
export const ACCEPTED_EXTENSIONS = [".pdf", ".dwg", ".dxf"] as const;

export const ACCEPTED_MIME_TYPES = [
  "application/pdf",
  "application/acad",
  "application/x-acad",
  "application/autocad_dwg",
  "image/vnd.dwg",
  "image/x-dwg",
  "application/dxf",
  "image/vnd.dxf",
  "application/octet-stream", // many browsers report DWG/DXF as this
];

export function fileHasAcceptedExtension(filename: string): boolean {
  const lower = filename.toLowerCase();
  return ACCEPTED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

/** Human-readable byte size, e.g. 15728640 -> "15.0 MB". */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Server-side spam gate shared by both API routes. Returns an error string if
 * the submission looks like spam, otherwise null.
 */
export function detectSpam(input: {
  company_website?: string;
  startedAt?: number;
}): string | null {
  if (input.company_website && input.company_website.length > 0) {
    return "Spam detected.";
  }
  if (typeof input.startedAt === "number" && input.startedAt > 0) {
    const elapsed = Date.now() - input.startedAt;
    // A human cannot fill and submit a real form in under 2 seconds.
    if (elapsed >= 0 && elapsed < 2000) {
      return "Form submitted too quickly.";
    }
  }
  return null;
}
