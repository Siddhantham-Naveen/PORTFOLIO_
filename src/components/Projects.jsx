import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    emoji: '📚',
    name: 'StudySync',
    desc: 'A full-stack study platform where students access organized learning materials, track progress, and collaborate. RESTful backend on Node.js + Express.js + MongoDB, deployed on Render.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Siddhantham-Naveen/study-platform',
    live: 'https://study-platform-backend-cgo1.onrender.com/',
    gradient: 'linear-gradient(135deg,#7c3aed,#3b82f6)',
  },
  {
    emoji: '💪',
    name: 'FitFuel',
    desc: 'Fitness & Nutrition Guide — complete web app with workout plans, diet recommendations, and BMI tracking. Fully responsive UI with clean design, deployed on Vercel for public access.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    github: 'https://github.com/Siddhantham-Naveen/fitfuel',
    live: 'https://fitfuel-one.vercel.app/',
    gradient: 'linear-gradient(135deg,#06b6d4,#10b981)',
  },
  {
    emoji: '⚡',
    name: 'Electricity Demand Prediction',
    desc: 'Time-series forecasting model comparing ARIMA (statistical) vs LSTM (deep learning) for electricity demand prediction. LSTM outperformed ARIMA significantly on RMSE and MAE metrics.',
    tech: ['Python', 'ARIMA', 'LSTM', 'Deep Learning'],
    github: 'https://github.com/Siddhantham-Naveen/ELECTRICITY-DEMAND-PREDICTION-USING-ARIMA-AND-LSTM',
    live: null,
    gradient: 'linear-gradient(135deg,#ec4899,#7c3aed)',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
      })
      gsap.fromTo(gridRef.current.querySelectorAll('.project-card'), { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="px-[8vw] py-[10vh]">
      <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
        <span className="text-xs tracking-[0.2em] uppercase text-[var(--accent-pink)] mb-4 block">What I've Built</span>
        <h2
          className="font-display font-extrabold leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}
        >
          Featured <span className="grad-cyan-pink">Projects</span>
        </h2>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="project-card glass-card overflow-hidden hover:-translate-y-3 hover:border-[rgba(6,182,212,0.3)] transition-all duration-500"
            style={{ opacity: 0 }}
          >
            {/* Visual */}
            <div className="relative h-48 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-30 hover:opacity-50 transition-opacity duration-400 scale-100 hover:scale-105"
                style={{ background: p.gradient, transition: 'all 0.4s' }}
              />
              <span className="relative z-10 text-6xl" style={{ filter: 'drop-shadow(0 0 30px rgba(6,182,212,0.5))' }}>
                {p.emoji}
              </span>
            </div>

            {/* Body */}
            <div className="p-7">
              <h3 className="font-display font-bold text-xl mb-3">{p.name}</h3>
              <p className="text-[var(--muted)] text-sm leading-[1.75] mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[0.7rem] px-2.5 py-1 rounded-md"
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
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-4 py-2 rounded-full border border-[rgba(6,182,212,0.3)] text-[var(--accent-cyan)] hover:bg-[rgba(6,182,212,0.1)] hover:border-[rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                  style={{ cursor: 'none' }}
                >
                  GitHub ↗
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-4 py-2 rounded-full border border-[rgba(6,182,212,0.3)] text-[var(--accent-cyan)] hover:bg-[rgba(6,182,212,0.1)] hover:border-[rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                    style={{ cursor: 'none' }}
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
