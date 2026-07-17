# Sending the client a full functional preview

The static `rodgers-preview.html` only shows the look. To let the client click through a **working**
site (all pages + the six forms), deploy this Next.js app to a staging host and share the URL.

## Recommended: Vercel (free, made by the Next.js team)
1. Put this folder in a Git repo (GitHub/GitLab) — or use Vercel's drag-and-drop / CLI.
   - CLI: `npm i -g vercel` then run `vercel` in this folder and follow prompts.
2. In the Vercel project → **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_ENV = staging`  (keeps the site `noindex` + banner + test-only forms)
   - `NEXT_PUBLIC_SITE_URL = https://<your-project>.vercel.app`
   - `LEAD_TEST_INBOX = you@youragency.com`
   - `STAGING_USER` and `STAGING_PASS`  (optional — password-protects the whole preview)
   - (leave GA4/email keys blank for staging)
3. Deploy. You get a link like `https://rodgers-staging.vercel.app` — send that to the client.
   - If you set STAGING_USER/PASS, the browser asks for the login first (share it with the client).

That's it. The client sees the full site, can submit every form (routed to your test inbox / server
logs — never to their live workflow), and search engines are blocked because staging is `noindex`.

## Alternatives
- **Netlify** or **Cloudflare Pages** — same idea (connect repo, set the same env vars). Both run Next.js.
- **Render / Railway** — Node hosts; set env vars, build command `npm run build`, start `npm run start`.

## Notes for the client preview
- **Forms:** on staging they submit successfully and route to your test inbox only. To actually receive
  the test emails, add an `EMAIL_API_KEY` (e.g. Resend/Postmark) and wire it in `app/api/lead/route.ts`;
  otherwise submissions are logged server-side (visible in the host's function logs).
- **Not indexed:** staging returns `noindex, nofollow` and `robots: disallow /` automatically — Google
  won't find it, so the client's real site/SEO is unaffected.
- **Custom staging domain (optional):** you can attach e.g. `preview.rodgersfertilizer.com` in the host's
  domain settings for a more branded link — still noindex while `NEXT_PUBLIC_SITE_ENV=staging`.

## Going to production later
Only after the client approves the Owner Review Packet: flip `NEXT_PUBLIC_SITE_ENV=production`, remove
STAGING_USER/PASS, add real GA4/GSC/Bing IDs + email recipients, clear the publication gates, and set up
the domain 301s (see redirect-registry.md).
