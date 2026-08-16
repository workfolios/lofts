import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  INDEXABLE_ROUTES,
  SEO_ROUTES,
  buildStructuredData,
  canonicalUrlFor,
} from '../seo.config.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(scriptDir, '../dist');
const indexPath = path.join(distDir, 'index.html');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Unable to generate SEO entry point: missing ${label}.`);
  }

  return html.replace(pattern, replacement);
}

function setMetaName(html, name, content) {
  return replaceRequired(
    html,
    new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, 'i'),
    `<meta name="${name}" content="${escapeHtml(content)}" />`,
    `meta[name="${name}"]`,
  );
}

function setMetaProperty(html, property, content) {
  return replaceRequired(
    html,
    new RegExp(`<meta\\s+property=["']${property}["'][^>]*>`, 'i'),
    `<meta property="${property}" content="${escapeHtml(content)}" />`,
    `meta[property="${property}"]`,
  );
}

function renderPage(template, seo, robotsOverride) {
  const canonicalUrl = canonicalUrlFor(seo);
  const robots = robotsOverride ?? (
    seo.indexable
      ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      : 'noindex, follow'
  );
  let html = template;

  html = replaceRequired(
    html,
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(seo.title)}</title>`,
    '<title>',
  );
  html = setMetaName(html, 'description', seo.description);
  html = setMetaName(html, 'robots', robots);
  html = replaceRequired(
    html,
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    'canonical link',
  );
  html = setMetaProperty(html, 'og:title', seo.title);
  html = setMetaProperty(html, 'og:description', seo.description);
  html = setMetaProperty(html, 'og:url', canonicalUrl);
  html = setMetaName(html, 'twitter:title', seo.title);
  html = setMetaName(html, 'twitter:description', seo.description);
  html = replaceRequired(
    html,
    /<script\s+id=["']structured-data["'][^>]*>[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">\n${JSON.stringify(buildStructuredData(seo), null, 2)}\n</script>`,
    'structured data script',
  );

  return html;
}

function buildSitemap() {
  const urls = INDEXABLE_ROUTES.map((route) => {
    const loc = canonicalUrlFor(SEO_ROUTES[route]);
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const template = await readFile(indexPath, 'utf8');

for (const route of INDEXABLE_ROUTES) {
  const seo = SEO_ROUTES[route];
  const html = renderPage(template, seo);

  if (route === '/') {
    await writeFile(indexPath, html, 'utf8');
    continue;
  }

  const routeDir = path.join(distDir, route.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, 'index.html'), html, 'utf8');
}

let fallback = renderPage(template, SEO_ROUTES['/'], 'noindex, follow');
fallback = fallback.replace(/\s*<link\s+rel=["']canonical["'][^>]*>\s*/i, '\n');
await writeFile(path.join(distDir, '404.html'), fallback, 'utf8');
await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemap(), 'utf8');

console.log(`Generated ${INDEXABLE_ROUTES.length} canonical HTML entry points, 404 fallback, and sitemap.xml.`);
