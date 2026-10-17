import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import { profile } from '../data/portfolio'
import ParticleField, { GlowOrbs, defaultOrbs } from './fx/ParticleField'
import { usePrefersReducedMotion } from '../hooks/useActiveSection'

const NAME = 'MURSAL MEHRI'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const parallaxRef = useRef(null)

  // Subtle scroll parallax on decorative layers (desktop, motion allowed only).
  useEffect(() => {
    if (reduced) return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const y = Math.min(window.scrollY, window.innerHeight)
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduced])

  return (
    <section
      id="home"
      className="hero-aurora relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Decorative layers */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div ref={parallaxRef}>
        <GlowOrbs orbs={defaultOrbs} />
      </div>
      <ParticleField seed={11} />

      {/* Geometric accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="spin-slow absolute left-[8%] top-[22%] hidden h-40 w-40 rounded-full border border-dashed border-lavender-400/20 md:block" />
        <div className="spin-slow absolute right-[10%] top-[30%] hidden h-56 w-56 rounded-full border border-white/[0.06] md:block" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="float-y absolute bottom-[18%] left-[14%] hidden h-16 w-16 rotate-12 rounded-2xl border border-electric-400/20 bg-electric-400/[0.04] backdrop-blur-sm md:block" style={{ '--dur': '7s' }} />
        <div className="float-y absolute right-[16%] top-[24%] hidden h-12 w-12 rounded-full border border-lavender-400/25 bg-lavender-400/[0.05] backdrop-blur-sm md:block" style={{ '--dur': '9s', '--delay': '-3s' }} />
        <svg className="absolute inset-x-0 bottom-0 h-40 w-full text-midnight-950" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,96 C240,160 480,32 720,64 C960,96 1200,160 1440,80 L1440,160 L0,160 Z" fill="currentColor" opacity="0.6" />
          <path d="M0,120 C240,60 480,150 720,110 C960,70 1200,140 1440,100 L1440,160 L0,160 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex flex-col items-center pb-24 pt-32 text-center">
        <p
          className="anim-fade-up glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-lavender-300"
          style={{ animationDelay: '150ms' }}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sm:hidden">Welcome</span>
          <span className="hidden sm:inline">Welcome to my digital space</span>
        </p>

        <h1
          className="font-display text-[clamp(2rem,8.4vw,2.7rem)] font-extrabold leading-[1.05] tracking-tight text-snow sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          aria-label={profile.name}
        >
          {NAME.split('').map((char, i) =>
            char === ' ' ? (
              <span key={`sp-${i}`} className="inline-block w-[0.35em]" aria-hidden="true" />
            ) : (
              <span
                key={`ch-${i}`}
                className="hero-letter"
                style={{ '--i': i }}
                aria-hidden="true"
              >
                {char}
              </span>
            )
          )}
        </h1>

        <p
          className="anim-fade-up mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300 sm:text-base"
          style={{ animationDelay: '950ms' }}
        >
          {profile.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && (
                <span className="hidden h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lavender-400 to-electric-400 sm:block" aria-hidden="true" />
              )}
              <span className={i === 2 ? 'text-gradient' : ''}>{role}</span>
            </span>
          ))}
        </p>

        <p
          className="anim-fade-up mt-6 max-w-xl font-serif text-lg italic text-slate-400 sm:text-xl"
          style={{ animationDelay: '1250ms' }}
        >
          "{profile.tagline}"
        </p>

        <div
          className="anim-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '1500ms' }}
        >
          <button type="button" className="btn btn-primary group" onClick={() => scrollToId('projects')}>
            Explore My Work
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => scrollToId('about')}>
            About Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToId('about')}
        className="anim-fade-up group absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5"
        style={{ animationDelay: '2000ms' }}
        aria-label="Scroll down to the About section"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 transition-colors duration-300 group-hover:text-lavender-300">
          Scroll
        </span>
        <span className="flex h-11 w-6 items-start justify-center rounded-full border border-white/20 bg-white/[0.03] p-1.5 backdrop-blur-sm transition-colors duration-300 group-hover:border-lavender-400/60">
          <span className="scroll-wheel-dot h-2 w-1 rounded-full bg-gradient-to-b from-lavender-300 to-electric-400" />
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-slate-500 transition-all duration-300 group-hover:translate-y-1 group-hover:text-lavender-300" aria-hidden="true" />
      </button>
    </section>
  )
}
