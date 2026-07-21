/**
 * About-page copy. Story and values are safe to edit freely. Team members are
 * factual claims (§7).
 *
 * TODO: replace the `team` entries with real people, roles and photos before
 * launch. They ship as clearly-marked placeholders.
 */

export const story = {
  eyebrow: "Our story",
  title: "We built the estimating department contractors could not justify hiring",
  paragraphs: [
    "Noble Bidding started from a simple observation: good contractors were losing work they could have won, not on price, but because they could not turn bids around fast enough. Estimating was the bottleneck, and hiring a full-time estimator was a cost most shops could not justify against uneven volume.",
    "So we built the alternative. An estimating team you engage per bid — full capacity when the pipeline is full, zero fixed cost when it is not. Contractors send plans; we return a complete, bid-ready package in 24 to 48 hours, built to their rates and markup.",
    "Today we support electrical, mechanical, and general contractors across the country, from single-trade takeoffs to multi-trade industrial estimates. The mission has not changed: give every contractor the estimating capacity of a much larger shop.",
  ],
};

export const mission = {
  title: "Our mission",
  text: "Give contractors the estimating capacity to bid every job worth bidding — accurately, on deadline, without carrying a department they cannot keep busy.",
};

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: "Target",
    title: "Precision",
    description: "We count from the drawings and check twice. The number is defensible, line by line.",
  },
  {
    icon: "Clock",
    title: "Speed",
    description: "Your deadline is the point. Most estimates go back in 24 to 48 hours, timed to your bid.",
  },
  {
    icon: "ShieldCheck",
    title: "Transparency",
    description: "Color-coded plans and stated assumptions. No black-box numbers, ever.",
  },
  {
    icon: "Handshake",
    title: "Partnership",
    description: "We build to your crew rates and markup so the estimate reads like your own shop's.",
  },
];

export const differentiators: string[] = [
  "Per-bid pricing — no retainer, no minimum volume",
  "24 to 48-hour turnaround on most estimates",
  "A second estimator reviews every total",
  "A signed NDA on every engagement",
  "Built to your labor rates, burden and markup",
  "Coverage across all major trades and sectors",
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Placeholder Name",
    role: "Founder & Lead Estimator",
    bio: "Placeholder bio — years of field and estimating experience across commercial and industrial work.",
  },
  {
    name: "Placeholder Name",
    role: "Senior Electrical Estimator",
    bio: "Placeholder bio — specializes in electrical, low voltage and power distribution takeoffs.",
  },
  {
    name: "Placeholder Name",
    role: "Estimating Coordinator",
    bio: "Placeholder bio — your point of contact from plan submission to package delivery.",
  },
  {
    name: "Placeholder Name",
    role: "Drafting & Documentation Lead",
    bio: "Placeholder bio — leads shop drawings, as-builts and coordination sheets.",
  },
];
