import { site } from "@/content/site";
import { hero } from "@/content/home";
import { telHref, cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Illustration } from "@/components/ui/Illustration";

export function Hero() {
  return (
    <Section tone="ink" ruled className="pt-14 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Eyebrow icon={hero.eyebrowIcon} tone="ink">
              {hero.eyebrow}
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="text-h1 font-display font-bold text-white">{hero.title}</h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-xl text-lg leading-relaxed text-mist/75">{hero.subhead}</p>
          </Reveal>

          <Reveal delay={0.18} className="flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} size="lg" iconRight="ArrowRight">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={telHref(site.phone)}
              size="lg"
              variant="outline"
              tone="ink"
              iconLeft="Phone"
            >
              {hero.secondaryCta.label}
            </Button>
          </Reveal>

          {/* Inline stats */}
          <Reveal delay={0.24} className="w-full">
            <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {hero.inlineStats.map((stat, i) => (
                <div key={i} className={cn("flex flex-col gap-1", i > 0 && "border-l border-white/10 pl-4")}>
                  <dt className="order-2 text-xs uppercase tracking-wide text-mist/60">{stat.label}</dt>
                  <dd className="order-1 text-2xl font-semibold text-brass md:text-3xl">
                    {"isText" in stat && stat.isText ? (
                      <span className="data">{stat.value}</span>
                    ) : (
                      <Counter value={Number(stat.value)} suffix={stat.suffix} />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right column — illustration with floating stat cards */}
        <Reveal delay={0.16} className="relative px-4 sm:px-8 lg:px-4">
          <div className="rounded-card border border-white/10 bg-slate/60 p-5 shadow-elevation">
            <Illustration variant="takeoff" tone="ink" />
          </div>

          <div className="absolute -left-1 top-6 rounded-card border border-white/10 bg-slate px-4 py-3 shadow-elevation sm:left-2">
            <p className="data text-2xl font-semibold text-brass">
              <Counter value={hero.floatCards[0].value} suffix={hero.floatCards[0].suffix} />
            </p>
            <p className="text-xs uppercase tracking-wide text-mist/60">{hero.floatCards[0].label}</p>
          </div>

          <div className="absolute -right-1 bottom-6 rounded-card border border-white/10 bg-slate px-4 py-3 shadow-elevation sm:right-2">
            <p className="data text-2xl font-semibold text-brass">
              <Counter value={hero.floatCards[1].value} suffix={hero.floatCards[1].suffix} />
            </p>
            <p className="text-xs uppercase tracking-wide text-mist/60">{hero.floatCards[1].label}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
