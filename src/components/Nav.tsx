import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hover } from './Hover'
import logo from '../assets/logo.png'

export type NavActive = 'home' | 'about' | 'new' | 'ministries' | 'events' | 'contact'

const MINISTRIES: { name: string; to: string }[] = [
  { name: 'Youth Ministry', to: '/ministries/youth-ministry' },
  { name: 'Music Ministry', to: '/ministries/music-ministry' },
  { name: 'Teens Ministry', to: '/ministries/teens-ministry' },
  { name: 'Children’s Ministry', to: '/ministries/childrens-ministry' },
  { name: 'Chaplaincy Ministry', to: '/ministries/chaplaincy-ministry' },
  { name: 'Home Care Ministry', to: '/ministries/home-care-ministry' },
  { name: 'Discipleship Ministry', to: '/ministries/discipleship-ministry' },
  { name: 'Marriage Care Ministry', to: '/ministries/marriage-care-ministry' },
  { name: 'Men’s & Young Men’s', to: '/ministries/mens-young-mens-ministry' },
  { name: 'Prayer & Intercessory', to: '/ministries/prayer-intercessory-ministry' },
  { name: 'Women’s Ministry', to: '/ministries/womens-ministry' },
  { name: 'Hospitality & Welcome', to: '/ministries/hospitality-welcome-ministry' },
  { name: 'Media & Communication', to: '/ministries/media-communication-ministry' },
]

const baseLink: CSSProperties = {
  textDecoration: 'none',
  color: '#33434f',
  fontWeight: 600,
  fontSize: '15px',
  padding: '8px 14px',
  borderBottom: '2px solid transparent',
  fontFamily: 'Mulish,sans-serif',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'color .15s',
}

const activeLink: CSSProperties = {
  ...baseLink,
  color: '#ec1c24',
  borderBottom: '2px solid #ec1c24',
}

const dropItem: CSSProperties = {
  display: 'block',
  padding: '11px 22px',
  textDecoration: 'none',
  color: '#33434f',
  fontWeight: 500,
  fontSize: '14px',
}

const mobItem: CSSProperties = {
  display: 'block',
  padding: '13px 8px',
  textDecoration: 'none',
  color: '#1f3a49',
  fontWeight: 700,
  borderBottom: '1px solid #eef4f9',
}

const mobToggle: CSSProperties = {
  ...mobItem,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  background: 'none',
  border: 'none',
  borderBottom: '1px solid #eef4f9',
  cursor: 'pointer',
  fontFamily: "'Mulish',sans-serif",
  fontSize: '16px',
  textAlign: 'left',
}

const mobSubItem: CSSProperties = {
  display: 'block',
  padding: '11px 8px 11px 24px',
  textDecoration: 'none',
  color: '#5a6772',
  fontWeight: 600,
  fontSize: '14px',
  borderBottom: '1px solid #f4f8fb',
}

const mobChevron = (open: boolean): CSSProperties => ({
  marginLeft: '10px',
  fontSize: '11px',
  opacity: 0.5,
  display: 'inline-block',
  transition: 'transform .2s',
  transform: open ? 'rotate(180deg)' : 'none',
})

export default function Nav({ active }: { active?: NavActive }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [minOpen, setMinOpen] = useState(false)
  const [mobAbout, setMobAbout] = useState(false)
  const [mobMin, setMobMin] = useState(false)

  const closeMobile = () => setMobileOpen(false)
  const hdr = useRef<HTMLElement>(null)
  const aboutTimer = useRef<number | undefined>(undefined)
  const minTimer = useRef<number | undefined>(undefined)

  // Open immediately; close after a short grace period so moving the cursor
  // from the trigger onto the submenu doesn't dismiss it.
  const openAbout = () => {
    window.clearTimeout(aboutTimer.current)
    setAboutOpen(true)
  }
  const closeAbout = () => {
    aboutTimer.current = window.setTimeout(() => setAboutOpen(false), 140)
  }
  const openMin = () => {
    window.clearTimeout(minTimer.current)
    setMinOpen(true)
  }
  const closeMin = () => {
    minTimer.current = window.setTimeout(() => setMinOpen(false), 140)
  }

  useEffect(
    () => () => {
      window.clearTimeout(aboutTimer.current)
      window.clearTimeout(minTimer.current)
    },
    [],
  )

  useEffect(() => {
    const getY = () =>
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    let last = getY()
    const onScroll = () => {
      const el = hdr.current
      if (!el) return
      const y = getY()
      if (y > last && y > 120) {
        el.style.transform = 'translateY(-170%)'
        el.style.opacity = '0'
      } else {
        el.style.transform = 'translateY(0)'
        el.style.opacity = '1'
      }
      last = y <= 0 ? 0 : y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const s = (k: NavActive) => (active === k ? activeLink : baseLink)
  const h = (k: NavActive) => (active === k ? {} : { color: '#ec1c24' })

  return (
    <header
      ref={hdr}
      style={{
        fontFamily: "'Mulish',sans-serif",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        transition: 'transform .45s cubic-bezier(.16,1,.3,1),opacity .45s ease',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '14px 22px' }}>
        <div
          style={{
            background: 'rgba(255,255,255,.72)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1.6px solid rgba(255,255,255,.6)',
            borderRadius: '6px',
            boxShadow: '0 14px 40px rgba(16,80,120,.16)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '9px 12px 9px 18px',
          }}
        >
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flex: 'none' }}
          >
            <img
              className="ea-logo"
              src={logo}
              alt="East Assembly KAG Buru Buru Church"
              style={{ height: '44px', width: 'auto', display: 'block' }}
            />
          </Link>

          <nav className="ea-desk" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <Hover as={Link} to="/" style={s('home')} hoverStyle={h('home')}>
              Home
            </Hover>

            <div style={{ position: 'relative' }} onMouseEnter={openAbout} onMouseLeave={closeAbout}>
              <Hover as={Link} to="/about" style={s('about')} hoverStyle={h('about')}>
                About Us <span style={{ fontSize: '9px', opacity: 0.55 }}>&#9660;</span>
              </Hover>
              {aboutOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: '8px', minWidth: '224px' }}>
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e6eef4',
                      borderRadius: '6px',
                      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
                      padding: '6px 0',
                      animation: 'eaDrop .18s ease',
                    }}
                  >
                    <Hover
                      as={Link}
                      to="/about"
                      style={dropItem}
                      hoverStyle={{ color: '#ec1c24' }}
                    >
                      Church Background
                    </Hover>
                    <Hover
                      as={Link}
                      to="/pastors"
                      style={dropItem}
                      hoverStyle={{ color: '#ec1c24' }}
                    >
                      Pastoral Team
                    </Hover>
                  </div>
                </div>
              )}
            </div>

            <Hover as={Link} to="/im-new" style={s('new')} hoverStyle={h('new')}>
              I&rsquo;m New
            </Hover>

            <div style={{ position: 'relative' }} onMouseEnter={openMin} onMouseLeave={closeMin}>
              <Hover
                as={Link}
                to="/ministries"
                style={s('ministries')}
                hoverStyle={h('ministries')}
              >
                Ministries <span style={{ fontSize: '9px', opacity: 0.55 }}>&#9660;</span>
              </Hover>
              {minOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '8px',
                  }}
                >
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e6eef4',
                      borderRadius: '6px',
                      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
                      padding: '10px 8px',
                      width: '560px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '2px',
                      animation: 'eaDrop .18s ease',
                    }}
                  >
                    {MINISTRIES.map((m) => (
                    <Hover
                      key={m.name}
                      as={Link}
                      to={m.to}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '9px 14px',
                        textDecoration: 'none',
                        color: '#33434f',
                        fontWeight: 500,
                        fontSize: '13.5px',
                      }}
                      hoverStyle={{ color: '#ec1c24' }}
                    >
                      {m.name}
                    </Hover>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Hover as={Link} to="/events" style={s('events')} hoverStyle={h('events')}>
              Events
            </Hover>
            <Hover as={Link} to="/contact" style={s('contact')} hoverStyle={h('contact')}>
              Contact
            </Hover>
          </nav>

          <div
            className="ea-desk"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 'none' }}
          >
            <span style={{ width: '1px', height: '26px', background: '#e3edf4', margin: '0 2px' }} />
            <Hover
              as={Link}
              to="/live"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '.02em',
                padding: '10px 16px',
                borderRadius: '6px',
                background: '#ec1c24',
                transition: 'background .2s',
              }}
              hoverStyle={{ background: '#c4141b' }}
            >
              LIVE
            </Hover>
            <Hover
              as={Link}
              to="/give"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '.02em',
                padding: '10px 22px',
                borderRadius: '6px',
                background: '#00adee',
                transition: 'background .2s',
              }}
              hoverStyle={{ background: '#0b8fc4' }}
            >
              GIVE
            </Hover>
          </div>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="ea-burger"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '5px',
              padding: '10px',
              marginRight: '6px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{ width: '24px', height: '2.5px', background: '#0b7bb0', borderRadius: '2px', display: 'block' }} />
            <span style={{ width: '24px', height: '2.5px', background: '#0b7bb0', borderRadius: '2px', display: 'block' }} />
            <span style={{ width: '24px', height: '2.5px', background: '#0b7bb0', borderRadius: '2px', display: 'block' }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="ea-mob" style={{ maxWidth: '1300px', margin: '-6px auto 0', padding: '0 22px' }}>
          <div
            style={{
              background: '#fff',
              border: '1.6px solid rgba(18,56,76,.14)',
              borderRadius: '24px',
              boxShadow: '0 16px 40px rgba(16,80,120,.14)',
              padding: '12px 16px 18px',
              animation: 'eaDrop .2s ease',
              maxHeight: 'calc(100vh - 104px)',
              overflowY: 'auto',
            }}
          >
            <Link to="/" style={mobItem} onClick={closeMobile}>Home</Link>

            {/* About Us — accordion */}
            <button
              style={mobToggle}
              onClick={() => setMobAbout((o) => !o)}
              aria-expanded={mobAbout}
            >
              About Us <span style={mobChevron(mobAbout)}>&#9660;</span>
            </button>
            {mobAbout && (
              <div>
                <Link to="/about" style={mobSubItem} onClick={closeMobile}>Church Background</Link>
                <Link to="/pastors" style={mobSubItem} onClick={closeMobile}>Pastoral Team</Link>
              </div>
            )}

            <Link to="/im-new" style={mobItem} onClick={closeMobile}>I&rsquo;m New</Link>

            {/* Ministries — accordion */}
            <button
              style={mobToggle}
              onClick={() => setMobMin((o) => !o)}
              aria-expanded={mobMin}
            >
              Ministries <span style={mobChevron(mobMin)}>&#9660;</span>
            </button>
            {mobMin && (
              <div>
                <Link to="/ministries" style={{ ...mobSubItem, color: '#0e9fd6', fontWeight: 700 }} onClick={closeMobile}>
                  All Ministries
                </Link>
                {MINISTRIES.map((m) => (
                  <Link key={m.name} to={m.to} style={mobSubItem} onClick={closeMobile}>
                    {m.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/events" style={mobItem} onClick={closeMobile}>Events</Link>
            <Link to="/contact" style={mobItem} onClick={closeMobile}>Contact Us</Link>
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <Link
                to="/live"
                onClick={() => setMobileOpen(false)}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: 700,
                  padding: '13px',
                  borderRadius: '6px',
                  background: '#ec1c24',
                }}
              >
                Live Stream
              </Link>
              <Link
                to="/give"
                onClick={() => setMobileOpen(false)}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: '#fff',
                  fontWeight: 700,
                  padding: '13px',
                  borderRadius: '6px',
                  background: '#00adee',
                }}
              >
                Give
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
