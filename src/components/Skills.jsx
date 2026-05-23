import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  { icon: '⚡', title: 'Languages', tags: ['JavaScript', 'Python', 'C', 'HTML5', 'CSS3'] },
  { icon: '🎨', title: 'Frontend', tags: ['React.js', 'Bootstrap', 'Responsive Design', 'REST APIs'] },
  { icon: '🔧', title: 'Backend', tags: ['Node.js', 'Express.js', 'REST API Design'] },
  { icon: '🗄️', title: 'Databases', tags: ['MongoDB', 'MySQL', 'DBMS'] },
  { icon: '🛠️', title: 'Tools & Platforms', tags: ['Git & GitHub', 'VS Code', 'Render', 'Vercel', 'IBM SkillsBuild'] },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
      })
      gsap.fromTo(gridRef.current.querySelectorAll('.skill-group'), { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="px-[8vw] py-[10vh]">
      <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
        <span className="text-xs tracking-[0.2em] uppercase text-[var(--accent-purple)] mb-4 block">What I Know</span>
        <h2
          className="font-display font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
        >
          Skills &amp; <span className="grad-pink-purple">Expertise</span>
        </h2>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="skill-group glass-card p-8 hover:-translate-y-2 hover:border-[rgba(124,58,237,0.35)] transition-all duration-400 group"
            style={{ opacity: 0 }}
          >
            <span className="text-4xl mb-4 block">{g.icon}</span>
            <div className="font-display font-bold text-lg mb-5">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.75rem] px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[var(--muted)] tracking-wide hover:border-[rgba(6,182,212,0.5)] hover:text-[var(--accent-cyan)] hover:bg-[rgba(6,182,212,0.07)] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
