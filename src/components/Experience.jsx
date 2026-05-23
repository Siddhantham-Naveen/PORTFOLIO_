import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    period: 'May 2025 – Jul 2025',
    title: 'Web Development Intern (Django)',
    company: 'APSSDC – Summer Online Internship Program 2025',
    desc: 'Built backend-driven web applications with Django — URL routing, views, template rendering, form handling, and SQLite database integration. Completed a certified program under APSSDC.',
    tech: ['Python', 'Django', 'HTML/CSS', 'SQLite'],
    link: 'https://drive.google.com/file/d/1xRfU8psGOBrOWoAYWPL1o986fcaYII-i/view?usp=sharing',
    linkLabel: 'Certificate ↗',
  },
  {
    period: 'Dec 2024 – Feb 2025',
    title: 'Web Development Intern',
    company: 'Nullclass · Remote',
    desc: 'Built dynamic and interactive web applications during real-time project training. Developed a YouTube-like website from scratch — video listing UI, responsive layouts, and interactive components.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://www.linkedin.com/posts/naveen-siddhantham_webdevelopment-internship-learning-activity-7296757947882262528-Skfc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAZRu4BB0HB9dv278_qFGhLZKiEt8rYcVg',
    linkLabel: 'View Post ↗',
  },
  {
    period: 'May 2024 – Jun 2024',
    title: 'AI & ML Intern',
    company: 'APSSDC · Edunet Foundation & IBM SkillsBuild · Andhra Pradesh',
    desc: '6-week intensive internship on AI and ML via IBM SkillsBuild. Worked on supervised learning, data preprocessing, feature engineering, and model evaluation for real-world use cases.',
    tech: ['Python', 'Machine Learning', 'IBM SkillsBuild', 'Data Preprocessing'],
    link: 'https://www.linkedin.com/posts/naveen-siddhantham_smartbridge-internship-machinelearning-activity-7353761176368861187-MR54?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAZRu4BB0HB9dv278_qFGhLZKiEt8rYcVg',
    linkLabel: 'View Post ↗',
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
      })
      gsap.fromTo(timelineRef.current.querySelectorAll('.timeline-item'), { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="px-[8vw] py-[10vh]">
      <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
        <span className="text-xs tracking-[0.2em] uppercase text-[var(--accent-cyan)] mb-4 block">Where I've Worked</span>
        <h2
          className="font-display font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
        >
          Experience &amp; <span className="grad-cyan-purple">Internships</span>
        </h2>
      </div>

      <div ref={timelineRef} className="relative pl-8">
        {/* Timeline line */}
        <div
          className="timeline-line absolute left-0 top-0 bottom-0 w-px"
        />

        {experiences.map((exp, i) => (
          <div
            key={i}
            className="timeline-item relative pl-10 mb-8 glass-card p-8 hover:translate-x-2 hover:border-[rgba(124,58,237,0.3)] transition-all duration-300"
            style={{ opacity: 0 }}
          >
            {/* Dot */}
            <div
              className="absolute -left-[2.55rem] top-9 w-3 h-3 rounded-full"
              style={{
                background: 'var(--accent-purple)',
                boxShadow: '0 0 20px rgba(124,58,237,0.7)',
              }}
            />
            <div className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--accent-cyan)] mb-2">{exp.period}</div>
            <div className="font-display font-bold text-xl mb-1">{exp.title}</div>
            <div className="text-sm text-[var(--accent-purple)] mb-4">{exp.company}</div>
            <p className="text-[var(--muted)] text-sm leading-[1.75] mb-5">{exp.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.7rem] px-3 py-1 rounded-md"
                  style={{
                    background: 'rgba(124,58,237,0.12)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    color: 'rgb(196,181,253)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs px-4 py-1.5 rounded-full border border-[rgba(6,182,212,0.3)] text-[var(--accent-cyan)] hover:bg-[rgba(6,182,212,0.1)] hover:border-[rgba(6,182,212,0.6)] transition-all duration-300"
              >
                {exp.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
