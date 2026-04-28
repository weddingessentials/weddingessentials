'use client'
import { useEffect, useRef, ReactNode, ElementType, CSSProperties } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: 'delay-1' | 'delay-2' | 'delay-3'
  tag?: ElementType
  style?: CSSProperties
}

export default function Reveal({ children, className = '', delay, tag: Tag = 'div', style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', delay, className].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  )
}
