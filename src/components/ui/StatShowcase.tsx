import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/ui/Counter";

interface StatShowcaseProps {
  /** Background it sits on — sets number/label contrast. */
  tone?: "ink" | "paper";
  className?: string;
}

const items = [
  { value: site.stats.onTimePct, suffix: "%", label: "On-time delivery" },
  { value: site.stats.profitMarginPct, suffix: "%", label: "Avg. client profit margin" },
  { value: site.stats.avgMonthlyCost, prefix: "$", suffix: "/mo", label: "Avg. monthly cost" },
  { value: site.stats.turnaroundHours, prefix: "≤", suffix: "h", label: "Avg. turnaround" },
];

/** Real-figure stat grid used wherever the site needs a visual without a photo (§ illustration replacement). */
export function StatShowcase({ tone = "paper", className }: StatShowcaseProps) {
  const numberColor = tone === "ink" ? "text-brass" : "text-brass-dim";
  const labelColor = tone === "ink" ? "text-mist/60" : "text-graphite/60";
  const dividerColor = tone === "ink" ? "border-white/10" : "border-mist";

  return (
    <div className={cn("grid grid-cols-2 gap-x-6 gap-y-6", className)}>
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col gap-1 pb-5",
            i < items.length - (items.length % 2 === 0 ? 2 : 1) && "border-b",
            dividerColor,
          )}
        >
          <span className={cn("data text-3xl font-semibold md:text-4xl", numberColor)}>
            <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
          </span>
          <span className={cn("text-xs uppercase tracking-wide", labelColor)}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
