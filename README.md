# Noble Bidding

Marketing website for **Noble Bidding** — outsourced construction bidding and
cost-estimating services for U.S. contractors. Built with Next.js 14 (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

The site has one job: get a contractor to upload plans on `/get-quote`.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Requires Node 18.18+ (Node 20+ recommended).

---

## Editing content (no code required)

All site copy lives in typed data modules under [`src/content/`](src/content).
A non-developer can edit text there without touching any JSX:

| File | What it controls |
|------|------------------|
| `site.ts` | Company name, phone, email, address, socials, nav, global stats. **Start here** — every `FILL IN` placeholder lives in this file. |
| `services.ts` | All 13 services: copy, what's included, process, FAQs. Drives `/services` and every `/service/[slug]` page. |
| `projects.ts` | Portfolio projects (title, category, location, value, scope). |
| `testimonials.ts` | Client quotes. |
| `pricing.ts` | The three pricing tiers and pricing FAQ. |
| `posts.ts` | Blog articles (markdown body). |
| `home.ts` | Home-page-only copy: metrics band, why-us cards, process steps, deliverables. |

Files marked `TODO: replace with real data` contain placeholder factual claims
(testimonials, metrics, projects, team). Swap these for verified data before
launch.

---

## Environment variables

See [`.env.example`](.env.example). Summary:

| Var | Required | Purpose |
|-----|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical URLs, sitemap, Open Graph. |
| `RESEND_API_KEY` | no in dev | Delivers contact + quote emails. If unset, submissions are logged to the server console and still return success (development only). |
| `CONTACT_TO_EMAIL` | recommended | Inbox that form submissions go to. |
| `CONTACT_FROM_EMAIL` | recommended | Verified Resend sender address. |

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add the environment variables above in **Project Settings → Environment
   Variables**.
4. Deploy. The `sitemap.xml` and `robots.txt` are generated from the content
   modules automatically.

---

## Project structure

```
src/
  app/          route segments (App Router) + api routes, sitemap, robots
  components/
    layout/     Header, Footer, MobileNav, Container, Section
    ui/         Button, Card, Badge, Input, Select, Textarea, FileDrop, Counter, Eyebrow, Reveal
    sections/   one component per home-page section
  content/      all editable copy (see table above)
  lib/          utils, Zod schemas, metadata + JSON-LD helpers
```

---

## Placeholder imagery

Image slots reference files under `public/images/`. The build ships with inline
SVG placeholders via the `<Illustration />` component so nothing is broken out
of the box. Drop real assets into `public/images/` and update the `src` props
(all centralized where used) to go live.
