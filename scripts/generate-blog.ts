import fs from 'node:fs/promises';
import path from 'node:path';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

import { siteConfig } from '@/src/lib/siteConfig';

const OUTPUT_DIR = path.join(process.cwd(), 'content', 'blog', 'drafts');

const argv = new Map<string, string>();
for (let i = 2; i < process.argv.length; i += 1) {
  const arg = process.argv[i];
  if (arg.startsWith('--')) {
    const [key, value] = arg.split('=');
    argv.set(key.replace(/^--/, ''), value ?? process.argv[++i] ?? '');
  }
}

const topic = argv.get('topic');
const audience = argv.get('audience') ?? 'Indian SME growth leaders';

if (!topic) {
  console.error('Usage: npm run blog:generate -- --topic="Your article topic" [--audience="Target audience"]');
  process.exit(1);
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('Missing GEMINI_API_KEY environment variable.');
  process.exit(1);
}

const responseSchema = z.object({
  title: z.string().min(10),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  summary: z.string().min(40).max(260),
  headings: z.array(z.object({ heading: z.string(), body: z.string().min(80) })).min(4),
  keyTakeaways: z.array(z.string().min(20)).min(3),
  citations: z.array(z.object({ source: z.string(), url: z.string().url() })).min(2),
  suggestedFaqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string().min(60)
      })
    )
    .max(4)
});

async function main() {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

  const prompt = `You are drafting a blog post for ${siteConfig.company.name}, an India-based agency serving SMEs.
Topic: ${topic}
Audience: ${audience}
Goals: Deliver helpful, original guidance referencing Indian SME realities, align with Google March 2024 quality update, and include actionable steps. Cite reputable 2023-2024 sources.
Return JSON matching the schema provided.`;

  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    responseSchema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        slug: { type: 'string' },
        summary: { type: 'string' },
        headings: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              heading: { type: 'string' },
              body: { type: 'string' }
            }
          }
        },
        keyTakeaways: { type: 'array', items: { type: 'string' } },
        citations: {
          type: 'array',
          items: {
            type: 'object',
            properties: { source: { type: 'string' }, url: { type: 'string' } }
          }
        },
        suggestedFaqs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              question: { type: 'string' },
              answer: { type: 'string' }
            }
          }
        }
      }
    }
  });

  const raw = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw) {
    throw new Error('Gemini response missing content.');
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    console.error('Failed to parse Gemini response:', raw);
    throw error;
  }

  const validated = responseSchema.safeParse(parsed);
  if (!validated.success) {
    console.error('Gemini output failed quality checks:', validated.error.format());
    process.exit(1);
  }

  const { title, slug, summary, headings, keyTakeaways, citations, suggestedFaqs } = validated.data;

  const draft = {
    topic,
    audience,
    title,
    slug,
    summary,
    headings,
    keyTakeaways,
    citations,
    suggestedFaqs,
    editorialChecks: {
      helpfulContentAligned: true,
      citationsVerified: false,
      structuredDataPrepared: ['Article', 'FAQ']
    }
  };

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const filePath = path.join(OUTPUT_DIR, `${slug}.json`);
  await fs.writeFile(filePath, JSON.stringify(draft, null, 2), 'utf-8');

  console.log(`Draft saved to ${filePath}`);
  console.log('Review the draft, fact-check citations, and convert to Markdown before publishing.');
}

main().catch((error) => {
  console.error('Blog generation failed:', error);
  process.exit(1);
});
