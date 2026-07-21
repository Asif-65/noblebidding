import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/content/projects";
import { formatCurrency } from "@/lib/utils";
import { CoverImage } from "@/components/ui/CoverImage";
import { Badge } from "@/components/ui/Badge";

/** Portfolio card: cover image with hover overlay, title, location, mono value. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-mist bg-white transition-shadow duration-200 hover:shadow-elevation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
    >
      <div className="relative">
        <CoverImage
          src={project.image}
          alt={`${project.title} — ${project.category} project in ${project.location}`}
          seed={project.slug}
          label={project.category}
          icon="Building2"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
            View details <ArrowUpRight size={16} aria-hidden />
          </span>
        </div>
        <div className="absolute left-3 top-3">
          <Badge tone="brass">{project.category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-[1.15rem] font-semibold text-ink">{project.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-graphite/70">
          <MapPin size={14} aria-hidden /> {project.location}
        </p>
        <div className="mt-2 flex items-center justify-between border-t border-mist pt-3">
          <span className="text-xs uppercase tracking-wide text-graphite/60">Project value</span>
          <span className="data text-base font-semibold text-ink">{formatCurrency(project.value)}</span>
        </div>
      </div>
    </Link>
  );
}
