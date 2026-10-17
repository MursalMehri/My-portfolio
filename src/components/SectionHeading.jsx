import Reveal from './Reveal'

/**
 * Animated section heading: small eyebrow label, gradient title,
 * and an underline that grows in when visible.
 */
export default function SectionHeading({ eyebrow, title, align = 'center' }) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-lavender-400/90">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-lavender-400/70" />
          {eyebrow}
          <span className="h-px w-6 bg-gradient-to-l from-lavender-400/70 to-transparent" />
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <span
        className={`mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-lavender-600 via-lavender-400 to-electric-400 heading-underline ${
          align === 'left' ? '' : 'origin-center'
        }`}
      />
    </Reveal>
  )
}
