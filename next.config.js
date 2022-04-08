/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
};

module.exports = nextConfig;
