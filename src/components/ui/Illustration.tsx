import { cn } from "@/lib/utils";

type Variant = "estimate" | "takeoff" | "delivery" | "contact";

interface IllustrationProps {
  variant?: Variant;
  /** Background the art sits on — sets line contrast. */
  tone?: "ink" | "paper";
  className?: string;
}

/**
 * Decorative, on-brand SVG art in the language of a bid sheet: ruled rows,
 * mono figures, a tallied total. Inline (not next/image) so it is theme-aware
 * and ships with zero broken assets. Purely decorative — aria-hidden.
 *
 * To use real photography instead, swap these for <CoverImage> / next/image.
 */
export function Illustration({ variant = "estimate", tone = "paper", className }: IllustrationProps) {
  const line = tone === "ink" ? "rgba(227,230,236,0.28)" : "rgba(10,18,38,0.14)";
  const faint = tone === "ink" ? "rgba(227,230,236,0.10)" : "rgba(10,18,38,0.05)";
  const brass = "#C8A951";
  const brassDim = "#8A7233";
  const panel = tone === "ink" ? "#1B2540" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 420 340"
      role="img"
      aria-hidden
      className={cn("h-auto w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sheet */}
      <rect x="24" y="20" width="372" height="300" rx="14" fill={panel} stroke={line} strokeWidth="1.5" />

      {/* Header band */}
      <rect x="24" y="20" width="372" height="46" rx="14" fill={faint} />
      <rect x="24" y="52" width="372" height="14" fill={panel} />
      <rect x="44" y="36" width="120" height="8" rx="4" fill={brass} />
      <rect x="44" y="48" width="70" height="6" rx="3" fill={line} />

      {/* Column gutters (ruled) */}
      <line x1="250" y1="66" x2="250" y2="320" stroke={faint} strokeWidth="1" />
      <line x1="322" y1="66" x2="322" y2="320" stroke={faint} strokeWidth="1" />

      {/* Rows */}
      {[92, 120, 148, 176, 204, 232].map((y, i) => (
        <g key={y}>
          <rect x="44" y={y} width={90 + (i % 3) * 26} height="7" rx="3.5" fill={line} />
          <rect x="262" y={y} width="44" height="7" rx="3.5" fill={faint} />
          <rect x="338" y={y} width="42" height="7" rx="3.5" fill={i === 1 ? brassDim : line} />
          <line x1="44" y1={y + 18} x2="376" y2={y + 18} stroke={faint} strokeWidth="1" />
        </g>
      ))}

      {/* Total row */}
      <rect x="44" y="266" width="332" height="34" rx="8" fill={tone === "ink" ? "rgba(200,169,81,0.14)" : "rgba(200,169,81,0.16)"} />
      <rect x="60" y="279" width="70" height="8" rx="4" fill={brass} />
      <rect x="322" y="279" width="42" height="8" rx="4" fill={brass} />

      {variant === "takeoff" && (
        <g>
          {/* Building takeoff overlay */}
          <path d="M300 96 h64 v70 h-64 z" fill="none" stroke={brass} strokeWidth="2" />
          <path d="M300 116 h64 M300 136 h64 M320 96 v70 M344 96 v70" stroke={brass} strokeWidth="1" opacity="0.7" />
        </g>
      )}

      {variant === "delivery" && (
        <g>
          <rect x="296" y="92" width="72" height="52" rx="6" fill="none" stroke={brass} strokeWidth="2" />
          <path d="M296 108 h72 M332 92 v52" stroke={brass} strokeWidth="1.5" opacity="0.8" />
          <circle cx="332" cy="126" r="6" fill={brass} />
        </g>
      )}

      {variant === "contact" && (
        <g>
          <rect x="292" y="92" width="80" height="54" rx="6" fill="none" stroke={brass} strokeWidth="2" />
          <path d="M292 98 l40 30 l40 -30" fill="none" stroke={brass} strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}
