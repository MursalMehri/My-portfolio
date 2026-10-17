import { ExternalLink, Users } from 'lucide-react'
import { projects } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Real screenshots of the live sites (captured 2026-10-17).
import teacherShot from '../assets/projects/teacher.jpg'
import teacherDayShot from '../assets/projects/teacherday.jpg'
import universityShot from '../assets/projects/university.jpg'
import lifelineShot from '../assets/projects/lifeline.jpg'
import framerShot from '../assets/projects/framer.jpg'

const previews = {
  teacher: teacherShot,
  teacherday: teacherDayShot,
  university: universityShot,
  lifeline: lifelineShot,
  framer: framerShot,
}

// Abstract, CSS-generated preview used when a screenshot is unavailable.
function AbstractPreview({ name, index }) {
  const palettes = [
    ['from-lavender-600/50', 'to-electric-500/30'],
    ['from-electric-500/40', 'to-lavender-600/30'],
    ['from-indigo-500/40', 'to-sky-500/30'],
    ['from-rose-500/30', 'to-lavender-600/40'],
    ['from-violet-500/40', 'to-blue-500/30'],
  ]
  const [from, to] = palettes[index % palettes.length]
  const initial = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${from} ${to}`}
      aria-hidden="true"
    >
      <div className="bg-grid absolute inset-0 opacity-70" />
      <span className="spin-slow absolute -right-8 -top-8 h-32 w-32 rounded-full border border-dashed border-white/20" style={{ animationDuration: '26s' }} />
      <span className="float-y absolute bottom-5 left-6 h-3 w-3 rounded-full bg-white/40" style={{ '--dur': '5s' }} />
      <span className="float-y absolute bottom-10 right-10 h-2 w-2 rounded-full bg-white/30" style={{ '--dur': '6.5s', '--delay': '-2s' }} />
      <span className="glass relative flex h-20 w-20 items-center justify-center rounded-2xl font-display text-3xl font-extrabold text-white shadow-glow">
        {initial}
      </span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="projects-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(124,110,230,0.08),transparent_70%)]" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading eyebrow="Things I've built" title={<>Featured <span className="text-gradient">Projects</span></>} />

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120} className="h-full">
              <article className="card-glow glass group flex h-full flex-col overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                {/* Preview */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
                  {previews[project.preview] ? (
                    <img
                      src={previews[project.preview]}
                      alt={`Screenshot of the live ${project.title} website`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                      <AbstractPreview name={project.title} index={i} />
                    </div>
                  )}
                  {/* Hover veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />
                  {project.contribution && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-midnight-950/70 px-3 py-1 text-[11px] font-semibold text-lavender-200 backdrop-blur-md">
                      <Users className="h-3 w-3" aria-hidden="true" />
                      {project.contribution}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-snow transition-colors duration-300 group-hover:text-lavender-300">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-slate-300 transition-colors duration-300 group-hover:border-lavender-400/30 group-hover:text-lavender-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary group/btn !px-5 !py-2.5 text-[13px]"
                      aria-label={`Open the live demo of ${project.title} in a new tab`}
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                    </a>
                    <span className="hidden max-w-[55%] truncate text-[11px] text-slate-500 sm:block" aria-hidden="true">
                      {project.url.replace('https://', '')}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
