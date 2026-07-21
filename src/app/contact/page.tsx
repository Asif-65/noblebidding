import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { telHref } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Noble Bidding. Call, email, or send a message — we reply within two business hours. Have a bid due? Upload your plans.",
  path: "/contact",
});

const socialIcons = { facebook: Facebook, linkedin: Linkedin, instagram: Instagram } as const;

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  const details = [
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: telHref(site.phone), mono: true },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Address", value: site.address.full },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        eyebrowIcon="Mail"
        title="Let's talk about your bid"
        subhead="Call, email, or send a message. We reply within two business hours during the workday."
      />

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Details + map */}
          <div className="flex flex-col gap-8">
            <Reveal>
              <dl className="flex flex-col gap-4">
                {details.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-card bg-brass/10 text-brass-dim">
                      <item.icon size={19} aria-hidden />
                    </span>
                    <div className="flex flex-col">
                      <dt className="text-xs uppercase tracking-wide text-graphite/60">{item.label}</dt>
                      <dd className="font-medium text-ink">
                        {item.href ? (
                          <a href={item.href} className={`hover:text-brass-dim ${item.mono ? "data" : ""}`}>
                            {item.value}
                          </a>
                        ) : (
                          <span className={item.mono ? "data" : ""}>{item.value}</span>
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wide text-graphite/60">Follow us</span>
                <div className="flex gap-2">
                  {(Object.keys(socialIcons) as (keyof typeof socialIcons)[]).map((key) => {
                    const href = site.social[key];
                    if (!href) return null;
                    const SocialIcon = socialIcons[key];
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${site.name} on ${key}`}
                        className="grid h-9 w-9 place-items-center rounded-control border border-mist text-graphite transition-colors hover:border-brass-dim hover:text-brass-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                      >
                        <SocialIcon size={17} aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-card border border-mist">
                <iframe
                  src={mapSrc}
                  title={`Map showing ${site.name} location`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
