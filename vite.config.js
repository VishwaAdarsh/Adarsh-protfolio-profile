import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
const isGhPages = process.env.npm_lifecycle_event === 'predeploy' || process.env.npm_lifecycle_event === 'deploy';
const base = process.env.VITE_BASE_PATH || (isGhPages ? '/adarsh-portfolio/' : '/');

export default defineConfig({
  plugins: [react()],
  base: base,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
