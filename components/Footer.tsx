'use client'

import { useState } from 'react'
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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Image
            src="/Butcherbird Logo.png"
            alt="Butcherbird"
            width={180}
            height={65}
            style={{ width: 'auto', height: 44, filter: 'invert(1)', opacity: logoVisible ? 0.85 : 0, transition: 'opacity .6s ease' }}
            onLoad={() => setLogoVisible(true)}
          />
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-col-hd">This page</p>
            <ul>
              <li><a href="#hero">Agency</a></li>
              <li><a href="#what-we-do">What We Do</a></li>
              <li><a href="#client-stories">Client Stories</a></li>
              <li><a href="#team">The Team</a></li>
              <li><a href="#contact-form">Get in Touch</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-hd">Pages</p>
            <ul>
              <li><Link href="/">Agency</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/partner">Partner</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-hd">Connect</p>
            <ul>
              <li><a href="mailto:hello@butcherbird.global">hello@butcherbird.global</a></li>
              <li>
                <a href="https://www.instagram.com/butcherbird.global" target="_blank" rel="noopener noreferrer" className="footer-insta-link">
                  <InstagramIcon /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="f-label">© 2026 Butcherbird Global · Cape Town, South Africa</p>
          <a href="https://www.instagram.com/butcherbird.global" target="_blank" rel="noopener noreferrer" className="footer-insta-icon" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
