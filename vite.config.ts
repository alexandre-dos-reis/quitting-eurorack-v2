import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
// https://github.com/aleclarson/vite-tsconfig-paths
export default defineConfig({
  plugins: [tsconfigPaths(), react()]
})
