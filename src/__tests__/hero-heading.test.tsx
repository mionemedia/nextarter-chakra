import { describe, expect, it } from 'vitest';

import { HeroHeading } from '@/lib/pages/home/components/hero-heading';
import { render, screen } from '@/test/utils';

describe('HeroHeading', () => {
  it('renders without crashing', () => {
    render(<HeroHeading />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
