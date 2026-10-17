import { useEffect, useRef, useState } from 'react'
import { Award, CalendarDays, Building2, X, ImagePlus } from 'lucide-react'
import { certificates } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Clearly-labeled placeholder preview — used until a real certificate
 * image is provided in src/data/portfolio.js.
 */
function PlaceholderPreview({ category }) {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-800 p-5"
      role="img"
      aria-label={`Demo placeholder for the ${category} certificate — the real certificate image will be added later`}
    >
      {/* subtle guilloche-style rings */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender-400/15" />
        <span className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-400/10" />
        <span className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
      </div>

      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-lavender-600/30 to-electric-500/20 text-lavender-300 shadow-glow">
        <Award className="h-7 w-7" aria-hidden="true" />
      </span>
      <span className="mt-3 font-display text-lg font-bold text-snow">{category}</span>
      <span className="mt-2 rounded-full border border-lavender-400/40 bg-lavender-600/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-lavender-300">
        Demo Placeholder
      </span>
      <span className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
        <ImagePlus className="h-3.5 w-3.5" aria-hidden="true" />
        Real certificate image coming soon
      </span>
    </div>
  )
}

function CertificateCard({ cert, index, onOpen }) {
  return (
    <Reveal delay={index * 90} className="h-full">
      <button
        type="button"
        onClick={() => onOpen(cert)}
        className="card-glow glass group block h-full w-full overflow-hidden rounded-2xl text-left transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]"
        aria-label={`Enlarge the ${cert.title} certificate${cert.placeholder ? ' placeholder' : ''}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden border-b border-white/[0.06]">
          {cert.image ? (
            <img
              src={cert.image}
              alt={`${cert.title} certificate${cert.organization ? ` from ${cert.organization}` : ''}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <PlaceholderPreview category={cert.category} />
          )}
          {/* zoom hint */}
          <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-midnight-950/70 text-slate-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
            <X className="h-4 w-4 rotate-45" aria-hidden="true" />
          </span>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lavender-400/80">
            {cert.category}
          </p>
          <h3 className="mt-1 font-display text-base font-semibold text-snow transition-colors duration-300 group-hover:text-lavender-300">
            {cert.title}
          </h3>
          <div className="mt-2 space-y-1 text-xs text-slate-500">
            {cert.organization && (
              <p className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                {cert.organization}
              </p>
            )}
            {cert.date && (
              <p className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {cert.date}
              </p>
            )}
            {!cert.organization && !cert.date && (
              <p className="italic">Details to be added</p>
            )}
          </div>
        </div>
      </button>
    </Reveal>
  )
}

function Lightbox({ cert, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [onClose])

  return (
    <div
      className="anim-pop-in fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} certificate, enlarged view`}
    >
      <div
        className="absolute inset-0 bg-midnight-950/90 backdrop-blur-lg"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="glass relative max-h-full w-full max-w-3xl overflow-auto rounded-3xl shadow-glow-lg">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-midnight-950/70 text-snow backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:border-lavender-400/60 hover:text-lavender-300"
          aria-label="Close enlarged view"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
          {cert.image ? (
            <img
              src={cert.image}
              alt={`${cert.title} certificate${cert.organization ? ` from ${cert.organization}` : ''}, enlarged`}
              className="h-full w-full object-contain"
            />
          ) : (
            <PlaceholderPreview category={cert.category} />
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] p-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lavender-400/80">
              {cert.category}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold text-snow">{cert.title}</h3>
            <p className="mt-1 text-xs text-slate-500">
              {cert.placeholder
                ? 'Demo placeholder — the real certificate will replace this soon.'
                : [cert.organization, cert.date].filter(Boolean).join(' · ') || ''}
            </p>
          </div>
          {cert.placeholder && (
            <span className="rounded-full border border-lavender-400/40 bg-lavender-600/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-lavender-300">
              Not a real certificate
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="certificates-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_35%_at_80%_20%,rgba(96,165,250,0.07),transparent_70%)]" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading eyebrow="Proof of learning" title={<>Certificates &amp; <span className="text-gradient">Learning</span></>} />
        <Reveal as="p" delay={140} className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-slate-400 sm:text-base">
          A growing collection of my learning across web design, networking, languages, AI, and
          graphic design. Placeholders below will be replaced with my real certificates.
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {certificates.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && <Lightbox cert={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
