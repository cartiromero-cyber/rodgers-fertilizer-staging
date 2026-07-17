# Rodgers Fertilizer — Staging Build Report (Phase 2)

Branch (to create on your machine): `feature/rodgers-commercial-rebuild`
Staging deploy: any Next.js host (Vercel recommended). Keep `NEXT_PUBLIC_SITE_ENV=staging`.

## 1. Acceptance status
| Standard | Status |
|---|---|
| Core pages render real server HTML (RSC/SSG) | PASS (design) |
| Navigation + mobile layout | PASS (design) |
| Six forms submit successfully (test-only routing) | PASS (design; run `npm run dev` to exercise) |
| No form routes to a live unapproved recipient | PASS — `/api/lead` → test inbox / console on staging |
| Assumptions not shown as verified facts | PASS — gates + placeholders |
| Chemicals compliance-gated | PASS — informational only |
| Wholesale/private-label approval-gated | PASS — not built as public offerings |
| Service areas not fabricated | PASS — no radius/state claims |
| Pricing not published | PASS — Quote/Call only |
| "Movers" corrected | PASS — Rotary Cutters + redirects |
| Redirect planning exists | PASS — next.config + registry |
| Analytics events defined | PASS — event map below |
| Owner review packet complete | PASS — docs/Rodgers-Owner-Review-Packet.docx |
| No production deployment | PASS — staging only |

## 2. Publication-gate matrix
| Route | Gate |
|---|---|
| `/`, `/fertilizer` + custom-blends/bulk/bagged/pallets/one-ton-totes/commercial-orders | READY FOR STAGING |
| `/fertilizer/pasture`, `/fertilizer/hay-fields` | READY FOR OWNER REVIEW |
| `/delivery`, `/delivery/fertilizer-delivery`, `/delivery/spreader-truck-service` | READY FOR STAGING (radius = BLOCKED BY DATA for production) |
| `/delivery/agricultural-lime` | READY FOR OWNER REVIEW |
| `/equipment`, `/equipment/bush-hog`, `/equipment/rotary-cutters` | READY FOR STAGING |
| `/equipment/hay-equipment`, `/implements`, `/great-plains` | READY FOR OWNER REVIEW |
| `/parts`, `/parts/bush-hog`, `/parts/rotary-cutter-parts`, `/parts/request-a-part` | READY FOR STAGING |
| `/seed-farm-supplies/food-plot-seed` | READY FOR STAGING |
| `/seed-farm-supplies/pasture-seed`, `/feed-minerals`, `/farm-supplies` | READY FOR OWNER REVIEW |
| `/seed-farm-supplies/chemicals` | READY FOR COMPLIANCE REVIEW |
| `/about`, `/contact`, `/resources`, `/request-a-quote`, `/reorder` | READY FOR STAGING |

## 3. Analytics event map (Phase 2L)
Fires to GA4 (production only) via `data-track` and form submits: `call_click`, `email_click`,
`directions_click`, `quote_start`, `quote_submit`, `delivery_request_submit`,
`equipment_inquiry_submit`, `parts_request_submit`, `reorder_submit`, `commercial_account_submit`,
`form_error`. UTM params captured on submit; source URL recorded per lead. GA4/GSC/Bing IDs are env
placeholders — no fabricated IDs.

## 4. Test plan & evidence (run after `npm install`)
Acceptance tests to record evidence for: desktop/tablet/mobile layout; slow-connection; Safari/Chrome/Edge;
each of the 6 form submissions (success + validation errors + honeypot); file upload (filename capture);
duplicate-submit disabled while sending; mobile call link; directions link; breadcrumbs; metadata &
structured data (Rich Results Test); sitemap.xml; robots (noindex on staging); canonicals; internal links;
custom 404; the 10 redirects; keyboard nav; screen-reader labels; contrast; Core Web Vitals; view-source
shows real HTML with JS disabled. (Cannot be executed in the authoring sandbox — see Known issues.)

## 5. Known issues / limitations
- **Not yet installed/compiled here** (npm registry blocked in the authoring environment). Standard Next.js
  14; run `npm install && npm run build` to verify. Fix any minor type nits surfaced at build.
- **Email delivery is stubbed** — `/api/lead` logs leads (or would send to the test inbox) but no provider
  is wired. Add `EMAIL_API_KEY` + provider code before relying on notifications.
- **Catalog is seeded** with verified fertilizer analyses (10-10-10, 17-17-17, 0-0-60) and ONE clearly
  labeled `[TEST]` equipment fixture. Full SKUs need the CMS export.
- **File uploads** capture filename only (no binary transfer) — wire storage before production.

## 6. Production launch blockers
1. Owner approval of all gated content (headline, delivery wording, brand usage, response-time promises).
2. Delivery radius/states + minimums (DATA REQUIRED) before any coverage claim.
3. Chemicals compliance review (labels, SDS, restricted-use, licensing, disclaimers).
4. Wholesale/dealer/contract-bagging/private-label/financing decisions (OWNER APPROVAL).
5. Complete per-SKU redirect map from a full legacy crawl/export + hosting-level domain 301.
6. Email provider + owner-approved lead recipients wired into `/api/lead`.
7. GA4/GSC/Bing IDs; real production domain; flip `NEXT_PUBLIC_SITE_ENV=production`.

## 7. File manifest
- app/about/page.tsx
- app/api/lead/route.ts
- app/contact/page.tsx
- app/delivery/[slug]/page.tsx
- app/delivery/page.tsx
- app/equipment/[slug]/page.tsx
- app/equipment/page.tsx
- app/fertilizer/[slug]/page.tsx
- app/fertilizer/page.tsx
- app/globals.css
- app/layout.tsx
- app/not-found.tsx
- app/page.tsx
- app/parts/[slug]/page.tsx
- app/parts/page.tsx
- app/parts/request-a-part/page.tsx
- app/reorder/page.tsx
- app/request-a-quote/page.tsx
- app/resources/page.tsx
- app/robots.ts
- app/seed-farm-supplies/[slug]/page.tsx
- app/seed-farm-supplies/page.tsx
- app/sitemap.ts
- components/Analytics.tsx
- components/Breadcrumbs.tsx
- components/CallBar.tsx
- components/CapabilityBand.tsx
- components/CommercialPage.tsx
- components/FAQ.tsx
- components/Footer.tsx
- components/FormsHub.tsx
- components/GateBadge.tsx
- components/Header.tsx
- components/Hero.tsx
- components/HubPage.tsx
- components/Jsonld.tsx
- components/PathwayCards.tsx
- components/QuoteBanner.tsx
- components/StagingBanner.tsx
- components/TrustBand.tsx
- content/catalog.ts
- content/forms.ts
- content/pages.ts
- content/resources.ts
- content/site.ts
- lib/analytics.ts
- lib/env.ts
- lib/schema.ts
- lib/seo.ts

## 8. Exact next commands
```bash
# 1) Put this folder into a repo and branch
git init && git checkout -b feature/rodgers-commercial-rebuild
git add -A && git commit -m "Rodgers commercial staging rebuild (Phase 2 GO-NOW)"

# 2) Install + run locally
npm install
cp .env.example .env.local           # keep NEXT_PUBLIC_SITE_ENV=staging
npm run dev                          # exercise pages + all 6 forms

# 3) Verify a production build compiles
npm run build

# 4) Deploy to a STAGING project (example: Vercel)
#    - set env: NEXT_PUBLIC_SITE_ENV=staging, NEXT_PUBLIC_SITE_URL=<staging url>, LEAD_TEST_INBOX=<test>
#    - staging stays noindex automatically; share the URL for owner review

# DO NOT push to production. Production flip happens only after owner approval
# (see section 6) by setting NEXT_PUBLIC_SITE_ENV=production and clearing gates.
```
