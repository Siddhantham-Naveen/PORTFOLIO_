import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const magnet = (e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2
    gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' })
  }
  const magnetLeave = (e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-[8vw] py-[10vh] relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.2) 0%,transparent 70%)' }}
      />

      <div ref={contentRef} style={{ opacity: 0 }}>
        <h2
          className="font-display font-extrabold tracking-tight leading-[1.0] mb-6"
          style={{ fontSize: 'clamp(3rem,8vw,7rem)' }}
        >
          Let's{' '}
          <span className="grad-all">Build</span>
          <br />
          Together
        </h2>
        <p className="text-[var(--muted)] text-base mb-12 max-w-md mx-auto leading-relaxed">
          Open to full-time roles, freelance projects, and exciting collaborations. Let's create something remarkable.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="mailto:snaveen6281@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-medium tracking-wide hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg,var(--accent-purple),var(--accent-blue))',
              boxShadow: '0 0 0 0 rgba(124,58,237,0)',
              cursor: 'none',
            }}
            onMouseMove={magnet}
            onMouseLeave={magnetLeave}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 50px rgba(124,58,237,0.4)' }}
            onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 0 0 0 rgba(124,58,237,0)' }}
          >
            ✉️ snaveen6281@gmail.com
          </a>
          <a
            href="https://github.com/Siddhantham-Naveen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-light border hover:border-[rgba(6,182,212,0.5)] hover:bg-[rgba(6,182,212,0.05)] hover:-translate-y-1 transition-all duration-300"
            style={{ borderColor: 'rgba(255,255,255,0.15)', cursor: 'none' }}
            onMouseMove={magnet}
            onMouseLeave={magnetLeave}
          >
            ⚡ GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/naveen-siddhantham/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-light border hover:border-[rgba(6,182,212,0.5)] hover:bg-[rgba(6,182,212,0.05)] hover:-translate-y-1 transition-all duration-300"
            style={{ borderColor: 'rgba(255,255,255,0.15)', cursor: 'none' }}
            onMouseMove={magnet}
            onMouseLeave={magnetLeave}
          >
            🔗 LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <span className="text-sm text-[var(--muted)] flex items-center gap-2">📞 +91 8008202540</span>
          <span className="text-sm text-[var(--muted)] flex items-center gap-2">📍 Pithapuram, AP · Open to relocation</span>
        </div>
      </div>
    </section>
  )
}
