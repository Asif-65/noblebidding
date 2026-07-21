import { Phone, Mail, Clock } from "lucide-react";
import { site } from "@/content/site";
import { contactIntro } from "@/content/home";
import { telHref } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatShowcase } from "@/components/ui/StatShowcase";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              eyebrow={contactIntro.eyebrow}
              title={contactIntro.title}
              subhead={contactIntro.subhead}
              tone="paper"
            />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-3">
            <a href={telHref(site.phone)} className="flex items-center gap-3 text-graphite hover:text-brass-dim">
              <span className="grid h-10 w-10 place-items-center rounded-card bg-brass/10 text-brass-dim">
                <Phone size={18} aria-hidden />
              </span>
              <span className="data font-medium">{site.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-graphite hover:text-brass-dim">
              <span className="grid h-10 w-10 place-items-center rounded-card bg-brass/10 text-brass-dim">
                <Mail size={18} aria-hidden />
              </span>
              <span className="font-medium">{site.email}</span>
            </a>
            <p className="flex items-center gap-3 text-graphite">
              <span className="grid h-10 w-10 place-items-center rounded-card bg-brass/10 text-brass-dim">
                <Clock size={18} aria-hidden />
              </span>
              <span className="font-medium">{site.hours}</span>
            </p>
          </Reveal>

          <Reveal delay={0.14} className="hidden rounded-card border border-mist bg-white p-6 shadow-elevation lg:block">
            <StatShowcase tone="paper" />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
