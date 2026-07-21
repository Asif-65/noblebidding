import type { Metadata } from "next";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { faqLd } from "@/lib/jsonld";
import { pricingTiers, alwaysIncluded, pricingFaqs } from "@/content/pricing";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Flexible estimating pricing: a dedicated monthly estimator, hourly support, or a fixed per-project quote. No long-term contracts.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqLd(pricingFaqs)} />

      <PageHero
        eyebrow="Pricing"
        eyebrowIcon="DollarSign"
        title="Estimating support, priced the way you work"
        subhead="A dedicated monthly estimator, hourly support, or a fixed per-project quote. No long-term contracts, no fixed cost sitting idle in a slow month."
      />

      {/* Tiers */}
      <Section tone="paper">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className={cn(tier.popular && "lg:-mt-4")}>
              <div
                className={cn(
                  "flex h-full flex-col gap-6 rounded-card border p-8",
                  tier.popular
                    ? "border-brass bg-ink text-mist shadow-elevation"
                    : "border-mist bg-white",
                )}
              >
                <div className="flex items-center justify-between">
                  <h2
                    className={cn(
                      "font-display text-h3 font-bold",
                      tier.popular ? "text-white" : "text-ink",
                    )}
                  >
                    {tier.name}
                  </h2>
                  {tier.popular && <Badge tone="brass">Most popular</Badge>}
                </div>

                <div className="flex items-end gap-1">
                  <span
                    className={cn(
                      "data text-4xl font-semibold",
                      tier.popular ? "text-brass" : "text-ink",
                    )}
                  >
                    {tier.price}
                  </span>
                  {tier.priceSuffix && (
                    <span className={cn("mb-1 text-sm", tier.popular ? "text-mist/60" : "text-graphite/60")}>
                      {tier.priceSuffix}
                    </span>
                  )}
                </div>

                <p className={cn("text-sm", tier.popular ? "text-mist/70" : "text-graphite/80")}>{tier.fit}</p>

                <Button
                  href="/get-quote"
                  fullWidth
                  variant={tier.popular ? "primary" : "outline"}
                  tone={tier.popular ? "paper" : "paper"}
                  iconRight="ArrowRight"
                >
                  {tier.cta}
                </Button>

                <ul className="flex flex-col gap-3 border-t pt-6 text-sm" style={{ borderColor: tier.popular ? "rgba(255,255,255,0.1)" : undefined }}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className={cn("mt-0.5 shrink-0", tier.popular ? "text-brass" : "text-brass-dim")}
                        aria-hidden
                      />
                      <span className={tier.popular ? "text-mist/85" : "text-graphite"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Included in every package */}
        <Reveal className="mt-16 rounded-card border border-mist bg-white p-8">
          <h2 className="font-display text-h3 font-bold text-ink">Included in every engagement</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alwaysIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-graphite">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brass/15">
                  <Check size={13} className="text-brass-dim" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Pricing FAQ */}
      <Section tone="ink" ruled>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Pricing FAQ" title="Questions about pricing" tone="ink" align="center" />
          </Reveal>
          <Reveal delay={0.06} className="mt-10">
            <Accordion items={pricingFaqs} tone="ink" />
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
