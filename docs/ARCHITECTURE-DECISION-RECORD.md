# ADR-001 — Rodgers Fertilizer commercial rebuild

## Status
Accepted for the GO-NOW staging build (Phase 2).

## Context (repository & environment audit)
The current public presence is **two separate websites**:
- `rodgersfertilizer.com` — database-driven site builder. URLs: `/`, `/about-us`, `/contact-us`,
  `/category/{slug}` (incl. the mislabeled `bush-hog-4-6ft-movers`…), `/product/{id}/{slug}`
  (sequential IDs — a real catalog), `/news/{id}/{slug}` (stale, 2020–2021).
- `rodgersfertilizerbushhog.com` — a parallel site (`/`, `/products`, `/contact`).

Observed constraints:
- **Subpages render client-side** — a plain fetch of category/product/about/contact returns near-empty
  HTML. This is the core SEO/crawlability defect to fix.
- Catalog exists but is exposed thinly and with taxonomy errors ("Movers").
- No commercial lead system; NAP/hours inconsistent across directories; presence split across two domains.
- Brands verified: **Bush Hog** (authorized dealer) and **Great Plains**.

Options considered:
1. **Refactor the existing site builder** — rejected: limited control over SSR, schema, redirects, forms,
   and catalog modeling.
2. **Incremental rebuild in place** — rejected: same platform ceiling; risk to the live site.
3. **New server-rendered application + 301 the legacy URLs** — **chosen**.

## Decision
Build a new **Next.js 14 (App Router, React Server Components)** application, TypeScript, server-rendered
by default. Rationale maps to the required outcomes:
- **Server-rendered crawlable HTML** — RSC/SSG output ships real HTML (fixes the empty-render defect).
- **Strong SEO** — per-route metadata, JSON-LD (Organization/LocalBusiness/Service/Product/Breadcrumb/FAQ),
  sitemap/robots, canonicals.
- **Fast rural mobile** — minimal client JS (only nav, forms, analytics are client components).
- **Owner-editable catalog** — file-based typed content now (`/content/*`), with a documented path to a
  headless CMS; a CSV import format ships for SKU migration.
- **Reliable forms** — six purpose-built workflows via a single Route Handler (`/api/lead`), test-only on staging.
- **Simple maintenance & scalable taxonomy** — data-driven pages: one `CommercialPage` template renders every
  Tier-1/equipment/seed leaf from `content/pages.ts`.

Alternative noted for the record: **Astro** would also satisfy SSR/SEO; Next was chosen for RSC, the
route-handler form API, and one-click staging deploys (Vercel) with `NEXT_PUBLIC_SITE_ENV` gating.

## Consequences
- Legacy URLs must be 301-mapped (see `redirect-registry.md`); the second domain consolidates via
  hosting-level redirect.
- Content is versioned in the repo now; a CMS can be layered later without changing the page templates.
- Staging is `noindex` and routes forms to a test inbox; production indexability and live routing flip only
  after owner approval.
