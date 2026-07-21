import type { Metadata } from "next";
import { site } from "@/content/site";

/** Absolute site URL from env, no trailing slash. Falls back to the domain in site config. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`
).replace(/\/$/, "");

/** Build an absolute URL for a path like "/about". */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  /** Route path, e.g. "/pricing". Drives canonical + OG url. Defaults to "/". */
  path?: string;
  /** Override the social share image path. Defaults to the site OG image. */
  image?: string;
  type?: "website" | "article";
  /** Set true to keep a route out of the index (e.g. thank-you pages). */
  noIndex?: boolean;
}

/**
 * Per-route metadata builder. Produces title, description, canonical, Open
 * Graph and Twitter card so no route hand-rolls its own <head>.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} · ${site.name}`;

  // When no explicit image is given, omit images so the generated
  // opengraph-image.tsx (root file convention) supplies a branded default.
  const explicitImages = image
    ? { images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: site.name }] }
    : {};
  const explicitTwitterImages = image ? { images: [absoluteUrl(image)] } : {};

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type,
      locale: "en_US",
      ...explicitImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...explicitTwitterImages,
    },
  };
}
