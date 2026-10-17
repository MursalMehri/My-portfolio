import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper powered by IntersectionObserver.
 * Children fade/slide in once when they enter the viewport.
 *
 * Props:
 *  - as: element/tag to render (default 'div')
 *  - delay: stagger delay in ms
 *  - y: vertical offset in px
 *  - className: extra classes
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 26,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, '--reveal-y': `${y}px` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
