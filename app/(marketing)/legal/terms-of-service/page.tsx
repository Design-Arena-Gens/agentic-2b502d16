import type { Metadata } from 'next';

import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'VyaparTech terms governing engagements, deliverables, and responsibilities.',
  alternates: { canonical: `${siteConfig.company.url}/legal/terms-of-service` }
};

export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: '6rem' }}>
      <div className="container" style={{ maxWidth: '820px', display: 'grid', gap: '1.5rem' }}>
        <h1 className="heading-xl">Terms of Service</h1>
        <p>Effective date: 1 October 2024</p>

        <h2 className="heading-md">1. Engagement scope</h2>
        <p>Statements of Work (SoWs) outline objectives, deliverables, and acceptance criteria. Any change requests require written approval and may adjust fees or timelines.</p>

        <h2 className="heading-md">2. Responsibilities</h2>
        <ul>
          <li>VyaparTech delivers services with professional diligence, adhering to applicable laws and Google Search policies.</li>
          <li>Clients provide timely access to data, systems, and subject-matter experts, and ensure content accuracy.</li>
          <li>Both parties maintain confidentiality of proprietary information.</li>
        </ul>

        <h2 className="heading-md">3. Payment terms</h2>
        <p>Invoices are issued monthly in INR and payable within 15 days. Late payments may incur a 1.5% monthly fee. Deliverables may pause if invoices remain outstanding.</p>

        <h2 className="heading-md">4. Intellectual property</h2>
        <p>Upon full payment, clients receive a perpetual, worldwide license to use final deliverables. VyaparTech retains the right to showcase anonymised work for portfolio purposes unless restricted by NDA.</p>

        <h2 className="heading-md">5. Compliance</h2>
        <p>We refuse work that violates Google’s spam policies, local regulations, or ethical review guidelines. We also avoid black-hat SEO, deceptive advertising, or manipulative UX tactics.</p>

        <h2 className="heading-md">6. Warranties & limitation of liability</h2>
        <p>Services are provided “as-is” with no guarantee of specific rankings or revenue outcomes. VyaparTech’s liability is limited to fees paid in the preceding three months.</p>

        <h2 className="heading-md">7. Termination</h2>
        <p>Either party may terminate with 30 days’ notice. Fees for completed work remain due. Confidentiality, IP, and indemnity clauses survive termination.</p>

        <h2 className="heading-md">8. Dispute resolution</h2>
        <p>Disputes will be resolved through good-faith negotiation, followed by mediation in Bengaluru, Karnataka. Governing law is the laws of India.</p>

        <h2 className="heading-md">9. Contact</h2>
        <p>Questions about these terms? Email {siteConfig.contact.email}.</p>
      </div>
    </section>
  );
}
