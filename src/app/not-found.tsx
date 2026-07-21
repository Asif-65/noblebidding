import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found — Noble Bidding",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section tone="ink" ruled className="flex min-h-[70vh] items-center">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="data text-6xl font-semibold text-brass">404</span>
        <h1 className="text-h2 font-display font-bold text-white">This page isn't on the sheet</h1>
        <p className="text-lg text-mist/70">
          The page you're after may have moved or never existed. Let's get you back to solid ground.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" iconLeft="ArrowRight">
            Back to home
          </Button>
          <Button href="/get-quote" variant="outline" tone="ink">
            Get a quote
          </Button>
        </div>
      </div>
    </Section>
  );
}
