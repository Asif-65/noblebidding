import { deliverables } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Illustration } from "@/components/ui/Illustration";

export function Deliverables() {
  return (
    <Section tone="ink" ruled>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              eyebrow={deliverables.eyebrow}
              title={deliverables.title}
              tone="ink"
            />
          </Reveal>

          <ol className="flex flex-col divide-y divide-white/10">
            {deliverables.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <li className="flex items-center gap-4 py-4">
                  <span className="data grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brass-dim/40 text-sm font-semibold text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-mist/90">{item}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1} className="order-first lg:order-last">
          <div className="rounded-card border border-white/10 bg-slate/60 p-5 shadow-elevation">
            <Illustration variant="delivery" tone="ink" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
