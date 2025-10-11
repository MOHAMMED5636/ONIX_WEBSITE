/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Fallback for SWC issues on Windows
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig