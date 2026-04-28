'use client'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const curr = window.scrollY
      setVisible(curr < last || curr < 80)
      last = curr
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <a href="#" className="nav-logo">Wedding Essentials</a>
      <div className="nav-actions">
        <a href="#portfolio" className="nav-btn">PORTFOLIO</a>
        <a href="https://wa.me/971506881534" target="_blank" rel="noopener" className="nav-btn">ENQUIRE</a>
      </div>
    </nav>
  )
}
