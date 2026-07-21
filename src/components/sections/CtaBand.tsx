import { site } from "@/content/site";
import { telHref } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface CtaBandProps {
  title?: string;
  subhead?: string;
}

/**
 * Closing conversion band. Reused at the foot of most pages so every route
 * points at /get-quote (§2). Rendered on ink with the ruled overlay.
 */
export function CtaBand({
  title = "Ready to send us your plans?",
  subhead = "Get a complete, bid-ready estimate back in 24 to 48 hours. No retainer, no minimum.",
}: CtaBandProps) {
  return (
    <Section tone="ink" ruled spacing="compact">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="text-h2 font-display font-bold text-white">{title}</h2>
        <p className="text-lg text-mist/70">{subhead}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/get-quote" size="lg" iconRight="ArrowRight">
            Get a quote
          </Button>
          <Button href={telHref(site.phone)} size="lg" variant="outline" tone="ink" iconLeft="Phone">
            Call {site.phoneDisplay}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
