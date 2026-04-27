import { describe, expect, it } from 'vitest';

import { LogoWithTooltip } from '@/lib/pages/home/components/logo-with-tooltip';
import { render, screen } from '@/test/utils';

describe('LogoWithTooltip', () => {
  it('renders without crashing', () => {
    render(<LogoWithTooltip src="/test-logo.svg" label="Test Logo" />);
    expect(screen.getByRole('img', { name: 'Test Logo' })).toBeInTheDocument();
  });
});
