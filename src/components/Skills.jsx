import { useLayoutEffect, useRef, useState } from 'react'
import { Layers } from 'lucide-react'
import { skills, skillCategories } from '../data/portfolio'
import { getIcon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const tabs = [{ id: 'all', label: 'All Skills' }, ...skillCategories]

export default function Skills() {
  const [active, setActive] = useState('all')
  const tabRefs = useRef({})
  const listRef = useRef(null)
  const [indicator, setIndicator] = useState(null)

  useLayoutEffect(() => {
    const measure = () => {
      const el = tabRefs.current[active]
      const list = listRef.current
      if (!el || !list) return
      const elRect = el.getBoundingClientRect()
      const listRect = list.getBoundingClientRect()
      setIndicator({ left: elRect.left - listRect.left, width: elRect.width })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  const visible = active === 'all' ? skills : skills.filter((s) => s.category === active)
  const categoryLabel = (id) => skillCategories.find((c) => c.id === id)?.label || ''

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="skills-heading">
      {/* ambient background tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-midnight-900/60 to-transparent" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading eyebrow="What I work with" title={<>My <span className="text-gradient">Skills</span></>} />

        {/* Filter tabs */}
        <Reveal delay={120} className="mt-10 flex justify-center">
          <div
            ref={listRef}
            className="glass relative inline-flex flex-wrap justify-center gap-1 rounded-full p-1.5"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {indicator && (
              <span
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-lavender-600/70 to-electric-500/50 shadow-glow transition-all duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
                aria-hidden="true"
              />
            )}
            {tabs.map((tab) => {
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className={`relative z-10 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-300 sm:px-5 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Cards */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
          {visible.map((skill, i) => {
            const Icon = getIcon(skill.icon)
            return (
              <Reveal
                as="li"
                key={`${active}-${skill.name}`}
                delay={Math.min(i, 11) * 60}
                y={20}
              >
                <div className="card-glow glass group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-600/30 to-electric-500/20 text-lavender-300 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:border-lavender-400/40 group-hover:text-lavender-300">
                      <Layers className="h-3 w-3" aria-hidden="true" />
                      {categoryLabel(skill.category)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-snow transition-colors duration-300 group-hover:text-lavender-300">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{skill.description}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
