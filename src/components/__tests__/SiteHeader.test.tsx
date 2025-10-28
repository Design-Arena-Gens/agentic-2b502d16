import { render, screen } from '@testing-library/react';

import { SiteHeader } from '@/src/components/SiteHeader';

describe('SiteHeader', () => {
  it('renders primary navigation links', () => {
    render(<SiteHeader />);
    const link = screen.getAllByRole('link', { name: /services/i })[0];
    expect(link).toHaveAttribute('href', '/services');
  });
});
