import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Butcherbird — Scaling Exciting Brands',
  description: 'Cape Town-based growth agency. Paid media. Email marketing. Built by operators.',
  icons: {
    icon: [
      { url: '/bb-logo-black.png', media: '(prefers-color-scheme: light)' },
      { url: '/bb-logo-white.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Nav />
        {children}
      </body>
    </html>
  )
}
