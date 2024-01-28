/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
