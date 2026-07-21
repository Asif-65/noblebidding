import { cn } from "@/lib/utils";

/**
 * Noble Bidding mark — three ascending spires rising from a building base with
 * a window grid, echoing the company logo. Rendered in the site's brass/ink
 * palette (the logo art is blue; the site theme is brass, per brand direction)
 * and adapts to the background tone. Decorative — aria-hidden.
 */
export function BrandMark({
  tone = "ink",
  size = 36,
  className,
}: {
  tone?: "ink" | "paper";
  size?: number;
  className?: string;
}) {
  const house = tone === "ink" ? "#33406B" : "#0A1226";
  const spire = tone === "ink" ? "url(#bm-brass)" : "#8A7233";
  const windowColor = "#C8A951";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bm-brass" x1="22" y1="3" x2="22" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9BE6E" />
          <stop offset="1" stopColor="#8A7233" />
        </linearGradient>
      </defs>

      {/* Building base with peaked roof */}
      <path d="M8 41 V28 L22 20 L36 28 V41 Z" fill={house} />

      {/* Window grid (2x2) */}
      <g fill={windowColor}>
        <rect x="17.5" y="31" width="4" height="4" rx="0.5" />
        <rect x="24" y="31" width="4" height="4" rx="0.5" />
        <rect x="17.5" y="36.5" width="4" height="4" rx="0.5" />
        <rect x="24" y="36.5" width="4" height="4" rx="0.5" />
      </g>

      {/* Side spires */}
      <path d="M14 10 L17 17 V25 H11 V17 Z" fill={spire} opacity="0.9" />
      <path d="M30 10 L33 17 V25 H27 V17 Z" fill={spire} opacity="0.9" />

      {/* Center spire (tallest) */}
      <path d="M22 3 L25 12 V25 H19 V12 Z" fill={spire} />
    </svg>
  );
}
