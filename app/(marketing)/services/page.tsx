import Link from 'next/link';
import type { Metadata } from 'next';

import { services } from '@/src/data/services';
import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Services for India’s SMEs',
  description:
    'VyaparTech provides sales enablement, performance marketing, SEO, and web experience design services designed for the realities of Indian SMEs.',
  alternates: { canonical: `${siteConfig.company.url}/services` }
};

export default function ServicesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div className="section-top">
            <span className="eyebrow">Integrated expertise</span>
            <h1 className="heading-xl">Four service lines, one revenue engine</h1>
            <p className="body-lg">
              VyaparTech pods bring revenue architects, marketers, designers, and analysts together. Every service follows the same governance: Core Web Vitals budgets, March 2024 search quality alignment, and IndexNow automation for rapid discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div className="grid-two">
            {services.map((service) => (
              <article key={service.slug} style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid var(--color-neutral-200)', display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  <h2 className="heading-md" style={{ fontSize: '1.7rem' }}>
                    {service.name}
                  </h2>
                  <Link href={`/services/${service.slug}`} aria-label={`View ${service.name} service details`} style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                    Details
                  </Link>
                </div>
                <p>{service.summary}</p>
                <ul>
                  {service.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="cta-secondary" href={`/services/${service.slug}`}>
                  Explore {service.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div className="section-top">
            <span className="eyebrow">Engagement rhythm</span>
            <h2 className="heading-lg">How every service stays compliant and performance-led</h2>
            <p className="body-lg">
              We measure every sprint against clearly defined business outcomes, while embedding editorial, technical, and legal checkpoints that mirror Google’s latest policies and local regulations.
            </p>
          </div>
          <div className="grid-two">
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'grid', gap: '0.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.4rem' }}>Governance guardrails</h3>
              <ul>
                <li>Helpful content checklist referencing Google’s March 2024 update and spam policies.</li>
                <li>Structured data QA for Organization, LocalBusiness, Article, and FAQ markup.</li>
                <li>Editorial review logs documenting subject-matter experts and fact-checkers.</li>
              </ul>
            </div>
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'grid', gap: '0.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.4rem' }}>Performance operating system</h3>
              <ul>
                <li>Core Web Vitals budgets: LCP ≤1.8s, INP ≤200ms, CLS ≤0.05 across breakpoints.</li>
                <li>IndexNow queue with retry logic for every new, updated, or deprecated URL.</li>
                <li>Weekly reporting on AI Overview triggers, revenue impact, and experimentation backlog.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'linear-gradient(140deg, rgba(31,79,138,0.16), rgba(6,180,154,0.16))' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
          <h2 className="heading-lg">Ready to orchestrate sales, marketing, SEO, and experience?</h2>
          <p className="body-lg" style={{ color: 'var(--color-neutral-700)' }}>
            Book a discovery workshop. We’ll audit your funnel, determine the most valuable service mix, and map clear milestones for the first 90 days.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link className="cta-primary" href="/contact">
              Plan a workshop
            </Link>
            <Link className="cta-secondary" href="/pricing">
              View pricing frameworks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
