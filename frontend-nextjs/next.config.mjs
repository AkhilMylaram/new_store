/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  // Support custom PORT via environment variable
  // Default: 3000
  // Usage: PORT=3001 npm run dev
  images: {
    // Allow local images and remote URLs if needed
    domains: [],
    // For Next.js 14+, use remotePatterns if using remote URLs
    remotePatterns: []
  },
  async redirects() {
    return []
  }
}

export default nextConfig
