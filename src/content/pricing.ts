/**
 * Pricing tracks and pricing FAQ. Drives /pricing.
 */

export interface PricingTier {
  name: string;
  /** Display price string, set in mono. Keep the leading symbol out — added in UI if needed. */
  price: string;
  priceSuffix: string;
  /** One-line description of who the tier fits. */
  fit: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Monthly Estimating Support",
    price: "$3,000",
    priceSuffix: "/ month",
    fit: "For contractors who want a dedicated estimator embedded in their team, ongoing.",
    popular: true,
    features: [
      "Dedicated electrical estimator embedded in your team",
      "Unlimited estimates within your agreed monthly volume",
      "Full takeoffs, material pricing and labor analysis on every bid",
      "Pre-bid preparation and proposal support",
      "Use of your preferred estimating software",
      "Dedicated point of contact and ongoing quality assurance",
      "No long-term contracts",
    ],
    cta: "Get started",
  },
  {
    name: "Hourly Support",
    price: "$15",
    priceSuffix: "/ hour",
    fit: "For contractors who need estimating help as needed, without a monthly commitment.",
    features: [
      "Pay only for the hours you use",
      "No minimum hours required",
      "Custom rate available depending on scope and volume",
      "Same process, software and quality assurance as monthly clients",
      "Good fit for overflow work or occasional bids",
    ],
    cta: "Get started",
  },
  {
    name: "Per-Project Pricing",
    price: "Custom",
    priceSuffix: "",
    fit: "For contractors who just need a single bid estimated, no ongoing commitment.",
    features: [
      "Send your drawings and specs for review",
      "Fixed-price quote based on the scope of work",
      "No ongoing commitment or contract",
      "Full takeoff, pricing and a bid-ready package",
      "Typical turnaround of 24 to 48 hours",
    ],
    cta: "Talk to us",
  },
];

/** Shown in the "included in every engagement" strip below the tiers. */
export const alwaysIncluded: string[] = [
  "Editable Excel workbook",
  "Color-coded plan markups",
  "Current supplier pricing",
  "Signed NDA on request",
  "One round of revisions",
  "Delivery inside the quoted window",
];

export interface PricingFaq {
  question: string;
  answer: string;
}

export const pricingFaqs: PricingFaq[] = [
  {
    question: "Which pricing option is right for me?",
    answer:
      "If you have steady bid volume, Monthly Estimating Support gives you a dedicated estimator embedded in your team for a flat, predictable rate. If your needs are occasional, Hourly Support means you only pay for the time used. If you just need one bid estimated with no ongoing relationship, Per-Project Pricing gets you a fixed quote for that job alone.",
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer:
      "No. There is no long-term contract on any option. Monthly clients can adjust or pause as their pipeline changes, hourly clients use as much or as little time as they need, and per-project clients pay only for the bid they send.",
  },
  {
    question: "How is the monthly rate determined?",
    answer:
      "$3,000 per month is our standard rate for dedicated estimating support, and we tailor it based on your expected workload and volume. Tell us your bid pace and trades and we confirm the number before anything starts.",
  },
  {
    question: "What if I need it faster than 48 hours?",
    answer:
      "Rush turnaround is available. Tell us the deadline up front and we confirm whether we can hit it and what it costs before any work begins.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Every engagement includes one round of revisions. Addenda issued during a live bid are handled so your submitted number reflects the latest documents.",
  },
  {
    question: "How do I pay?",
    answer:
      "Monthly clients are billed monthly. Hourly clients are invoiced for time used. Per-project clients are invoiced per bid. Standard terms are confirmed with each engagement.",
  },
  {
    question: "What happens after I submit plans?",
    answer:
      "We review within two hours, confirm scope and price, then build the estimate and deliver it in the quoted window. Start on the get-a-quote page.",
  },
];
