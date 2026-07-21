"use client";

import { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { testimonialsIntro } from "@/content/home";
import { initials, cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function Card({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-card border border-white/10 bg-slate p-6">
      <Quote size={28} className="text-brass" aria-hidden />
      <blockquote className="flex-1 text-mist/90">
        <p className="leading-relaxed">{item.quote}</p>
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-white/10 pt-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brass/15 text-brass" aria-hidden>
          <span className="data text-sm font-semibold">{initials(item.name)}</span>
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-white">{item.name}</span>
          <span className="text-xs text-mist/60">
            {item.role}, {item.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(index);
  }

  function goTo(index: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <Section tone="ink" ruled>
      <Reveal>
        <SectionHeading
          eyebrow={testimonialsIntro.eyebrow}
          title={testimonialsIntro.title}
          tone="ink"
          align="center"
        />
      </Reveal>

      {/* Desktop: static grid, up to three-up */}
      <div className={cn("mt-12 hidden gap-5 md:grid", testimonials.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
        {testimonials.slice(0, 3).map((item, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <Card item={item} />
          </Reveal>
        ))}
      </div>

      {/* Mobile: swipeable carousel */}
      <div className="mt-10 md:hidden">
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item, i) => (
            <div key={i} className="w-full shrink-0 snap-center">
              <Card item={item} />
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
                active === i ? "w-6 bg-brass" : "w-2 bg-white/20",
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
