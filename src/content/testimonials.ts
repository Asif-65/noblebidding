/**
 * Client testimonials. Drives the home testimonials carousel and the about page.
 *
 * Real, attributed quotes pulled from actual project case studies. Add more
 * as they come in from clients — do not add fabricated quotes here.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our estimator had the full Midwood Library bid ready with complete takeoffs and a clean bid tabulation — on time and ready for submission. This is exactly the kind of in-house support that helps us stay competitive.",
    name: "Electrical Contractor Client",
    role: "Brooklyn, NY",
    company: "Midwood Library — 2nd Floor Renovation",
  },
  {
    quote:
      "The EV charging station scope had dozens of moving parts — BESS, switchgear, underground conduit networks, fire alarm, and 32 dispensers. Noble Bidding's estimator navigated the entire drawing set and delivered a clean, organized estimate that gave us confidence to submit a competitive bid.",
    name: "Electrical Contractor Client",
    role: "Southern California",
    company: "EV Fast Charging Stations — Buena Park",
  },
];
