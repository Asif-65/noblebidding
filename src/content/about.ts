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
    "So we built the alternative: an estimating team that becomes a genuine extension of yours — attending your project meetings, working in your preferred software, and aligned with your workflow from day one. Contractors send plans; we return a complete, bid-ready package in 24 to 48 hours, built to their rates and markup.",
    "Today we support electrical contractors across the country, from single-family residential takeoffs to multi-system industrial estimates. The mission has not changed: give every electrical contractor the estimating capacity of a much larger shop.",
  ],
};

export const mission = {
  title: "Our mission",
  text: "To provide electrical contractors with world-class estimation services that drive growth, improve bid accuracy, and maximize project profitability.",
};

export const vision = {
  title: "Our vision",
  text: "To be the most trusted partner for electrical companies seeking expert estimating talent — revolutionizing how the industry sources and scales estimating capacity.",
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
  "Flexible pricing — monthly, hourly, or per-project, no long-term contract",
  "24 to 48-hour turnaround on most estimates",
  "A second estimator reviews every total",
  "A signed NDA on every engagement",
  "Built to your labor rates, burden and markup",
  "Coverage across residential, commercial, industrial and EV infrastructure electrical work",
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
    role: "Industrial & EV Systems Estimator",
    bio: "Placeholder bio — specializes in industrial distribution, controls and EV infrastructure takeoffs.",
  },
];
