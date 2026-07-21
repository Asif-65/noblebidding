import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { cn } from "@/lib/utils";

interface HeroStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface PageHeroProps {
  eyebrow?: string;
  eyebrowIcon?: string;
  title: string;
  subhead?: string;
  breadcrumb?: Crumb[];
  stats?: HeroStat[];
  children?: React.ReactNode;
}

/** Standard interior-page hero on ink with the ruled overlay and one h1. */
export function PageHero({ eyebrow, eyebrowIcon, title, subhead, breadcrumb, stats, children }: PageHeroProps) {
  return (
    <Section tone="ink" ruled spacing="compact" className="pt-10 md:pt-14">
      <div className="flex flex-col gap-6">
        {breadcrumb && (
          <Reveal>
            <Breadcrumb items={breadcrumb} tone="ink" />
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <Eyebrow icon={eyebrowIcon} tone="ink">
              {eyebrow}
            </Eyebrow>
          </Reveal>
        )}
        <Reveal delay={0.06}>
          <h1 className="max-w-4xl text-h1 font-display font-bold text-white">{title}</h1>
        </Reveal>
        {subhead && (
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-lg leading-relaxed text-mist/75">{subhead}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.16} className="flex flex-wrap gap-3">{children}</Reveal>}

        {stats && stats.length > 0 && (
          <Reveal delay={0.2}>
            <dl className="mt-4 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i} className={cn("flex flex-col gap-1", i > 0 && "sm:border-l sm:border-white/10 sm:pl-6")}>
                  <dd className="text-3xl font-semibold text-brass">
                    <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </dd>
                  <dt className="text-xs uppercase tracking-wide text-mist/60">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
