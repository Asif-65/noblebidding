import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { terms } from "@/content/legal";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Markdown } from "@/components/ui/Markdown";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of the Noble Bidding website and estimating services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title={terms.title}
        subhead={`Last updated: ${terms.updated}`}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: terms.title, path: "/terms" },
        ]}
      />
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Markdown>{terms.body}</Markdown>
        </div>
      </Section>
    </>
  );
}
