/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/property-care',
  assetPrefix: '/property-care/',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
