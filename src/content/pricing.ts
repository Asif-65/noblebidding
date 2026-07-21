/**
 * Pricing tiers and pricing FAQ. Drives /pricing.
 *
 * TODO: confirm real pricing before launch. The figures below are placeholders
 * expressed as "starting at" per-bid prices — set them to your actual rates.
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
    name: "Basic",
    price: "$149",
    priceSuffix: "/ bid",
    fit: "For single-trade takeoffs and smaller jobs.",
    features: [
      "Quantity takeoff for one trade",
      "Editable Excel estimate sheet",
      "Color-coded plan markups",
      "48-hour turnaround",
      "Email support",
    ],
    cta: "Get started",
  },
  {
    name: "Professional",
    price: "$349",
    priceSuffix: "/ bid",
    fit: "For competitive multi-trade bids that need to win.",
    popular: true,
    features: [
      "Multi-trade takeoff and pricing",
      "Labor loaded at your crew rates",
      "Current supplier pricing",
      "Bid proposal ready to submit",
      "Assumptions and exclusions list",
      "24 to 48-hour turnaround",
      "Priority email and phone support",
    ],
    cta: "Get started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    fit: "For high volume and ongoing estimating support.",
    features: [
      "Everything in Professional",
      "Dedicated estimating coordinator",
      "Volume pricing per bid",
      "Standing turnaround commitments",
      "Custom templates and workflows",
      "Monthly reporting",
      "Direct line to your estimator",
    ],
    cta: "Talk to us",
  },
];

/** Shown in the "included in every package" strip below the tiers. */
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
    question: "How is a bid priced?",
    answer:
      "Most bids fall into the Basic or Professional tier based on trade count and complexity. Larger or recurring work moves to Enterprise. We confirm the exact price before we start, so there is never a surprise on the invoice.",
  },
  {
    question: "Is there a subscription or minimum?",
    answer:
      "No. There is no retainer and no minimum volume. You pay per bid, one at a time. Enterprise adds volume pricing for shops that send steady work.",
  },
  {
    question: "What if I need it faster than 48 hours?",
    answer:
      "Rush turnaround is available. Tell us the deadline up front and we confirm whether we can hit it and what it costs before any work begins.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Every package includes one round of revisions. Addenda issued during a live bid are handled so your submitted number reflects the latest documents.",
  },
  {
    question: "How do I pay?",
    answer:
      "We invoice per bid with standard terms. Enterprise clients can move to monthly billing against agreed volume pricing.",
  },
  {
    question: "What happens after I submit plans?",
    answer:
      "We review within two hours, confirm scope and price, then build the estimate and deliver it in the quoted window. Start on the get-a-quote page.",
  },
];
