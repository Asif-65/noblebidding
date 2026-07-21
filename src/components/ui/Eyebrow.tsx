import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

interface EyebrowProps {
  children: React.ReactNode;
  icon?: string;
  /** Background the eyebrow sits on — adjusts contrast for WCAG AA. */
  tone?: "ink" | "paper";
  className?: string;
  as?: "span" | "p" | "div";
}

/**
 * The one fully-rounded pill in the system (§4). Small uppercase brass label,
 * optional leading icon. Uses brass-dim text on light backgrounds so the small
 * type still meets contrast.
 */
export function Eyebrow({ children, icon, tone = "paper", className, as: Tag = "span" }: EyebrowProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-eyebrow font-semibold uppercase",
        tone === "ink"
          ? "border-brass/30 bg-brass/10 text-brass"
          : "border-brass-dim/30 bg-brass/10 text-brass-dim",
        className,
      )}
    >
      {icon && <Icon name={icon} size={14} strokeWidth={2} />}
      {children}
    </Component>
  );
}
