import type { Metadata } from 'next';
import Link from 'next/link';

import { getAllPosts } from '@/src/lib/blog';
import { siteConfig } from '@/src/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on revenue operations, performance marketing, SEO, and web experience for Indian SMEs.',
  alternates: { canonical: `${siteConfig.company.url}/blog` }
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: '760px' }}>
          <span className="eyebrow">Insights</span>
          <h1 className="heading-xl">Practical research for SME growth teams</h1>
          <p className="body-lg">
            Every post includes editorial review notes, citations, and structured data ready for search engines and AI summaries. Use these playbooks to accelerate your next release.
          </p>
        </div>
      </section>

      <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
        <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
          <div className="grid-two">
            {posts.map((post) => (
              <article key={post.slug} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-md)', padding: '1.8rem', background: '#fff', display: 'grid', gap: '0.85rem' }}>
                <span className="tag" style={{ width: 'fit-content' }}>{new Date(post.publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <h2 className="heading-md" style={{ fontSize: '1.6rem' }}>{post.title}</h2>
                <p>{post.summary}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', color: 'var(--color-neutral-500)', fontSize: '0.9rem' }}>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link className="cta-secondary" href={`/blog/${post.slug}`}>
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
