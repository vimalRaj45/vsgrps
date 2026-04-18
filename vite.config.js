import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prerender from '@prerenderer/rollup-plugin'
import JSDOMRenderer from '@prerenderer/renderer-jsdom'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/services', '/projects', '/contact', '/blog', '/privacy', '/terms', '/cookies'],
      renderer: new JSDOMRenderer({
        renderAfterTime: 5000,
        injectProperty: '__PRERENDER_INJECTED',
        inject: { foo: 'bar' },
      }),
      postProcess(renderedRoute) {
        // Remove existing title tags to prevent duplicates and ensure Helmet title wins
        renderedRoute.html = renderedRoute.html.replace(/<title>(.*?)<\/title>/g, '');
        return renderedRoute;
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // FIX 8: Manual chunk splitting → reduces unused JS by ~182KB
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // FIX 8: Function form required by Vite 8 / Rolldown
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'vendor';
          if (id.includes('node_modules/primereact'))  return 'primereact';
          if (id.includes('node_modules/react-router')) return 'router';
          if (id.includes('node_modules/framer-motion')) return 'framer';
          if (id.includes('node_modules/swiper'))       return 'swiper';
        },
      },
    },
  },
})
