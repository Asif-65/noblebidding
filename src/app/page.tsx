import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { SoftwareMarquee } from "@/components/sections/SoftwareMarquee";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Deliverables } from "@/components/sections/Deliverables";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = buildMetadata({
  title: "Electrical Estimating Services | Noble Bidding",
  description:
    "Electrical estimation services for contractors across the USA. Send your plans, get a bid-ready electrical takeoff and estimate back in 24 to 48 hours. Monthly, hourly, or per project.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <MetricsBand />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <Testimonials />
      <SoftwareMarquee />
      <PortfolioPreview />
      <Deliverables />
      <ContactSection />
    </>
  );
}
