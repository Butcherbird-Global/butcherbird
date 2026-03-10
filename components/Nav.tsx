'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() { setMenuOpen(false) }

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" onClick={closeMenu}>
          <Image src="/Butcherbird Logo.png" alt="Butcherbird" className="nav-logo" width={200} height={56} />
        </Link>
        <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <li>
            <Link href="/" className={pathname === '/' ? 'active-link' : ''} data-p="home" onClick={closeMenu}>
              Agency
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={pathname === '/portfolio' ? 'active-link' : ''} data-p="portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/work" className={pathname === '/work' ? 'active-link' : ''} data-p="work" onClick={closeMenu}>
              Our Work
            </Link>
          </li>
          <li>
            <Link href="/partner" className={pathname === '/partner' ? 'active-link' : ''} data-p="partner" onClick={closeMenu}>
              Partner
            </Link>
          </li>
          <li>
            <Link href="/#contact" data-p="contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <a href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" className="nav-cta" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Book a Call
            </a>
          </li>
        </ul>
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
