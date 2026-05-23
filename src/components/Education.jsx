import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const certs = [
  {
    icon: '☁️',
    name: 'Amazon Aurora MySQL – Basics',
    by: 'AWS Training & Certification',
    date: 'Jun 2025',
    link: 'https://www.linkedin.com/posts/naveen-siddhantham_aws-amazonaurora-cloudcomputing-activity-7338878203207319552-ofLx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAZRu4BB0HB9dv278_qFGhLZKiEt8rYcVg',
  },
  {
    icon: '🎬',
    name: 'Web Development & Real-Time Project – Build a Website Like YouTube',
    by: 'Nullclass',
    date: 'Dec 2024',
    link: 'https://www.linkedin.com/posts/naveen-siddhantham_carrergrowth-html-css-activity-7273142167626272769-g8eJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAZRu4BB0HB9dv278_qFGhLZKiEt8rYcVg',
  },
  {
    icon: '🎨',
    name: 'My APSSDC, My Website – Web Design Course',
    by: 'GUVI Geek Networks (Skill-A-Thon)',
    date: '2024',
    link: 'https://www.linkedin.com/posts/naveen-siddhantham_webdesign-apssdc-careergrowth-activity-7173668157801283586-WVOg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAZRu4BB0HB9dv278_qFGhLZKiEt8rYcVg',
  },
]

export default function Education() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
      })
      gsap.fromTo(gridRef.current.children, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="px-[8vw] py-[10vh]">
      <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
        <span className="text-xs tracking-[0.2em] uppercase text-[var(--accent-cyan)] mb-4 block">Credentials</span>
        <h2
          className="font-display font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
        >
          Education &amp; <span className="grad-cyan-pink">Certifications</span>
        </h2>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
        {/* Education card */}
        <div className="glass-card card-top-line p-10 relative hover:-translate-y-1 hover:border-[rgba(6,182,212,0.3)] transition-all duration-300">
          <h3 className="font-display font-bold text-xl leading-snug mb-3">
            B.Tech — Computer Science Engineering (AI & ML)
          </h3>
          <div className="text-sm text-[var(--accent-cyan)] mb-2">
            Aditya College of Engineering & Technology, Pithapuram
          </div>
          <div className="text-sm text-[var(--muted)] mb-6">2022 – 2026 · CGPA: 7.46</div>
          <div className="flex flex-wrap gap-2">
            {['DSA', 'ML', 'Deep Learning', 'DBMS', 'AI', 'NLP', 'Computer Networks'].map((c) => (
              <span key={c} className="text-[0.7rem] px-2.5 py-1 rounded-md"
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)', color: 'rgb(196,181,253)' }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-col gap-4">
          {certs.map((c) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-start gap-5 p-5 hover:translate-x-2 hover:border-[rgba(236,72,153,0.3)] transition-all duration-300 group"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <span className="text-3xl flex-shrink-0">{c.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-medium leading-snug mb-1 group-hover:text-[var(--accent-cyan)] transition-colors duration-300">{c.name}</div>
                <div className="text-[0.75rem] text-[var(--muted)]">{c.by}</div>
                <div className="text-[0.7rem] text-[var(--accent-pink)] mt-1">{c.date}</div>
              </div>
              <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent-cyan)] transition-colors mt-1">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
