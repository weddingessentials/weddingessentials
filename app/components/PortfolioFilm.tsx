'use client'
import { useEffect, useRef } from 'react'

const desktopSlides = [
  ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.png', '/image5.jpg', '/image6.png'],
  ['/image7.jpg', '/image8.jpg', '/image9.jpg', '/image10.jpg', '/image11.jpg', '/image12.png'],
  ['/image13.png', '/image14.jpg', '/image15.jpg', '/image16.jpg', '/image2.jpg', '/image18.jpg'],
  ['/image19.jpg', '/image20.jpg', '/image21.jpg', '/IMG_7844.JPG', '/IMG_7847.JPG', '/image1.jpg'],
]

const mobileSlides = [
  ['/image1.jpg', '/image2.jpg', '/image3.jpg'],
  ['/image4.png', '/image5.jpg', '/image6.png'],
  ['/image7.jpg', '/image8.jpg', '/image9.jpg'],
  ['/image10.jpg', '/image11.jpg', '/image12.png'],
  ['/image13.png', '/image14.jpg', '/image15.jpg'],
  ['/image16.jpg', '/image2.jpg', '/image18.jpg'],
  ['/image19.jpg', '/image20.jpg', '/image21.jpg'],
  ['/IMG_7844.JPG', '/IMG_7847.JPG', '/image1.jpg'],
]

function Slideshow({ slides, wrapperClass, slideClass }: { slides: string[][], wrapperClass: string, slideClass: string }) {
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

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', onResize)
    }
  }, [slides.length])

  return (
    <div ref={wrapperRef} className={`portfolio-film-wrapper ${wrapperClass}`}>
      <div ref={containerRef} className="portfolio-film-slides">
        {slides.map((row, i) => (
          <div key={i} className={`portfolio-film-slide ${slideClass}`}>
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

export default function PortfolioFilm() {
  return (
    <section className="portfolio-film-section" id="portfolio">
      <Slideshow slides={desktopSlides} wrapperClass="portfolio-film-desktop" slideClass="" />
      <Slideshow slides={mobileSlides} wrapperClass="portfolio-film-mobile" slideClass="" />
    </section>
  )
}
