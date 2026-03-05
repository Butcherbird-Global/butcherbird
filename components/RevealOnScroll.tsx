'use client'

import { useEffect, useRef } from 'react'

export default function RevealOnScroll() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll<HTMLElement>('.reveal, .reveal-l, .tl-item').forEach((el) => {
      obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return null
}
