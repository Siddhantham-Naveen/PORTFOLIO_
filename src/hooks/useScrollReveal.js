import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { y = 50, x = 0, duration = 0.9, delay = 0, stagger = 0, selector = null } = options
    const targets = selector ? el.querySelectorAll(selector) : el

    const anim = gsap.fromTo(
      targets,
      { y, x, opacity: 0 },
      {
        y: 0, x: 0, opacity: 1,
        duration, delay, stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      anim.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return ref
}
