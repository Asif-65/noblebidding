import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { BrandMark } from "@/components/ui/BrandMark";

/**
 * Wordmark: the Noble Bidding mark plus the company name and "Estimation
 * Services" descriptor, matching the logo lockup. Splits the name so the
 * second word carries the brass accent.
 */
export function Logo({
  tone = "ink",
  showDescriptor = false,
  className,
}: {
  tone?: "ink" | "paper";
  /** Show the "Estimation Services" descriptor line under the name. */
  showDescriptor?: boolean;
  className?: string;
}) {
  const [first, ...rest] = site.name.split(" ");
  const second = rest.join(" ");
  const textColor = tone === "ink" ? "text-mist" : "text-ink";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass",
        className,
      )}
    >
      <BrandMark tone={tone} size={36} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold tracking-tight", textColor)}>
          {first} <span className="text-brass">{second}</span>
        </span>
        {showDescriptor && (
          <span
            className={cn(
              "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em]",
              tone === "ink" ? "text-mist/55" : "text-graphite/60",
            )}
          >
            {site.descriptor}
          </span>
        )}
      </span>
    </Link>
  );
}
