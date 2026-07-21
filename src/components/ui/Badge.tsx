import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "brass" | "ink" | "mist";
  className?: string;
}

/** Small rounded label for categories and "Most popular" flags. */
export function Badge({ children, tone = "mist", className }: BadgeProps) {
  const tones = {
    brass: "bg-brass text-ink",
    ink: "bg-ink text-paper",
    mist: "bg-ink/[0.06] text-graphite",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
