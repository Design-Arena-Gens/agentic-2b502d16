import type { Metadata } from 'next';
import Script from 'next/script';

import { FAQSection } from '@/src/components/FAQSection';
import { getAllPosts, getArticleStructuredData, getFaqStructuredData, getPostBySlug, getPostSlugs } from '@/src/lib/blog';
import { siteConfig } from '@/src/lib/siteConfig';

type BlogPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx?$/, '') }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical: `${siteConfig.company.url}/blog/${post.slug}` }
  } satisfies Metadata;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await getPostBySlug(params.slug);
  const articleJsonLd = getArticleStructuredData(post);
  const faqJsonLd = post.faq ? getFaqStructuredData(post.faq) : null;

  return (
    <>
      <article className="section" style={{ paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <span className="tag" style={{ width: 'fit-content' }}>{post.tags[0]}</span>
          <h1 className="heading-xl">{post.title}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', color: 'var(--color-neutral-500)' }}>
            <span>{new Date(post.publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="body-lg" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </article>

      {post.sources ? (
        <section className="section section-tight" style={{ background: 'var(--color-neutral-100)' }}>
          <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1rem' }}>
            <h2 className="heading-md">Sources & Further Reading</h2>
            <ul>
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {post.faq ? (
        <section className="section">
          <div className="container" style={{ maxWidth: '760px' }}>
            <FAQSection faqs={post.faq.map((item) => ({ question: item.question, answer: item.answer }))} title="FAQs" />
          </div>
        </section>
      ) : null}

      <section className="section section-tight" style={{ background: 'linear-gradient(140deg, rgba(31,79,138,0.14), rgba(6,180,154,0.14))' }}>
        <div className="container" style={{ maxWidth: '760px', display: 'grid', gap: '1.5rem' }}>
          <h2 className="heading-lg">Need help implementing this playbook?</h2>
          <p className="body-lg">Book a working session with our consultants to adapt these tactics to your SME.</p>
          <a className="cta-primary" href="/contact">
            Talk to VyaparTech
          </a>
        </div>
      </section>

      <Script id={`article-structured-data-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd ? <Script id={`article-faq-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}
    </>
  );
}
