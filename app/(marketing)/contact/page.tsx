import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact VyaparTech',
  description: 'Book a discovery session with VyaparTech to align on sales, marketing, SEO, and web growth for your SME.',
  alternates: { canonical: `${siteConfig.company.url}/contact` }
};

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: '720px' }}>
          <span className="eyebrow">Contact</span>
          <h1 className="heading-xl">Let’s design your next 90-day revenue sprint</h1>
          <p className="body-lg">
            Share your objectives and we’ll schedule a working session with our revenue architect, performance lead, and SEO strategist. Expect a response within one business day.
          </p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <h2 className="heading-lg" style={{ fontSize: '2rem' }}>Ways to connect</h2>
            <div style={{ display: 'grid', gap: '0.6rem' }}>
              <span style={{ fontWeight: 600 }}>Email</span>
              <a href={`mailto:${siteConfig.contact.email}`} className="cta-secondary">
                {siteConfig.contact.email}
              </a>
            </div>
            <div style={{ display: 'grid', gap: '0.6rem' }}>
              <span style={{ fontWeight: 600 }}>Call</span>
              <a href={`tel:${siteConfig.contact.phone}`} className="cta-secondary">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div style={{ display: 'grid', gap: '0.6rem' }}>
              <span style={{ fontWeight: 600 }}>Office</span>
              <p style={{ margin: 0 }}>
                {siteConfig.location.streetAddress}
                <br />
                {siteConfig.location.addressLocality}, {siteConfig.location.addressRegion} {siteConfig.location.postalCode}
                <br />India
              </p>
            </div>
            <div style={{ display: 'grid', gap: '0.6rem' }}>
              <span style={{ fontWeight: 600 }}>Hours</span>
              <p style={{ margin: 0 }}>Monday – Friday {siteConfig.location.openingHours[0].opens} to {siteConfig.location.openingHours[0].closes} IST</p>
            </div>
          </div>

          <form
            method="post"
            action="https://formsubmit.co/hello@vyapartech.in"
            style={{ display: 'grid', gap: '1rem', padding: '2rem', borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid var(--color-neutral-200)' }}
          >
            <h2 className="heading-md" style={{ fontSize: '1.5rem' }}>Discovery request</h2>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Full name *</span>
              <input required name="name" type="text" placeholder="Ananya Sharma" style={inputStyle} />
            </label>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Work email *</span>
              <input required name="email" type="email" placeholder="you@company.in" style={inputStyle} />
            </label>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Company *</span>
              <input required name="company" type="text" placeholder="Your company name" style={inputStyle} />
            </label>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>Primary focus *</span>
              <select required name="priority" style={inputStyle}>
                <option value="">Select goal</option>
                <option value="sales">Sales enablement</option>
                <option value="marketing">Performance marketing</option>
                <option value="seo">SEO & content</option>
                <option value="web">Web experience</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label style={{ display: 'grid', gap: '0.35rem' }}>
              <span>What does success look like?</span>
              <textarea name="context" rows={4} placeholder="Share KPIs, timelines, or blockers." style={{ ...inputStyle, minHeight: '140px' }} />
            </label>
            <input type="hidden" name="_captcha" value="false" />
            <button type="submit" className="cta-primary" style={{ justifyContent: 'center' }}>
              Submit request
            </button>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-neutral-500)' }}>
              By submitting, you agree we can contact you about your request. We never sell data and comply with Indian privacy regulations.
            </p>
          </form>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: '760px' }}>
          <h2 className="heading-lg">How we collect and showcase reviews</h2>
          <p className="body-lg">
            We invite feedback through Google Business Profile, LinkedIn recommendations, and post-project surveys. Following Google’s GBP guidelines, we never incentivise reviews, never post fake testimonials, and never ask for keyword-stuffed submissions. Instead, we provide clients with a short prompt highlighting outcomes and invite candid, balanced perspectives.</p>
          <ul>
            <li>Clients receive a review link only after a deliverable is approved.</li>
            <li>We publish excerpts on our site only with written consent.</li>
            <li>If feedback reveals issues, we document remediation steps and update our processes.</li>
          </ul>
          <p className="body-lg">Want to see reference checks? Request introductions to existing clients during your discovery session.</p>
        </div>
      </section>
    </>
  );
}

const inputStyle: CSSProperties = {
  border: '1px solid var(--color-neutral-200)',
  borderRadius: 'var(--radius-md)',
  padding: '0.85rem 1rem',
  fontSize: '1rem',
  fontFamily: 'var(--font-body)',
  width: '100%'
};
