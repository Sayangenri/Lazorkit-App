# Vite AllowedHosts Quick Guide

Configure Vite dev server to allow external domains (Cloudflare Tunnel, ngrok, etc.)

## What is `allowedHosts`?

`allowedHosts` specifies which external domains can access your Vite dev server. Required when using tunneling tools.

## Cloudflare Tunnel Setup

1. **Run tunnel command:**
   ```bash
   cloudflared tunnel --url http://localhost:5173
**Example:**
Copy domain from output URL

https://improved-respond-cam-fin.trycloudflare.com
↓
improved-respond-cam-fin.trycloudflare.com

---

## Vite Config

File: `vite.config.ts` or `vite.config.js`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'improved-respond-cam-fin.trycloudflare.com', // replace here 
    ],
  },
})
