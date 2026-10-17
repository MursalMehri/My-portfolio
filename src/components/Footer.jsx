import { ArrowUp, Heart } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { useScrolled } from '../hooks/useActiveSection'

export function BackToTop() {
  const show = useScrolled(650)

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`conic-ring fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-midnight-800/90 text-snow shadow-glow backdrop-blur-md transition-all duration-500 hover:border-lavender-400/60 hover:text-lavender-300 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
      aria-label="Back to top"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-midnight-900/50">
      {/* animated shimmer divider */}
      <div className="shimmer-line absolute inset-x-0 top-0 h-px" aria-hidden="true" />

      {/* twinkling decorative stars */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="star left-[12%] top-8 h-1.5 w-1.5" style={{ '--dur': '3.5s' }} />
        <span className="star left-[30%] top-16 h-1 w-1" style={{ '--dur': '4.5s', '--delay': '-1s' }} />
        <span className="star left-[58%] top-6 h-1.5 w-1.5" style={{ '--dur': '5s', '--delay': '-2s' }} />
        <span className="star left-[80%] top-14 h-1 w-1" style={{ '--dur': '4s', '--delay': '-0.5s' }} />
        <span className="star left-[92%] top-9 h-1.5 w-1.5" style={{ '--dur': '6s', '--delay': '-3s' }} />
      </div>

      <div className="container-x relative flex flex-col items-center gap-6 py-12 text-center">
        <a href="#home" className="conic-ring flex h-11 w-11 items-center justify-center rounded-xl bg-midnight-800 font-display text-sm font-bold text-gradient" aria-label="Back to top of page">
          MM
        </a>

        <p className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-slate-300">
          Designed with
          <Heart className="h-4 w-4 animate-pulse text-lavender-400" aria-hidden="true" />
          and creativity by
          <span className="font-display font-semibold text-gradient">{profile.name}</span>
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={`footer-${link.id}`}>
                <a
                  href={`#${link.id}`}
                  className="text-xs text-slate-500 transition-colors duration-300 hover:text-lavender-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-slate-600">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
