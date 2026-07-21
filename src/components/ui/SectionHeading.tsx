import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: string;
  title: React.ReactNode;
  subhead?: React.ReactNode;
  tone?: "ink" | "paper";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
}

/** Standard eyebrow + heading + subhead block used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  subhead,
  tone = "paper",
  align = "left",
  as: Heading = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const HeadingTag = Heading as React.ElementType;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow icon={eyebrowIcon} tone={tone}>
          {eyebrow}
        </Eyebrow>
      )}
      <HeadingTag
        className={cn(
          Heading === "h1" ? "text-h1" : "text-h2",
          tone === "ink" ? "text-white" : "text-ink",
          "max-w-3xl font-display font-bold",
          align === "center" && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </HeadingTag>
      {subhead && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            tone === "ink" ? "text-mist/70" : "text-graphite/80",
            align === "center" && "mx-auto",
          )}
        >
          {subhead}
        </p>
      )}
    </div>
  );
}
