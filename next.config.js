/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Always use the Portfolio prefix for GitHub Pages
  assetPrefix: '/Portfolio',
  basePath: '/Portfolio',
  distDir: 'out',
  // Add this to help with static assets
  experimental: {
    staticPageGenerationTimeout: 1000,
  }
}

module.exports = nextConfig
