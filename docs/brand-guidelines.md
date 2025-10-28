## VyaparTech Brand Guidelines

### 1. Brand Essence

- **Mission:** Empower India’s SMEs with revenue-centric sales, marketing, and web experiences that compound growth.
- **Value Proposition:** Full-funnel revenue operations, performance marketing, SEO, and web design delivered with measurable ROI and governance.
- **Voice:** Pragmatic, data-backed, empathetic to SME constraints, and action-oriented.

### 2. Logo System

- **Primary Logo:** `/logo.svg` (logomark + wordmark). Use on light or neutral backgrounds with 16px padding.
- **Logomark:** `/logomark.svg` for avatars or favicons ≥64px.
- **Wordmark:** `/wordmark.svg` and `/wordmark-invert.svg` for horizontal lockups.
- **Favicon/App Icons:** `/favicon.svg`, `/icons/apple-touch-icon.png`, `/icons/android-chrome-192x192.png`.

### 3. Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `primary` | `#1F4F8A` | Headlines, buttons, accent borders |
| `primaryTransparent` | `rgba(31,79,138,0.12)` | Background tints |
| `secondary` | `#F26D21` | CTAs, highlights |
| `accent` | `#06B49A` | Success, data visual accents |
| `neutral900` | `#0F172A` | Body text |
| `neutral700` | `#1E293B` | Muted headings |
| `neutral500` | `#475569` | Supporting copy |
| `neutral300` | `#CBD5F5` | Borders, dividers |
| `neutral100` | `#F8FAFC` | Backgrounds |

Maintain AA contrast ratios. Use gradients sparingly (e.g., `linear-gradient(120deg, primary → secondary)`) for hero CTAs.

### 4. Typography

- **Headlines:** Poppins, weights 500–700. Primary sizes: 56px (display), 44px (H1), 36px (H2).
- **Body:** Inter, weight 400/500, size 16px, line height 1.7.
- **Captions:** Inter 14px, letter-spacing 0.01em.
- **Usage:** Keep headlines sentence case. Avoid underlines; rely on color/weight for emphasis.

### 5. Spacing & Layout

- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- Grid: Max width 1200px, 24px gutter.
- Layout patterns follow F- and Z-shaped scanning for comprehension, placing primary value proposition top-left and reinforcing with left-aligned proof below the hero.[^fpattern]

### 6. Imagery & Iconography

- Use vector-based illustrations highlighting collaboration, analytics, or technology.
- Icons should use 2px strokes, rounded joins, and primary/neutral palette.
- Reserve photography for case studies; ensure it reflects real Indian SME contexts.

### 7. Motion & Micro-interactions

- Durations: fast 120ms, base 200ms, slow 320ms.
- Easing: `cubic-bezier(0.22,1,0.36,1)` for entrances, `cubic-bezier(0.7,0,0.84,0)` for exits.
- Animations must avoid layout shift; use opacity/transform and reserve element space (supports INP best practices).[^inp]

### 8. Performance Budgets

- Largest Contentful Paint ≤ 1.8s on 4G.
- Interaction to Next Paint ≤ 200ms at p75.
- Cumulative Layout Shift ≤ 0.05.
- Total Blocking Time ≤ 100ms.
- Inline critical CSS, defer non-essential JS, compress hero imagery, and prefetch key routes.

### 9. Content Governance

- Align every asset to Google’s March 2024 core update and spam policies; avoid scaled, unoriginal content and keyword stuffing.[^google]
- Provide citations for statistics and claims. Include editorial review checklists with SME sign-off.
- Structured data must mirror on-page copy (Organization, LocalBusiness, Article, FAQ).

### 10. Local Consistency

- Business name: “VyaparTech Digital Private Limited” (no keyword modifiers) across GBP, website, and documentation.[^gbp]
- NAP: `+91-804-123-7780`, `2nd Floor, SJR Primus, 100 Feet Road, Koramangala, Bengaluru, Karnataka 560034, India`.
- Service areas: India, South Asia.

### 11. Review Collection Ethics

- Request reviews post-project via GBP or LinkedIn. No incentives or gating.
- Share context prompt (project scope, outcomes) and welcome balanced feedback.

### 12. Accessibility

- Headings follow sequential order.
- Provide visible focus states (2px outline, primary color).
- Ensure alt text describes intent, especially for logos and data visuals.

### References

[^fpattern]: Smashing Magazine, “F-Shape Pattern And How Users Read,” 23 April 2024.
[^inp]: Vercel, “Optimizing Core Web Vitals in 2024,” April 2024.
[^google]: Google Search Central, “What web creators should know about our March 2024 core update,” March 2024.
[^gbp]: MyStudio, “Ultimate Guide to Optimizing Your Google Business Profile in 2024,” May 2024.
