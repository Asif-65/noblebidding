import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services, serviceBySlug, relatedServices } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";
import { serviceLd, faqLd } from "@/lib/jsonld";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Illustration } from "@/components/ui/Illustration";
import { JsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceBySlug(params.slug);
  if (!service) return buildMetadata({ title: "Service not found", description: "", noIndex: true });
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/service/${service.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug);
  if (!service) notFound();

  const related = relatedServices(service.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            title: service.title,
            description: service.metaDescription,
            slug: service.slug,
            category: service.category,
          }),
          faqLd(service.faqs),
        ]}
      />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        subhead={service.heroSubhead}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/service/${service.slug}` },
        ]}
      >
        <Button href="/get-quote" size="lg" iconRight="ArrowRight">
          Get a quote
        </Button>
      </PageHero>

      {/* Overview + what's included */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-6">
            <Reveal>
              <SectionHeading eyebrow="Overview" title={`About ${service.title.toLowerCase()}`} tone="paper" />
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col gap-4">
              {service.overview.map((paragraph, i) => (
                <p key={i} className="leading-body text-graphite">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-card border border-mist bg-white p-5 shadow-elevation">
              <Illustration variant="estimate" tone="paper" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-h3 font-bold text-ink">What's included</h2>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.whatsIncluded.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 0.06}>
                <li className="flex items-start gap-3 rounded-card border border-mist bg-white p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass/15">
                    <Check size={14} className="text-brass-dim" aria-hidden />
                  </span>
                  <span className="text-graphite">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section tone="ink" ruled>
        <Reveal>
          <SectionHeading eyebrow="How it works" title="Our process" tone="ink" />
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="flex h-full flex-col gap-3 rounded-card border border-white/10 bg-slate p-6">
                <span className="data text-2xl font-semibold text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[1.1rem] font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-mist/70">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* FAQ + related */}
      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading eyebrow="FAQ" title="Common questions" tone="paper" />
            </Reveal>
            <Reveal delay={0.06} className="mt-8">
              <Accordion items={service.faqs} tone="paper" />
            </Reveal>
          </div>

          {related.length > 0 && (
            <div>
              <Reveal>
                <h2 className="font-display text-h3 font-bold text-ink">Related services</h2>
              </Reveal>
              <div className="mt-6 flex flex-col gap-4">
                {related.map((item, i) => (
                  <Reveal key={item.slug} delay={i * 0.06}>
                    <ServiceCard service={item} tone="light" />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      <CtaBand title={`Need a ${service.title.toLowerCase()} estimate?`} />
    </>
  );
}
