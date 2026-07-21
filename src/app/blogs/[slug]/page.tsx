import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, postBySlug } from "@/content/posts";
import { buildMetadata } from "@/lib/metadata";
import { articleLd } from "@/lib/jsonld";
import { formatDate, readingTime } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { Markdown } from "@/components/ui/Markdown";
import { PostCard } from "@/components/ui/PostCard";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CoverImage } from "@/components/ui/CoverImage";
import { JsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = postBySlug(params.slug);
  if (!post) return buildMetadata({ title: "Article not found", description: "", noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    type: "article",
    image: post.image,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: post.date,
          author: post.author,
          image: post.image,
        })}
      />

      {/* Title block */}
      <Section tone="ink" ruled spacing="compact" className="pt-10 md:pt-14">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <Breadcrumb
            items={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blogs" },
              { name: post.title, path: `/blogs/${post.slug}` },
            ]}
            tone="ink"
          />
          <Badge tone="brass">{post.category}</Badge>
          <h1 className="text-h1 font-display font-bold text-white">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-mist/70">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <span className="data">{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span className="data">{readingTime(post.body)} min read</span>
          </div>
        </div>
      </Section>

      {/* Body */}
      <Section tone="paper">
        <article className="mx-auto max-w-3xl">
          {post.image && (
            <div className="mb-10">
              <div className="overflow-hidden rounded-card border border-mist">
                <CoverImage src={post.image} alt={post.title} seed={post.slug} aspect="aspect-[16/9]" priority />
              </div>
              {post.imageCredit && (
                <p className="mt-2 text-right text-xs text-graphite/50">{post.imageCredit}</p>
              )}
            </div>
          )}
          <p className="mb-8 border-l-2 border-brass pl-4 text-lg leading-relaxed text-graphite">
            {post.excerpt}
          </p>
          <Markdown>{post.body}</Markdown>
        </article>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section tone="paper" spacing="compact">
          <h2 className="mb-8 font-display text-h3 font-bold text-ink">Keep reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
