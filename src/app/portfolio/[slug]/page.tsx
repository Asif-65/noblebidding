import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { projects, projectBySlug } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";
import { formatCurrency } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Badge } from "@/components/ui/Badge";
import { CoverImage } from "@/components/ui/CoverImage";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projectBySlug(params.slug);
  if (!project) return buildMetadata({ title: "Project not found", description: "", noIndex: true });
  return buildMetadata({
    title: `${project.title} — Portfolio`,
    description: `${project.category} project in ${project.location}. ${project.summary}`,
    path: `/portfolio/${project.slug}`,
  });
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectBySlug(params.slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const facts = [
    { icon: Building2, label: "Category", value: project.category },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: String(project.year) },
  ];

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        subhead={project.summary}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="overflow-hidden rounded-card border border-mist">
                <CoverImage
                  src={project.image}
                  alt={`${project.title} — ${project.category} in ${project.location}`}
                  seed={project.slug}
                  label={project.category}
                  icon="Building2"
                  aspect="aspect-[16/9]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display text-h3 font-bold text-ink">Project scope</h2>
              <div className="mt-4 flex flex-col gap-4">
                {project.scope.map((paragraph, i) => (
                  <p key={i} className="leading-body text-graphite">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Fact sidebar */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 rounded-card border border-mist bg-white p-6 shadow-elevation">
              {project.value !== undefined && (
                <div className="flex items-end justify-between border-b border-mist pb-5">
                  <span className="text-xs uppercase tracking-wide text-graphite/60">Project value</span>
                  <span className="data text-2xl font-semibold text-ink">{formatCurrency(project.value)}</span>
                </div>
              )}
              <dl className="flex flex-col gap-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-card bg-brass/10 text-brass-dim">
                      <fact.icon size={17} aria-hidden />
                    </span>
                    <div className="flex flex-col">
                      <dt className="text-xs uppercase tracking-wide text-graphite/60">{fact.label}</dt>
                      <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div>
                <p className="mb-3 text-xs uppercase tracking-wide text-graphite/60">Services used</p>
                <div className="flex flex-wrap gap-2">
                  {project.servicesUsed.map((service) => (
                    <Badge key={service} tone="mist">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="paper" spacing="compact">
          <h2 className="mb-8 font-display text-h3 font-bold text-ink">More {project.category.toLowerCase()} projects</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
