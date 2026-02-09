import { useEffect, useId, useMemo, useRef, useState } from 'react'

import LogoMark from '../Logo/LogoMark'

type NavItem = {
  label: string
  href: string
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null)

  const items = useMemo<NavItem[]>(
    () => [
      { label: 'Dashboard', href: '#dashboard' },
      { label: 'Threat Intel', href: '#intel' },
      { label: 'Labs', href: '#labs' },
      { label: 'Tools', href: '#tools' },
    ],
    [],
  )

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (open) {
      queueMicrotask(() => firstMobileLinkRef.current?.focus())
    } else {
      queueMicrotask(() => menuButtonRef.current?.focus())
    }
  }, [open])

  return (
    <header className="nav" role="banner">
      <div className="nav__inner">
        <a className="nav__brand" href="#dashboard" onClick={close}>
          <span className="nav__logo" aria-hidden="true">
            <LogoMark className="nav__logoMark" />
          </span>
          <span className="nav__brandText">
            CySec<span className="nav__brandAccent">Console</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {items.map((item) => (
            <a key={item.href} className="nav__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <a className="nav__cta" href="#signin">
            Sign in
          </a>

          <button
            ref={menuButtonRef}
            className="nav__menuButton"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? 'nav__burger nav__burger--open' : 'nav__burger'} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav__mobile" data-open>
          <div className="nav__overlay" onClick={close} />

          <div
            id={panelId}
            className="nav__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav__panelHeader">
              <div className="nav__panelTitle">Navigation</div>
              <button className="nav__panelClose" type="button" onClick={close}>
                Close
              </button>
            </div>

            <div className="nav__panelLinks" role="navigation" aria-label="Mobile primary">
              {items.map((item, idx) => (
                <a
                  key={item.href}
                  className="nav__panelLink"
                  href={item.href}
                  onClick={close}
                  ref={idx === 0 ? firstMobileLinkRef : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="nav__panelFooter">
              <a className="nav__panelCta" href="#signin" onClick={close}>
                Sign in
              </a>
              <a className="nav__panelSecondary" href="#contact" onClick={close}>
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
