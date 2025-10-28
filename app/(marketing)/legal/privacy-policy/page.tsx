import type { Metadata } from 'next';

import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'VyaparTech privacy policy outlining data handling for prospects, clients, and website visitors.',
  alternates: { canonical: `${siteConfig.company.url}/legal/privacy-policy` }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section" style={{ paddingTop: '6rem' }}>
      <div className="container" style={{ maxWidth: '820px', display: 'grid', gap: '1.5rem' }}>
        <h1 className="heading-xl">Privacy Policy</h1>
        <p>Effective date: 1 October 2024</p>

        <p>
          VyaparTech Digital Private Limited (“VyaparTech”, “we”, “us”, or “our”) respects your privacy. This policy explains how we collect, use, and safeguard personal data when you engage with our services, visit {siteConfig.company.url}, or interact with our communications.
        </p>

        <h2 className="heading-md">1. Data we collect</h2>
        <ul>
          <li>Contact details such as name, email, phone number, company, and role.</li>
          <li>Engagement metadata including meeting notes, project briefs, and analytics events tied to services rendered.</li>
          <li>Website analytics anonymised and aggregated to understand feature usage and performance.</li>
          <li>Review and testimonial content provided voluntarily by clients.</li>
        </ul>

        <h2 className="heading-md">2. How we use data</h2>
        <ul>
          <li>Deliver and improve sales enablement, marketing, SEO, and web experience services.</li>
          <li>Provide reporting, invoices, customer success updates, and compliance documentation.</li>
          <li>Send educational content or event invites; you can unsubscribe at any time.</li>
          <li>Maintain security, detect fraud, and comply with legal obligations.</li>
        </ul>

        <h2 className="heading-md">3. Legal basis</h2>
        <p>We process data under legitimate interest, contractual necessity, or explicit consent. Sensitive data is collected only with consent and stored securely.</p>

        <h2 className="heading-md">4. Data sharing</h2>
        <p>
          We share personal data with trusted processors (cloud hosting, analytics, communications) bound by confidentiality agreements. We never sell personal data. International transfers follow contractual safeguards compliant with Indian regulations.
        </p>

        <h2 className="heading-md">5. Retention</h2>
        <p>Client project data is retained for the engagement plus three years for audit and legal compliance. Marketing leads are reviewed annually and removed upon request.</p>

        <h2 className="heading-md">6. Your rights</h2>
        <p>You may request access, correction, deletion, or restriction of your personal data. Email {siteConfig.contact.email} with the subject “Privacy Request”. We respond within 15 business days.</p>

        <h2 className="heading-md">7. Cookies and tracking</h2>
        <p>We use first-party analytics cookies to monitor Core Web Vitals and user journeys. You can adjust browser settings to decline cookies.</p>

        <h2 className="heading-md">8. Google Business Profile consistency</h2>
        <p>Our Google Business Profile mirrors the NAP (name, address, phone) listed on this site. We do not use deceptive location or naming tactics.</p>

        <h2 className="heading-md">9. Updates</h2>
        <p>We may modify this policy to reflect new regulations or services. Material changes will be announced on this page with a new effective date.</p>

        <h2 className="heading-md">10. Contact</h2>
        <p>
          Privacy questions or complaints can be directed to {siteConfig.contact.email} or mailed to {siteConfig.location.streetAddress}, {siteConfig.location.addressLocality}, {siteConfig.location.addressRegion} {siteConfig.location.postalCode}, India.
        </p>
      </div>
    </section>
  );
}
