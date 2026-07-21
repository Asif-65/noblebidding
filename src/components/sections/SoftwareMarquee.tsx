import { softwareStack } from "@/content/home";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Infinite horizontal marquee of estimating software. The track is duplicated
 * so the loop is seamless; it pauses on hover and stops under reduced-motion
 * (see the .marquee-* rules in globals.css).
 */
export function SoftwareMarquee() {
  const items = [...softwareStack, ...softwareStack];
  return (
    <Section tone="paper" spacing="compact">
      <Reveal className="flex flex-col items-center gap-8">
        <p className="text-eyebrow font-semibold uppercase tracking-[0.18em] text-brass-dim">
          Built in the tools your bid expects
        </p>

        <div
          className="marquee-viewport relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="marquee-track flex w-max items-center gap-4" aria-label="Estimating software">
            {items.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= softwareStack.length ? true : undefined}
                className="flex items-center whitespace-nowrap rounded-card border border-mist bg-white px-6 py-3 text-sm font-semibold text-graphite"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
