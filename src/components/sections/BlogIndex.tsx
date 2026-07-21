"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { posts, postCategories, featuredPost } from "@/content/posts";
import { cn } from "@/lib/utils";
import { PostCard } from "@/components/ui/PostCard";

const PAGE_SIZE = 6;

/** Blog index: featured post, category filter, paginated grid. */
export function BlogIndex() {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const featured = featuredPost();

  // On the "All" view the featured post gets its own hero card, so exclude it
  // from the grid to avoid showing it twice.
  const pool = useMemo(() => {
    const base = category === "All" ? posts.filter((p) => p.slug !== featured.slug) : posts.filter((p) => p.category === category);
    return base;
  }, [category, featured.slug]);

  const totalPages = Math.max(1, Math.ceil(pool.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = pool.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function selectCategory(next: string) {
    setCategory(next);
    setPage(1);
  }

  return (
    <div className="flex flex-col gap-10">
      {category === "All" && (
        <PostCard post={featured} featured />
      )}

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter posts by category">
        {postCategories.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => selectCategory(cat)}
              className={cn(
                "rounded-control border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-mist bg-white text-graphite hover:border-brass-dim/50",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-graphite/70">No articles in this category yet.</p>
      )}

      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="grid h-10 w-10 place-items-center rounded-control border border-mist text-graphite disabled:opacity-40 hover:border-brass-dim/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} aria-hidden />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i + 1)}
              aria-current={currentPage === i + 1 ? "page" : undefined}
              className={cn(
                "data grid h-10 w-10 place-items-center rounded-control border text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
                currentPage === i + 1
                  ? "border-ink bg-ink text-paper"
                  : "border-mist text-graphite hover:border-brass-dim/50",
              )}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="grid h-10 w-10 place-items-center rounded-control border border-mist text-graphite disabled:opacity-40 hover:border-brass-dim/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
            aria-label="Next page"
          >
            <ChevronRight size={18} aria-hidden />
          </button>
        </nav>
      )}
    </div>
  );
}
