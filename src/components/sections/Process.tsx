import { process } from "@/content/home";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const steps = process.steps;
  return (
    <Section tone="paper">
      <Reveal>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          tone="paper"
          subhead="A real sequence, start to finish, on every job."
        />
      </Reveal>

      <div className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
        {/* Desktop horizontal connector, behind the numbers */}
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-mist md:block" aria-hidden />

        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08} className="relative flex gap-5 md:flex-col md:gap-4">
            {/* Mobile vertical connector */}
            {i < steps.length - 1 && (
              <span className="absolute left-6 top-12 h-[calc(100%+2rem)] w-px bg-mist md:hidden" aria-hidden />
            )}
            <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brass-dim/40 bg-paper">
              <span className="data text-lg font-semibold text-brass-dim">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className={cn("flex flex-col gap-1.5 pb-8 md:pb-0")}>
              <h3 className="font-display text-[1.2rem] font-semibold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-graphite/80">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
