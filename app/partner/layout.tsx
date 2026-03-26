import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner With Us',
  description: 'Butcherbird Global partners with VCs, entrepreneurs, and exceptional talent to build and scale consumer brands from Cape Town to international markets.',
  alternates: {
    canonical: 'https://butcherbird.global/partner',
  },
  openGraph: {
    title: 'Partner With Us | Butcherbird Global',
    description: 'We are looking for the next brand to build. VCs, entrepreneurs, and operators — apply to partner with Butcherbird Global.',
    url: 'https://butcherbird.global/partner',
  },
}

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return children
}
