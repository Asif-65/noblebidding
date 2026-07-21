import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { servicesByCategory, services } from "@/content/services";
import { site } from "@/content/site";
import { why } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Thirteen construction estimating services — outsourced and professional estimating, takeoffs, electrical, drafting, shop drawings, and residential, commercial and industrial work.",
  path: "/services",
});

export default function ServicesPage() {
  const grouped = servicesByCategory();

  return (
    <>
      <PageHero
        eyebrow="What we do"
        eyebrowIcon="Ruler"
        title="Estimating services built for the way you bid"
        subhead="From a single-trade takeoff to a full multi-trade bid package, delivered in 24 to 48 hours."
        stats={[
          { value: services.length, label: "Services" },
          { value: site.stats.onTimePct, suffix: "%", label: "On-time delivery" },
          { value: site.stats.profitMarginPct, suffix: "%", label: "Avg. client profit margin" },
          { value: site.stats.turnaroundHours, prefix: "≤", suffix: "h", label: "Turnaround" },
        ]}
      />

      <Section tone="paper">
        <div className="flex flex-col gap-16">
          {grouped.map((group) => (
            <div key={group.category}>
              <Reveal>
                <div className="mb-6 flex items-center gap-3 border-b border-mist pb-4">
                  <h2 className="font-display text-h3 font-bold text-ink">{group.category}</h2>
                  <span className="data text-sm text-graphite/50">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((service, i) => (
                  <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                    <ServiceCard service={service} tone="light" />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink" ruled>
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Estimating you can put your name on"
            tone="ink"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.cards.slice(0, 4).map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-card border border-white/10 bg-slate p-6">
                <span className="grid h-11 w-11 place-items-center rounded-card bg-brass/10 text-brass">
                  <Icon name={card.icon} size={22} />
                </span>
                <h3 className="font-display text-[1.1rem] font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-mist/70">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
