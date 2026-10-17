import { Github, Linkedin, Mail, LinkIcon } from 'lucide-react'
import { contact } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GlowOrbs } from './fx/ParticleField'

const channels = [
  {
    key: 'email',
    label: 'Email',
    href: contact.email ? `mailto:${contact.email}` : null,
    icon: Mail,
    hint: contact.email || 'Email address to be added',
  },
  {
    key: 'github',
    label: 'GitHub',
    href: contact.github,
    icon: Github,
    hint: contact.github || 'GitHub profile to be added',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: contact.linkedin,
    icon: Linkedin,
    hint: contact.linkedin || 'LinkedIn profile to be added',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28" aria-labelledby="contact-heading">
      <GlowOrbs
        orbs={[
          {
            id: 'contact-orb-1',
            left: '10%',
            top: '20%',
            size: '280px',
            background: 'radial-gradient(circle, rgba(124, 110, 230, 0.4), transparent 65%)',
            dur: '16s',
          },
          {
            id: 'contact-orb-2',
            left: '70%',
            top: '35%',
            size: '300px',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.35), transparent 65%)',
            dur: '14s',
            delay: '-6s',
          },
        ]}
      />

      <div className="container-x relative">
        <SectionHeading eyebrow="Say hello" title={<>Let's <span className="text-gradient">Connect</span></>} />

        <Reveal as="p" delay={140} className="mx-auto mt-6 max-w-xl text-center font-serif text-lg italic text-slate-400 sm:text-xl">
          "{contact.intro}"
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            if (channel.href) {
              return (
                <Reveal key={channel.key} delay={i * 110}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={channel.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="btn btn-primary group"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    {channel.label}
                  </a>
                </Reveal>
              )
            }
            return (
              <Reveal key={channel.key} delay={i * 110}>
                <button
                  type="button"
                  disabled
                  aria-label={`${channel.label} link not added yet — placeholder`}
                  title="This link will be activated once it is added in src/data/portfolio.js"
                  className="btn cursor-not-allowed border border-dashed border-white/20 bg-transparent !text-slate-400"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {channel.label}
                  <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    <LinkIcon className="h-3 w-3" aria-hidden="true" />
                    Link not set
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>

        <Reveal as="p" delay={420} className="mt-8 text-center text-xs text-slate-500">
          These buttons become live links as soon as the details are added to the site data.
        </Reveal>
      </div>
    </section>
  )
}
