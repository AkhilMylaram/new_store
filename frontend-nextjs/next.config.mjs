/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  // Support custom PORT via environment variable
  // Default: 3000
  // Usage: PORT=3001 npm run dev
  async redirects() {
    return []
  }
}

export default nextConfig
