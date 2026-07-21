import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface tone. `light` for paper sections, `dark` for elevated cards on ink. */
  surface?: "light" | "dark";
  /** Add hover elevation/transition (for interactive cards). */
  interactive?: boolean;
}

/**
 * Base card: 12px radius, hairline border, one soft elevation. No stacked
 * glows (§4). `dark` renders the elevated slate card used on ink sections.
 */
export function Card({ surface = "light", interactive = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border",
        surface === "light"
          ? "border-mist bg-white"
          : "border-white/10 bg-slate",
        interactive &&
          "transition-shadow duration-200 hover:shadow-elevation " +
            (surface === "dark" ? "hover:border-brass/40" : "hover:border-brass-dim/40"),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
