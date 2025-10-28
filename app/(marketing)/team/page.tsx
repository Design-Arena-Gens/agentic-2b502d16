import type { Metadata } from 'next';

import { advisors, leadershipTeam } from '@/src/data/team';
import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the VyaparTech leadership team guiding revenue, marketing, SEO, and experience for India’s SMEs.',
  alternates: { canonical: `${siteConfig.company.url}/team` }
};

export default function TeamPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <span className="eyebrow">Leadership</span>
          <h1 className="heading-xl">Experienced operators supporting SME growth journeys</h1>
          <p className="body-lg">
            VyaparTech’s cross-disciplinary team blends revenue operations, marketing, SEO, and experience design expertise earned across SaaS, manufacturing, and consumer brands in India.
          </p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <h2 className="heading-lg">Leadership Team</h2>
          <div className="grid-two">
            {leadershipTeam.map((member) => (
              <article key={member.name} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-lg)', background: '#fff', padding: '1.8rem', display: 'grid', gap: '0.6rem' }}>
                <h3 className="heading-md" style={{ fontSize: '1.4rem' }}>{member.name}</h3>
                <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{member.role}</span>
                <p>{member.bio}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {member.focus.map((item) => (
                    <span key={item} className="tag" style={{ fontSize: '0.85rem' }}>
                      {item}
                    </span>
                  ))}
                </div>
                {member.linkedin ? (
                  <a className="cta-secondary" href={member.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn profile
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <h2 className="heading-lg">Advisors</h2>
          <div className="grid-two">
            {advisors.map((member) => (
              <article key={member.name} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.6rem', display: 'grid', gap: '0.6rem' }}>
                <h3 className="heading-md" style={{ fontSize: '1.3rem' }}>{member.name}</h3>
                <span style={{ fontWeight: 600 }}>{member.role}</span>
                <p>{member.bio}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {member.focus.map((item) => (
                    <span key={item} className="tag" style={{ fontSize: '0.8rem' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'linear-gradient(135deg, rgba(31,79,138,0.1), rgba(6,180,154,0.1))' }}>
        <div className="container" style={{ display: 'grid', gap: '1.25rem', maxWidth: '680px' }}>
          <h2 className="heading-lg">Join the VyaparTech network</h2>
          <p className="body-lg">We partner with SME specialists, subject-matter experts, and creators who share our quality standards. Explore open roles on our Careers page.</p>
          <a className="cta-secondary" href="/careers">
            View careers
          </a>
        </div>
      </section>
    </>
  );
}
