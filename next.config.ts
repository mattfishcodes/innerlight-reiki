import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.7'],
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
