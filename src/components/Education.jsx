import { education } from '../data/portfolio'
import { getIcon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="education-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_40%_at_20%_30%,rgba(124,110,230,0.07),transparent_70%)]" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading eyebrow="My path so far" title={<>Education &amp; <span className="text-gradient">Learning Journey</span></>} />

        <Reveal className="relative mt-16">
          {/* The connecting line */}
          <span
            className="timeline-line absolute bottom-2 left-[1.4rem] top-1 w-[2px] rounded-full bg-gradient-to-b from-lavender-500 via-electric-400/70 to-lavender-600/40 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-14">
            {education.map((item, i) => {
              const Icon = getIcon(item.icon)
              const isRight = i % 2 === 1
              return (
                <li key={`${item.institution}-${item.title}`} className="relative">
                  {/* Marker */}
                  <span
                    className={`absolute left-[1.4rem] top-1.5 z-10 -translate-x-1/2 md:left-1/2 ${
                      item.status === 'active' ? 'pulse-ring' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                        item.status === 'active'
                          ? 'border-lavender-300/70 bg-gradient-to-br from-lavender-500 to-electric-400 shadow-glow'
                          : 'border-white/15 bg-midnight-800'
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${
                          item.status === 'active' ? 'text-white' : 'text-lavender-300'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </span>

                  {/* Card — alternating sides on desktop, stacked on mobile */}
                  <div
                    className={`pl-14 md:grid md:grid-cols-2 md:gap-14 md:pl-0 ${
                      isRight ? '' : ''
                    }`}
                  >
                    <div className={isRight ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1 md:text-right'}>
                      <div
                        className={`card-glow glass group inline-block w-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-6 ${
                          isRight ? 'md:ml-0' : 'md:mr-0'
                        }`}
                      >
                        <div className={`flex items-center gap-3 ${isRight ? '' : 'md:flex-row-reverse'}`}>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-600/30 to-electric-500/20 text-lavender-300 transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <h3 className="font-display text-base font-bold text-snow sm:text-lg">
                            {item.institution}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-lavender-300/90">{item.title}</p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{item.text}</p>

                        {item.status === 'active' && (
                          <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-electric-400/40 bg-electric-500/10 px-3 py-1 text-[11px] font-semibold text-electric-300">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-60" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
                            </span>
                            In Progress
                          </span>
                        )}
                        {item.status === 'info' && (
                          <span className="mt-3 inline-block rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-400">
                            Details coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
