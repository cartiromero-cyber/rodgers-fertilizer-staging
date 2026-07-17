# Preliminary Redirect Registry (Phase 2M)

Path-level 301s are implemented in `next.config.mjs` (`redirects()`). Domain consolidation is a
hosting/DNS task. **Nothing launches to production until every meaningful legacy URL has a destination
or a documented disposition.**

## Implemented in next.config.mjs (301)
| From (legacy) | To (new) | Note |
|---|---|---|
| `/category/bush-hog-4-6ft-movers` | `/equipment/rotary-cutters` | Taxonomy fix (Movers→Rotary Cutters) |
| `/category/bush-hog-7-10ft-movers` | `/equipment/rotary-cutters` | " |
| `/category/bush-hog-12-20ft-movers` | `/equipment/rotary-cutters` | " |
| `/category/bush-hog-implements` | `/equipment/implements` | |
| `/category/bush-hog-hay-equipment` | `/equipment/hay-equipment` | verify legacy slug |
| `/category/farm-chemicals` | `/seed-farm-supplies/chemicals` | compliance-gated target |
| `/category/farm-parts` | `/parts` | |
| `/news/*` | `/resources` | |
| `/about-us` | `/about` | |
| `/contact-us` | `/contact` | |

## Deviations / decisions
- Phase 1 proposed width-specific targets (`/equipment/rotary-cutters/4-6-ft`). Those deep pages are a **P2**
  enhancement; to avoid redirecting to a 404, the three "Movers" URLs currently 301 to
  `/equipment/rotary-cutters`. Re-point once width sub-pages exist.

## Hosting-level (to configure at deploy)
- `rodgersfertilizerbushhog.com/*` → `https://www.rodgersfertilizer.com/` equivalent paths (301 at the
  edge / DNS). Consolidate to ONE primary domain.

## Still required before production (BLOCKED BY DATA)
- A full crawl/export of the legacy `/product/{id}/{slug}` catalog and the second domain to produce the
  **complete** per-URL 301 map (each SKU → its new `/{section}/{slug}`). This staging build ships the
  structure + the high-value redirects; the exhaustive map is generated from the CMS export.

## Phase 2.5 additions (discovered during content sweep)
- **Third legacy web property:** `hstrial-rodgersfertilize.homestead.com` (old Homestead trial site) — add a
  hosting/DNS 301 to the primary domain during consolidation.
- Additional legacy catalog URLs to map (examples; full list from CMS export):
  `/product/131/101010-premium`, `/product/3/oregon-ryegrass`, `/product/73/browntop-millet`,
  `/product/32/1006nt-great-plains-drill`, `/product/53/gates`, `/product/22/candor`,
  `/category/product-fertilizer` → `/fertilizer`.
- Product IDs observed range to at least **131**, so the live catalog holds ~100+ records — the complete
  per-SKU 301 map still requires a full crawl/CMS export (BLOCKED BY DATA).
