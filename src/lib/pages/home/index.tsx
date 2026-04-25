import { Flex } from '@chakra-ui/react';

import { CTASection } from './components/cta-section';
import { TechStackLogos } from './components/tech-stack-logos';
import { HeroHeading } from './components/hero-heading';

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
