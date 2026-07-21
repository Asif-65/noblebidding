import { why } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <Section tone="ink" ruled>
      <Reveal>
        <SectionHeading
          eyebrow="Why us"
          title={why.title}
          tone="ink"
          subhead="Six reasons contractors keep sending us their bids."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {why.cards.map((card, i) => (
          <Reveal key={card.title} delay={(i % 3) * 0.08}>
            <div className="flex h-full flex-col gap-4 rounded-card border border-white/10 bg-slate p-6">
              <span className="grid h-12 w-12 place-items-center rounded-card bg-brass/10 text-brass">
                <Icon name={card.icon} size={24} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[1.2rem] font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-mist/70">{card.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
