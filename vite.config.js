import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import prerender from '@prerenderer/rollup-plugin'
import JSDOMRenderer from '@prerenderer/renderer-jsdom'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/projects', '/contact'],
      renderer: new JSDOMRenderer({
        renderAfterDocumentEvent: 'render-event',
        injectProperty: '__PRERENDER_INJECTED',
        inject: {
          foo: 'bar'
        },
      }),
      postProcess(renderedRoute) {
        // Simple SEO optimizations
        renderedRoute.html = renderedRoute.html
          .replace(/<script (.*?) src="\/src\/main\.jsx" (.*?)><\/script>/g, '') // Clean up dev scripts if any
          .replace(/(<html[^>]*)/i, '$1 lang="en"');
        
        return renderedRoute;
      },
    }),
  ],
})
