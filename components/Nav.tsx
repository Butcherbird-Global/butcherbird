'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)

  function closeMenu() { setMenuOpen(false) }

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" onClick={closeMenu}>
          <Image src="/Butcherbird Logo.png" alt="Butcherbird" className="nav-logo" width={200} height={72} style={{ width: 'auto', opacity: logoVisible ? 1 : 0, transition: 'opacity .6s ease' }} onLoad={() => setLogoVisible(true)} />
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
          <li>
            <a href="https://www.instagram.com/butcherbird.global" className="nav-insta" target="_blank" rel="noopener noreferrer" onClick={closeMenu} aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
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
