import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

interface CoverImageProps {
  /** Real image path under /public. When omitted, a branded placeholder renders. */
  src?: string;
  alt: string;
  /** Seed string (e.g. slug) to vary the placeholder gradient deterministically. */
  seed?: string;
  /** Small label shown on the placeholder, e.g. a category. */
  label?: string;
  icon?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Aspect ratio utility class, e.g. "aspect-[4/3]". */
  aspect?: string;
}

// Deterministic gradient angle from a seed so cards look varied but stable.
function seedAngle(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return hash % 360;
}

/**
 * Content imagery slot. Uses next/image when a real `src` is supplied
 * (lazy by default, `priority` for above-the-fold). With no src it renders a
 * branded, blueprint-style placeholder so nothing is ever a broken image.
 */
export function CoverImage({
  src,
  alt,
  seed = "noble",
  label,
  icon = "DraftingCompass",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 400px",
  className,
  aspect = "aspect-[4/3]",
}: CoverImageProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-slate", aspect, className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{
            background: `linear-gradient(${seedAngle(seed)}deg, #0A1226 0%, #1B2540 100%)`,
          }}
        >
          {/* Faint ruled overlay to echo a takeoff sheet */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
            aria-hidden
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id={`grid-${seed}`} width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="#E3E6EC" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${seed})`} />
          </svg>
          <Icon name={icon} size={30} className="relative text-brass" />
          {label && (
            <span className="relative text-eyebrow font-semibold uppercase text-mist/70">{label}</span>
          )}
        </div>
      )}
    </div>
  );
}
