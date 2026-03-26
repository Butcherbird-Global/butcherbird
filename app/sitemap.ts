import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/data'
import { services } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://butcherbird.global'
  const now = new Date()

  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((s) => ({
    url: `${base}/work/${s.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/portfolio`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/partner`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...serviceUrls,
    ...caseStudyUrls,
  ]
}
