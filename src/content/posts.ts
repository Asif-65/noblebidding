/**
 * Blog posts. Drives /blogs and /blogs/[slug]. Bodies are Markdown strings
 * rendered with prose styles and GitHub-flavored markdown (tables, lists).
 *
 * Reading time is computed from the body at render — no need to set it here.
 * Author defaults to the team so no real person is attributed by mistake.
 */

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** Optional cover image under /public/images. Omit for a branded placeholder. */
  image?: string;
  /** Attribution line, required when the image's license mandates credit (e.g. CC BY-SA). Omit for public-domain/CC0 images. */
  imageCredit?: string;
  featured?: boolean;
  body: string;
}

export const postCategories = ["All", "Estimating", "Bidding", "Electrical", "Business"];

export const posts: Post[] = [
  {
    slug: "why-contractors-lose-bids-to-slow-estimating",
    title: "Why contractors lose bids to slow estimating",
    excerpt:
      "The bottleneck is rarely price. It is the number of bids you can turn around before the deadline. Here is how estimating capacity decides win rate.",
    category: "Bidding",
    author: "Noble Bidding Team",
    date: "2025-03-04",
    image: "/images/blog/why-contractors-lose-bids.jpg",
    featured: true,
    body: `Most contractors think they lose bids on price. Look closer and the real loss is upstream: the bids that never got submitted because estimating could not turn them around in time.

## The math of a bottleneck

Say your win rate is one in five. To land two jobs a month, you need to submit ten bids. If your estimating capacity tops out at six, you are not bidding your way to two jobs. You are bidding your way to a bit over one, and hoping.

The fix is not a better close rate. It is more shots on goal. Every bid you cannot produce is a job you already lost, quietly, before a competitor ever undercut you.

## Where the time actually goes

A competitive estimate is mostly counting and pricing:

- Reading the drawings and specs
- Taking off quantities line by line
- Pricing materials against current data
- Loading labor at your crew rates
- Writing up assumptions and exclusions

None of it is optional, and none of it compresses well when a project manager is also running three active jobs. That is why estimating is the first thing to slip when the pipeline gets busy — exactly when you can least afford it.

## Capacity you can turn on

Outsourced estimating exists to break that ceiling. You keep the relationships and the pricing strategy; you hand off the takeoffs and the math. When five bids land in one week, capacity scales to meet them instead of forcing you to pick which two to chase.

The result is simple: you submit every bid worth submitting, and your win rate finally gets to work on a full pipeline instead of a throttled one.`,
  },
  {
    slug: "what-a-good-takeoff-actually-includes",
    title: "What a good takeoff actually includes",
    excerpt:
      "A takeoff is more than a count. Here is what separates a number you can bid on from a guess dressed up in a spreadsheet.",
    category: "Estimating",
    author: "Noble Bidding Team",
    date: "2025-02-18",
    image: "/images/blog/what-a-good-takeoff-includes.jpg",
    imageCredit: "Photo: Mtpanchal, Wikimedia Commons, CC BY-SA 4.0",
    body: `Two estimators can take off the same set of drawings and land a hundred thousand dollars apart. The difference is rarely arithmetic. It is what got counted, how, and what got written down.

## Counted, not scaled

A real takeoff measures every quantity against the drawing. Lengths, areas and counts come off the sheets at the drawing scale, calibrated to a known dimension. The moment an estimator starts scaling by rule of thumb — "call it a buck a foot" — the number stops being defensible.

## Organized so it can be reviewed

Quantities belong in a structure someone can audit:

- Grouped by trade or CSI division
- Assemblies broken out so nothing double-counts
- Waste and coverage factors applied and visible
- Tied back to a spot on the drawing

If a project manager cannot trace a line item to a location on the plan, the takeoff is a black box, and black boxes lose scope reviews.

## Assumptions on the page

Every estimate carries assumptions. The good ones write them down. What is included, what is excluded, what allowance was carried, what the drawings left unclear. Those notes are not paperwork. They are the difference between a change order you get paid for and one you eat.

## The deliverable

A takeoff you can bid on comes back as an editable sheet with the plan markups attached. You can see what was counted, adjust it, and drop your own pricing or markup on top. Anything less is a number you are trusting on faith.`,
  },
  {
    slug: "reading-a-panel-schedule-before-you-bid",
    title: "Reading a panel schedule before you bid electrical",
    excerpt:
      "The panel schedule is where electrical bids leak margin. A quick discipline for catching what the branch takeoff misses.",
    category: "Electrical",
    author: "Noble Bidding Team",
    date: "2025-01-27",
    image: "/images/blog/reading-a-panel-schedule.jpg",
    body: `On an electrical bid, the branch wiring gets all the attention and the panel schedule gets a glance. That is backwards. The schedule is where the expensive mistakes hide.

## Start at the schedule, not the plan

Before counting a single device, read the panel schedules and the one-line together. They tell you the gear, the feeders, and the loads the branch work has to support. Miss a subpanel here and no amount of careful device counting saves the number.

## What to check

Run the same short list on every schedule:

1. Every panel on the one-line has a schedule, and vice versa
2. Feeder sizes match between the schedule and the one-line
3. Spare and space breakers are accounted for, not ignored
4. Long-lead gear is flagged for procurement
5. Loads reconcile with the connected equipment

## Feeders are real money

Feeder conduit and conductor runs carry serious material and labor, and they are easy to under-run when you estimate them off a plan instead of the schedule. Take the feeders from the schedule and the one-line, measure the runs against the drawing, and price the wire current. Copper moves.

## The payoff

An electrical estimate that starts at the schedule catches the gear and the feeders first, then fills in the branch work. Do it the other way and you find the missing subpanel after you have already submitted.`,
  },
  {
    slug: "in-house-estimator-versus-outsourcing",
    title: "In-house estimator versus outsourcing: the real numbers",
    excerpt:
      "A full-time estimator is a fixed cost whether or not the pipeline is full. Here is how to think about the trade honestly.",
    category: "Business",
    author: "Noble Bidding Team",
    date: "2025-01-09",
    image: "/images/blog/in-house-estimator-versus-outsourcing.jpg",
    body: `Hiring an estimator feels like the obvious move once bidding becomes a bottleneck. Sometimes it is. Often the numbers say otherwise, and it is worth doing the arithmetic before you post the job.

## The fixed-cost problem

A senior estimator is a six-figure salary before benefits, software, and overhead. That cost lands every month, full pipeline or empty. In a busy stretch it is a bargain. In a slow quarter it is a fixed drain you cannot switch off, and construction pipelines are not smooth.

## What you actually need

Be honest about your bid volume. Count the bids you submitted last year, and the ones you skipped because there was no time. If the real, steady demand keeps a full-time estimator busy, hire one. If it swings — heavy some months, light others — a fixed cost is the wrong shape for a variable need.

## The outsourced shape

Outsourced estimating turns that fixed cost into a variable one. You pay per bid, so:

- Busy months scale up without new headcount
- Slow months cost nothing sitting idle
- Capacity is there for the week five bids land at once

## A hybrid is common

Plenty of shops run both: a lead estimator who owns strategy and relationships, plus outsourced capacity for overflow and takeoffs. The lead stops drowning in counts, and the pipeline stops setting the ceiling. The point is not that one model always wins. It is that a fixed cost should match a fixed need — and bidding rarely is one.`,
  },
];

export const postBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const featuredPost = (): Post => posts.find((p) => p.featured) ?? posts[0]!;

export const postsByCategory = (category: string): Post[] =>
  category === "All" ? posts : posts.filter((p) => p.category === category);
