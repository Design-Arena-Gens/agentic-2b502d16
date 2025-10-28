import type { Metadata } from 'next';

import { siteConfig } from '@/src/lib/siteConfig';

const pricingTiers = [
  {
    name: 'Growth Sprint',
    price: '₹3.2L / month',
    idealFor: 'SMEs validating digital revenue channels',
    summary: '90-day sprint aligning sales, marketing, and experience KPIs with weekly governance.',
    includes: [
      'Revenue diagnostic & KPI framework',
      'Core Web Vitals hardening for priority journeys',
      'Editorial governance mapped to Google March 2024 policies',
      'IndexNow automation & analytics dashboards'
    ]
  },
  {
    name: 'Scale Program',
    price: '₹5.4L / month',
    idealFor: 'Businesses expanding nationally with multi-channel campaigns',
    summary: 'Integrated sales enablement, performance marketing, SEO, and CRO squads.',
    includes: [
      'Omnichannel campaign factory with experimentation backlog',
      'Gemini-powered content briefing CLI plus human editorial review',
      'Structured data QA across all templates',
      'BI-ready reporting with AI Overview impact tracking'
    ]
  },
  {
    name: 'Experience Transformation',
    price: 'From ₹14.5L project',
    idealFor: 'SMEs rebuilding digital products or e-commerce experiences',
    summary: 'Research, design system, development, and enablement delivered in 8–12 weeks.',
    includes: [
      'Customer research & accessibility testing',
      'Design tokens, documentation, and motion guidance',
      'Next.js build with performance budgets and QA',
      'Team training and launch playbooks'
    ]
  }
];

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing frameworks for VyaparTech services tailored to Indian SMEs.',
  alternates: { canonical: `${siteConfig.company.url}/pricing` }
};

export default function PricingPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <span className="eyebrow">Pricing</span>
          <h1 className="heading-xl">Predictable investments with compliance baked in</h1>
          <p className="body-lg">
            Every package includes editorial review, structured data validation, IndexNow automation, and Core Web Vitals monitoring. Pricing scales with your channel mix and internal capabilities.
          </p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div className="grid-two">
            {pricingTiers.map((tier) => (
              <article key={tier.name} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-lg)', padding: '2rem', background: '#fff', display: 'grid', gap: '0.8rem' }}>
                <span className="tag" style={{ width: 'fit-content' }}>{tier.idealFor}</span>
                <h2 className="heading-md" style={{ fontSize: '1.8rem' }}>{tier.name}</h2>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>{tier.price}</div>
                <p>{tier.summary}</p>
                <ul>
                  {tier.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="cta-secondary" href="/contact">
                  Discuss this plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: '760px' }}>
          <h2 className="heading-lg">What influences pricing?</h2>
          <ul>
            <li>Channel complexity (sales, media, SEO, experience) and internal coverage.</li>
            <li>Volume of original content requiring editorial governance and compliance review.</li>
            <li>Integration scope across CRM, analytics, and marketing automation platforms.</li>
          </ul>
          <p className="body-lg">Let’s co-create the right model for your team. Request a bespoke plan for multi-brand or multi-region rollouts.</p>
          <a className="cta-primary" href="/contact">
            Request a custom proposal
          </a>
        </div>
      </section>
    </>
  );
}
