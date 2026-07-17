# Rodgers Fertilizer — Commercial Staging Rebuild

Server-rendered Next.js 14 (App Router, TypeScript) staging site. GO-NOW scope from Phase 2.
**Staging only — do not deploy to production without owner approval of gated content.**

## Run locally
```bash
npm install
cp .env.example .env.local     # keep NEXT_PUBLIC_SITE_ENV=staging
npm run dev                    # http://localhost:3000
```
Production build: `npm run build && npm run start`.

> The environment this was authored in cannot reach the npm registry, so the project was written but not
> installed/compiled here. It is standard Next.js 14 — `npm install` then `npm run dev` locally.

## Guardrails baked in
- `NEXT_PUBLIC_SITE_ENV=staging` ⇒ site is `noindex` (robots + meta), shows a staging banner, and all six
  forms POST to `/api/lead` which routes to a **test inbox only** (logs to console if no email key).
- Publication gates render as internal-only badges on staging (hidden in production).
- No pricing, no delivery radius/state claims, no fabricated inventory/testimonials/brands.
- Chemicals page is compliance-gated (informational only, no product listings).
- Legacy "Movers" terminology corrected to "Rotary Cutters" + redirects.

## Structure
- `content/` — editable data: `site.ts` (NAP/nav), `pages.ts` (all commercial pages), `forms.ts` (6 forms),
  `catalog.ts` (catalog model + import format), `resources.ts`.
- `components/` — reusable UI (header, call bar, footer, hero, cards, forms hub, schema, gate badge…).
- `app/` — routes (server-rendered). Section hubs + `[slug]` dynamic leaves + form pages + api/lead.
- `docs/` — ADR, redirect registry, build report, owner packet.

## Going to production (after owner approval)
1. Set `NEXT_PUBLIC_SITE_ENV=production`, real `NEXT_PUBLIC_SITE_URL`, GA4/GSC/Bing IDs.
2. Wire `EMAIL_API_KEY` + approved recipients in `/api/lead`.
3. Clear all publication gates (see docs/STAGING-BUILD-REPORT.md).
4. Configure the hosting-level domain 301 and complete the per-SKU redirect map.
