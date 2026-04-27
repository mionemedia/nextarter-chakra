import { Flex } from '@chakra-ui/react';

import { CTASection } from './components/cta-section';
import { HeroHeading } from './components/hero-heading';
import { TechStackLogos } from './components/tech-stack-logos';

export const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <HeroHeading />
      <TechStackLogos />
      <CTASection />
    </Flex>
  );
};
