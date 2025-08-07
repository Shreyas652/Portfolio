/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Always use the Portfolio prefix for GitHub Pages
  assetPrefix: '/Portfolio/',
  basePath: '/Portfolio',
  distDir: 'out'
}

module.exports = nextConfig
