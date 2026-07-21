import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "A sample of estimates behind real bids — commercial, residential and industrial projects across the United States.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent work"
        eyebrowIcon="Building2"
        title="Estimates behind real bids"
        subhead="Filter by sector to see the range of work we take off and price — from tenant fit-outs to process facilities."
        stats={[
          { value: projects.length, suffix: "", label: "Projects shown" },
          { value: site.stats.onTimePct, suffix: "%", label: "On-time delivery" },
          { value: site.stats.profitMarginPct, suffix: "%", label: "Avg. client profit margin" },
          { value: site.stats.turnaroundHours, prefix: "≤", suffix: "h", label: "Avg. turnaround" },
        ]}
      />

      <Section tone="paper">
        <PortfolioGrid />
      </Section>

      <CtaBand />
    </>
  );
}
