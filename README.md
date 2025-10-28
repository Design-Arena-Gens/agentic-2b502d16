# VyaparTech Marketing Site

VyaparTech is an India-based digital agency helping SMEs accelerate revenue through sales enablement, performance marketing, SEO, and web experience design. This repository contains the production-ready marketing site with pre-rendered pages, structured data, Core Web Vitals budgets, and supporting tooling.

## Tech Stack

- [Next.js 14](https://nextjs.org/) App Router with server components and static prerendering
- TypeScript, modular CSS, and lightweight React client components for progressive enhancement
- JSON-LD structured data for Organization, LocalBusiness, Article, FAQ, and Service schemas
- Node-based scripts for IndexNow pings and Gemini-powered blog generation
- Jest + Testing Library for component regression

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Copy environment variables**
   ```bash
   cp .env.example .env.local
   ```
   - `NEXT_PUBLIC_SITE_URL` — canonical domain (defaults to `https://vyapartech.in`).
   - `INDEXNOW_KEY` — IndexNow API key (required for `npm run indexnow:ping`).
   - `INDEXNOW_ENABLED` — toggle pings per environment (`true`/`false`).
   - `GEMINI_API_KEY` — Google Generative AI key for the blog CLI.
3. **Run locally**
   ```bash
   npm run dev
   ```
   Visit [`http://localhost:3000`](http://localhost:3000).

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build (SSG/SSR) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint checks |
| `npm run typecheck` | TypeScript diagnostics |
| `npm run test` | Jest unit tests |
| `npm run analyze:vitals` | Lighthouse performance audit using `performance-budgets.json` |
| `npm run indexnow:ping` | Submit sitemap URLs to IndexNow with logging + retry |
| `npm run blog:generate -- --topic="..."` | Generate an editorial briefing draft via Gemini |

## Site Architecture

- Marketing pages: Home, Services (with dynamic service detail pages), Case Studies, About, Team, Blog, Pricing, FAQs, Contact, Careers, Legal (Privacy & Terms).
- Structured data is embedded per page to align with Google’s Search appearance guidelines.
- `public/` holds the logo suite, favicons, social preview, and manifest.
- `docs/brand-guidelines.md` documents the design system, motion tokens, Core Web Vitals budgets, and citation references.

## SEO & Structured Data

- Global Organization + LocalBusiness JSON-LD is injected via `app/layout.tsx` referencing canonical logos, NAP, and service areas.
- Service pages output `Service` + `FAQPage` markup; blog posts output `Article` (and optional FAQ) markup.
- Public endpoints:
  - `robots.txt` — allows all crawlers and links to the sitemap.
  - `sitemap.xml` — generated from static routes, services, and blog posts.
- Canonical URLs use `NEXT_PUBLIC_SITE_URL`. Update this env var before deploying to custom domains.

### Search Console & Recrawl Workflow

1. Verify your property in Google Search Console (recommended: DNS TXT record).
2. Submit `https://<domain>/sitemap.xml` and monitor coverage.
3. For major launches, trigger URL Inspection → “Request Indexing” on priority pages.
4. Record change reasons in Search Console annotations (e.g., new service page, refreshed case study).

## Performance Budgets & Core Web Vitals

- Budgets: LCP ≤ 1.8s, INP ≤ 200ms, CLS ≤ 0.05, Total Blocking Time ≤ 100ms.
- Critical CSS is inlined; non-essential scripts are deferred; media uses responsive dimensions to prevent CLS.
- Run Lighthouse locally against the production build:
  ```bash
  npm run build
  npm run start
  npm run analyze:vitals
  ```
  Review the generated report and ensure budgets in `performance-budgets.json` remain green. Investigate regressions with Chrome DevTools Performance/INP panels.

## IndexNow Integration

1. Generate a 32-character key and host it at the web root (e.g., `public/YOURKEY.txt`).
2. Set `INDEXNOW_KEY`, `INDEXNOW_KEY_LOCATION`, and `INDEXNOW_ENABLED` in `.env.local`.
3. Run pings after deployments or sitemap updates:
   ```bash
   npm run indexnow:ping
   ```
   - Retries automatically on 429/5xx responses.
   - Logs are appended to `logs/indexnow.log` for QA visibility.
4. CI/CD tip: wire the script into deployment pipelines post-successful build.

## Blog Generation Workflow (Human-in-the-loop)

1. Provide a topic and optional audience:
   ```bash
   npm run blog:generate -- --topic="AI Overviews for manufacturing SMEs"
   ```
2. The CLI requests a structured JSON draft from Gemini Flash, enforcing:
   - Title, slug, summary, section bodies
   - Key takeaways, citations (≥2 recent trusted sources)
   - Suggested FAQs
3. Review the JSON draft in `content/blog/drafts/`:
   - Fact-check all citations.
   - Ensure originality and people-first value.
   - Convert to Markdown (`content/blog/*.md`) only after human approval.
4. Update Article + FAQ structured data when publishing new posts.

## Editorial Quality Checklist

- Follow Google’s March 2024 helpful content + spam guidance (no scaled/unoriginal text, no keyword stuffing).
- Cite authoritative 2023–2024 sources (government, trade bodies, reputable publications) for statistics.
- Validate structured data via [Rich Results Test](https://search.google.com/test/rich-results) before publishing.
- Capture reviewer sign-off (subject-matter expert, editor, compliance) per deliverable.

## Local & Reviews Governance

- Consistent NAP and hours: `VyaparTech Digital Private Limited`, `+91-804-123-7780`, `2nd Floor, SJR Primus, 100 Feet Road, Koramangala, Bengaluru, Karnataka 560034`, Mon–Fri 09:30–18:30 IST.
- GBP naming follows real-world brand (no keyword stuffing). Reference instructions during onboarding.
- Review collection: invite feedback post-delivery, no incentives, no gating. Contact page documents the workflow.

## Testing & Verification

Run before deployment:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Manual QA:

- Spot-check pages in desktop + mobile viewports.
- Confirm structured data via Rich Results Test for Home, each Service, Pricing, FAQ, and Blog posts.
- Validate Lighthouse scores meet budgets (esp. INP) and no CLS spikes.

## Deployment (Vercel)

1. Build locally to confirm:
   ```bash
   npm run build
   ```
2. Deploy to Vercel (token-based CLI):
   ```bash
   vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-2b502d16
   ```
3. After deployment, verify DNS propagation:
   ```bash
   curl https://agentic-2b502d16.vercel.app
   ```
4. Once a custom domain (e.g., `vyapartech.in`) is attached, update `NEXT_PUBLIC_SITE_URL` and re-run `npm run indexnow:ping`.

## Citations & Research

- Google Search Central (March 2024 core & spam update) — helpful content & quality systems guidance.
- Vercel: “Optimizing Core Web Vitals in 2024” — INP performance tactics.
- Smashing Magazine: “F-Shape Pattern And How Users Read” (Apr 2024) — layout & scanning behaviour.
- BrightEdge AI Overview research (2024) — AI search prominence and citation overlap.
- MyStudio GBP optimization guide (2024) — naming and review compliance.

## Support & Next Steps

- Follow the editorial & performance checklists before publishing new content.
- Keep `performance-budgets.json` and `docs/brand-guidelines.md` updated as the design system evolves.
- Track Search Console performance, AI Overview citations, and IndexNow logs to inform ongoing improvements.