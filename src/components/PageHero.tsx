import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="section" style={{ paddingTop: '6.5rem' }}>
      <div className="container" style={{ display: 'grid', gap: '2rem' }}>
        <div className="section-top">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="heading-xl" style={{ maxWidth: '680px' }}>
            {title}
          </h1>
          <div className="body-lg" style={{ maxWidth: '680px' }}>
            {description}
          </div>
        </div>
        {(primaryCta || secondaryCta) && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {primaryCta ? (
              <a className="cta-primary" href={primaryCta.href}>
                {primaryCta.label}
              </a>
            ) : null}
            {secondaryCta ? (
              <a className="cta-secondary" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
