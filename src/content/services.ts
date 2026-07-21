/**
 * All 6 services. Drives /services, every /service/[slug] page, the home
 * services grid, the sitemap and Service JSON-LD.
 *
 * Noble Bidding is an electrical estimating firm — every service here is
 * electrical. Copy is original to Noble Bidding. Edit freely — a
 * non-developer can change any string here without touching a component.
 */

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  /** Broad grouping used as a section heading on /services and as the label chip. */
  category: string;
  /** Icon registry key — see components/ui/Icon.tsx. */
  icon: string;
  title: string;
  /** One-sentence description for cards and grids. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroSubhead: string;
  overview: string[];
  whatsIncluded: string[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  /** Shown in the six-card home grid when true. */
  featured?: boolean;
}

/** Category display order on the /services page. */
export const serviceCategories = ["Residential", "Commercial", "Industrial", "Electrical Systems"] as const;

export const services: Service[] = [
  {
    slug: "residential-electrical-estimating",
    category: "Residential",
    icon: "Home",
    title: "Residential Electrical Estimating",
    summary:
      "Custom homes, remodels and multifamily electrical, wired and priced to the finish level the plans call for.",
    metaTitle: "Residential Electrical Estimating Services",
    metaDescription:
      "Residential electrical estimating for custom homes, remodels and multifamily — device counts, branch wiring, panels and current pricing. Fast turnaround.",
    heroSubhead:
      "Custom homes to multifamily, wired and priced to the finish level the plans call for.",
    overview: [
      "Residential electrical margins are thin and finishes swing the number. A custom home priced at builder-grade fixtures loses money; a spec home priced at custom-grade loses the bid. We estimate to the finish level the drawings and allowances actually call for.",
      "From a single-family remodel to a multifamily build, we take off devices, fixtures, panels and branch wiring from your drawings, price them against current supplier data, and hand back a detailed takeoff across the full electrical scope, with allowances broken out so you and the owner see exactly what is included.",
    ],
    whatsIncluded: [
      "Device, fixture and panel counts from the drawings",
      "Branch wiring and homerun conduit and wire quantities",
      "Finish and allowance items broken out clearly",
      "Current material and labor pricing",
      "Editable estimate the owner can review",
      "Color-coded plans showing what was counted",
    ],
    process: [
      {
        title: "Review plans and allowances",
        description:
          "We read the drawings and finish schedules to price to the right level.",
      },
      {
        title: "Device and wiring takeoff",
        description:
          "Devices, fixtures, panels and branch wiring counted from the drawings.",
      },
      {
        title: "Price and set allowances",
        description:
          "Materials and labor priced current, allowances stated clearly.",
      },
      {
        title: "Deliver",
        description:
          "An editable, owner-ready estimate delivered inside the agreed window.",
      },
    ],
    faqs: [
      {
        question: "Do you handle remodels and additions?",
        answer:
          "Yes. Remodels, additions, custom homes and multifamily are all within scope. Demolition and existing-conditions allowances are handled explicitly.",
      },
      {
        question: "How do you deal with owner allowances?",
        answer:
          "Allowance items are broken out on their own lines so you and the owner see exactly what is carried and can adjust the finish level.",
      },
      {
        question: "Can you produce an owner-friendly version?",
        answer:
          "Yes. Alongside the detailed workbook we can provide a clean summary an owner can read without wading through line items.",
      },
      {
        question: "Do you price by region?",
        answer:
          "Yes. Material and labor pricing reflects the project's market, not a national average that misses local reality.",
      },
    ],
    relatedSlugs: ["commercial-electrical-estimating", "low-voltage-estimating", "power-distribution-estimating"],
    featured: true,
  },
  {
    slug: "commercial-electrical-estimating",
    category: "Commercial",
    icon: "Building2",
    title: "Commercial Electrical Estimating",
    summary:
      "Offices, retail, fit-outs and mixed-use, wired and estimated for competitive bids.",
    metaTitle: "Commercial Electrical Estimating Services",
    metaDescription:
      "Commercial electrical estimating for offices, retail, fit-outs and mixed-use — device counts, distribution, and current pricing built to win competitive bids.",
    heroSubhead:
      "Offices, retail and fit-outs, wired and estimated tight enough to win and hold margin.",
    overview: [
      "Commercial electrical bids live and die on the counts. Miss a panel schedule or under-run the branch wiring and the margin is gone. We take off devices, fixtures, gear, conduit and conductors from your drawings and price them against live supplier data so the bid holds up.",
      "Every project is organized by system so a project manager can review it fast, with assumptions and exclusions written down so the bid holds up in a scope review. Labor is applied with standard electrical labor units you can adjust to your crews, whether it is a tenant fit-out or a full building.",
    ],
    whatsIncluded: [
      "Device, fixture and equipment counts from the drawings",
      "Branch, feeder and homerun conduit and wire quantities",
      "Gear and distribution takeoff from the panel schedules",
      "General conditions and overhead structure",
      "Assumptions and exclusions stated clearly",
      "Editable workbook with color-coded plans",
    ],
    process: [
      {
        title: "Plan and schedule review",
        description:
          "We read the drawings, panel schedules and one-lines together to catch conflicts.",
      },
      {
        title: "Systematic takeoff",
        description:
          "Devices, gear, conduit and wire counted by system so nothing is missed.",
      },
      {
        title: "Price and load labor",
        description:
          "Materials priced live, labor units applied and tuned to your rates.",
      },
      {
        title: "Deliver the package",
        description:
          "An organized, editable estimate with marked-up plans lands on your deadline.",
      },
    ],
    faqs: [
      {
        question: "Do you use labor units I can adjust?",
        answer:
          "Yes. We apply standard electrical labor units and expose them so you can tune productivity to your crews and conditions.",
      },
      {
        question: "Can you handle design-build or performance specs?",
        answer:
          "Yes. When the design is not fully drawn, we estimate from the performance requirements and note the assumptions we carried.",
      },
      {
        question: "How do you handle addenda during a bid?",
        answer:
          "We track addenda and update the estimate through the bid period so the number you submit reflects the latest documents.",
      },
      {
        question: "What software do you work in?",
        answer:
          "We estimate in the tools your bid expects, including Accubid, ConEst, PlanSwift and Bluebeam, and deliver in a format your team can open.",
      },
    ],
    relatedSlugs: ["industrial-electrical-estimating", "power-distribution-estimating", "residential-electrical-estimating"],
    featured: true,
  },
  {
    slug: "industrial-electrical-estimating",
    category: "Industrial",
    icon: "Factory",
    title: "Industrial Electrical Estimating",
    summary:
      "Plants, warehouses and process facilities, estimated for scale and complexity.",
    metaTitle: "Industrial Electrical Estimating Services",
    metaDescription:
      "Industrial electrical estimating for plants, warehouses and process facilities — heavy distribution and controls scope quantified and priced for scale.",
    heroSubhead:
      "Plants, warehouses and process work, estimated for the scale it actually is.",
    overview: [
      "Industrial jobs carry heavy distribution and controls scope and long-lead equipment that dwarfs the labor. Getting the number right means quantifying the gear, the feeders and the controls carefully and flagging lead times early. We estimate to that scale.",
      "From a warehouse power build to an EV charging installation or a process facility, you get organized takeoffs across distribution, controls and supporting systems, priced current, with long-lead items and phasing called out so the bid and the schedule agree.",
    ],
    whatsIncluded: [
      "Distribution, feeder and gear takeoff",
      "Process and controls scope quantified",
      "Long-lead equipment flagged for procurement",
      "Phasing and site logistics considered",
      "Current pricing from suppliers and vendors",
      "Editable estimate with color-coded plans",
    ],
    process: [
      {
        title: "Scope the facility",
        description:
          "We map the distribution, process and controls scope from the drawings.",
      },
      {
        title: "Heavy-scope takeoff",
        description:
          "Gear, feeders, controls and supporting systems quantified in detail.",
      },
      {
        title: "Price and flag lead times",
        description:
          "Current pricing applied, long-lead equipment and phasing flagged.",
      },
      {
        title: "Deliver",
        description:
          "An organized, editable package delivered on your bid deadline.",
      },
    ],
    faqs: [
      {
        question: "Can you handle large multi-system industrial scope?",
        answer:
          "Yes. Distribution, controls and supporting electrical systems can be estimated together or as separate packages for a large facility.",
      },
      {
        question: "How do you treat long-lead equipment?",
        answer:
          "Long-lead gear like switchgear and transformers is flagged with lead times so procurement and the schedule reflect reality.",
      },
      {
        question: "Do you handle EV charging and battery storage scope?",
        answer:
          "Yes. Multi-source power systems — utility service, BESS, dispensers and site electrical — are within scope alongside traditional industrial distribution.",
      },
      {
        question: "Can you price from vendor quotes?",
        answer:
          "Yes. Where you have equipment quotes we build to them; otherwise we price from current supplier and manufacturer data.",
      },
    ],
    relatedSlugs: ["power-distribution-estimating", "instrumentation-controls-estimating", "commercial-electrical-estimating"],
    featured: true,
  },
  {
    slug: "low-voltage-estimating",
    category: "Electrical Systems",
    icon: "RadioTower",
    title: "Low Voltage Estimating",
    summary:
      "Structured cabling, security, AV and access control, counted and priced.",
    metaTitle: "Low Voltage & Structured Cabling Estimating",
    metaDescription:
      "Low voltage estimating for structured cabling, security, access control and AV — device counts, cable pathways and labor, priced current.",
    heroSubhead:
      "Cabling, security, access control and AV, taken off to the drop and priced.",
    overview: [
      "Low voltage scope hides in the details: drop counts, cable pathways, rack elevations, head-end gear. We take it off system by system so the bid reflects the real material and the real labor to pull, terminate and test it.",
      "From a single security package to a full structured-cabling build, you get organized quantities, current pricing and labor tuned to your crews. Nothing scaled by rule of thumb.",
    ],
    whatsIncluded: [
      "Device and drop counts by system",
      "Cable, pathway and termination quantities",
      "Rack, head-end and equipment takeoff",
      "Labor for pull, terminate and test",
      "Current pricing on cable, connectors and gear",
      "Color-coded plans and editable estimate sheet",
    ],
    process: [
      {
        title: "Scope the systems",
        description:
          "We identify each low voltage system in the drawings and specs.",
      },
      {
        title: "Count drops and pathways",
        description:
          "Devices, cable runs, terminations and racks quantified by system.",
      },
      {
        title: "Price and load labor",
        description:
          "Materials priced live, labor applied for pull, terminate and test.",
      },
      {
        title: "Deliver",
        description:
          "Organized, editable estimate with markups inside the agreed window.",
      },
    ],
    faqs: [
      {
        question: "Which low voltage systems do you cover?",
        answer:
          "Structured cabling, access control, video surveillance, intrusion, audio-visual, paging and nurse call, among others. Tell us the systems and we confirm scope.",
      },
      {
        question: "Do you estimate cable footage or just drops?",
        answer:
          "Both. We count drops and estimate cable footage from pathways and rack locations, with waste factored in.",
      },
      {
        question: "Can you separate LV from the electrical bid?",
        answer:
          "Yes. Low voltage can be delivered as its own package or folded into a combined electrical estimate, whichever your bid requires.",
      },
      {
        question: "Do you include testing and commissioning labor?",
        answer:
          "Yes. Labor to terminate, test and document is part of the estimate, not an afterthought.",
      },
    ],
    relatedSlugs: ["power-distribution-estimating", "instrumentation-controls-estimating", "commercial-electrical-estimating"],
    featured: true,
  },
  {
    slug: "power-distribution-estimating",
    category: "Electrical Systems",
    icon: "Zap",
    title: "Power Distribution Estimating",
    summary:
      "Service entrance, gear, feeders and grounding, taken off from the one-lines.",
    metaTitle: "Power Distribution Estimating Services",
    metaDescription:
      "Power distribution estimating — service entrance, switchgear, feeders, grounding and metering — quantified from one-lines and priced to current data.",
    heroSubhead:
      "From the service entrance to the last panel, the distribution scope counted right.",
    overview: [
      "Distribution is where the big-ticket electrical dollars sit. Switchgear, transformers, feeders and grounding carry long lead times and heavy pricing, so an accurate takeoff protects both the bid and the schedule. We quantify it from the one-lines and panel schedules.",
      "You get gear counts, feeder conduit and conductor runs, grounding and bonding, and metering, priced against current supplier and manufacturer data. Long-lead items are flagged so procurement is not caught out.",
    ],
    whatsIncluded: [
      "Service entrance and switchgear takeoff",
      "Transformer, panel and distribution counts",
      "Feeder conduit and conductor quantities",
      "Grounding, bonding and metering",
      "Long-lead items flagged for procurement",
      "Current pricing and an editable estimate sheet",
    ],
    process: [
      {
        title: "One-line review",
        description:
          "We read the one-lines and panel schedules to map the full distribution.",
      },
      {
        title: "Gear and feeder takeoff",
        description:
          "Switchgear, transformers, panels and feeders quantified line by line.",
      },
      {
        title: "Price and flag lead times",
        description:
          "Current pricing applied, long-lead equipment flagged for the schedule.",
      },
      {
        title: "Deliver",
        description:
          "An organized, editable package delivered on your bid deadline.",
      },
    ],
    faqs: [
      {
        question: "Do you flag long-lead equipment?",
        answer:
          "Yes. Switchgear and transformers can run months out. We flag those items so your procurement and schedule reflect real lead times.",
      },
      {
        question: "Can you price gear from manufacturer quotes?",
        answer:
          "Yes. Where you have vendor quotes we build to them; where you do not, we price from current supplier and manufacturer data.",
      },
      {
        question: "Do you handle medium-voltage distribution?",
        answer:
          "Yes. Medium-voltage gear, cable and terminations are within scope. Note it up front so we confirm the right assumptions.",
      },
      {
        question: "Is grounding and bonding included?",
        answer:
          "Yes. Grounding, bonding and metering are taken off with the rest of the distribution, not left as an allowance.",
      },
    ],
    relatedSlugs: ["instrumentation-controls-estimating", "industrial-electrical-estimating", "commercial-electrical-estimating"],
    featured: true,
  },
  {
    slug: "instrumentation-controls-estimating",
    category: "Electrical Systems",
    icon: "Gauge",
    title: "Instrumentation & Controls Estimating",
    summary:
      "I&C scope — instruments, loops, panels and terminations — quantified and priced.",
    metaTitle: "Instrumentation & Controls Estimating",
    metaDescription:
      "Instrumentation and controls estimating — instruments, control loops, panels, cable and terminations — quantified from P&IDs and priced current.",
    heroSubhead:
      "Instruments, loops, panels and terminations, taken off from the P&IDs.",
    overview: [
      "Instrumentation and controls work is detail-dense and easy to under-count. Instruments, control loops, junction boxes, cable and terminations add up fast, and the labor to land and check every point is real money. We take it off from the P&IDs and loop drawings.",
      "You get instrument counts, loop quantities, panel and cable takeoff, and termination counts, with labor for installation, termination and loop checks. Priced to current data and organized so the bid is easy to review.",
    ],
    whatsIncluded: [
      "Instrument counts by type and loop",
      "Control panel and junction box takeoff",
      "Instrument cable and pathway quantities",
      "Termination and loop-check counts",
      "Labor for install, terminate and check",
      "Current pricing and an editable sheet",
    ],
    process: [
      {
        title: "P&ID and loop review",
        description:
          "We read the P&IDs, loop sheets and panel drawings to map every point.",
      },
      {
        title: "Count instruments and loops",
        description:
          "Instruments, panels, cable and terminations quantified by loop.",
      },
      {
        title: "Price and load labor",
        description:
          "Materials priced current, labor applied for install, terminate and check.",
      },
      {
        title: "Deliver",
        description:
          "An organized, editable I&C package delivered on deadline.",
      },
    ],
    faqs: [
      {
        question: "Do you estimate from P&IDs and loop sheets?",
        answer:
          "Yes. Instrument and loop counts come off the P&IDs and loop drawings, with panel and cable takeoff from the supporting sheets.",
      },
      {
        question: "Is loop-check and commissioning labor included?",
        answer:
          "Yes. Labor to terminate, loop-check and support commissioning is part of the estimate.",
      },
      {
        question: "Can you handle DCS and PLC panel scope?",
        answer:
          "Yes. Control panel takeoff, including DCS and PLC cabinets, terminations and interconnect cable, is within scope.",
      },
      {
        question: "Do you count instrument cable footage?",
        answer:
          "Yes. Cable footage is estimated from pathways and panel locations with appropriate waste factored in.",
      },
    ],
    relatedSlugs: ["power-distribution-estimating", "industrial-electrical-estimating", "low-voltage-estimating"],
    featured: true,
  },
];

// ---- Derived helpers ----

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const featuredServices = (): Service[] => services.filter((s) => s.featured);

export const servicesByCategory = (): { category: string; items: Service[] }[] =>
  serviceCategories.map((category) => ({
    category,
    items: services.filter((s) => s.category === category),
  }));

export const relatedServices = (slug: string): Service[] => {
  const service = serviceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => serviceBySlug(s))
    .filter((s): s is Service => Boolean(s));
};
