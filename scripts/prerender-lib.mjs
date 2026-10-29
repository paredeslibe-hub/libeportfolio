// Funciones puras del pre-render: no tocan disco ni importan la app.

const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (s) => escapeText(s).replace(/"/g, '&quot;');

// Reemplaza una etiqueta que debe existir exactamente una vez en el template.
function replaceOnce(html, pattern, replacement, label) {
  const count = (html.match(new RegExp(pattern.source, 'g')) ?? []).length;
  if (count !== 1) {
    throw new Error(`index.html: se esperaba exactamente un ${label} y hay ${count}`);
  }
  return html.replace(pattern, () => replacement);
}

const metaPattern = (attr, name) => new RegExp(`<meta ${attr}="${name}" content="[^"]*" \\/>`);

export function injectHead(template, values) {
  let html = replaceOnce(template, /<title>[^<]*<\/title>/, `<title>${escapeText(values.title)}</title>`, '<title>');

  const metas = [
    ['name', 'description', values.description],
    ['name', 'robots', values.robots],
    ['property', 'og:type', values.ogType],
    ['property', 'og:title', values.title],
    ['property', 'og:description', values.description],
    ['property', 'og:image', values.image],
    ['name', 'twitter:title', values.title],
    ['name', 'twitter:description', values.description],
    ['name', 'twitter:image', values.image],
  ];
  for (const [attr, name, content] of metas) {
    html = replaceOnce(html, metaPattern(attr, name), `<meta ${attr}="${name}" content="${escapeAttr(content)}" />`, name);
  }

  const ogUrl = /\s*<meta property="og:url" content="[^"]*" \/>/;
  const canonical = /\s*<link rel="canonical" href="[^"]*" \/>/;
  if (values.canonical === null) {
    html = replaceOnce(html, ogUrl, '', 'og:url');
    return replaceOnce(html, canonical, '', 'canonical');
  }
  const href = escapeAttr(values.canonical);
  html = replaceOnce(html, ogUrl, `\n    <meta property="og:url" content="${href}" />`, 'og:url');
  return replaceOnce(html, canonical, `\n    <link rel="canonical" href="${href}" />`, 'canonical');
}

export function injectRoot(html, appHtml) {
  return replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, '<div id="root">');
}

export function outputFileFor(routePath) {
  if (routePath === '*') return '404.html';
  if (routePath === '/') return 'index.html';
  return `${routePath.slice(1)}.html`;
}

export function buildSitemap(urls) {
  const items = urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

export function collectPaths(routes) {
  return routes.flatMap((route) => [
    ...(route.path ? [route.path] : []),
    ...collectPaths(route.children ?? []),
  ]);
}

export function diffPaths(routePaths, seoPaths) {
  return {
    missingSeo: routePaths.filter((p) => !seoPaths.includes(p)),
    orphanSeo: seoPaths.filter((p) => !routePaths.includes(p)),
  };
}

const ASSET_REF = /\/assets\/[^"'\s()<>&?#]+?\.(?:png|jpe?g|webp|avif|svg|gif|mp4|webm|js|css|woff2?)(?![\w.])/g;

export function assetRefs(html) {
  return [...new Set(html.match(ASSET_REF) ?? [])];
}
