"use client";

import { useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
  anchor?: string;
};

type FAQSectionProps = {
  title?: string;
  faqs: FAQItem[];
  id?: string;
};

export function FAQSection({ title = 'Frequently asked', faqs, id }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id={id}>
      <div className="container" style={{ display: 'grid', gap: '2rem' }}>
        <div className="section-top">
          <span className="eyebrow">Knowledge hub</span>
          <h2 className="heading-lg">{title}</h2>
          <p className="body-lg">
            We align every engagement to transparent KPIs. Here’s how we build predictability into revenue, marketing, and experience design.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                id={faq.anchor}
                style={{
                  border: '1px solid var(--color-neutral-200)',
                  borderRadius: 'var(--radius-md)',
                  background: '#fff',
                  boxShadow: isOpen ? '0 18px 40px -28px rgba(15, 23, 42, 0.2)' : 'none',
                  transition: 'box-shadow var(--transition-fast)'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.4rem 1.6rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-neutral-900)' }}>
                    {faq.question}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform var(--transition-fast)' }}>
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </button>
                {isOpen ? (
                  <div style={{ padding: '0 1.6rem 1.6rem', color: 'var(--color-neutral-700)', lineHeight: 1.7 }}>
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
