import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <Image src="/logo.png" alt="Butcherbird" width={80} height={26} style={{ opacity: 0.5 }} />
          <p className="f-label">butcherbird.global · Cape Town · 2026</p>
          <ul className="footer-links">
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/partner">Partner</Link></li>
            <li><a href="mailto:hello@butcherbird.global">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
