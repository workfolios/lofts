export const SITE_URL = 'https://workfolios.github.io/lofts';
export const SITE_NAME = 'Caroline Lofts';
export const IMAGE_URL = `${SITE_URL}/caroline-lofts-headshot-clean.png`;

export const SEO_ROUTES = {
  '/': {
    title: 'Caroline Lofts | Songwriter, Recording Artist & Creative Portfolio',
    description: 'Caroline Lofts is a songwriter, singer-songwriter, recording artist, and creative professional spanning music for screen, editorial publishing, and creative communities.',
    canonicalPath: '/',
    indexable: true,
  },
  '/music': {
    title: 'Caroline Lofts Music | Songwriting, Co-Writing & Music for Screen',
    description: "Explore Caroline Lofts' songwriting, co-writing, and music for screen, including current work, selected credits, and emotionally intelligent storytelling.",
    canonicalPath: '/music/',
    indexable: true,
  },
  '/editorial': {
    title: 'Caroline Lofts Editorial | Publishing & Place-Based Storytelling',
    description: "Explore Caroline Lofts' publication work, editorial judgment, visual rhythm, and place-based storytelling across cultural and community-facing projects.",
    canonicalPath: '/editorial/',
    indexable: true,
  },
  '/contact': {
    title: 'Contact Caroline Lofts | Media, Music & Creative Collaboration',
    description: 'Contact Caroline Lofts for press, interviews, music inquiries, songwriting, co-writing, music for screen, and selected creative collaborations.',
    canonicalPath: '/contact/',
    indexable: true,
  },
  '/community': {
    title: 'Caroline Lofts | Songwriter, Recording Artist & Creative Portfolio',
    description: 'Caroline Lofts is a songwriter, singer-songwriter, recording artist, and creative professional spanning music for screen, editorial publishing, and creative communities.',
    canonicalPath: '/',
    indexable: false,
  },
  '/archive': {
    title: 'Caroline Lofts Editorial | Publishing & Place-Based Storytelling',
    description: "Explore Caroline Lofts' publication work, editorial judgment, visual rhythm, and place-based storytelling across cultural and community-facing projects.",
    canonicalPath: '/editorial/',
    indexable: false,
  },
};

export const INDEXABLE_ROUTES = ['/', '/music', '/editorial', '/contact'];

export function canonicalUrlFor(seo) {
  return `${SITE_URL}${seo.canonicalPath}`;
}

export function buildStructuredData(seo) {
  const canonicalUrl = canonicalUrlFor(seo);
  const personId = `${SITE_URL}/#caroline-lofts`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Caroline Lofts',
        url: `${SITE_URL}/`,
        image: IMAGE_URL,
        description: 'Caroline Lofts is a songwriter, singer-songwriter, recording artist, and creative professional whose work spans music, publishing, and creative communities.',
        jobTitle: 'Songwriter and creative professional',
        knowsAbout: [
          'Songwriting',
          'Co-writing',
          'Music for screen',
          'Editorial publishing',
          'Creative communities',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_URL}/`,
        name: 'Caroline Lofts | Songs. Stories. Spaces.',
        description: 'Music, language, and emotionally intelligent storytelling across songs, screen, publications, and creative communities.',
        inLanguage: 'en',
        about: { '@id': personId },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: 'en',
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: IMAGE_URL,
        },
      },
    ],
  };
}
