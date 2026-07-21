"use client";

import { useEffect } from "react";
import { site } from "@/content/site";
import { telHref } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Surface the error to your monitoring here.
    console.error(error);
  }, [error]);

  return (
    <Section tone="ink" ruled className="flex min-h-[70vh] items-center">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="data text-5xl font-semibold text-brass">Error</span>
        <h1 className="text-h2 font-display font-bold text-white">Something went wrong</h1>
        <p className="text-lg text-mist/70">
          We hit an unexpected problem. Try again, and if it keeps happening, call us and we'll sort it out.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button href={telHref(site.phone)} variant="outline" tone="ink" iconLeft="Phone">
            Call {site.phoneDisplay}
          </Button>
        </div>
      </div>
    </Section>
  );
}
