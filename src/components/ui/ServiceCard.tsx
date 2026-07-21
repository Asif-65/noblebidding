import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

interface ServiceCardProps {
  service: Service;
  tone?: "light" | "dark";
}

/** Icon + title + one-line summary + "Learn more". Links to the service page. */
export function ServiceCard({ service, tone = "light" }: ServiceCardProps) {
  const dark = tone === "dark";
  return (
    <Link
      href={`/service/${service.slug}`}
      className={cn(
        "group flex h-full flex-col gap-4 rounded-card border p-6 transition-all duration-200 hover:shadow-elevation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
        dark
          ? "border-white/10 bg-slate hover:border-brass/40"
          : "border-mist bg-white hover:border-brass-dim/40",
      )}
    >
      <span
        className={cn(
          "grid h-12 w-12 place-items-center rounded-card transition-colors",
          dark ? "bg-brass/10 text-brass" : "bg-brass/10 text-brass-dim",
        )}
      >
        <Icon name={service.icon} size={24} />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className={cn("font-display text-h3 text-[1.25rem] font-semibold", dark ? "text-white" : "text-ink")}>
          {service.title}
        </h3>
        <p className={cn("text-sm leading-relaxed", dark ? "text-mist/70" : "text-graphite/80")}>
          {service.summary}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brass-dim">
        Learn more
        <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
