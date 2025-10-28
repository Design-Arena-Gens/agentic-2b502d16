import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { PageHero } from '@/src/components/PageHero';
import { FAQSection } from '@/src/components/FAQSection';
import { caseStudies } from '@/src/data/caseStudies';
import { services } from '@/src/data/services';
import { siteConfig } from '@/src/lib/siteConfig';

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return {};
  }

  return {
    title: `${service.name} for Indian SMEs`,
    description: service.summary,
    alternates: { canonical: `${siteConfig.company.url}/services/${service.slug}` },
    openGraph: {
      type: 'article',
      title: `${service.name} | ${siteConfig.company.name}`,
      description: service.summary,
      url: `${siteConfig.company.url}/services/${service.slug}`
    }
  } satisfies Metadata;
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    notFound();
  }

  const linkedCaseStudies = caseStudies.filter((study) => service.relatedCaseStudies.includes(study.slug));

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      url: siteConfig.company.url,
      logo: `${siteConfig.company.url}${siteConfig.company.logo}`
    },
    areaServed: siteConfig.company.areasServed,
    description: service.summary,
    brand: {
      '@type': 'Brand',
      name: siteConfig.company.name
    },
    serviceType: service.name,
    url: `${siteConfig.company.url}/services/${service.slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR'
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } as const;

  return (
    <>
      <PageHero
        eyebrow="Service detail"
        title={service.name}
        description={
          <>
            <p>{service.summary}</p>
            <ul>
              {service.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <p>
              Every engagement references Google’s March 2024 core update guidance to avoid scaled, unoriginal content and maintain trustworthy experiences for AI summaries.
            </p>
          </>
        }
        primaryCta={{ label: 'Schedule a strategy session', href: '/contact' }}
        secondaryCta={{ label: 'See pricing frameworks', href: '/pricing' }}
      />

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div className="section-top">
            <span className="eyebrow">Proof points</span>
            <h2 className="heading-lg">Why SMEs trust VyaparTech for {service.name.toLowerCase()}</h2>
          </div>
          <div className="grid-two">
            {service.proofPoints.map((proof) => (
              <div key={proof.label} style={{ padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-neutral-200)', background: '#fff', display: 'grid', gap: '0.5rem' }}>
                <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>
                  {proof.label}
                </h3>
                <p>{proof.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div className="section-top">
            <span className="eyebrow">Process</span>
            <h2 className="heading-lg">How we deliver measurable impact</h2>
            <p className="body-lg">
              Each phase includes Core Web Vitals monitoring, structured data validation, IndexNow pings, and editorial QA to stay aligned with Google Search quality systems.
            </p>
          </div>
          <div className="grid-two">
            {service.process.map((phase) => (
              <div key={phase.step} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.6rem', display: 'grid', gap: '0.5rem' }}>
                <h3 className="heading-md" style={{ fontSize: '1.2rem' }}>
                  {phase.step}
                </h3>
                <p>{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {linkedCaseStudies.length > 0 ? (
        <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
          <div className="container" style={{ display: 'grid', gap: '2rem' }}>
            <div className="section-top">
              <span className="eyebrow">Relevant case studies</span>
              <h2 className="heading-lg">See the outcomes in action</h2>
            </div>
            <div className="grid-two">
              {linkedCaseStudies.map((study) => (
                <article key={study.slug} id={study.slug} style={{ padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-neutral-200)', background: '#fff', display: 'grid', gap: '0.75rem' }}>
                  <span className="tag" style={{ width: 'fit-content' }}>{study.industry}</span>
                  <h3 className="heading-md" style={{ fontSize: '1.4rem' }}>
                    {study.title}
                  </h3>
                  <p>{study.summary}</p>
                  <ul>
                    {study.metrics.map((metric) => (
                      <li key={metric.label}>
                        <strong>{metric.label}:</strong> {metric.value}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FAQSection faqs={service.faqs} title={`FAQs about ${service.name}`} />

      <section className="section section-tight" style={{ background: 'linear-gradient(120deg, rgba(31,79,138,0.16), rgba(242,109,33,0.12))' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
          <h2 className="heading-lg">Next steps</h2>
          <p className="body-lg">Choose how you want to continue the conversation.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {service.internalLinks.map((link) => (
              <a key={link.href} className="cta-secondary" href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="cta-primary" href="/contact">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <Script id="service-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Script id="service-faq-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    </>
  );
}
