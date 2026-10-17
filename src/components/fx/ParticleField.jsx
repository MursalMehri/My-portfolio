import { useMemo } from 'react'
import { usePrefersReducedMotion } from '../../hooks/useActiveSection'

// Deterministic PRNG so particles don't jump between renders.
function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Floating particle + twinkling star field.
 * Renders fewer elements on small screens to stay light.
 */
export default function ParticleField({ seed = 7, className = '', ariaHidden = true }) {
  const reduced = usePrefersReducedMotion()
  const isSmall = typeof window !== 'undefined' && window.innerWidth < 640
  const count = reduced ? 0 : isSmall ? 14 : 28
  const starCount = reduced ? 0 : isSmall ? 8 : 16

  const particles = useMemo(() => {
    const rand = mulberry32(seed)
    return Array.from({ length: count }, (_, i) => ({
      id: `p${i}`,
      left: rand() * 100,
      top: rand() * 100,
      size: 2 + rand() * 3.5,
      dur: `${7 + rand() * 8}s`,
      delay: `${-rand() * 10}s`,
      dx: `${(rand() - 0.5) * 90}px`,
      dy: `${(rand() - 0.5) * 110}px`,
      opacity: 0.25 + rand() * 0.5,
    }))
  }, [count, seed])

  const stars = useMemo(() => {
    const rand = mulberry32(seed + 99)
    return Array.from({ length: starCount }, (_, i) => ({
      id: `s${i}`,
      left: rand() * 100,
      top: rand() * 100,
      size: 1.5 + rand() * 2,
      dur: `${2.5 + rand() * 4}s`,
      delay: `${-rand() * 5}s`,
    }))
  }, [starCount, seed])

  if (count === 0 && starCount === 0) return null

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden={ariaHidden || undefined}
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--dur': s.dur,
            '--delay': s.delay,
          }}
        />
      ))}
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            '--dur': p.dur,
            '--delay': p.delay,
            '--dx': p.dx,
            '--dy': p.dy,
          }}
        />
      ))}
    </div>
  )
}

/**
 * Soft glowing gradient orbs that slowly float.
 */
export function GlowOrbs({ orbs = [], className = '' }) {
  const reduced = usePrefersReducedMotion()
  if (reduced) return null

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {orbs.map((o) => (
        <span
          key={o.id}
          className="orb"
          style={{
            left: o.left,
            top: o.top,
            width: o.size,
            height: o.size,
            background: o.background,
            '--dur': o.dur || '14s',
            '--delay': o.delay || '0s',
            '--ox': o.ox || '30px',
            '--oy': o.oy || '-40px',
            opacity: o.opacity ?? 0.32,
          }}
        />
      ))}
    </div>
  )
}

export const defaultOrbs = [
  {
    id: 'orb-1',
    left: '-8%',
    top: '12%',
    size: 'clamp(240px, 32vw, 420px)',
    background:
      'radial-gradient(circle at 35% 35%, rgba(124, 110, 230, 0.55), transparent 65%)',
    dur: '16s',
    ox: '40px',
    oy: '-50px',
  },
  {
    id: 'orb-2',
    left: '68%',
    top: '-6%',
    size: 'clamp(200px, 26vw, 360px)',
    background:
      'radial-gradient(circle at 60% 40%, rgba(96, 165, 250, 0.45), transparent 65%)',
    dur: '13s',
    delay: '-4s',
    ox: '-50px',
    oy: '45px',
  },
  {
    id: 'orb-3',
    left: '45%',
    top: '62%',
    size: 'clamp(180px, 24vw, 320px)',
    background:
      'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.4), transparent 65%)',
    dur: '18s',
    delay: '-8s',
    ox: '35px',
    oy: '-30px',
  },
]
