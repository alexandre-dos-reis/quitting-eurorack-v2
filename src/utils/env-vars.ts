const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
const GQL_ENDPOINT = `${API_ENDPOINT}/graphql`
const ASSETS_ENDPOINT = `${API_ENDPOINT}/assets`
const EMAIL = import.meta.env.VITE_EMAIL

export const ENV_VARS = {
  ACCESS_TOKEN,
  GQL_ENDPOINT,
  ASSETS_ENDPOINT,
  EMAIL
};