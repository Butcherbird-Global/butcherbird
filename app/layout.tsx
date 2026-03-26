import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

const BASE_URL = 'https://butcherbird.global'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Butcherbird — Scaling Exciting Brands',
    template: '%s | Butcherbird Global',
  },
  description: 'Cape Town-based growth agency. Paid media. Email marketing. Built by operators who run their own brands on the same system. R10M+ revenue generated from R2.2M ad spend.',
  icons: {
    icon: [
      { url: '/bb-logo-black.png', media: '(prefers-color-scheme: light)' },
      { url: '/bb-logo-white.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: BASE_URL,
    siteName: 'Butcherbird Global',
    title: 'Butcherbird — Scaling Exciting Brands',
    description: 'Cape Town-based growth agency. Paid media. Email marketing. Built by operators who run their own brands on the same system.',
    images: [
      {
        url: '/Butcherbird Logo.png',
        width: 800,
        height: 600,
        alt: 'Butcherbird Global',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Butcherbird — Scaling Exciting Brands',
    description: 'Cape Town-based growth agency. Paid media. Email marketing. Built by operators.',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Butcherbird Global',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/Butcherbird Logo.png`,
      },
      description: 'Cape Town-based growth agency specialising in paid media, email marketing, and creative production for consumer brands.',
      foundingDate: '2025',
      foundingLocation: {
        '@type': 'Place',
        name: 'Cape Town, South Africa',
      },
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 18,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@butcherbird.global',
        contactType: 'sales',
      },
      areaServed: [
        { '@type': 'Country', name: 'South Africa' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Australia' },
      ],
      knowsAbout: [
        'Paid Media Advertising',
        'Meta Ads',
        'Google Ads',
        'Email Marketing',
        'Klaviyo',
        'E-commerce Growth',
        'DTC Brand Building',
        'Creative Production',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#business`,
      name: 'Butcherbird Global',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cape Town',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
      priceRange: '$$',
      serviceType: [
        'Paid Media Management',
        'Email Marketing',
        'Growth Strategy',
        'Creative Production',
        'Brand Building',
        'Web Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: 'Butcherbird Global',
      url: BASE_URL,
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
      </body>
    </html>
  )
}
