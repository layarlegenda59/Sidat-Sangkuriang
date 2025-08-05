/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Force fresh deployment
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

export default nextConfig