import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { privacy } from "@/content/legal";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Markdown } from "@/components/ui/Markdown";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Noble Bidding collects, uses and protects your information and project files.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title={privacy.title}
        subhead={`Last updated: ${privacy.updated}`}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: privacy.title, path: "/privacy" },
        ]}
      />
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Markdown>{privacy.body}</Markdown>
        </div>
      </Section>
    </>
  );
}
