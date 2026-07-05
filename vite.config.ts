import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const BANNER = '/*! © 2026 wadasiwak. All rights reserved. */\n'

// Prepend the copyright banner to every emitted JS chunk.
const copyrightBanner = (): Plugin => ({
  name: 'copyright-banner',
  enforce: 'post',
  generateBundle(_options, bundle) {
    for (const chunk of Object.values(bundle)) {
      if (chunk.type === 'chunk') chunk.code = BANNER + chunk.code
    }
  },
})

export default defineConfig({
  plugins: [react(), copyrightBanner()],
  // Relative base so the static build works under GitHub Pages subpaths.
  base: './',
  server: { port: 5192 },
  preview: { port: 5192 },
})
