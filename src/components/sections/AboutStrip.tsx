import { Check } from "lucide-react";
import { about } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StatShowcase } from "@/components/ui/StatShowcase";

export function AboutStrip() {
  return (
    <Section tone="paper">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} tone="paper" />
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col gap-4">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-body text-graphite">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-graphite">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brass/15">
                    <Check size={13} className="text-brass-dim" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18} className="flex flex-wrap gap-3">
            <Button href={about.primaryCta.href} iconRight="ArrowRight">
              {about.primaryCta.label}
            </Button>
            <Button href={about.secondaryCta.href} variant="outline" tone="paper" iconLeft="Upload">
              {about.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-first lg:order-last">
          <div className="rounded-card border border-mist bg-white p-6 shadow-elevation">
            <StatShowcase tone="paper" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
