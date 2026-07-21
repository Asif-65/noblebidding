import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { BlogIndex } from "@/components/sections/BlogIndex";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Notes on estimating, bidding and running a contracting business — from takeoffs to win rates to the math of hiring an estimator.",
  path: "/blogs",
});

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        eyebrowIcon="FileText"
        title="Notes on bidding and estimating"
        subhead="Practical writing on takeoffs, bid strategy and the business of estimating."
      />

      <Section tone="paper">
        <BlogIndex />
      </Section>

      <CtaBand />
    </>
  );
}
