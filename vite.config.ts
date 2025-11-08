import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This safely injects environment variables into the application during the build process.
    'process.env.API_KEY': JSON.stringify(process.env.VITE_GEMINI_API_KEY),
    'process.env.VITE_API_BASE_URL': process.env.VITE_API_BASE_URL ? JSON.stringify(process.env.VITE_API_BASE_URL) : undefined
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      // FIX: __dirname is not available in ES modules. Use import.meta.url to resolve the path.
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})