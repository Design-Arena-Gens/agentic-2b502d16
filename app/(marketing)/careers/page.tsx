import type { Metadata } from 'next';

import { siteConfig } from '@/src/lib/siteConfig';

const roles = [
  {
    title: 'Senior Performance Marketer',
    location: 'Hybrid – Bengaluru',
    type: 'Full-time',
    summary: 'Lead paid search and paid social experimentation for D2C and B2B SME clients.',
    responsibilities: [
      'Design and execute media plans aligned to ROI guardrails.',
      'Collaborate with creative pods to ship compliant, high-converting assets.',
      'Report on AI Overview impact and attribution trends.'
    ],
    requirements: [
      '5+ years managing performance campaigns in India.',
      'Hands-on experience with GA4, Looker Studio, and CRM integrations.',
      'Comfort working with experimentation roadmaps and budget governance.'
    ]
  },
  {
    title: 'Content Editor – Helpful Content & AI Readiness',
    location: 'Remote – India',
    type: 'Contract-to-hire',
    summary: 'Ensure every piece of content meets Google’s helpful content standards and AI Overview readiness criteria.',
    responsibilities: [
      'Run editorial checklists, fact-checking, and citation reviews.',
      'QA structured data alignment for Article and FAQ markup.',
      'Coach subject-matter experts on people-first writing.'
    ],
    requirements: [
      '4+ years in editorial or content strategy roles.',
      'Familiarity with Google Search Central guidelines and schema validation tools.',
      'Strong project management and stakeholder communication.'
    ]
  }
];

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join VyaparTech’s mission to build ethical, high-performing digital growth for Indian SMEs.',
  alternates: { canonical: `${siteConfig.company.url}/careers` }
};

export default function CareersPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <span className="eyebrow">Careers</span>
          <h1 className="heading-xl">Help SMEs grow with integrity</h1>
          <p className="body-lg">
            Our hybrid team collaborates across Bengaluru and remote hubs in India. We value inclusive hiring, continuous learning, and measurable outcomes for clients and colleagues alike.
          </p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          {roles.map((role) => (
            <article key={role.title} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-lg)', padding: '2rem', background: '#fff', display: 'grid', gap: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <h2 className="heading-md" style={{ fontSize: '1.8rem' }}>{role.title}</h2>
                <div style={{ display: 'grid', gap: '0.35rem', alignItems: 'flex-end', textAlign: 'right' }}>
                  <span>{role.location}</span>
                  <span>{role.type}</span>
                </div>
              </div>
              <p>{role.summary}</p>
              <div>
                <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Responsibilities</h3>
                <ul>
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>Requirements</h3>
                <ul>
                  {role.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <a className="cta-secondary" href={`mailto${':' + siteConfig.contact.email}?subject=Application: ${encodeURIComponent(role.title)}`}>
                Apply via email
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <h2 className="heading-lg">Hiring principles</h2>
          <ul>
            <li>Diverse teams ship better products. We welcome applicants across genders, geographies, and backgrounds.</li>
            <li>We assess craft mastery, curiosity, and ability to collaborate under transparent KPIs.</li>
            <li>Every candidate receives feedback within seven business days of interviews.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
