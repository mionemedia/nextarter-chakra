import { Flex, Link, Text } from '@chakra-ui/react';

import { siteConfig } from '@/lib/config/site';

export const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href={siteConfig.authorUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.authorName}
        </Link>
      </Text>
    </Flex>
  );
};
