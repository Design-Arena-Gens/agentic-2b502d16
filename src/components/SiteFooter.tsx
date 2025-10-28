import Link from 'next/link';

import { footerNav } from '@/src/data/navigation';
import { siteConfig } from '@/src/lib/siteConfig';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { company, contact, location } = siteConfig;

  return (
    <footer style={{ background: 'var(--color-neutral-900)', color: 'white', padding: '4.5rem 0 2.5rem' }}>
      <div className="container" style={{ display: 'grid', gap: '3rem' }}>
        <div style={{ display: 'grid', gap: '1.2rem', maxWidth: '460px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/wordmark-invert.svg" alt="VyaparTech wordmark" width={180} height={40} loading="lazy" />
          </div>
          <p style={{ color: 'rgba(248, 250, 252, 0.82)' }}>{company.description}</p>
          <div style={{ display: 'grid', gap: '0.35rem', color: 'rgba(248, 250, 252, 0.82)' }}>
            <span>{location.streetAddress}</span>
            <span>
              {location.addressLocality}, {location.addressRegion} {location.postalCode}
            </span>
            <span>India</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'rgba(248, 250, 252, 0.9)' }}>
            <a href={`tel:${contact.phone}`} aria-label="Call VyaparTech">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email VyaparTech">
              {contact.email}
            </a>
          </div>
        </div>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section} style={{ display: 'grid', gap: '0.75rem' }}>
              <span style={{ fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.8rem', color: 'rgba(248, 250, 252, 0.7)' }}>
                {section}
              </span>
              <div style={{ display: 'grid', gap: '0.6rem' }}>
                {links.map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: 'rgba(248, 250, 252, 0.85)' }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(248, 250, 252, 0.08)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: 'rgba(248, 250, 252, 0.6)' }}>
            <span>© {year} {company.legalName}. All rights reserved.</span>
            <span>GST & CIN details furnished on request.</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="VyaparTech on LinkedIn" style={{ color: 'rgba(248, 250, 252, 0.78)' }}>
              LinkedIn
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="VyaparTech on YouTube" style={{ color: 'rgba(248, 250, 252, 0.78)' }}>
              YouTube
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" aria-label="VyaparTech on X" style={{ color: 'rgba(248, 250, 252, 0.78)' }}>
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
