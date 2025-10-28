import type { Metadata } from 'next';
import Script from 'next/script';

import { FAQSection } from '@/src/components/FAQSection';
import { generalFaqs } from '@/src/data/faqs';
import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to common questions about VyaparTech’s SME-focused sales, marketing, SEO, and web services.',
  alternates: { canonical: `${siteConfig.company.url}/faqs` }
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
} as const;

export default function FaqPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <span className="eyebrow">FAQs</span>
          <h1 className="heading-xl">Everything you need to know before partnering with VyaparTech</h1>
          <p className="body-lg">
            From engagement models to compliance processes, these answers highlight our commitment to helpful content, Core Web Vitals, and ethical growth for Indian SMEs.
          </p>
        </div>
      </section>

      <FAQSection faqs={generalFaqs} />

      <section className="section section-tight" style={{ background: 'linear-gradient(135deg, rgba(31,79,138,0.12), rgba(6,180,154,0.12))' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <h2 className="heading-lg">Still have questions?</h2>
          <p className="body-lg">Book a 30-minute consultation to review your specific goals, data, and operations.</p>
          <a className="cta-primary" href="/contact">
            Schedule a consultation
          </a>
        </div>
      </section>

      <Script id="faq-page-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    </>
  );
}
