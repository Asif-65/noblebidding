import { portfolioIntro } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export function PortfolioPreview() {
  return (
    <Section tone="paper">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={portfolioIntro.eyebrow}
          title={portfolioIntro.title}
          subhead={portfolioIntro.subhead}
          tone="paper"
        />
        <Button href="/portfolio" variant="outline" tone="paper" iconRight="ArrowRight" className="shrink-0">
          View all projects
        </Button>
      </Reveal>

      <div className="mt-10">
        <PortfolioGrid limit={6} />
      </div>
    </Section>
  );
}
