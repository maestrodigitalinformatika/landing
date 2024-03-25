/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true },
  // basePath: '/',
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig
