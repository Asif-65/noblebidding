import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { telHref } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";

const socialIcons = { facebook: Facebook, linkedin: Linkedin, instagram: Instagram } as const;

export function Footer() {
  const year = new Date().getFullYear();
  const footerServices = services.slice(0, 6);

  return (
    <footer className="bg-ink text-mist">
      {/* Closing CTA — every page ends pointing at /get-quote (§2). */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Have plans and a deadline?
            </h2>
            <p className="mt-2 max-w-xl text-mist/70">
              Upload your plans and get a bid-ready estimate back in 24 to 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/get-quote" size="lg" iconRight="ArrowRight">
              Get a quote
            </Button>
            <Button href={telHref(site.phone)} size="lg" variant="outline" tone="ink" iconLeft="Phone">
              Call now
            </Button>
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-16 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2">
          <Logo tone="ink" showDescriptor />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/70">{site.description}</p>
          <div className="mt-5 flex gap-2">
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
                  className="grid h-9 w-9 place-items-center rounded-control border border-white/10 text-mist transition-colors hover:border-brass hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
                >
                  <SocialIcon size={17} aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h3 className="text-eyebrow font-semibold uppercase text-brass">Company</h3>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-mist/70 transition-colors hover:text-brass">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Services" className="flex flex-col gap-3">
          <h3 className="text-eyebrow font-semibold uppercase text-brass">Services</h3>
          {footerServices.map((service) => (
            <Link
              key={service.slug}
              href={`/service/${service.slug}`}
              className="text-sm text-mist/70 transition-colors hover:text-brass"
            >
              {service.title}
            </Link>
          ))}
          <Link href="/services" className="text-sm font-medium text-brass hover:underline">
            View all
          </Link>
        </nav>

        <div className="col-span-2 flex flex-col gap-3 md:col-span-4 lg:col-span-1">
          <h3 className="text-eyebrow font-semibold uppercase text-brass">Contact</h3>
          <a href={telHref(site.phone)} className="flex items-start gap-2 text-sm text-mist/70 hover:text-brass">
            <Phone size={16} className="mt-0.5 shrink-0" aria-hidden />
            <span className="data">{site.phoneDisplay}</span>
          </a>
          <a href={`mailto:${site.email}`} className="flex items-start gap-2 text-sm text-mist/70 hover:text-brass">
            <Mail size={16} className="mt-0.5 shrink-0" aria-hidden />
            {site.email}
          </a>
          <p className="flex items-start gap-2 text-sm text-mist/70">
            <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
            {site.address.full}
          </p>
          <p className="flex items-start gap-2 text-sm text-mist/70">
            <Clock size={16} className="mt-0.5 shrink-0" aria-hidden />
            {site.hours}
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-mist/60 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            {site.legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-brass">
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
