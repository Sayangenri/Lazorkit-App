import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
  ],
  server: {
    allowedHosts: [
      'improved-respond-cam-fin.trycloudflare.com',
    ],
  },
})
