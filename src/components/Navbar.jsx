import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[8vw] py-7"
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(6,6,16,0.5)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        className="font-display font-extrabold text-xl tracking-tight grad-cyan-purple"
        style={{ cursor: 'none' }}
      >
        SN.
      </div>
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l}>
            <button
              onClick={() => scrollTo(l)}
              className="text-[0.82rem] font-light tracking-widest uppercase text-[var(--muted)] hover:text-white transition-colors duration-300"
              style={{ background: 'none', border: 'none', cursor: 'none' }}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
