/**
 * Central site configuration. This is the single place a non-developer edits
 * company details. Every value from the brief marked `FILL IN` lives here with
 * a clearly-labelled placeholder — search this file for "FILL IN" before launch.
 *
 * NOTE: the figures under `stats` are factual claims (§7). They ship as
 * placeholders — replace with verified numbers before going live.
 */

export const site = {
  name: "Noble Bidding",

  // FILL IN — production domain, no protocol. Used for canonical URLs + schema.
  domain: "noblebidding.com",

  tagline: "An in-house estimating department without the in-house overhead.",

  // Short descriptor under the wordmark (matches the logo lockup).
  descriptor: "Estimation Services",

  // Used for meta descriptions and Organization schema.
  description:
    "Noble Bidding delivers bid-ready electrical estimates for contractors across the United States. Send your plans, get a complete takeoff and bid package back in 24 to 48 hours.",

  // FILL IN — main business phone. `phone` is used for tel: links (digits only
  // are extracted automatically); `phoneDisplay` is what users see.
  phone: "(347) 941-1038",
  phoneDisplay: "(347) 941-1038",

  // FILL IN — primary contact inbox.
  email: "info@noblebidding.com",

  // Business hours shown on the contact page.
  hours: "Monday – Friday, 8:00 AM – 6:00 PM ET",

  // FILL IN — founding year / years in business.
  founded: 2014,
  yearsExperience: 12,

  // FILL IN — social profiles. Leave a value as an empty string to hide its
  // icon in the header/footer.
  social: {
    facebook: "https://facebook.com/noblebidding",
    linkedin: "https://linkedin.com/company/noblebidding",
    instagram: "https://instagram.com/noblebidding",
  },

  /** Headline figures reused across hero, metrics band and about page. Real, sourced from company materials. */
  stats: {
    onTimePct: 100,
    profitMarginPct: 20, // average client profit margin
    avgMonthlyCost: 3000, // average monthly cost for dedicated estimating support
    turnaroundHours: 48, // upper bound of the 24–48h window
    turnaroundLabel: "24–48h",
  },

  // Primary navigation.
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],

  // Footer legal links.
  legalNav: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export type Site = typeof site;
