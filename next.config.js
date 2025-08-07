/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Remove static export to enable API routes
  experimental: {
    outputFileTracingRoot: __dirname,
  }
}

module.exports = nextConfig
