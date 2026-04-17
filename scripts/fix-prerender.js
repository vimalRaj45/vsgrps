import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const indexRoutePath = path.join(distDir, 'index', 'index.html');
const rootIndexPath = path.join(distDir, 'index.html');

if (fs.existsSync(indexRoutePath)) {
    console.log('[Fix] Moving pre-rendered home page to root index.html...');
    const content = fs.readFileSync(indexRoutePath, 'utf8');
    fs.writeFileSync(rootIndexPath, content);
    console.log('[Fix] Successfully updated root index.html');
    
    // Clean up the temporary index folder
    const indexDir = path.join(distDir, 'index');
    if (fs.existsSync(indexDir)) {
        fs.rmSync(indexDir, { recursive: true, force: true });
        console.log('[Fix] Cleaned up temporary index folder');
    }
} else {
    console.error('[Fix] Could not find pre-rendered home page at:', indexRoutePath);
}
