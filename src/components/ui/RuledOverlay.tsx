import { cn } from "@/lib/utils";

/**
 * Signature element (§4): a faint ruled-column overlay echoing a takeoff sheet.
 * Twelve evenly-spaced vertical hairlines aligned to the container, 1px at ~6%
 * opacity, sitting behind hero and stat sections. Purely decorative.
 */
export function RuledOverlay({ tone = "ink" }: { tone?: "ink" | "paper" | "slate" }) {
  const lineColor = tone === "paper" ? "bg-ink/[0.06]" : "bg-white/[0.06]";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
      <div className="grid h-full w-full max-w-container grid-cols-4 px-6 sm:grid-cols-8 md:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={cn("h-full w-px justify-self-end", lineColor, i >= 4 && "hidden sm:block", i >= 8 && "sm:hidden md:block")} />
        ))}
      </div>
    </div>
  );
}
