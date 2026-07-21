/**
 * Client testimonials. Drives the home testimonials carousel and the about page.
 *
 * TODO: replace with real data before launch. These are illustrative
 * placeholders. Do not publish them as real quotes — collect and attribute
 * genuine client feedback first.
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
      "We were turning down bids because we could not get the takeoffs done in time. Noble gave us the capacity to bid everything that came in without adding an estimator to payroll.",
    name: "Placeholder Name",
    role: "Owner",
    company: "Placeholder Electrical Contractor",
  },
  {
    quote:
      "The estimates come back organized the way we would build them ourselves. Their number and our number are close enough that I trust it going into a bid review.",
    name: "Placeholder Name",
    role: "Chief Estimator",
    company: "Placeholder Mechanical Contractor",
  },
  {
    quote:
      "Turnaround is the difference. A bid that used to eat a weekend now comes back in a day, and it is cleaner than what we were producing in-house.",
    name: "Placeholder Name",
    role: "Project Manager",
    company: "Placeholder General Contractor",
  },
  {
    quote:
      "They flagged missing scope in the drawings before we submitted. That one catch covered their fee several times over on the change orders we avoided.",
    name: "Placeholder Name",
    role: "Vice President",
    company: "Placeholder Construction Group",
  },
  {
    quote:
      "We use them as our overflow estimating department. Busy months they scale with us, slow months there is no fixed cost sitting idle.",
    name: "Placeholder Name",
    role: "Operations Manager",
    company: "Placeholder Contracting LLC",
  },
  {
    quote:
      "The color-coded plans mean anyone on my team can see exactly what was counted. No black box, no arguing about where a number came from.",
    name: "Placeholder Name",
    role: "Estimating Lead",
    company: "Placeholder Builders",
  },
];
