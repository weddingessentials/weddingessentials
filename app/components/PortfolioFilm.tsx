'use client'
import { useEffect, useRef } from 'react'

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

function Slideshow({ slides, wrapperClass }: { slides: string[][], wrapperClass: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    const wrapper = wrapperRef.current
    if (!container || !wrapper) return
    const goTo = (idx: number) => {
      currentRef.current = ((idx % slides.length) + slides.length) % slides.length
      container.style.transform = `translateY(-${currentRef.current * wrapper.offsetHeight}px)`
    }
    const interval = setInterval(() => goTo(currentRef.current + 1), 4000)
    const onResize = () => goTo(0)
    window.addEventListener('resize', onResize)
    return () => { clearInterval(interval); window.removeEventListener('resize', onResize) }
  }, [slides.length])

  return (
    <div ref={wrapperRef} className={`portfolio-film-wrapper ${wrapperClass}`}>
      <div ref={containerRef} className="portfolio-film-slides">
        {slides.map((row, i) => (
          <div key={i} className="portfolio-film-slide">
            {row.map((src, j) => (
              <a key={j} href={src} target="_blank" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Wedding" />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PortfolioFilm({ images }: { images: string[] }) {
  // Desktop: 6 per row, Mobile: 3 per row
  const desktop = chunk(images, 6)
  const mobile = chunk(images, 3)

  return (
    <section className="portfolio-film-section" id="portfolio">
      <Slideshow slides={desktop} wrapperClass="portfolio-film-desktop" />
      <Slideshow slides={mobile} wrapperClass="portfolio-film-mobile" />
    </section>
  )
}
