import type { CodegenConfig } from '@graphql-codegen/cli'
require('dotenv').config()

const config: CodegenConfig = {
  schema: `${process.env.VITE_API_ENDPOINT}/graphql?access_token=${process.env.VITE_ACCESS_TOKEN}`,
  documents: [
     './src/**/!(*.d).{ts,tsx}',
    ],
  generates: {
    'src/graphql/generated/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        fetcher: 'graphql-request',
      },
    },
  },
}

export default config