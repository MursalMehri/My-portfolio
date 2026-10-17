import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/portfolio'
import { useActiveSection, useScrolled } from '../hooks/useActiveSection'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(ids)
  const scrolled = useScrolled(28)
  const menuButtonRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.07] bg-midnight-950/85 shadow-card backdrop-blur-xl'
          : 'border-b border-transparent bg-midnight-950/40 backdrop-blur-md'
      }`}
    >
      <nav
        className="container-x flex h-[4.5rem] items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Mursal Mehri — back to top"
        >
          <span className="conic-ring relative flex h-10 w-10 items-center justify-center rounded-xl bg-midnight-800 font-display text-sm font-bold text-gradient">
            MM
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-snow transition-colors duration-300 group-hover:text-lavender-300">
            Mursal<span className="text-gradient"> Mehri</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-gradient-to-r from-lavender-500 to-electric-400 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
          <li className="ml-3">
            <a
              href="#contact"
              className="btn btn-primary !px-5 !py-2 text-[13px]"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          ref={menuButtonRef}
          type="button"
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-colors hover:border-lavender-400/50 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-snow transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-snow transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-snow transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile panel */}
      {menuOpen && (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="mobile-menu-panel border-b border-white/[0.07] bg-midnight-950/95 backdrop-blur-2xl lg:hidden"
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link, i) => {
              const isActive = active === link.id
              return (
                <li key={link.id} className="mobile-menu-item" style={{ '--i': i }}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-lavender-600/25 to-electric-500/15 text-white'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lavender-400 to-electric-400"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
