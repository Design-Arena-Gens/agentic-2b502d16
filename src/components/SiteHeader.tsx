"use client";

import Link from 'next/link';
import { useState } from 'react';

import { primaryNav, serviceNav } from '@/src/data/navigation';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-[var(--color-neutral-200)]">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
        <Link href="/" className="brand" aria-label="VyaparTech home">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logomark.svg" alt="VyaparTech logomark" width={36} height={36} loading="lazy" />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.01em' }}>VyaparTech</span>
          </div>
        </Link>
        <nav className="desktop-nav" aria-label="Primary" style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }}>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="cta-primary" style={{ padding: '0.65rem 1.4rem' }}>
            Talk to an expert
          </Link>
        </nav>
        <button
          type="button"
          className="mobile-menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '999px',
            border: '1px solid var(--color-neutral-200)',
            background: '#fff'
          }}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      <div
        id="mobile-nav"
        style={{
          display: menuOpen ? 'block' : 'none',
          borderTop: '1px solid var(--color-neutral-200)',
          backgroundColor: 'white'
        }}
      >
        <div className="container" style={{ padding: '1.5rem 0', display: 'grid', gap: '1.25rem' }}>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div style={{ display: 'grid', gap: '0.65rem', paddingTop: '0.5rem' }}>
            <div className="eyebrow">Core services</div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {serviceNav.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="cta-primary" style={{ justifySelf: 'flex-start' }} onClick={() => setMenuOpen(false)}>
            Talk to an expert
          </Link>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu {
            display: none;
          }
        }

        .nav-link {
          font-weight: 500;
          font-size: 0.975rem;
          color: var(--color-neutral-700);
          transition: color var(--transition-fast);
        }

        .nav-link:hover,
        .nav-link:focus-visible {
          color: var(--color-primary);
        }
      `}</style>
    </header>
  );
}
