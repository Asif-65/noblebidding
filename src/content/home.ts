/**
 * Home-page copy that does not belong to another content module: the hero,
 * about strip, metrics band, why-us cards, process, deliverables and the
 * software marquee. Also reused by the about page where noted.
 *
 * NOTE: metric figures come from site.stats.
 */

import { site } from "@/content/site";

export const hero = {
  eyebrow: "Construction bidding specialists",
  eyebrowIcon: "HardHat",
  title: "Bid-ready construction estimates in 24 to 48 hours",
  subhead:
    "Noble gives contractors an in-house estimating department without the in-house overhead. A dedicated estimator embedded in your team, or a single bid estimated — send your plans and get a complete takeoff and bid package back, fast and accurate.",
  primaryCta: { label: "Get a quote", href: "/get-quote" },
  secondaryCta: { label: "Call now", href: "call" },
  inlineStats: [
    { value: site.stats.turnaroundLabel, prefix: undefined as string | undefined, suffix: "", label: "Typical turnaround", isText: true },
    { value: site.stats.onTimePct, prefix: undefined as string | undefined, suffix: "%", label: "On-time delivery" },
    { value: site.stats.profitMarginPct, prefix: undefined as string | undefined, suffix: "%", label: "Avg. client profit margin" },
  ],
  floatCards: [
    { value: site.stats.avgMonthlyCost, prefix: "$", suffix: "/mo", label: "Avg. monthly cost" },
    { value: site.stats.turnaroundHours, prefix: "≤", suffix: "h", label: "Avg. turnaround" },
  ],
} as const;

export const about = {
  eyebrow: "Who we are",
  title: "An estimating department that scales with your bid volume",
  paragraphs: [
    "Noble Bidding is an outsourced estimating team for contractors across the United States. Contractors send us project plans; we return a complete, bid-ready estimate package inside 24 to 48 hours.",
    "The pitch is simple. A full-time senior estimator costs six figures before benefits, and most shops do not bid enough volume to keep one busy. We give you that capacity however you need it — a dedicated estimator embedded in your team month to month, hourly support as needed, or a fixed quote for a single bid.",
    "Every estimate is built by an estimator who reads your trade, counts twice, and prices against current supplier data. The number reads like your own shop produced it, because we build it to your rates and markup.",
  ],
  capabilities: [
    "Takeoffs across all major trades",
    "Labor loaded at your crew rates",
    "Pricing from current supplier data",
    "Editable Excel workbooks",
    "Color-coded plan markups",
    "Signed NDA on every engagement",
    "One round of revisions included",
  ],
  primaryCta: { label: "Get a quote", href: "/get-quote" },
  secondaryCta: { label: "Upload plans", href: "/get-quote" },
} as const;

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

/** Figures that count up in the metrics band. */
export const metrics: Metric[] = [
  { value: site.stats.turnaroundHours, suffix: "h", prefix: "≤", label: "Average turnaround" },
  { value: site.stats.onTimePct, suffix: "%", label: "On-time delivery" },
  { value: site.stats.profitMarginPct, suffix: "%", label: "Avg. client profit margin" },
  { value: site.stats.avgMonthlyCost, suffix: "/mo", prefix: "$", label: "Avg. monthly cost" },
];

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export const why = {
  title: "Why contractors hand us the bid",
  cards: [
    {
      icon: "Clock",
      title: "Fast turnaround",
      description: "Most estimates go back in 24 to 48 hours, timed to your bid deadline.",
    },
    {
      icon: "DollarSign",
      title: "Flexible pricing",
      description: "Monthly, hourly, or per project — however you need it, cost scales with your volume.",
    },
    {
      icon: "Target",
      title: "Estimate accuracy",
      description: "Quantities counted from the drawings and checked twice, not scaled by rule of thumb.",
    },
    {
      icon: "Users",
      title: "Experienced team",
      description: "Estimators who read your trade and build to your crew rates and markup.",
    },
    {
      icon: "TrendingUp",
      title: "Proven results",
      description: "Bids that hold margin in review and stand up to a scope check.",
    },
    {
      icon: "UserCheck",
      title: "Dedicated coordinator",
      description: "One point of contact who knows your jobs, not a ticket queue.",
    },
  ] as WhyCard[],
} as const;

export interface ProcessStep {
  title: string;
  description: string;
}

export const process = {
  eyebrow: "How it works",
  title: "From plans to bid package in four steps",
  steps: [
    {
      title: "Analyze plans",
      description: "We read every sheet and spec, confirm scope, and flag gaps before we count.",
    },
    {
      title: "Detailed takeoffs",
      description: "Every quantity counted from the drawings, tied back to the sheets.",
    },
    {
      title: "Cost calculation",
      description: "Materials priced current, labor loaded at your rates, markup applied.",
    },
    {
      title: "Deliver bid package",
      description: "An editable estimate and proposal in your inbox on deadline.",
    },
  ] as ProcessStep[],
} as const;

export const deliverables = {
  eyebrow: "What you get",
  title: "What's in your bid package",
  items: [
    "Excel estimate sheet, fully editable",
    "Exact material quantities by system",
    "Multi-supplier material pricing",
    "Labor hours and rates by task",
    "Color-coded plans showing what was counted",
    "A bid proposal ready to send",
    "A takeoff summary for quick review",
  ],
} as const;

/** Estimating software shown in the marquee. */
export const softwareStack: string[] = [
  "Bluebeam",
  "Trimble",
  "PlanSwift",
  "AutoCAD",
  "RSMeans",
  "Accubid",
  "ConEst",
  "Xactimate",
];

export const servicesIntro = {
  eyebrow: "What we do",
  title: "Estimating built for the way you bid",
  subhead: "Thirteen services across estimating, electrical, documentation and every sector.",
} as const;

export const portfolioIntro = {
  eyebrow: "Recent work",
  title: "Estimates behind real bids",
  subhead: "A sample of projects across commercial, residential and industrial work.",
} as const;

export const testimonialsIntro = {
  eyebrow: "What contractors say",
  title: "Trusted on the jobs that matter",
} as const;

export const contactIntro = {
  eyebrow: "Contact us",
  title: "Have a bid due? Let's talk",
  subhead: "Send a note or upload plans. We reply within two business hours.",
} as const;
