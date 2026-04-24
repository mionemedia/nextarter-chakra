/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextarter-chakra.sznm.dev',
  generateRobotsTxt: true,
};

module.exports = NextSitemapConfig;
