"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { upload } from "@vercel/blob/client";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { quoteSchema, type QuoteValues } from "@/lib/validation";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FileDrop } from "@/components/ui/FileDrop";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const startedAt = useRef<number>(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(values: QuoteValues) {
    setStatus("submitting");
    setProgress(0);
    setServerError(null);

    try {
      // Upload straight to Blob storage from the browser — never through this
      // app's own request body, which Vercel caps at 4.5MB regardless of plan.
      const loadedByFile = new Array(files.length).fill(0);
      const totalBytes = files.reduce((sum, f) => sum + f.size, 0) || 1;

      const uploaded = await Promise.all(
        files.map((file, index) =>
          upload(file.name, file, {
            access: "public",
            handleUploadUrl: "/api/quote/upload",
            onUploadProgress: ({ loaded }) => {
              loadedByFile[index] = loaded;
              const loadedTotal = loadedByFile.reduce((sum, n) => sum + n, 0);
              setProgress(Math.round((loadedTotal / totalBytes) * 100));
            },
          }),
        ),
      );

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          startedAt: startedAt.current,
          files: uploaded.map((blob, index) => ({
            filename: files[index].name,
            url: blob.url,
            size: files[index].size,
          })),
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "We could not submit your request. Please try again or call us.");
      }
      setStatus("success");
      reset();
      setFiles([]);
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
        <h3 className="font-display text-h3 font-bold text-ink">Plans received</h3>
        <p className="text-graphite">
          We have your request and will review it within two business hours. You will get a
          confirmation email shortly, and your estimate follows in 24 to 48 hours.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit another project
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
        <Input label="ZIP code" required inputMode="numeric" autoComplete="postal-code" error={errors.zip?.message} {...register("zip")} />
      </div>

      <Textarea
        label="Project details"
        required
        rows={5}
        placeholder="Scope, trades involved, square footage, and your bid deadline."
        error={errors.details?.message}
        {...register("details")}
      />

      <FileDrop files={files} onFilesChange={setFiles} label="Attach plans (PDF, DWG, DXF)" />

      {/* Honeypot — must stay empty. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company_website_q">Company website</label>
        <input id="company_website_q" type="text" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      {status === "submitting" && progress > 0 && (
        <div>
          <div className="mb-1 flex justify-between text-xs text-graphite/70">
            <span>Uploading…</span>
            <span className="data">{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-mist" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full rounded-full bg-brass transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {status === "error" && serverError && (
        <p role="alert" className="flex items-start gap-2 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} iconRight={status === "submitting" ? undefined : "Upload"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden /> Submitting…
          </>
        ) : (
          "Submit plans"
        )}
      </Button>
      <p className="text-xs text-graphite/60">
        By submitting, you agree to our{" "}
        <a href="/terms" className="underline hover:text-brass-dim">terms</a> and{" "}
        <a href="/privacy" className="underline hover:text-brass-dim">privacy policy</a>. Your plans stay confidential.
      </p>
    </form>
  );
}
