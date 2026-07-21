/**
 * Portfolio projects. Drives /portfolio, /portfolio/[slug] and the home
 * portfolio preview. Real case studies — add more as they become available.
 */

export type ProjectCategory = "Commercial" | "Residential" | "Industrial" | "EV Infrastructure";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  /** Whole-dollar total bid price, when disclosed; formatted for display in mono. Omit if not public. */
  value?: number;
  year: number;
  /** One-line summary for cards. */
  summary: string;
  /** 1–2 paragraph scope for the detail page. */
  scope: string[];
  /** Service titles used on the project (free text, shown as chips). */
  servicesUsed: string[];
  /** Optional cover image under /public/images. Omit to show a branded placeholder. */
  image?: string;
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "EV Infrastructure",
];

export const projects: Project[] = [
  {
    slug: "midwood-library-2nd-floor-renovation",
    title: "Midwood Library — 2nd Floor Renovation",
    category: "Commercial",
    location: "Brooklyn, NY",
    value: 436_195,
    year: 2025,
    summary: "Full electrical estimate for a public library renovation, delivered inside a tight public bid deadline.",
    scope: [
      "A major public library renovation in Brooklyn requiring a complete bid tabulation covering all scopes — distribution, branch wiring, wiring devices, lighting and controls, low voltage rough-in, fire alarm rough-in, and demolition — delivered within a tight public bid submission deadline.",
      "The takeoff ran over 300 line items covering all conduit sizes from ¾\" to 4\" EMT, RMC and LFMC, with a full conductor schedule spanning #500 through #8 THHN across the distribution feeders. Fire alarm rough-in was the single largest scope at $98,010, and branch wiring labor accounted for 66% of total scope cost, reflecting the labor intensity typical of renovation work. Overhead and profit were each applied at 20%, yielding a total bid price of $436,195 across 1,529 manhours with a crew of 4 electricians and 1 supervisor.",
    ],
    servicesUsed: ["Electrical Wiring Estimating", "Power Distribution Estimating", "Commercial Estimating"],
  },
  {
    slug: "ev-fast-charging-stations-buena-park",
    title: "EV Fast Charging Stations",
    category: "EV Infrastructure",
    location: "Buena Park, CA",
    year: 2025,
    summary: "Multi-source power system estimate for 32 DC fast chargers, a Tesla Megapack BESS, and full site electrical.",
    scope: [
      "A new-construction EV fast charging station for a commercial EV network operator — a sophisticated multi-source power system spanning a 4,000A/480V/3-phase main switchgear, 32 BTC 380kW DC fast charger dispensers, a 300kW/3,654kWh Tesla Megapack 2 XL battery energy storage system (BESS) with line reactor and site controller, 7 LED canopy-lit light poles, fire alarm devices at each pole, and over 700 linear feet of underground duct bank.",
      "The estimate was built from a full engineering drawing set (sheets E-101 through E-301) including the site plan, single-line diagram, panel schedules and electrical details, coordinated with the project's engineer of record (GPD Group / Electrify America). The feeder and circuit schedule was quantified at 5 sets of 3\" conduit with #500 MCM conductors from the primary switchgear, BESS coordination covered underground conduit runs to the control relay and Tesla site controller, and the panel schedule captured 44 branch circuits across 3 phases.",
    ],
    servicesUsed: ["Power Distribution Estimating", "Instrumentation & Controls Estimating"],
  },
  {
    slug: "brooklyn-navy-yard-building-50",
    title: "Brooklyn Navy Yard — Building 50",
    category: "Commercial",
    location: "Brooklyn, NY",
    year: 2025,
    summary: "Multi-story electrical estimate for a historic commercial renovation within the Navy Yard complex.",
    scope: [
      "A large-scale commercial renovation within the historic Brooklyn Navy Yard complex, for a commercial developer/GC, spanning a multi-story building with coordinated MEP scope.",
      "The estimate covered full feeder and panel schedule takeoff across all floors, reflected ceiling plan verification with fixture counts, switching and controls, low voltage data/security/AV rough-in coordination, fire alarm device layout and conduit routing, and cross-referencing of architectural and mechanical drawings for conflict resolution.",
    ],
    servicesUsed: ["Electrical Wiring Estimating", "Low Voltage Estimating", "Commercial Estimating"],
  },
];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectsByCategory = (category: "All" | ProjectCategory): Project[] =>
  category === "All" ? projects : projects.filter((p) => p.category === category);
