import { GraphQLClient } from 'graphql-request'
import { ENV_VARS } from '../../utils/env-vars'

export const client = new GraphQLClient(ENV_VARS.GQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ${ENV_VARS.ACCESS_TOKEN}`,
  },
})