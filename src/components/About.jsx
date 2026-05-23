import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { num: 3, suffix: '+', label: 'Internships' },
  { num: 3, suffix: '+', label: 'Live Projects' },
  { num: 7.46, suffix: '', label: 'CGPA', decimal: true },
]

const cards = [
  { icon: '📍', title: 'Location', body: 'Pithapuram, Andhra Pradesh — Open to relocation anywhere' },
  { icon: '🎓', title: 'Education', body: 'B.Tech CSE (AI & ML) · Aditya College of Engineering & Technology · 2022–2026' },
  { icon: '⚡', title: 'Passion', body: 'Clean code, cinematic UIs, AI-powered apps, and building things that matter at scale.' },
  { icon: '📬', title: 'Contact', body: 'snaveen6281@gmail.com · +91 8008202540' },
]

export default function About() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })
      gsap.fromTo(rightRef.current, { x: 60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })

      // Counter animation
      statsRef.current.forEach((el, i) => {
        if (!el) return
        const target = stats[i].num
        const isDecimal = stats[i].decimal
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          onUpdate() {
            el.textContent = isDecimal ? obj.val.toFixed(2) : Math.ceil(obj.val) + stats[i].suffix
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen grid md:grid-cols-2 gap-24 items-center px-[8vw] py-[10vh]"
    >
      {/* Left */}
      <div ref={leftRef} style={{ opacity: 0 }}>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent-cyan)] mb-6">Who I Am</p>
        <h2
          className="font-display font-extrabold leading-[1.05] tracking-tight mb-8"
          style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
        >
          Building the{' '}
          <span className="grad-cyan-purple">web of tomorrow</span>
        </h2>
        <p className="text-[var(--muted)] text-base leading-[1.85] mb-10">
          I'm a final-year B.Tech student specializing in AI & ML at Aditya College of Engineering
          and Technology, Pithapuram. I build scalable full-stack applications with the MERN stack,
          deploy intelligent ML models, and obsess over clean, performant code.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div
                ref={(el) => (statsRef.current[i] = el)}
                className="font-display font-extrabold text-4xl grad-cyan-purple"
              >
                0
              </div>
              <div className="text-[0.75rem] text-[var(--muted)] mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div ref={rightRef} className="flex flex-col gap-4" style={{ opacity: 0 }}>
        {cards.map((c) => (
          <div key={c.title} className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-xs tracking-[0.15em] uppercase text-[var(--accent-cyan)] mb-2">
              {c.icon} {c.title}
            </div>
            <p className="text-[var(--muted)] text-[0.92rem] leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
