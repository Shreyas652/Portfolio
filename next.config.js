/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  distDir: 'out',
  // Add this to help with static assets
  experimental: {
    staticPageGenerationTimeout: 1000,
  }
}

module.exports = nextConfig
