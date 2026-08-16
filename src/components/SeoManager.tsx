import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  IMAGE_URL,
  SEO_ROUTES,
  SITE_NAME,
  buildStructuredData,
  canonicalUrlFor,
} from '../../seo.config.mjs';

type SeoEntry = {
  title: string;
  description: string;
  canonicalPath: string;
  indexable: boolean;
};

const routes = SEO_ROUTES as Record<string, SeoEntry>;

function normalizePath(pathname: string) {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

function setMetaByName(name: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setMetaByProperty(property: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

function setCanonical(href: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  canonical.href = href;
}

function setStructuredData(seo: SeoEntry) {
  let script = document.head.querySelector<HTMLScriptElement>('#structured-data');

  if (!script) {
    script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(buildStructuredData(seo));
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = normalizePath(location.pathname);
    const seo = routes[path] ?? routes['/'];
    const canonicalUrl = canonicalUrlFor(seo);
    const robots = seo.indexable
      ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      : 'noindex, follow';

    document.title = seo.title;
    setMetaByName('description', seo.description);
    setMetaByName('robots', robots);
    setMetaByName('author', SITE_NAME);
    setCanonical(canonicalUrl);

    setMetaByProperty('og:site_name', SITE_NAME);
    setMetaByProperty('og:title', seo.title);
    setMetaByProperty('og:description', seo.description);
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:image', IMAGE_URL);
    setMetaByProperty('og:image:type', 'image/png');
    setMetaByProperty('og:image:alt', SITE_NAME);

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', seo.title);
    setMetaByName('twitter:description', seo.description);
    setMetaByName('twitter:image', IMAGE_URL);
    setMetaByName('twitter:image:alt', SITE_NAME);

    setStructuredData(seo);
  }, [location.pathname]);

  return null;
}
