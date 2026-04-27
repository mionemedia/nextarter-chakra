'use client';

import { Flex } from '@chakra-ui/react';

import { LogoWithTooltip } from './logo-with-tooltip';

export const TechStackLogos = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <LogoWithTooltip src="/chakra-ui-logomark-colored.svg" label="Chakra UI" />
      <LogoWithTooltip src="/ts-logo-512.svg" label="TypeScript" />
    </Flex>
  );
};
