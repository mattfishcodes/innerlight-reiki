import type { NextConfig } from 'next'

const command = process.env.npm_lifecycle_event

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: command === 'build' ? 'export' : undefined,
  trailingSlash: true,
  allowedDevOrigins: ['192.168.1.*'],
  sassOptions: {
    silenceDeprecations: [
      'import',
      'mixed-decls',
      'color-functions',
      'global-builtin',
      'legacy-js-api',
    ],
  },
}

export default nextConfig
