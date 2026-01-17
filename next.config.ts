import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    deviceSizes: [576, 768, 992, 1200, 1400],
    imageSizes: [16, 32, 256],
  },
  allowedDevOrigins: ['192.168.1.*'],
}

export default nextConfig
