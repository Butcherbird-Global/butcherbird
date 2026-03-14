'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let rafId: number

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as Element
      if (target.closest('a, button, [role="button"], select, textarea, input')) {
        dot.classList.add('cursor-active')
        ring.classList.add('cursor-active')
      }
    }

    function onMouseOut(e: MouseEvent) {
      const target = e.target as Element
      if (target.closest('a, button, [role="button"], select, textarea, input')) {
        dot.classList.remove('cursor-active')
        ring.classList.remove('cursor-active')
      }
    }

    function tick() {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
