"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, PROJECT_TYPES, type ContactValues } from "@/lib/validation";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const startedAt = useRef<number>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(values: ContactValues) {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "We could not send your message. Please try again or call us.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-card border border-mist bg-white p-8 shadow-elevation"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brass/15">
          <CheckCircle2 className="text-brass-dim" aria-hidden />
        </span>
        <h3 className="font-display text-h3 font-bold text-ink">Message sent</h3>
        <p className="text-graphite">
          Thanks for reaching out. We reply within two business hours. If your bid is due sooner,
          call us and we will jump on it.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-card border border-mist bg-white p-6 shadow-elevation sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Full name" required autoComplete="name" error={errors.name?.message} {...register("name")} />
        <Input label="Email" type="email" required autoComplete="email" error={errors.email?.message} {...register("email")} />
        <Input label="Phone" type="tel" required autoComplete="tel" error={errors.phone?.message} {...register("phone")} />
        <Select
          label="Project type"
          required
          options={PROJECT_TYPES}
          error={errors.projectType?.message}
          {...register("projectType")}
        />
      </div>
      <Textarea
        label="Message"
        required
        rows={5}
        placeholder="Tell us about the project, the trades involved, and your bid deadline."
        error={errors.message?.message}
        {...register("message")}
      />

      {/* Honeypot — hidden from users, tempting to bots. Must stay empty. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" type="text" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      {status === "error" && serverError && (
        <p role="alert" className="flex items-start gap-2 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} iconRight={status === "submitting" ? undefined : "Send"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
