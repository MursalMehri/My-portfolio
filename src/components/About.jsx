import { GraduationCap, Palette, Sparkles, TrendingUp } from 'lucide-react'
import { about } from '../data/portfolio'
import { getIcon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GlowOrbs } from './fx/ParticleField'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="about-heading">
      <GlowOrbs
        className="opacity-60"
        orbs={[
          {
            id: 'about-orb-1',
            left: '80%',
            top: '10%',
            size: '300px',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.35), transparent 65%)',
            dur: '17s',
          },
          {
            id: 'about-orb-2',
            left: '-10%',
            top: '55%',
            size: '260px',
            background: 'radial-gradient(circle, rgba(124, 110, 230, 0.35), transparent 65%)',
            dur: '15s',
            delay: '-5s',
          },
        ]}
      />

      <div className="container-x relative">
        <SectionHeading eyebrow="Get to know me" title={<>About <span className="text-gradient">Me</span></>} />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Visual card */}
          <Reveal delay={100} className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="card-glow glass conic-ring relative rounded-3xl p-8 shadow-card">
              <div className="relative mx-auto flex h-44 w-44 items-center justify-center">
                {/* Orbit rings */}
                <span className="spin-slow absolute inset-0 rounded-full border border-dashed border-lavender-400/30" style={{ animationDuration: '18s' }} aria-hidden="true" />
                <span className="spin-slow absolute inset-4 rounded-full border border-white/10" style={{ animationDuration: '26s', animationDirection: 'reverse' }} aria-hidden="true" />
                {/* Monogram */}
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-lavender-600/40 via-midnight-800 to-electric-500/30 shadow-glow">
                  <span className="font-display text-5xl font-extrabold text-gradient">MM</span>
                </div>
                {/* Satellites */}
                <span className="spin-slow absolute inset-0" style={{ animationDuration: '18s' }} aria-hidden="true">
                  <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-lavender-400 shadow-glow" />
                </span>
                <span className="spin-slow absolute inset-4" style={{ animationDuration: '26s', animationDirection: 'reverse' }} aria-hidden="true">
                  <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-electric-400 shadow-glow-blue" />
                </span>
              </div>

              <div className="mt-7 text-center">
                <p className="font-display text-xl font-bold text-snow">Mursal Mehri</p>
                <p className="mt-1 text-sm text-slate-400">Creative Web Designer · Digital Creator · AI Learner</p>
              </div>

              {/* Floating mini-badges */}
              <div className="float-y absolute -left-5 top-8 hidden rounded-xl border border-white/10 bg-midnight-800/90 p-3 backdrop-blur-md sm:block" style={{ '--dur': '6s' }} aria-hidden="true">
                <GraduationCap className="h-5 w-5 text-lavender-400" />
              </div>
              <div className="float-y absolute -right-4 top-16 hidden rounded-xl border border-white/10 bg-midnight-800/90 p-3 backdrop-blur-md sm:block" style={{ '--dur': '7.5s', '--delay': '-2s' }} aria-hidden="true">
                <Palette className="h-5 w-5 text-electric-400" />
              </div>
              <div className="float-y absolute -left-3 bottom-10 hidden rounded-xl border border-white/10 bg-midnight-800/90 p-3 backdrop-blur-md sm:block" style={{ '--dur': '8s', '--delay': '-4s' }} aria-hidden="true">
                <Sparkles className="h-5 w-5 text-lavender-300" />
              </div>
              <div className="float-y absolute -right-5 bottom-6 hidden rounded-xl border border-white/10 bg-midnight-800/90 p-3 backdrop-blur-md sm:block" style={{ '--dur': '6.5s', '--delay': '-1s' }} aria-hidden="true">
                <TrendingUp className="h-5 w-5 text-electric-300" />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} as="p" delay={i * 120}>
                  {p}
                </Reveal>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.highlights.map((h, i) => {
                const Icon = getIcon(h.icon)
                return (
                  <Reveal as="li" key={h.title} delay={200 + i * 100}>
                    <div className="card-glow glass group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-600/30 to-electric-500/20 text-lavender-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-snow">{h.title}</span>
                        <span className="mt-1 block text-[13px] leading-snug text-slate-400">{h.text}</span>
                      </span>
                    </div>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
