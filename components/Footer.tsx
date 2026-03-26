'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export default function Footer() {
  const [logoVisible, setLogoVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLogoVisible(true), 100); return () => clearTimeout(t) }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Image
            src="/Butcherbird Logo.png"
            alt="Butcherbird"
            width={180}
            height={65}
            style={{ width: 'auto', height: 44, filter: 'brightness(0)', opacity: logoVisible ? 0.75 : 0, transition: 'opacity .7s ease' }}
          />
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-hd">Pages</p>
            <ul>
              <li><Link href="/">Agency</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/partner">Partner</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-hd">Services</p>
            <ul>
              <li><Link href="/services/paid-media">Paid Media</Link></li>
              <li><Link href="/services/email-marketing">Email Marketing</Link></li>
              <li><Link href="/services/growth-strategy">Growth Strategy</Link></li>
              <li><Link href="/services/creative">Creative Production</Link></li>
              <li><Link href="/services/brand-web">Brand & Web</Link></li>
              <li><Link href="/services/ai-automation">AI & Automation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-hd">Work</p>
            <ul>
              <li><Link href="/work/buub">BUUB</Link></li>
              <li><Link href="/work/schnozz">Schnozz</Link></li>
              <li><Link href="/work/superior">Superior</Link></li>
              <li><Link href="/work/lakrids">Lakrids</Link></li>
              <li><Link href="/work/numuti">Numuti</Link></li>
              <li><Link href="/work/kokee">Kokee</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-hd">Connect</p>
            <ul>
              <li><a href="mailto:g@butcherbird.global">g@butcherbird.global</a></li>
              <li>
                <a href="https://www.instagram.com/butcherbirdglobal" target="_blank" rel="noopener noreferrer" className="footer-insta-link">
                  <InstagramIcon /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="f-label">© 2026 Butcherbird Global · Cape Town, South Africa</p>
          <a href="https://www.instagram.com/butcherbirdglobal" target="_blank" rel="noopener noreferrer" className="footer-insta-icon" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
