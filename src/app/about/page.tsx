import type { Metadata } from "next";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { story, mission, vision, values, differentiators } from "@/content/about";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { StatShowcase } from "@/components/ui/StatShowcase";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Noble Bidding is an outsourced estimating team for U.S. contractors — the estimating department you could not justify hiring.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        eyebrowIcon="Users"
        title="An estimating department without the payroll"
        subhead="Noble gives contractors the estimating capacity of a much larger shop — monthly, hourly, or per project, without the payroll."
      />

      {/* Story */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
              <SectionHeading eyebrow={story.eyebrow} title={story.title} tone="paper" />
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col gap-4">
              {story.paragraphs.map((paragraph, i) => (
                <p key={i} className="leading-body text-graphite">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-card border border-mist bg-white p-6 shadow-elevation">
              <StatShowcase tone="paper" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission + values */}
      <Section tone="ink" ruled>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <SectionHeading eyebrow="Mission" title={mission.title} tone="ink" />
                <p className="text-lg leading-relaxed text-mist/75">{mission.text}</p>
              </div>
              <div className="flex flex-col gap-4">
                <SectionHeading eyebrow="Vision" title={vision.title} tone="ink" />
                <p className="text-lg leading-relaxed text-mist/75">{vision.text}</p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-card border border-white/10 bg-slate p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-card bg-brass/10 text-brass">
                    <Icon name={value.icon} size={22} />
                  </span>
                  <h3 className="font-display text-[1.1rem] font-semibold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-mist/70">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Differentiators */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Why Noble"
            title="What sets us apart"
            tone="paper"
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 0.06}>
              <li className="flex items-start gap-3 rounded-card border border-mist bg-white p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass/15">
                  <Check size={14} className="text-brass-dim" aria-hidden />
                </span>
                <span className="font-medium text-graphite">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <MetricsBand heading="By the numbers" />

      <CtaBand />
    </>
  );
}
