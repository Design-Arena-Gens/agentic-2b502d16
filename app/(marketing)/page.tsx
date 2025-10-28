import Link from 'next/link';

import { caseStudies } from '@/src/data/caseStudies';
import { services } from '@/src/data/services';
import { siteConfig } from '@/src/lib/siteConfig';

const homepageFaqs = [
  {
    question: 'How fast can VyaparTech launch a growth program?',
    answer:
      'Our rapid diagnostic aligns leadership on revenue, marketing, and experience objectives within 10 business days. We then run parallel streams—for sales enablement, performance marketing, SEO, and web experience—so SMEs see first wins in the first 45 days.'
  },
  {
    question: 'What evidence backs your approach to helpful content?',
    answer:
      'We map every deliverable to Google’s March 2024 core update and spam policies, with editorial QA checklists referencing Google Search Central’s guidance on avoiding scaled or unoriginal content. Each asset ships with citations and reviewer sign-off.'
  },
  {
    question: 'How do you safeguard Core Web Vitals?',
    answer:
      'Performance budgets keep LCP ≤1.8s, INP ≤200ms, and CLS ≤0.05. We inline critical CSS, defer non-essential JavaScript, and reserve media space to maintain page stability—even as you launch new campaigns.'
  }
];

export default function HomePage() {
  const latestStudies = caseStudies.slice(0, 2);
  const featuredServices = services;

  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ display: 'grid', gap: '3rem' }}>
          <div style={{ display: 'grid', gap: '1.75rem', maxWidth: '700px' }}>
            <span className="tag">For India’s ambitious SMEs</span>
            <h1 className="heading-xl">
              Revenue-first sales, marketing, and web experiences engineered for AI-era visibility
            </h1>
            <p className="body-lg">
              VyaparTech unifies revenue operations, performance marketing, SEO, and design systems so Indian SMEs can scale profitably, stay compliant with Google’s latest quality systems, and appear confidently in AI Overviews.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link className="cta-primary" href="/contact">
                Book a revenue diagnostic
              </Link>
              <Link className="cta-secondary" href="/case-studies">
                View proof of impact
              </Link>
            </div>
            <div style={{ display: 'grid', gap: '0.75rem', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-100)' }}>
              <span style={{ fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--color-secondary)' }}>Signal-driven strategy</span>
              <div style={{ display: 'grid', gap: '0.35rem', color: 'var(--color-neutral-700)' }}>
                <span>• Google’s March 2024 search systems reduced low-quality results by 40%—we align every page to people-first guidance (Google Search, 2024).</span>
                <span>• INP is now a Core Web Vital; our design system keeps interactions under 200ms by breaking long tasks and deferring non-critical handlers (Vercel, 2024).</span>
                <span>• IndexNow participation accelerates discovery across Bing, Yandex, Naver, and Seznam, so your updates surface faster (IndexNow.org, 2024).</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-neutral-200)', background: '#fff' }}>
              <span className="eyebrow" style={{ color: 'var(--color-primary)' }}>SME insight</span>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6 }}>
                60% of Indian SMEs cite limited analytics talent as their top barrier to digital growth (Dsilva & Singh, 2024). We embed analysts in every engagement.
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-neutral-200)', background: '#fff' }}>
              <span className="eyebrow" style={{ color: 'var(--color-secondary)' }}>Core Web Vitals</span>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6 }}>
                Front-end budgets keep total blocking time below 100ms and reserve imagery to stay within CLS 0.05 for launch and future updates.
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-neutral-200)', background: '#fff' }}>
              <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>AI search readiness</span>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.6 }}>
                Research shows &gt;50% overlap between AI Overview citations and top-ten organic results (BrightEdge, 2024). Our content ships with citation-ready summaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div className="section-top">
            <span className="eyebrow">Growth operating system</span>
            <h2 className="heading-lg">Everything SMEs need to win with trustworthy digital revenue</h2>
            <p className="body-lg">Each service line is orchestrated by cross-functional pods so sales, marketing, and product teams ship faster together.</p>
          </div>
          <div className="grid-two">
            {featuredServices.map((service) => (
              <div key={service.slug} style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid var(--color-neutral-200)', display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                  <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>
                    {service.name}
                  </h3>
                  <Link href={`/services/${service.slug}`} aria-label={`Learn more about ${service.name}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    Explore
                  </Link>
                </div>
                <p className="body-lg" style={{ fontSize: '1.05rem' }}>
                  {service.summary}
                </p>
                <ul>
                  {service.outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div className="section-top">
            <span className="eyebrow">Proof SMEs can trust</span>
            <h2 className="heading-lg">Case studies with audited KPIs and compliant growth</h2>
            <p className="body-lg">
              VyaparTech engagements document every revenue lever, quality gate, and performance audit so you can align leadership fast.
            </p>
          </div>
          <div className="grid-two">
            {latestStudies.map((study) => (
              <article key={study.slug} style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-neutral-200)', display: 'grid', gap: '1rem' }}>
                <span className="tag" style={{ width: 'fit-content' }}>
                  {study.industry}
                </span>
                <h3 className="heading-md" style={{ fontSize: '1.6rem' }}>
                  {study.title}
                </h3>
                <p>{study.summary}</p>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {study.metrics.map((metric) => (
                    <div key={metric.label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', background: 'var(--color-neutral-100)' }}>
                      <span style={{ fontWeight: 600 }}>{metric.label}</span>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{metric.value}</span>
                    </div>
                  ))}
                </div>
                <Link className="cta-secondary" href={`/case-studies#${study.slug}`}>
                  Read the playbook
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div className="section-top">
            <span className="eyebrow">AI-overview ready insights</span>
            <h2 className="heading-lg">Latest guidance for Indian SME changemakers</h2>
            <p className="body-lg">Our research-backed articles translate evolving search policies, AI summaries, and performance marketing shifts into action plans.</p>
          </div>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <article style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid var(--color-neutral-200)', display: 'grid', gap: '0.75rem' }}>
              <span className="tag" style={{ width: 'fit-content' }}>Featured insight</span>
              <h3 className="heading-md" style={{ fontSize: '1.6rem' }}>
                How Indian SMEs can operationalise AI Overview visibility without sacrificing trust
              </h3>
              <p>
                Discover how to design citation-ready content, measure AI Overview-assist conversions, and keep marketing compliant with Google’s March 2024 quality signals.
              </p>
              <Link className="cta-secondary" href="/blog">
                Browse the blog
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(31,79,138,0.14), rgba(6,180,154,0.12))' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div className="section-top">
            <span className="eyebrow">Get a tailored roadmap</span>
            <h2 className="heading-lg">Let’s build your next 90-day revenue sprint</h2>
            <p className="body-lg">
              Share your priorities—we’ll deliver an audit across sales enablement, marketing, SEO, and experience with clear KPIs, Core Web Vitals forecasts, and governance safeguards.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link className="cta-primary" href="/contact">
              Schedule a discovery call
            </Link>
            <Link className="cta-secondary" href="/pricing">
              Review pricing frameworks
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <div className="section-top">
            <span className="eyebrow">FAQs</span>
            <h2 className="heading-lg">Answers for fast-moving SME leaders</h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {homepageFaqs.map((faq) => (
              <article key={faq.question} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.5rem', background: '#fff', display: 'grid', gap: '0.5rem' }}>
                <h3 className="heading-md" style={{ fontSize: '1.25rem' }}>
                  {faq.question}
                </h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-900)', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
          <span className="tag" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', justifySelf: 'flex-start' }}>Google Business Profile readiness</span>
          <h2 className="heading-lg" style={{ color: '#fff' }}>
            NAP, hours, and service areas locked for local visibility
          </h2>
          <div style={{ display: 'grid', gap: '0.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
            <span>VyaparTech Digital Private Limited</span>
            <span>{siteConfig.location.streetAddress}</span>
            <span>
              {siteConfig.location.addressLocality}, {siteConfig.location.addressRegion} {siteConfig.location.postalCode}
            </span>
            <span>Serving: {siteConfig.company.areasServed.join(', ')}</span>
            <span>Hours: Mon–Fri {siteConfig.location.openingHours[0].opens}–{siteConfig.location.openingHours[0].closes} IST</span>
            <span>Call: {siteConfig.contact.phone}</span>
          </div>
          <Link className="cta-secondary" href="/contact" style={{ width: 'fit-content', color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
            Start your growth audit
          </Link>
        </div>
      </section>
    </>
  );
}
