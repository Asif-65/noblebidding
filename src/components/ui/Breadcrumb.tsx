import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visual breadcrumb trail plus BreadcrumbList JSON-LD (§8). The last item is
 * the current page and is not linked.
 */
export function Breadcrumb({ items, tone = "ink" }: { items: Crumb[]; tone?: "ink" | "paper" }) {
  const dark = tone === "ink";
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbLd(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className={dark ? "text-mist/60" : "text-graphite/60"} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className={dark ? "text-mist/80 hover:text-brass" : "text-graphite/80 hover:text-brass-dim"}
                  >
                    {item.name}
                  </Link>
                  <ChevronRight size={14} className={dark ? "text-mist/40" : "text-graphite/40"} aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
