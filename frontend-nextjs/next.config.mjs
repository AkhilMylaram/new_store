/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable to avoid strict mode double-rendering during dev
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
    remotePatterns: [],
    // Allow unoptimized images (important for missing images)
    unoptimized: false // We handle this per-component
  },
  async redirects() {
    return []
  },
  // Disable image optimization to avoid 400 errors on missing images
  // This is only for development - enable for production with real images
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
}

export default nextConfig
