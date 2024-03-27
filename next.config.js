/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost','drive.google.com'],
 },
};

module.exports = nextConfig;
