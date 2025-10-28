import { siteConfig } from '@/src/lib/siteConfig';

const robots = `User-agent: *
Allow: /
Sitemap: ${siteConfig.company.url}/sitemap.xml
`;

export function GET() {
  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
