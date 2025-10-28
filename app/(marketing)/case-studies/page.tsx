import type { Metadata } from 'next';
import Script from 'next/script';

import { caseStudies } from '@/src/data/caseStudies';
import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore VyaparTech case studies demonstrating measurable revenue impact and policy-compliant growth for Indian SMEs.',
  alternates: { canonical: `${siteConfig.company.url}/case-studies` }
};

export default function CaseStudiesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'VyaparTech Case Studies',
    description: metadata.description,
    url: `${siteConfig.company.url}/case-studies`,
    hasPart: caseStudies.map((study) => ({
      '@type': 'Article',
      name: study.title,
      url: `${siteConfig.company.url}/case-studies#${study.slug}`,
      about: study.industry,
      headline: study.summary
    }))
  };

  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ display: 'grid', gap: '1.75rem', maxWidth: '720px' }}>
          <span className="eyebrow">Proof</span>
          <h1 className="heading-xl">Case studies with transparent ROI and compliance guardrails</h1>
          <p className="body-lg">
            Every VyaparTech project documents revenue, marketing, and experience outcomes. We anonymise proprietary data while sharing the strategies Indian SMEs can replicate.
          </p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          {caseStudies.map((study) => (
            <article key={study.slug} id={study.slug} style={{ padding: '2.25rem', borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid var(--color-neutral-200)', display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <span className="tag" style={{ width: 'fit-content' }}>{study.industry}</span>
                  <h2 className="heading-lg" style={{ fontSize: '2rem' }}>
                    {study.title}
                  </h2>
                </div>
                <div style={{ display: 'grid', gap: '0.6rem', minWidth: '240px' }}>
                  {study.metrics.map((metric) => (
                    <div key={metric.label} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', background: 'var(--color-neutral-100)' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-neutral-500)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        {metric.label}
                      </span>
                      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gap: '1.2rem' }}>
                <div>
                  <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Challenge</h3>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Solution</h3>
                  <p>{study.solution}</p>
                </div>
                <div>
                  <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Outcome</h3>
                  <p>{study.outcome}</p>
                </div>
                {study.quote ? (
                  <blockquote style={{ borderLeft: '4px solid var(--color-secondary)', paddingLeft: '1.1rem', margin: '0', color: 'var(--color-neutral-700)', fontSize: '1.1rem' }}>
                    “{study.quote.text}”
                    <footer style={{ marginTop: '0.5rem', fontWeight: 600 }}>
                      — {study.quote.author}, {study.quote.designation}
                    </footer>
                  </blockquote>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'linear-gradient(140deg, rgba(31,79,138,0.14), rgba(6,180,154,0.1))' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
          <h2 className="heading-lg">Want a tailored case study walkthrough?</h2>
          <p className="body-lg">We’ll share the full playbook, governance artefacts, and analytics dashboards behind each outcome—under NDA.</p>
          <a className="cta-primary" href="/contact">
            Request a walkthrough
          </a>
        </div>
      </section>

      <Script id="case-studies-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
