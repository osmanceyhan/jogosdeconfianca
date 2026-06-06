import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://jogosdeconfianca.live';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/terms-and-conditions`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/responsible-gambling`, lastModified: new Date(), priority: 0.4 },
  ];
}
