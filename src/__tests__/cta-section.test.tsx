import { describe, expect, it, vi } from 'vitest';

import { CTASection } from '@/lib/pages/home/components/cta-section';
import { render, screen } from '@/test/utils';

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe('CTASection', () => {
  it('renders without crashing', () => {
    render(<CTASection />);
    expect(screen.getByText('Use This Template')).toBeInTheDocument();
    expect(screen.getByText('Open in Github')).toBeInTheDocument();
  });
});
