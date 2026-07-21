import { metrics as defaultMetrics, type Metric } from "@/content/home";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

interface MetricsBandProps {
  metrics?: Metric[];
  heading?: string;
}

/**
 * Six figures that count up on scroll. Mono numerals, right-aligned in each
 * cell with thin brass rules between — the estimate-total device (§4).
 * Reused on the home page and the about page.
 */
export function MetricsBand({ metrics = defaultMetrics, heading }: MetricsBandProps) {
  return (
    <Section tone="ink" ruled spacing="compact">
      {heading && (
        <Reveal>
          <h2 className="mb-10 text-center text-h2 font-display font-bold text-white">{heading}</h2>
        </Reveal>
      )}
      <dl className={cn("grid grid-cols-2 gap-y-8", metrics.length >= 6 ? "sm:grid-cols-3 lg:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-4")}>
        {metrics.map((metric, i) => (
          <Reveal
            key={metric.label}
            delay={i * 0.06}
            className={cn(
              "flex flex-col items-end gap-1 text-right",
              i !== 0 && "sm:border-l sm:border-brass-dim/30 sm:pl-4 lg:pl-6",
            )}
          >
            <dd className="text-3xl font-semibold text-brass md:text-4xl">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals ?? 0}
              />
            </dd>
            <dt className="text-xs uppercase tracking-wide text-mist/60">{metric.label}</dt>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
