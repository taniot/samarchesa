/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
  images: {
    domains: ['media.graphcms.com'],
  },
};

module.exports = nextConfig;
