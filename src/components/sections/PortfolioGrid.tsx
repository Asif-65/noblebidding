"use client";

import { useMemo, useState } from "react";
import { projects as allProjects, projectCategories, type ProjectCategory } from "@/content/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Filter = "All" | ProjectCategory;

interface PortfolioGridProps {
  /** Cap the number of cards shown (e.g. home preview). Omit to show all. */
  limit?: number;
}

/** Filterable project grid, shared by the home preview and the portfolio page. */
export function PortfolioGrid({ limit }: PortfolioGridProps) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const list = filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {projectCategories.map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-control border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-mist bg-white text-graphite hover:border-brass-dim/50",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-graphite/70">No projects in this category yet.</p>
      )}
    </div>
  );
}
