import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/index', '/about', '/projects', '/contact'],
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: 'render-event',
        injectProperty: '__PRERENDER_INJECTED',
        inject: {
          foo: 'bar'
        },
        headless: true,
      }),
      postProcess(renderedRoute) {
        // Fix double title tags and meta issues
        renderedRoute.html = renderedRoute.html
          .replace(/<title>(.*?)<\/title>/g, '')
          .replace(/<head>/, `<head><title>${renderedRoute.title || 'VSGRPS — Building Digital Excellence'}</title>`);
        
        // Manual override for the root index.html from /index route
        if (renderedRoute.route === '/index') {
          fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), renderedRoute.html);
        }
        
        return renderedRoute;
      },
    }),
  ],
})
