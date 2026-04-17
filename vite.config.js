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
        const pageTitle = renderedRoute.title || 'VSGRPS — Building Digital Excellence';
        renderedRoute.html = renderedRoute.html
          .replace(/<title>(.*?)<\/title>/g, '')
          .replace(/<head>/, `<head><title>${pageTitle}</title>`);
        
        // Manual override for the root index.html
        // We render /index and save it as the main index.html
        if (renderedRoute.route === '/index') {
          const outputPath = path.join(__dirname, 'dist', 'index.html');
          fs.writeFileSync(outputPath, renderedRoute.html);
          console.log(`[Prerender] Manually updated root index.html from ${renderedRoute.route}`);
        }
        
        return renderedRoute;
      },
    }),
  ],
})
