'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <Link href="/">
        <Image src="/logo.png" alt="Butcherbird" className="nav-logo" width={120} height={34} />
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/" className={pathname === '/' ? 'active-link' : ''} data-p="home">
            Agency
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className={pathname === '/portfolio' ? 'active-link' : ''} data-p="portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/work" className={pathname === '/work' ? 'active-link' : ''} data-p="work">
            Our Work
          </Link>
        </li>
        <li>
          <Link href="/partner" className={pathname === '/partner' ? 'active-link' : ''} data-p="partner">
            Partner
          </Link>
        </li>
        <li>
          <Link href="/#audit" className="nav-cta">
            Free Audit
          </Link>
        </li>
      </ul>
    </nav>
  )
}
