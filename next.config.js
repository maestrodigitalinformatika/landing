/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: '/',
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig
