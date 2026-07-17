# Deploy to Vercel — step by step

This is a standard Next.js 14 app. Vercel auto-detects everything. Two ways to deploy;
pick ONE. Keep it on **staging** (noindex + test-only forms) until the owner approves.

--------------------------------------------------------------------
## Option A — GitHub + Vercel dashboard (recommended, no terminal)
--------------------------------------------------------------------
1. Unzip the project folder.
2. Create a new GitHub repo and upload the folder (drag-and-drop in GitHub's "add file → upload" works,
   or use GitHub Desktop). Commit.
3. Go to https://vercel.com → **Add New… → Project → Import** your repo.
4. Vercel detects Next.js — leave build settings at their defaults:
   - Framework: **Next.js**
   - Build command: `next build` (default)
   - Output: (leave default)
5. Before you click Deploy, open **Environment Variables** and add the ones in the table below.
6. Click **Deploy**. In ~1–2 minutes you get a URL like `https://rodgers-xxxx.vercel.app`.
7. Open it. If you set STAGING_USER/STAGING_PASS, the browser asks for that login first.
8. Send the URL (and the login, if set) to the client.

--------------------------------------------------------------------
## Option B — Vercel CLI (from the folder, terminal)
--------------------------------------------------------------------
```bash
cd rodgers-fertilizer-staging
npm install
npm run build            # optional but recommended: confirm it compiles
npm i -g vercel
vercel                   # first run: links/creates the project, then deploys a preview
# set env vars when prompted, or add them in the dashboard afterward, then:
vercel                   # deploy again to pick up env vars
```
Do NOT run `vercel --prod` yet — keep it on preview/staging until the owner approves.

--------------------------------------------------------------------
## Environment variables (set in Vercel → Settings → Environment Variables)
--------------------------------------------------------------------
| Key | Value (staging) | Why |
|-----|-----------------|-----|
| `NEXT_PUBLIC_SITE_ENV` | `staging` | noindex + staging banner + forms go to TEST only |
| `NEXT_PUBLIC_SITE_URL` | your Vercel URL, e.g. `https://rodgers-xxxx.vercel.app` | canonical URLs / sitemap (must be a full https URL) |
| `LEAD_TEST_INBOX` | your email, e.g. `you@youragency.com` | where test leads are addressed |
| `STAGING_USER` | e.g. `client` | *(optional)* password-protects the whole preview |
| `STAGING_PASS` | e.g. a shared password | *(optional)* the password |
| `EMAIL_API_KEY` | *(leave blank on staging)* | when blank, leads log to Vercel function logs instead of emailing |
| `NEXT_PUBLIC_GA4_ID` | *(leave blank on staging)* | analytics loads in production only |

After changing env vars, click **Redeploy** so they take effect.

--------------------------------------------------------------------
## Verify after deploy (2-minute check)
--------------------------------------------------------------------
- [ ] Home loads; the red "STAGING" banner shows at the top.
- [ ] Mobile: the sticky Call / Request-a-Quote bar appears at the bottom.
- [ ] Open `/request-a-quote` and submit the Fertilizer form → you see the success message.
      (The lead appears in Vercel → your project → **Logs** as a `[LEAD] {...}` entry with its
      classification — leadType, priority, valueBand, urgency.)
- [ ] Visit `/robots.txt` → it should **Disallow: /** (staging is not indexable). Good.
- [ ] Spot-check a few pages: `/fertilizer/custom-blends`, `/equipment/rotary-cutters`,
      `/resources`, `/resources/faq`, `/tools`, `/service-area/saluda-sc`.
- [ ] Old-URL redirect check: `/category/bush-hog-4-6ft-movers` should 301 to `/equipment/rotary-cutters`.

--------------------------------------------------------------------
## Where the test leads go
--------------------------------------------------------------------
On staging with no `EMAIL_API_KEY`, every form submission is written to the Vercel **function logs**
(Project → Logs) as a JSON `[LEAD]` object, including the auto-classification. No real customer email is
sent. To actually email leads, add an `EMAIL_API_KEY` (e.g. Resend/Postmark) and wire the provider in
`app/api/lead/route.ts` (a TODO is marked there) — do this with owner-approved recipients only.

--------------------------------------------------------------------
## Going to production later (only after owner approval)
--------------------------------------------------------------------
1. Clear the publication gates (see docs/STAGING-BUILD-REPORT.md) and install the real logo + photos.
2. Set `NEXT_PUBLIC_SITE_ENV=production`, real `NEXT_PUBLIC_SITE_URL` (the live domain), GA4/GSC/Bing IDs,
   and the email provider + owner-approved lead recipients. Remove STAGING_USER/PASS.
3. In `next.config.mjs`, consider turning `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds`
   back to `false` after a clean local `npm run build`.
4. Configure the domain 301s (second domain + Homestead) and the full per-SKU redirect map.
5. `vercel --prod` (or set the production domain in the dashboard).
