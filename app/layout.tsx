import './globals.css';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';

import { baseMetadata, globalStructuredData, stringifyStructuredData } from '@/src/lib/structuredData';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
        <Script
          id="global-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifyStructuredData(globalStructuredData) }}
        />
      </body>
    </html>
  );
}
