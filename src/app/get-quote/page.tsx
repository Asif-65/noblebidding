import type { Metadata } from "next";
import { Check, ShieldCheck, Clock, Package } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { deliverables } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Get a Quote",
  description:
    "Upload your construction plans and get a bid-ready estimate back in 24 to 48 hours. PDF, DWG and DXF accepted. No retainer, no minimum, NDA on request.",
  path: "/get-quote",
});

const nextSteps = [
  {
    icon: Clock,
    title: "We review within 2 hours",
    description: "During the workday we confirm scope, flag anything missing, and lock a delivery time.",
  },
  {
    icon: Check,
    title: "Your estimate is prepared",
    description: "Takeoff, current pricing and labor at your rates, checked by a second estimator.",
  },
  {
    icon: Package,
    title: "Package delivered in 24–48h",
    description: "A complete, editable bid package lands in your inbox, ready to submit.",
  },
];

const reassurances = [
  { icon: ShieldCheck, text: "Your plans stay confidential — NDA on request" },
  { icon: Clock, text: "24 to 48-hour turnaround on most estimates" },
  { icon: Check, text: "No retainer and no minimum volume" },
];

export default function GetQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        eyebrowIcon="Upload"
        title="Send us your plans"
        subhead="Upload drawings and tell us about the job. You will hear back within two business hours, with a bid-ready estimate to follow in 24 to 48 hours."
      />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <QuoteForm />

          {/* Reassurance + deliverables */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex flex-col gap-4 rounded-card border border-mist bg-white p-6">
                {reassurances.map((item) => (
                  <p key={item.text} className="flex items-start gap-3 text-sm text-graphite">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brass/15 text-brass-dim">
                      <item.icon size={15} aria-hidden />
                    </span>
                    {item.text}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-card border border-mist bg-ink p-6 text-mist">
                <h2 className="font-display text-[1.15rem] font-semibold text-white">What you'll get back</h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {deliverables.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-mist/85">
                      <Check size={15} className="mt-0.5 shrink-0 text-brass" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-20">
          <Reveal>
            <SectionHeading eyebrow="What happens next" title="Three steps to your estimate" tone="paper" />
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="flex h-full flex-col gap-3 rounded-card border border-mist bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="data text-lg font-semibold text-brass-dim">{String(i + 1).padStart(2, "0")}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-card bg-brass/10 text-brass-dim">
                      <step.icon size={19} aria-hidden />
                    </span>
                  </div>
                  <h3 className="font-display text-[1.1rem] font-semibold text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-graphite/80">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
