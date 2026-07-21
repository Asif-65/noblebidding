import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/content/posts";
import { formatDate, readingTime, cn } from "@/lib/utils";
import { CoverImage } from "@/components/ui/CoverImage";
import { Badge } from "@/components/ui/Badge";

interface PostCardProps {
  post: Post;
  /** Featured layout: larger, horizontal on wide screens. */
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const meta = (
    <div className="flex items-center gap-2 text-xs text-graphite/60">
      <span className="data">{formatDate(post.date)}</span>
      <span aria-hidden>·</span>
      <span className="data">{readingTime(post.body)} min read</span>
    </div>
  );

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className={cn(
        "group flex overflow-hidden rounded-card border border-mist bg-white transition-shadow duration-200 hover:shadow-elevation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
        featured ? "flex-col lg:flex-row" : "flex-col",
      )}
    >
      <div className={cn("relative", featured ? "lg:w-1/2" : "")}>
        <CoverImage
          src={post.image}
          alt={post.title}
          seed={post.slug}
          label={post.category}
          icon="FileText"
          aspect={featured ? "aspect-[16/10]" : "aspect-[16/9]"}
          sizes={featured ? "(max-width: 1024px) 100vw, 600px" : "(max-width: 768px) 100vw, 400px"}
        />
        <div className="absolute left-3 top-3">
          <Badge tone="brass">{post.category}</Badge>
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col gap-3 p-6", featured && "lg:justify-center lg:p-8")}>
        {meta}
        <h3
          className={cn(
            "font-display font-semibold text-ink",
            featured ? "text-h3 text-[1.6rem]" : "text-[1.2rem]",
          )}
        >
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-graphite/80">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-brass-dim">
          Read article
          <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
