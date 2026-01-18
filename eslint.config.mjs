import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import { importX } from 'eslint-plugin-import-x'

const eslintConfig = [
  ...nextCoreWebVitals,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  ...nextTypescript,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
    rules: {
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin', // fs, path
            'external', // react, next, npm packages
            'internal', // @/ aliases
            'parent', // ../
            'sibling', // ./
            'index', // ./
            'type', // type imports
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Prefer inline `type` imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
    },
  },
]

export default eslintConfig
