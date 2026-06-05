import type { MetadataRoute } from 'next';

const BASE = 'https://vaultjackpotzone.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/responsible-gambling`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
