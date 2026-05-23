import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

// Updated Google Drive image ID
const IMAGE_URL = 'photo.jpeg'

export default function Hero() {
  const tagRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const imgRef = useRef(null)
  const scrollRef = useRef(null)
  const [imgFailed, setImgFailed] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 })
    tl.fromTo(tagRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
      .fromTo(titleRef.current.querySelectorAll('.word'),
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power4.out' },
        '-=0.3'
      )
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo(imgRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.2')
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
      id="hero"
      className="min-h-screen grid md:grid-cols-2 items-center gap-10 px-[8vw] pt-24 md:pt-0 relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="float-orb absolute -top-24 right-[-5%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'rgba(124,58,237,0.25)', filter: 'blur(60px)' }} />
      <div className="float-orb-2 absolute bottom-16 left-[-5%] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'rgba(6,182,212,0.2)', filter: 'blur(60px)' }} />
      <div className="float-orb-3 absolute top-1/2 right-[10%] w-40 h-40 rounded-full pointer-events-none"
        style={{ background: 'rgba(236,72,153,0.18)', filter: 'blur(50px)' }} />

      {/* Left */}
      <div className="z-10">
        {/* Tag */}
        <div
          ref={tagRef}
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--accent-cyan)] border border-[rgba(6,182,212,0.3)] px-4 py-1.5 rounded-full mb-6"
          style={{ opacity: 0 }}
        >
          <div className="pulse-dot" />
          Available for opportunities
        </div>

        {/* Title — reduced clamp so full name shows on all screens */}
        <h1
          ref={titleRef}
          className="font-display font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 3.8vw, 4.2rem)' }}
        >
          <span className="block overflow-visible">
            <span className="word inline-block" style={{ opacity: 0 }}>Siddhantham</span>
          </span>
          <span className="block overflow-visible">
            <span className="word hero-grad-text inline-block" style={{ opacity: 0 }}>Naveen</span>
          </span>
          <span className="block overflow-visible">
            <span
              className="word inline-block font-light text-[var(--muted)]"
              style={{ fontSize: '0.55em', letterSpacing: '0.01em', opacity: 0 }}
            >
              Full Stack Developer
            </span>
          </span>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="text-[var(--muted)] text-base leading-[1.85] max-w-md mb-10"
          style={{ opacity: 0 }}
        >
          B.Tech CSE (AI & ML) student crafting premium digital experiences
          with the MERN stack, machine learning pipelines, and cinematic frontend animations.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex gap-4 flex-wrap" style={{ opacity: 0 }}>
          <button
            className="px-8 py-3.5 rounded-full text-white text-sm font-medium tracking-wide relative overflow-hidden transition-shadow"
            style={{ background: 'linear-gradient(135deg,var(--accent-purple),var(--accent-blue))', cursor: 'none' }}
            onMouseMove={magnet}
            onMouseLeave={magnetLeave}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View Projects ↗</span>
          </button>
          <a
            href="https://drive.google.com/file/d/1v4PccSh1JE_wfplgcH05W57ZNJK1ZpjE/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-full text-sm font-light tracking-wide border transition-all hover:border-[var(--accent-cyan)] hover:bg-[rgba(6,182,212,0.05)]"
            style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'var(--text)', cursor: 'none' }}
            onMouseMove={magnet}
            onMouseLeave={magnetLeave}
          >
            Resume ↗
          </a>
        </div>
      </div>

      {/* Right — Avatar */}
      <div ref={imgRef} className="hidden md:flex justify-center items-center" style={{ opacity: 0 }}>
        <div className="relative w-[340px] h-[420px]">
          {/* Blob bg */}
          <div
            className="blob absolute inset-[-3px] opacity-80"
            style={{
              borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%',
              background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-cyan), var(--accent-pink))',
            }}
          />
          {/* Inner */}
          <div
            className="blob absolute inset-[3px] overflow-hidden flex items-center justify-center"
            style={{ background: 'var(--bg2)', borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%' }}
          >
            {!imgFailed ? (
              <img
                src={IMAGE_URL}
                alt="Siddhantham Naveen"
                className="w-full h-full object-cover object-top"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="font-display font-extrabold grad-cyan-purple" style={{ fontSize: '6rem' }}>
                SN
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <div
          className="scroll-line w-px h-14"
          style={{ background: 'linear-gradient(180deg, var(--accent-cyan), transparent)' }}
        />
        <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[var(--muted)]">Scroll</span>
      </div>
    </section>
  )
}
