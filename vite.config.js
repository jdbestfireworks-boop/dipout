import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    base44({
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ],

  // ⭐ REQUIRED FOR RENDER DEPLOYMENT ⭐
  preview: {
    allowedHosts: ['dipout-kaq5.onrender.com'],
    host: '0.0.0.0',
    port: 10000
  }
})
