# UI/UX Motion & Visual Enhancement Pass

Restrained, purposeful motion + custom graphics layered onto the **approved** design.
No redesign: same layout, palette, typography, hierarchy, nav, content, CTAs, and forms.
CSS-first, server-rendering preserved, no heavy libraries added, reduced-motion respected,
content always visible without JS.

## 1. Motion design system (tokens)
Defined in `app/globals.css` (`:root`):
- Durations: `--dur-fast: 150ms`, `--dur-std: 280ms`, `--dur-slow: 520ms`
- Easings: `--ease-enter` (spring-out), `--ease-exit`, `--ease-spring` (small emphasis only)
- Keyframes: `rfUp` (fade + 16px rise), `rfPop` (emphasis pop), `rfDraw` (SVG line draw)

## 2. Reveal engine (SSR-safe)
`components/Reveal.tsx` — one small client component mounted once in the layout.
- Uses Intersection Observer; adds `.in` as elements enter the viewport (once).
- Only adds `html.reveal-on` (which enables the hidden initial state in CSS) **when motion is
  allowed**. So with JS disabled or under `prefers-reduced-motion: reduce`, everything is visible
  immediately — no hidden content, no SEO impact.
- Re-scans on route change so client-navigated pages reveal correctly.
- Reveals: section `h2` headings, `.grid > .card`, trust items, quote banners, the process strip.

## 3. Component enhancements (implemented)
| Component | Enhancement |
|---|---|
| Buttons (`.btn`) | Hover lift, press compression (scale .985), gold/green hover glow, focus preserved |
| Cards (`.card--link`) | Elevation + shadow on hover, border-color transition, `card-cta` arrow nudge, focus-within |
| Header | Soft shadow + slight height reduction after scroll; **active-nav underline** via `usePathname` |
| Hero | Staggered entrance (eyebrow → headline → copy → CTAs → graphic); headline not delayed |
| Hero graphic | New `HeroGraphic.tsx` — a subtle **Blend → Bag → Pallet → Truck → Field** line diagram; the connecting line draws once on load |
| Capability strip | Custom line icons (blend/bulk/bag/pallet/tote/truck/spreader), entrance stagger, **mobile horizontal scroll-snap** (pills) |
| Buyer pathway cards | Hover elevation + arrow movement + staggered reveal (via reveal engine) |
| Process strip | Connecting line that **draws once** when the section enters view; number-circle pop on hover |
| Success state | Animated green **checkmark** on form success (`.form-status--ok`) |

## 4. Custom graphics system
`components/Icons.tsx` — minimal, brand-colored, `currentColor` line icons (server-rendered,
lightweight): blend, bulk, bag, pallet, tote, flatbed truck, spreader. `capIconName(label)` maps a
capability label to the right icon. `HeroGraphic.tsx` is the hero capabilities diagram. These are
graphics where photography isn't available yet — owner photos can complement/replace them later.

## 5. Accessibility
- Full `@media (prefers-reduced-motion: reduce)` block: disables reveals, line-drawing, and entrance
  animations; forces all content visible; no transforms.
- Keyboard focus states preserved (`:focus-visible` gold ring, `focus-within` on cards).
- Active nav exposes `aria-current="page"`. Hero graphic has `role="img"` + `aria-label`.
- No flashing, no autoplay sound, no scroll-hijacking, no parallax.

## 6. Performance
- Pure CSS transitions/keyframes + **one** Intersection Observer; **no animation library added**.
- Only Reveal and Header are client components; every page stays server-rendered.
- Transforms/opacity only (no layout animation); stable dimensions → no layout shift.
- Inline SVGs (tiny), no extra network requests, no large JS.

## 7. Files changed / added
Added: `components/Reveal.tsx`, `components/Icons.tsx`, `components/HeroGraphic.tsx`, this doc.
Edited: `app/globals.css` (motion system), `app/layout.tsx` (mount Reveal),
`components/Header.tsx` (scroll + active nav), `components/CapabilityBand.tsx` (icons),
`components/Hero.tsx` (hero graphic).

## 8. Mapped next (P2–P3, not yet implemented — safe to add incrementally)
- Commercial-page graphics: N-P-K blocks, packaging comparison, pickup-vs-delivery, HP→cutter-width
  guide, parts "what to have ready" checklist (reuse `Icons.tsx`).
- Optional multi-step transitions for the long forms (fertilizer/delivery/equipment/commercial) —
  keep quick reorder + parts fast.
- Count-up stat for "since 1976" (a `CountUp` primitive) in the trust band.

## 9. Known notes
- Above-the-fold cards on interior pages fade in on load (gentle, ~280ms); disabled under reduced motion.
- Not build-verified in the authoring environment (macOS toolchain) — run `npm run build` locally/on
  Vercel; the changes are standard CSS + small client components.
