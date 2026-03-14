import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Butcherbird — Scaling Exciting Brands',
  description: 'Cape Town-based growth agency. Paid media. Email marketing. Built by operators.',
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
