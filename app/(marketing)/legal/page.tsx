import type { Metadata } from 'next';

import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Access VyaparTech’s privacy policy and terms of service.',
  alternates: { canonical: `${siteConfig.company.url}/legal` }
};

export default function LegalIndexPage() {
  return (
    <section className="section" style={{ paddingTop: '6rem' }}>
      <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: '760px' }}>
        <span className="eyebrow">Legal center</span>
        <h1 className="heading-xl">Policies protecting your business and data</h1>
        <p className="body-lg">VyaparTech commits to transparent data practices and fair service terms. Review our policies to understand mutual responsibilities.</p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <a className="cta-secondary" href="/legal/privacy-policy">
            Privacy Policy
          </a>
          <a className="cta-secondary" href="/legal/terms-of-service">
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
}
