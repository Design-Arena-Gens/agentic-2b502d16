import type { Metadata } from 'next';

import { brandTokens } from '@/src/data/brandTokens';
import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'About VyaparTech',
  description: 'Learn about VyaparTech’s mission, brand platform, and governance that support India’s SME leaders.',
  alternates: { canonical: `${siteConfig.company.url}/about` }
};

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.75rem' }}>
          <span className="eyebrow">Our story</span>
          <h1 className="heading-xl">Building equitable digital growth for India&apos;s SMEs</h1>
          <p className="body-lg">
            VyaparTech was founded in Bengaluru by operators who grew SaaS, manufacturing, and consumer businesses across India. We saw how SME teams were asked to do more with less while navigating complex search policies, privacy rules, and AI-driven experiences. Our mission is to democratise that playbook.
          </p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div className="section-top">
            <span className="eyebrow">Brand platform</span>
            <h2 className="heading-lg">What VyaparTech stands for</h2>
          </div>
          <div className="grid-two">
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'grid', gap: '0.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Mission</h3>
              <p>{brandTokens.mission}</p>
            </div>
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'grid', gap: '0.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Value proposition</h3>
              <p>{brandTokens.valueProposition}</p>
            </div>
          </div>
          <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'grid', gap: '0.6rem' }}>
            <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Differentiators</h3>
            <ul>
              {brandTokens.differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem', display: 'grid', gap: '0.6rem' }}>
            <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Tone of voice</h3>
            <ul>
              {brandTokens.toneOfVoice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div className="section-top">
            <span className="eyebrow">Operating principles</span>
            <h2 className="heading-lg">How we keep engagements people-first and policy-compliant</h2>
          </div>
          <div className="grid-two">
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Helpful content governance</h3>
              <p>
                Editorial checklists reference Google’s March 2024 core update guidance, Search Central structured data policies, and sector-specific compliance. This protects your brand and helps AI summaries cite your content accurately.
              </p>
            </div>
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Core Web Vitals by design</h3>
              <p>
                We set budgets for LCP, INP, CLS, and Total Blocking Time before design begins. Components ship with reserved media slots, async scripts, and micro-interactions tested for responsiveness.
              </p>
            </div>
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Local truth, national reach</h3>
              <p>
                Our Google Business Profile governance ensures NAP consistency across your site, GBP, and partner platforms. We map area served signals ethically—no doorway pages, only real coverage.
              </p>
            </div>
            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
              <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Transparent measurement</h3>
              <p>
                Weekly reports connect platform data, CRM attribution, and AI Overview triggers. IndexNow logs prove discoverability, while privacy-first analytics keep customer trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'linear-gradient(120deg, rgba(31,79,138,0.14), rgba(242,109,33,0.14))' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: '720px' }}>
          <h2 className="heading-lg">Commitment to ethical growth</h2>
          <p className="body-lg">
            VyaparTech never inflates metrics, never keyword-stuffs business names, and never deploys scaled AI copy without human editors. Our clients approve every deliverable through a documented review gate before launch.
          </p>
          <a className="cta-primary" href="/contact">
            Partner with VyaparTech
          </a>
        </div>
      </section>
    </>
  );
}
