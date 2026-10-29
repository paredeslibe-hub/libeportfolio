// Paso final de `pnpm build`: escribe un HTML por ruta en dist/ y el sitemap.
// Frena el build si una ruta no tiene SEO, si un render falla o si falta un asset.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  injectHead,
  injectRoot,
  outputFileFor,
  buildSitemap,
  collectPaths,
  diffPaths,
  assetRefs,
} from './prerender-lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, routes, seoRoutes, SITE_URL, DEFAULT_IMAGE, canonicalUrl, robotsContent } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const errors = [];

const { missingSeo, orphanSeo } = diffPaths(collectPaths(routes), seoRoutes.map((r) => r.path));
if (missingSeo.length) errors.push(`rutas sin entrada en src/app/seo.ts: ${missingSeo.join(', ')}`);
if (orphanSeo.length) errors.push(`entradas de src/app/seo.ts sin ruta: ${orphanSeo.join(', ')}`);
if (errors.length) fail();

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

for (const seo of seoRoutes) {
  try {
    const url = seo.path === '*' ? '/__pagina-inexistente__' : seo.path;
    const appHtml = await render(url);
    if (!seo.noindex && !/<h1[\s>]/.test(appHtml)) errors.push(`${seo.path}: no tiene <h1>`);

    const head = {
      title: seo.title,
      description: seo.description,
      robots: robotsContent(seo),
      canonical: canonicalUrl(seo),
      ogType: seo.path === '/' ? 'profile' : 'website',
      image: SITE_URL + (seo.image ?? DEFAULT_IMAGE),
    };
    const html = injectRoot(injectHead(template, head), appHtml);

    for (const ref of assetRefs(html)) {
      if (!fs.existsSync(path.join(distDir, decodeURIComponent(ref)))) errors.push(`${seo.path}: falta ${ref} en dist/`);
    }

    const outFile = path.join(distDir, outputFileFor(seo.path));
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log(`prerender: ${seo.path} -> ${path.relative(root, outFile)}`);
  } catch (error) {
    errors.push(`${seo.path}: ${error.message}`);
  }
}

const sitemapUrls = seoRoutes.filter((r) => !r.noindex && r.path !== '*').map(canonicalUrl);
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemap(sitemapUrls));
console.log(`prerender: sitemap.xml con ${sitemapUrls.length} URLs`);

fs.rmSync(ssrDir, { recursive: true, force: true });
if (errors.length) fail();

function fail() {
  console.error(`\nprerender falló:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
