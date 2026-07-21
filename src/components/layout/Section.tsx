import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { RuledOverlay } from "@/components/ui/RuledOverlay";

type Tone = "ink" | "paper" | "slate";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
  /** Show the signature ruled-column overlay behind the content. */
  ruled?: boolean;
  /** Constrain and pad the inner content in a Container. Default true. */
  contained?: boolean;
  /** Vertical padding size. */
  spacing?: "default" | "compact" | "none";
}

const toneClasses: Record<Tone, string> = {
  ink: "bg-ink text-mist",
  paper: "bg-paper text-graphite",
  slate: "bg-slate text-mist",
};

const spacingClasses = {
  default: "py-24 md:py-32",
  compact: "py-16 md:py-20",
  none: "",
};

/**
 * A full-width horizontal band with a background tone and consistent vertical
 * rhythm. Alternate ink/paper across the page (§5). Renders as <section>.
 */
export function Section({
  tone = "paper",
  ruled = false,
  contained = true,
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden", toneClasses[tone], spacingClasses[spacing], className)}
      {...props}
    >
      {ruled && <RuledOverlay tone={tone} />}
      {contained ? <Container className="relative">{children}</Container> : children}
    </section>
  );
}
