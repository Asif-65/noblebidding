/**
 * All 13 services. Drives /services, every /service/[slug] page, the home
 * services grid, the sitemap and Service JSON-LD.
 *
 * Copy is original to Noble Bidding. Edit freely — a non-developer can change
 * any string here without touching a component.
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
export const serviceCategories = [
  "Estimating & Outsourcing",
  "Electrical",
  "Design & Documentation",
  "By Sector",
] as const;

export const services: Service[] = [
  {
    slug: "outsourced-estimating",
    category: "Estimating & Outsourcing",
    icon: "Handshake",
    title: "Outsourced Estimating",
    summary:
      "A full estimating department on call, priced per bid instead of per salary.",
    metaTitle: "Outsourced Construction Estimating Services",
    metaDescription:
      "Outsource your takeoffs and bids to Noble. Get bid-ready estimates in 24 to 48 hours without hiring a full-time estimator.",
    heroSubhead:
      "Hand off the takeoffs and bid math. Keep the relationships and the margins.",
    overview: [
      "Hiring a senior estimator costs six figures a year before benefits. Most small and mid-size contractors do not bid enough volume to keep one busy, but they bid too much to do it well between site visits. Outsourced estimating closes that gap. You send plans; we return a complete, bid-ready package.",
      "You pay per bid, so the cost tracks the work. Slow month, small invoice. Busy month, we scale up without you adding headcount. Every estimate is built by an estimator who reads your trade, checks quantities twice, and prices against current supplier data, not last year's numbers.",
    ],
    whatsIncluded: [
      "Line-item material takeoff with counts and measurements",
      "Labor hours by task with adjustable crew rates",
      "Supplier pricing pulled at the time of the bid",
      "Excel estimate sheet you can edit before you submit",
      "Marked-up plans showing what was counted",
      "A written bid proposal ready to send to the GC",
    ],
    process: [
      {
        title: "Send your plans",
        description:
          "Upload drawings, specs and the bid due date. PDF, DWG and DXF all work.",
      },
      {
        title: "We scope the job",
        description:
          "We confirm the trades in play, flag anything missing, and lock a delivery time.",
      },
      {
        title: "Takeoff and pricing",
        description:
          "Quantities counted, labor applied, materials priced against live supplier data.",
      },
      {
        title: "Bid package delivered",
        description:
          "You get an editable estimate and proposal inside the 24 to 48 hour window.",
      },
    ],
    faqs: [
      {
        question: "How fast is turnaround?",
        answer:
          "Most estimates go back in 24 to 48 hours. Large or multi-trade jobs may take longer, and we tell you the exact time before we start so it never surprises your deadline.",
      },
      {
        question: "Do you sign an NDA?",
        answer:
          "Yes. Plans and pricing stay confidential, and we sign your NDA or provide ours before any files change hands.",
      },
      {
        question: "What if I only need one bid this month?",
        answer:
          "That is fine. There is no minimum volume and no retainer. You pay for the bids you send, one at a time.",
      },
      {
        question: "Can you match our markup and labor rates?",
        answer:
          "Yes. We build to your crew rates, burden and markup so the number reads like your own shop produced it.",
      },
    ],
    relatedSlugs: ["professional-estimating", "quantity-takeoffs", "commercial-estimating"],
    featured: true,
  },
  {
    slug: "professional-estimating",
    category: "Estimating & Outsourcing",
    icon: "BadgeCheck",
    title: "Professional Estimating",
    summary:
      "Detailed, defensible estimates built to the standard a hard-bid job demands.",
    metaTitle: "Professional Construction Estimating",
    metaDescription:
      "Detailed, audit-ready construction estimates with itemized quantities, labor and current pricing. Built to win hard-bid work.",
    heroSubhead:
      "The number you submit is only as good as the takeoff behind it. We build the takeoff.",
    overview: [
      "A professional estimate is more than a total at the bottom of a page. It is a defensible breakdown a project manager can walk into a bid review and stand behind. We build every line so you can see exactly where the number comes from and adjust it before you submit.",
      "This service suits contractors bidding competitive work where a two percent error decides the job. Quantities are counted from the drawings, not scaled from a rule of thumb. Pricing is current. Assumptions are written down, not buried.",
    ],
    whatsIncluded: [
      "Itemized quantity takeoff by CSI division or trade",
      "Labor hours with productivity assumptions stated",
      "Current material pricing with supplier notes",
      "Equipment, freight and consumables accounted for",
      "A clear assumptions and exclusions list",
      "Editable Excel workbook with formulas intact",
    ],
    process: [
      {
        title: "Drawing review",
        description:
          "We read every sheet, cross-check details against the schedule, and note gaps.",
      },
      {
        title: "Quantify",
        description:
          "Counts and measurements captured line by line, tied back to the sheets.",
      },
      {
        title: "Price and load labor",
        description:
          "Materials priced live, labor loaded at your rates with stated productivity.",
      },
      {
        title: "Review and hand off",
        description:
          "A second estimator checks the totals before the workbook reaches you.",
      },
    ],
    faqs: [
      {
        question: "What standard do you estimate to?",
        answer:
          "We organize by CSI MasterFormat divisions or your internal trade breakdown, whichever you prefer, and note every assumption so the estimate holds up in review.",
      },
      {
        question: "Do you catch missing scope in the plans?",
        answer:
          "Yes. Flagging gaps, conflicts and unclear details is part of the review. You get those notes with the estimate so you can RFI before bid day.",
      },
      {
        question: "Can I get the working file, not just a PDF?",
        answer:
          "Yes. You receive the Excel workbook with formulas intact so you can adjust quantities, rates or markup yourself.",
      },
      {
        question: "How do you keep pricing current?",
        answer:
          "Material pricing is pulled at the time of your bid from supplier data and quotes, not from a static database that drifts over a season.",
      },
    ],
    relatedSlugs: ["outsourced-estimating", "quantity-takeoffs", "commercial-estimating"],
  },
  {
    slug: "quantity-takeoffs",
    category: "Estimating & Outsourcing",
    icon: "Ruler",
    title: "Quantity Takeoffs",
    summary:
      "Accurate material counts and measurements, delivered as a clean editable sheet.",
    metaTitle: "Construction Quantity Takeoff Services",
    metaDescription:
      "Precise material takeoffs from your drawings — counts, lengths and areas in an editable sheet, ready to price. Fast turnaround.",
    heroSubhead:
      "Just need the quantities? We count them clean so your pricing sits on solid ground.",
    overview: [
      "Some shops price their own work but do not have time to count it. That is where a standalone takeoff earns its keep. We measure every length, area and count from your drawings and hand back an organized quantity sheet you drop your own pricing into.",
      "Takeoffs are done in current software with the marked-up plans included, so anyone on your team can see exactly what was counted and where. No black box, no scaled guesses.",
    ],
    whatsIncluded: [
      "Counts, lengths and areas by material and system",
      "Organized quantity sheet in Excel",
      "Color-coded plan markups showing every measurement",
      "Waste and coverage factors applied where relevant",
      "Assemblies broken out so nothing double-counts",
      "A summary tally by trade for quick review",
    ],
    process: [
      {
        title: "Receive drawings",
        description:
          "Upload the sheets and tell us which trades and systems you need counted.",
      },
      {
        title: "Measure",
        description:
          "Every count, length and area captured against the drawing scale.",
      },
      {
        title: "Organize",
        description:
          "Quantities sorted into a clean sheet with plan markups attached.",
      },
      {
        title: "Deliver",
        description:
          "You get the sheet ready to price, usually inside 24 to 48 hours.",
      },
    ],
    faqs: [
      {
        question: "Do you price the takeoff, or just count it?",
        answer:
          "A takeoff is quantities only. If you also want material and labor pricing, choose Professional or Outsourced Estimating and we build the full number.",
      },
      {
        question: "What if the drawings are not to scale?",
        answer:
          "We calibrate to a known dimension on the sheet before measuring. If nothing on the drawing can be trusted, we tell you rather than guess.",
      },
      {
        question: "Which trades do you take off?",
        answer:
          "Electrical, mechanical, plumbing, concrete, framing, finishes and sitework, among others. Tell us the scope and we confirm before starting.",
      },
      {
        question: "Can I see what was counted?",
        answer:
          "Yes. Color-coded plan markups come with every takeoff so each quantity ties back to a spot on the drawing.",
      },
    ],
    relatedSlugs: ["outsourced-estimating", "professional-estimating", "electrical-wiring-estimating"],
    featured: true,
  },
  {
    slug: "electrical-wiring-estimating",
    category: "Electrical",
    icon: "Cable",
    title: "Electrical Wiring Estimating",
    summary:
      "Branch and feeder takeoffs with device counts, conduit and wire, priced current.",
    metaTitle: "Electrical Estimating Services for Contractors",
    metaDescription:
      "Electrical estimating and takeoffs — devices, conduit, wire, gear and labor units — priced to current supplier data. Bid-ready in 24 to 48 hours.",
    heroSubhead:
      "Device counts, homeruns, conduit and wire, counted right and priced current.",
    overview: [
      "Electrical bids live and die on the counts. Miss a panel schedule or under-run the branch wiring and the margin is gone. We take off devices, fixtures, gear, conduit and conductors from your drawings and price them against live supplier data so the bid holds up.",
      "Labor is applied with standard electrical labor units you can adjust to your crews. Whether it is a tenant fit-out or a full building, the estimate comes back organized by system so you can see where the cost sits.",
    ],
    whatsIncluded: [
      "Device, fixture and equipment counts from the drawings",
      "Branch, feeder and homerun conduit and wire quantities",
      "Gear and distribution takeoff from the panel schedules",
      "Labor units by task, adjustable to your crews",
      "Current pricing from electrical suppliers",
      "Color-coded plans and an editable estimate sheet",
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
        question: "Do you take off low voltage and controls too?",
        answer:
          "We do — see our Low Voltage and Instrumentation & Controls services. We can bundle them into one electrical package on request.",
      },
      {
        question: "What software do you work in?",
        answer:
          "We estimate in the tools your bid expects, including Accubid, ConEst, PlanSwift and Bluebeam, and deliver in a format your team can open.",
      },
    ],
    relatedSlugs: ["low-voltage-estimating", "power-distribution-estimating", "instrumentation-controls-estimating"],
    featured: true,
  },
  {
    slug: "low-voltage-estimating",
    category: "Electrical",
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
    relatedSlugs: ["electrical-wiring-estimating", "instrumentation-controls-estimating", "power-distribution-estimating"],
  },
  {
    slug: "power-distribution-estimating",
    category: "Electrical",
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
    relatedSlugs: ["electrical-wiring-estimating", "instrumentation-controls-estimating", "industrial-estimating"],
  },
  {
    slug: "instrumentation-controls-estimating",
    category: "Electrical",
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
    relatedSlugs: ["power-distribution-estimating", "electrical-wiring-estimating", "industrial-estimating"],
  },
  {
    slug: "drafting-services",
    category: "Design & Documentation",
    icon: "DraftingCompass",
    title: "Drafting Services",
    summary:
      "Clean CAD drafting and redlines turned around so your bid or build keeps moving.",
    metaTitle: "Construction CAD Drafting Services",
    metaDescription:
      "CAD drafting for contractors — redlines to clean drawings, as-builts and coordination sheets — turned around fast so your project keeps moving.",
    heroSubhead:
      "Redlines to clean sheets, as-builts and coordination drawings, done on time.",
    overview: [
      "Drafting is the kind of work that piles up on a project manager's desk and never gets done. We take it off your plate. Send redlines, sketches or marked-up sheets and we return clean, standards-compliant CAD drawings.",
      "From as-builts to coordination sheets to bid-support drawings, the work comes back in your CAD standard and your title block. Fast enough to keep a bid or a build on schedule.",
    ],
    whatsIncluded: [
      "Redlines and sketches converted to clean CAD",
      "As-built drawings from field markups",
      "Coordination and layout sheets",
      "Drawings in your CAD standard and title block",
      "Native files plus PDF sets",
      "Revisions handled on a clear turnaround",
    ],
    process: [
      {
        title: "Send the source",
        description:
          "Upload redlines, sketches, photos or existing CAD to work from.",
      },
      {
        title: "Confirm standards",
        description:
          "We match your layers, title block and drawing conventions before starting.",
      },
      {
        title: "Draft",
        description:
          "Clean drawings produced to your standard, checked for consistency.",
      },
      {
        title: "Deliver and revise",
        description:
          "Native files and PDFs delivered, with revisions on a clear timeline.",
      },
    ],
    faqs: [
      {
        question: "Which CAD platforms do you work in?",
        answer:
          "AutoCAD is standard. We can work to your layer standards and title block, and deliver native DWG plus PDF sets.",
      },
      {
        question: "Can you draft from hand sketches or photos?",
        answer:
          "Yes. Redlines, field sketches and photos are common inputs. If something is unclear we ask rather than assume.",
      },
      {
        question: "Do you produce as-builts?",
        answer:
          "Yes. Send field markups and we turn them into clean as-built drawings in your standard.",
      },
      {
        question: "How are revisions handled?",
        answer:
          "Revisions are quoted on a clear turnaround. Minor markups are usually same-day; larger changes get a stated time before we start.",
      },
    ],
    relatedSlugs: ["shop-drawings", "engineering-support", "quantity-takeoffs"],
  },
  {
    slug: "engineering-support",
    category: "Design & Documentation",
    icon: "Cog",
    title: "Engineering Support",
    summary:
      "Load calcs, sizing and design-assist support to back your bid and your build.",
    metaTitle: "Construction Engineering Support Services",
    metaDescription:
      "Engineering support for contractors — load calculations, equipment sizing and design-assist — to back your bids and keep builds on track.",
    heroSubhead:
      "Calcs, sizing and design-assist to put engineering weight behind your number.",
    overview: [
      "Some bids need more than a takeoff. They need a load calc, an equipment size checked, or a design-assist review before you commit a number. We provide that engineering support so your bid rests on sound assumptions rather than a hopeful allowance.",
      "This is support work that backs your team, not a stamped design service. We do the calcs and sizing, document the basis, and flag where a licensed engineer of record needs to sign off.",
    ],
    whatsIncluded: [
      "Load and demand calculations",
      "Equipment and feeder sizing checks",
      "Design-assist review of bid documents",
      "Basis-of-design notes and assumptions",
      "Value-engineering options where they exist",
      "Clear notes on where an EOR stamp is required",
    ],
    process: [
      {
        title: "Define the ask",
        description:
          "We confirm exactly what calc or review you need and what it supports.",
      },
      {
        title: "Gather inputs",
        description:
          "Drawings, specs and loads collected so the work rests on real data.",
      },
      {
        title: "Calculate and document",
        description:
          "Calcs run, sizing checked, and the basis written down clearly.",
      },
      {
        title: "Deliver with notes",
        description:
          "Results delivered with assumptions and any stamp requirements flagged.",
      },
    ],
    faqs: [
      {
        question: "Do you provide stamped engineering drawings?",
        answer:
          "This is design-assist and calculation support, not a stamped EOR service. Where a licensed stamp is required, we flag it so you can route it to your engineer of record.",
      },
      {
        question: "What kinds of calculations do you run?",
        answer:
          "Load and demand calcs, feeder and equipment sizing, voltage drop and similar bid-support calculations, documented with their basis.",
      },
      {
        question: "Can this feed directly into an estimate?",
        answer:
          "Yes. Engineering support pairs naturally with our estimating services so sizing and pricing stay consistent.",
      },
      {
        question: "How do you document assumptions?",
        answer:
          "Every calc comes with a written basis of design and assumptions list so your team can review and defend it.",
      },
    ],
    relatedSlugs: ["drafting-services", "shop-drawings", "power-distribution-estimating"],
  },
  {
    slug: "shop-drawings",
    category: "Design & Documentation",
    icon: "Layers",
    title: "Shop Drawings",
    summary:
      "Submittal-ready shop and fabrication drawings produced to spec and on schedule.",
    metaTitle: "Shop Drawing Services for Contractors",
    metaDescription:
      "Submittal-ready shop and fabrication drawings — coordinated, spec-compliant and turned around on schedule so approvals do not stall your job.",
    heroSubhead:
      "Submittal-ready shop drawings, coordinated and compliant, without the backlog.",
    overview: [
      "Shop drawings gate the schedule. Until they are approved, fabrication and install wait. We produce submittal-ready shop and fabrication drawings that read cleanly, meet the spec, and get through review the first time.",
      "Drawings are coordinated against the contract documents and produced in your standard and title block. Whether it is a single submittal or a full package, they come back ready to submit.",
    ],
    whatsIncluded: [
      "Submittal-ready shop and fabrication drawings",
      "Coordination against the contract documents",
      "Drawings in your standard and title block",
      "Dimensioned details and schedules",
      "Native files plus submittal PDF sets",
      "Revisions on a clear turnaround",
    ],
    process: [
      {
        title: "Review the contract set",
        description:
          "We read the specs and drawings to build to the right requirements.",
      },
      {
        title: "Coordinate",
        description:
          "Details checked against the contract documents to prevent review comments.",
      },
      {
        title: "Produce the drawings",
        description:
          "Dimensioned, spec-compliant shop drawings drafted in your standard.",
      },
      {
        title: "Deliver for submittal",
        description:
          "Native files and submittal-ready PDFs delivered, revisions handled fast.",
      },
    ],
    faqs: [
      {
        question: "What trades do you produce shop drawings for?",
        answer:
          "Electrical, mechanical, plumbing and related trades. Tell us the scope and the contract set and we confirm before starting.",
      },
      {
        question: "Will the drawings match my title block and standards?",
        answer:
          "Yes. We draft in your CAD standard, layers and title block so the package looks like your shop produced it.",
      },
      {
        question: "How do you reduce review rejections?",
        answer:
          "By coordinating details against the contract documents before submittal and checking dimensions and schedules for consistency.",
      },
      {
        question: "How fast are revisions after review comments?",
        answer:
          "Review comments are turned around quickly on a stated timeline so an approval cycle does not stall your fabrication.",
      },
    ],
    relatedSlugs: ["drafting-services", "engineering-support", "electrical-wiring-estimating"],
    featured: true,
  },
  {
    slug: "residential-estimating",
    category: "By Sector",
    icon: "Home",
    title: "Residential Estimating",
    summary:
      "Custom homes, remodels and multifamily, estimated to the level of finish.",
    metaTitle: "Residential Construction Estimating",
    metaDescription:
      "Residential estimating for custom homes, remodels and multifamily — detailed takeoffs and current pricing tuned to the level of finish. Fast turnaround.",
    heroSubhead:
      "Custom homes to multifamily, estimated to the finish level the plans call for.",
    overview: [
      "Residential margins are thin and finishes swing the number. A custom home priced at builder-grade loses money; a spec home priced at custom-grade loses the bid. We estimate to the finish level the drawings and allowances actually call for.",
      "From a single-family remodel to a multifamily build, you get a detailed takeoff across all trades, current pricing and clear allowances so you and the owner see exactly what is included.",
    ],
    whatsIncluded: [
      "Takeoff across all residential trades",
      "Finish and allowance items broken out clearly",
      "Current material and labor pricing",
      "Waste and coverage factors applied",
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
        title: "Trade-by-trade takeoff",
        description:
          "Quantities counted across structure, systems and finishes.",
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
    relatedSlugs: ["commercial-estimating", "quantity-takeoffs", "outsourced-estimating"],
    featured: true,
  },
  {
    slug: "commercial-estimating",
    category: "By Sector",
    icon: "Building2",
    title: "Commercial Estimating",
    summary:
      "Offices, retail, fit-outs and mixed-use, estimated for competitive bids.",
    metaTitle: "Commercial Construction Estimating",
    metaDescription:
      "Commercial estimating for offices, retail, fit-outs and mixed-use — detailed multi-trade takeoffs and current pricing built to win competitive bids.",
    heroSubhead:
      "Offices, retail and fit-outs, estimated tight enough to win and hold margin.",
    overview: [
      "Commercial work is competitive and multi-trade, which is exactly where a rushed estimate leaks money. We build detailed, division-organized estimates for offices, retail, fit-outs and mixed-use so you can bid tight without bidding blind.",
      "Every trade is taken off from the drawings, priced current, and organized by CSI division so a project manager can review it fast. Assumptions and exclusions are written down so the bid holds up in a scope review.",
    ],
    whatsIncluded: [
      "Multi-trade takeoff organized by CSI division",
      "Current material and labor pricing",
      "General conditions and overhead structure",
      "Assumptions and exclusions stated clearly",
      "Editable workbook with formulas intact",
      "Color-coded plans and a bid proposal",
    ],
    process: [
      {
        title: "Review the bid set",
        description:
          "We read every sheet and the specs, flagging gaps and conflicts.",
      },
      {
        title: "Multi-trade takeoff",
        description:
          "Quantities counted by division so nothing falls between trades.",
      },
      {
        title: "Price and structure",
        description:
          "Materials and labor priced current, GCs and markup structured to your shop.",
      },
      {
        title: "Deliver the package",
        description:
          "An editable estimate and proposal delivered on your bid deadline.",
      },
    ],
    faqs: [
      {
        question: "Do you organize by CSI division?",
        answer:
          "Yes. Commercial estimates are organized by CSI MasterFormat division, or your internal structure if you prefer, for fast review.",
      },
      {
        question: "Can you cover all trades or just one?",
        answer:
          "Either. We can estimate a single trade package or the full multi-trade scope, whatever your bid requires.",
      },
      {
        question: "Do you include general conditions?",
        answer:
          "Yes. General conditions, overhead and markup are structured to your shop so the bottom line reflects how you actually run jobs.",
      },
      {
        question: "How do you handle addenda during a bid?",
        answer:
          "We track addenda and update the estimate through the bid period so the number you submit reflects the latest documents.",
      },
    ],
    relatedSlugs: ["outsourced-estimating", "residential-estimating", "industrial-estimating"],
    featured: true,
  },
  {
    slug: "industrial-estimating",
    category: "By Sector",
    icon: "Factory",
    title: "Industrial Estimating",
    summary:
      "Plants, warehouses and process facilities, estimated for scale and complexity.",
    metaTitle: "Industrial Construction Estimating",
    metaDescription:
      "Industrial estimating for plants, warehouses and process facilities — heavy electrical, distribution and controls scope quantified and priced for scale.",
    heroSubhead:
      "Plants, warehouses and process work, estimated for the scale it actually is.",
    overview: [
      "Industrial jobs carry heavy distribution, process and controls scope and long-lead equipment that dwarfs the labor. Getting the number right means quantifying the gear, the feeders and the controls carefully and flagging lead times early. We estimate to that scale.",
      "From a warehouse power build to a process facility, you get organized takeoffs across distribution, controls and supporting trades, priced current, with long-lead items and phasing called out so the bid and the schedule agree.",
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
          "Gear, feeders, controls and supporting trades quantified in detail.",
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
        question: "Can you handle large multi-trade industrial scope?",
        answer:
          "Yes. Distribution, controls, mechanical and supporting trades can be estimated together or as separate packages for a large facility.",
      },
      {
        question: "How do you treat long-lead equipment?",
        answer:
          "Long-lead gear like switchgear and transformers is flagged with lead times so procurement and the schedule reflect reality.",
      },
      {
        question: "Do you account for phasing?",
        answer:
          "Yes. Where a job is phased, we structure the estimate to match so costs align with how the work is actually built.",
      },
      {
        question: "Can you price from vendor quotes?",
        answer:
          "Yes. Where you have equipment quotes we build to them; otherwise we price from current supplier and manufacturer data.",
      },
    ],
    relatedSlugs: ["power-distribution-estimating", "instrumentation-controls-estimating", "commercial-estimating"],
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
