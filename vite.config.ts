import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the static build works under GitHub Pages subpaths.
  base: './',
  server: { port: 5192 },
  preview: { port: 5192 },
})
