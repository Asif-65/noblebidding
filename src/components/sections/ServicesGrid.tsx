import { featuredServices } from "@/content/services";
import { servicesIntro } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesGrid() {
  const items = featuredServices();
  return (
    <Section tone="paper">
      <Reveal>
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          subhead={servicesIntro.subhead}
          tone="paper"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 0.08}>
            <ServiceCard service={service} tone="light" />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Button href="/services" variant="outline" tone="paper" iconRight="ArrowRight">
          View all services
        </Button>
      </Reveal>
    </Section>
  );
}
