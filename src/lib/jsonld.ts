import { site } from "@/content/site";
import { absoluteUrl, siteUrl } from "@/lib/metadata";

/**
 * Structured-data builders. Each returns a plain object rendered inside a
 * <script type="application/ld+json"> via the <JsonLd> component.
 */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    logo: absoluteUrl("/logo.svg"),
    email: site.email,
    telephone: site.phone,
    sameAs: Object.values(site.social).filter(Boolean),
    description: site.description,
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}#business`,
    name: site.name,
    url: siteUrl,
    image: absoluteUrl("/opengraph-image"),
    email: site.email,
    telephone: site.phone,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function serviceLd(input: {
  title: string;
  description: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.title,
    description: input.description,
    category: input.category,
    url: absoluteUrl(`/service/${input.slug}`),
    serviceType: input.title,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
    },
    areaServed: { "@type": "Country", name: "United States" },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleLd(input: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(`/blogs/${input.slug}`),
    datePublished: input.datePublished,
    author: { "@type": "Organization", name: input.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.svg") },
    },
    image: input.image ? absoluteUrl(input.image) : absoluteUrl("/opengraph-image"),
  };
}
