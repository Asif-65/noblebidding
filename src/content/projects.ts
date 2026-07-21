/**
 * Portfolio projects. Drives /portfolio, /portfolio/[slug] and the home
 * portfolio preview.
 *
 * TODO: replace with real data before launch. These are illustrative
 * placeholders — titles are generic on purpose so nothing reads as a real,
 * named client or contract. Add cover images to /public/images/projects/ and
 * set the `image` field to switch each card from placeholder to photo.
 */

export type ProjectCategory = "Commercial" | "Residential" | "Industrial";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  /** Whole-dollar estimated project value; formatted for display in mono. */
  value: number;
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
];

export const projects: Project[] = [
  {
    slug: "midtown-office-fit-out",
    title: "Midtown Office Fit-Out",
    category: "Commercial",
    location: "Austin, TX",
    value: 3_400_000,
    year: 2024,
    summary: "Full electrical estimate for a four-floor office tenant improvement.",
    scope: [
      "A four-floor tenant improvement in a downtown office tower with an aggressive bid deadline. The contractor needed a complete electrical takeoff across lighting, power, and low voltage in 48 hours.",
      "We delivered a division-organized estimate with device counts, branch wiring, gear from the panel schedules, and a structured-cabling package, all priced to current supplier data.",
    ],
    servicesUsed: ["Commercial Estimating", "Electrical Wiring Estimating", "Low Voltage Estimating"],
  },
  {
    slug: "riverside-retail-center",
    title: "Riverside Retail Center",
    category: "Commercial",
    location: "Nashville, TN",
    value: 5_800_000,
    year: 2024,
    summary: "Multi-trade takeoff for a six-tenant retail shell and core.",
    scope: [
      "A six-tenant retail center bid as shell and core with tenant allowances. The scope spanned structure, envelope, and base-building systems across multiple trades.",
      "We provided a multi-trade estimate organized by CSI division with clear allowance lines so the contractor and owner could see exactly what was carried per tenant.",
    ],
    servicesUsed: ["Commercial Estimating", "Quantity Takeoffs"],
  },
  {
    slug: "gateway-mixed-use",
    title: "Gateway Mixed-Use Development",
    category: "Commercial",
    location: "Denver, CO",
    value: 9_200_000,
    year: 2023,
    summary: "Estimate and shop drawings for a mixed-use retail and office block.",
    scope: [
      "A mixed-use block combining ground-floor retail with office above. The contractor needed both a competitive bid estimate and submittal-ready shop drawings for the electrical package.",
      "We delivered the estimate with addenda tracked through the bid period, then produced coordinated shop drawings for approval once the job was awarded.",
    ],
    servicesUsed: ["Commercial Estimating", "Shop Drawings", "Power Distribution Estimating"],
  },
  {
    slug: "hillcrest-custom-residence",
    title: "Hillcrest Custom Residence",
    category: "Residential",
    location: "Scottsdale, AZ",
    value: 1_250_000,
    year: 2024,
    summary: "Whole-home estimate priced to a high custom finish level.",
    scope: [
      "A custom single-family residence with a high finish level and a detailed allowance schedule. The builder needed the estimate priced to the actual finishes, not builder-grade assumptions.",
      "We produced a trade-by-trade takeoff with finish and allowance items broken out on their own lines, plus an owner-friendly summary alongside the working workbook.",
    ],
    servicesUsed: ["Residential Estimating", "Quantity Takeoffs"],
  },
  {
    slug: "maple-grove-townhomes",
    title: "Maple Grove Townhomes",
    category: "Residential",
    location: "Columbus, OH",
    value: 4_100_000,
    year: 2023,
    summary: "Repeatable estimate for a 24-unit townhome community.",
    scope: [
      "A 24-unit townhome community built from three repeating floor plans. The developer needed a per-plan estimate that rolled up to a community total.",
      "We built the estimate by plan so costs could be tracked per unit type, then aggregated to a community-wide number with sitework and shared systems accounted for.",
    ],
    servicesUsed: ["Residential Estimating", "Quantity Takeoffs"],
  },
  {
    slug: "lakeshore-remodel",
    title: "Lakeshore Remodel & Addition",
    category: "Residential",
    location: "Minneapolis, MN",
    value: 680_000,
    year: 2024,
    summary: "Remodel and addition estimate with explicit demolition scope.",
    scope: [
      "A substantial remodel and rear addition to an existing lakeside home. Existing conditions and demolition drove real cost that a rule-of-thumb estimate would have missed.",
      "We estimated the demolition and existing-conditions allowances explicitly, then priced the addition and remodel trades to the drawings and finish schedule.",
    ],
    servicesUsed: ["Residential Estimating"],
  },
  {
    slug: "northport-distribution-warehouse",
    title: "Northport Distribution Warehouse",
    category: "Industrial",
    location: "Savannah, GA",
    value: 7_600_000,
    year: 2023,
    summary: "Power distribution and lighting estimate for a 320,000 sq ft warehouse.",
    scope: [
      "A large distribution warehouse with heavy power distribution, high-bay lighting, and long-lead switchgear. Getting the gear and feeders right, and flagging lead times, protected both the bid and the schedule.",
      "We quantified the distribution from the one-lines, priced the gear, and flagged long-lead equipment so procurement reflected real delivery windows.",
    ],
    servicesUsed: ["Industrial Estimating", "Power Distribution Estimating"],
  },
  {
    slug: "cedar-processing-facility",
    title: "Cedar Processing Facility",
    category: "Industrial",
    location: "Sioux Falls, SD",
    value: 12_400_000,
    year: 2024,
    summary: "Process facility estimate with instrumentation and controls scope.",
    scope: [
      "A food-processing facility with dense instrumentation and controls scope alongside heavy power distribution. Instrument and loop counts drove a large share of the labor.",
      "We took off the I&C scope from the P&IDs and loop drawings, quantified the distribution, and delivered a phased estimate that matched how the facility would be built.",
    ],
    servicesUsed: ["Industrial Estimating", "Instrumentation & Controls Estimating", "Power Distribution Estimating"],
  },
  {
    slug: "summit-manufacturing-expansion",
    title: "Summit Manufacturing Expansion",
    category: "Industrial",
    location: "Reno, NV",
    value: 8_900_000,
    year: 2023,
    summary: "Phased electrical estimate for an active-plant expansion.",
    scope: [
      "An expansion to an operating manufacturing plant that had to be built in phases around live production. Phasing and site logistics were central to the cost.",
      "We structured the electrical estimate by phase so costs aligned with the construction sequence, and coordinated the distribution scope against the existing service.",
    ],
    servicesUsed: ["Industrial Estimating", "Power Distribution Estimating", "Engineering Support"],
  },
];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectsByCategory = (category: "All" | ProjectCategory): Project[] =>
  category === "All" ? projects : projects.filter((p) => p.category === category);
