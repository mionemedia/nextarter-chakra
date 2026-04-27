import { describe, expect, it, vi } from 'vitest';

import { TechStackLogos } from '@/lib/pages/home/components/tech-stack-logos';
import { render, screen } from '@/test/utils';

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe('TechStackLogos', () => {
  it('renders without crashing', () => {
    render(<TechStackLogos />);
    expect(screen.getByRole('img', { name: 'Chakra UI' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'TypeScript' })).toBeInTheDocument();
  });
});
