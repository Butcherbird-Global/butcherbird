import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio — Brands Built From Nothing',
  description: 'BUUB Sunscreen, Schnozz Strips, Superior Fragrances — three brands built from zero to national retail by Butcherbird Global. Real numbers, real timelines, documented in full.',
  alternates: {
    canonical: 'https://butcherbird.global/portfolio',
  },
  openGraph: {
    title: 'Our Portfolio — Brands Built From Nothing | Butcherbird Global',
    description: 'Three brands built from zero to national retail. 6.82x ROAS, 50K+ customers, 600+ retail doors. Documented in full.',
    url: 'https://butcherbird.global/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
