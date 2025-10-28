import type { ReactNode } from 'react';

import { SiteFooter } from '@/src/components/SiteFooter';
import { SiteHeader } from '@/src/components/SiteHeader';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
