import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://opire.dev',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
            // images: ['https://opire.dev/assets/images/opire/landing.png'],
        },
        {
            url: 'https://opire.dev/open-startup',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ]
}