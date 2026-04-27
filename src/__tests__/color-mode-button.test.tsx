import { describe, expect, it, vi } from 'vitest';

import { ColorModeButton } from '@/components/ui/color-mode';
import { render, screen } from '@/test/utils';

vi.mock('@chakra-ui/react', async () => {
  const actual = await vi.importActual<typeof import('@chakra-ui/react')>('@chakra-ui/react');
  return {
    ...actual,
    ClientOnly: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

describe('ColorModeButton', () => {
  it('renders without crashing', () => {
    render(<ColorModeButton />);
    expect(screen.getByRole('button', { name: /toggle color mode/i })).toBeInTheDocument();
  });
});
