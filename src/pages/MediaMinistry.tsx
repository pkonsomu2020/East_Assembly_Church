import { type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon, type IconName } from '../components/Icon'
import { Marquee, YBtn } from '../components/YouthKit'

/* ---------------------------------------------------------------- tokens */
const C = {
  bg: '#ffffff',
  panel: '#f2f9fd',
  line: '#d6e2ec',
  text: '#33434f',
  muted: '#5a6772',
  ink: '#12384c',
  dark: '#0d1014',
  darkLine: '#2a303a',
  red: '#ec1c24',
  blue: '#00adee',
  white: '#ffffff',
}
const mono = "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"

const eyebrow: CSSProperties = { fontFamily: mono, color: '#0b7bb0', fontWeight: 700, letterSpacing: '.18em', fontSize: '13px', textTransform: 'uppercase' }
const h2: CSSProperties = { fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: 'clamp(32px, 4.4vw, 52px)', color: C.ink, margin: '14px 0 0', letterSpacing: '-.02em', lineHeight: 1.05, textWrap: 'balance' }
const lead: CSSProperties = { fontSize: '17px', lineHeight: 1.75, color: C.muted }
const bg = (src: string, position = 'center'): CSSProperties => ({ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: position, backgroundRepeat: 'no-repeat' })

/** Camera-viewfinder corner marks around a positioned container. */
function Brackets({ color = C.white, size = 28, inset = 14 }: { color?: string; size?: number; inset?: number }) {
  const base: CSSProperties = { position: 'absolute', width: size, height: size, borderColor: color, borderStyle: 'solid', borderWidth: 0 }
  return (
    <>
      <span style={{ ...base, top: inset, left: inset, borderTopWidth: 3, borderLeftWidth: 3 }} />
      <span style={{ ...base, top: inset, right: inset, borderTopWidth: 3, borderRightWidth: 3 }} />
      <span style={{ ...base, bottom: inset, left: inset, borderBottomWidth: 3, borderLeftWidth: 3 }} />
      <span style={{ ...base, bottom: inset, right: inset, borderBottomWidth: 3, borderRightWidth: 3 }} />
    </>
  )
}

/** Decorative audio level meter. */
function Meter({ bars = 16 }: { bars?: number }) {
  return (
    <div className="ea-meter" aria-hidden="true">
      {Array.from({ length: bars }, (_, i) => (
        <span key={i} style={{ animationDelay: `${((i * 137) % 900) / 1000}s`, animationDuration: `${0.6 + ((i * 53) % 50) / 100}s` }} />
      ))}
    </div>
  )
}

function DarkBtn({ href, to, bg: b, hover, children }: { href?: string; to?: string; bg: string; hover: string; children: ReactNode }) {
  const style: CSSProperties = {
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
    background: b,
    color: C.white,
    fontWeight: 800,
    fontSize: '14.5px',
    letterSpacing: '.03em',
    textTransform: 'uppercase',
    padding: '15px 26px',
    borderRadius: '4px',
    transition: 'background .15s',
  }
  return href ? (
    <Hover as="a" href={href} target="_blank" rel="noreferrer" style={style} hoverStyle={{ background: hover }}>{children}</Hover>
  ) : (
    <Hover as={Link} to={to} style={style} hoverStyle={{ background: hover }}>{children}</Hover>
  )
}

/* ------------------------------------------------------------------ data */
const SERVICES = [
  { icon: 'broadcast', title: 'Live Streaming', text: 'Every service streamed live on YouTube and Facebook, so no one misses a moment.', level: 88 },
  { icon: 'sliders', title: 'Sound & Audio', text: 'Clear, balanced sound that carries worship and the Word across the room.', level: 62 },
  { icon: 'video', title: 'Video & Camera', text: 'Capturing services and events from every angle, for the screen and the stream.', level: 74 },
  { icon: 'monitor', title: 'Projection & Lyrics', text: 'Song lyrics, scriptures, and visuals that help the congregation follow along.', level: 50 },
  { icon: 'camera', title: 'Photography', text: 'Telling the story of church life through beautiful pictures.', level: 80 },
  { icon: 'megaphone', title: 'Communication', text: 'Sharing the Gospel and church news across our online platforms.', level: 68 },
]

const GALLERY = ['/MINISTRIES/media1.jpeg', '/MINISTRIES/media2.jpeg', '/MINISTRIES/media4.jpeg']

export default function MediaMinistry() {
  useMotion()
  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: C.bg, color: C.text }}>
      <Nav active="ministries" />

      {/* HERO - the viewfinder */}
      <section style={{ background: C.bg, overflow: 'hidden' }}>
        <div className="ea-2col" style={{ maxWidth: '1260px', margin: '0 auto', padding: '150px 26px 90px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '56px', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', background: C.red, color: C.white, padding: '8px 14px', borderRadius: '3px', fontFamily: mono, fontSize: '12.5px', fontWeight: 700, letterSpacing: '.08em', animation: 'eaUp .3s ease both' }}>
              MEDIA &amp; COMMUNICATION
            </span>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: 'clamp(40px, 5.6vw, 72px)', lineHeight: 1.02, letterSpacing: '-.025em', color: C.ink, margin: '22px 0 22px', textWrap: 'balance', animation: 'eaUp .3s ease .02s both' }}>
              Telling the story of what God is doing
            </h1>
            <p style={{ fontSize: '19px', lineHeight: 1.7, color: C.muted, maxWidth: '520px', margin: '0 0 32px', animation: 'eaUp .3s ease .04s both' }}>
              We share the Gospel through media, live streaming, and creative storytelling, carrying worship
              and the Word beyond the four walls of the church.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
              <DarkBtn to="/live" bg={C.red} hover="#c4141b">Watch Live</DarkBtn>
              <DarkBtn to="/ministries" bg={C.ink} hover="#0b2a3d">All Ministries</DarkBtn>
            </div>
          </div>

          {/* monitor */}
          <div style={{ animation: 'eaUp .3s ease .03s both' }}>
            <div style={{ position: 'relative', background: '#000', border: `2px solid ${C.dark}`, borderRadius: '6px', padding: '12px' }}>
              <div role="img" aria-label="Media team filming a service" style={{ position: 'relative', aspectRatio: '16 / 10', ...bg('/MINISTRIES/media3.jpeg') }}>
                <Brackets />
                {/* rule-of-thirds guides */}
                <span style={{ position: 'absolute', top: 0, bottom: 0, left: '33.33%', width: 1, background: 'rgba(255,255,255,.22)' }} />
                <span style={{ position: 'absolute', top: 0, bottom: 0, left: '66.66%', width: 1, background: 'rgba(255,255,255,.22)' }} />
                <span style={{ position: 'absolute', left: 0, right: 0, top: '33.33%', height: 1, background: 'rgba(255,255,255,.22)' }} />
                <span style={{ position: 'absolute', left: 0, right: 0, top: '66.66%', height: 1, background: 'rgba(255,255,255,.22)' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '12px' }}>
                <span style={{ width: '14px', height: '14px', background: C.red, flex: 'none' }} />
                <div style={{ flex: 1 }}><Meter bars={28} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee words={SERVICES.map((s) => s.title)} bg={C.red} fg={C.white} />

      {/* SERVICES - the switcher panel */}
      <section style={{ background: C.bg }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 52px' }} data-reveal>
            <span style={eyebrow}>Behind the scenes</span>
            <h2 style={h2}>What our team does</h2>
            <p style={{ ...lead, marginTop: '16px' }}>One team serving every service and event, so worship reaches every screen.</p>
          </div>
          <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', background: C.line, border: `2px solid ${C.line}` }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} data-reveal data-reveal-delay={(i % 3) * 90} style={{ background: C.white }}>
                <Hover style={{ padding: '30px 28px 28px', height: '100%', background: C.white, transition: 'background .15s', display: 'flex', flexDirection: 'column' }} hoverStyle={{ background: '#e8f4fb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                    <span style={{ width: '54px', height: '54px', borderRadius: '4px', background: C.blue, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={s.icon as IconName} size={26} />
                    </span>
                    <span style={{ fontFamily: mono, color: C.muted, fontSize: '14px', letterSpacing: '.1em' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: C.ink, margin: '0 0 10px' }}>{s.title}</h3>
                  <p style={{ color: C.muted, lineHeight: 1.65, fontSize: '15px', margin: '0 0 26px', flex: 1 }}>{s.text}</p>
                  {/* fader */}
                  <div aria-hidden="true" style={{ position: 'relative', height: '6px', background: C.line }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${s.level}%`, background: C.blue }} />
                    <span style={{ position: 'absolute', left: `calc(${s.level}% - 6px)`, top: '-7px', width: '12px', height: '20px', background: C.white, borderRadius: '2px' }} />
                  </div>
                </Hover>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WATCH ONLINE - the player */}
      <section style={{ background: C.panel, borderTop: `2px solid ${C.line}`, borderBottom: `2px solid ${C.line}` }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '56px', alignItems: 'center' }}>
            <div data-reveal="left">
              <span style={eyebrow}>Worship with us anywhere</span>
              <h2 style={h2}>Live every Sunday, online</h2>
              <p style={{ ...lead, margin: '20px 0 28px' }}>
                Can&rsquo;t make it in person? Join the East Assembly family live, wherever you are. Our team
                streams every service so you never miss a moment.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <DarkBtn href="https://www.youtube.com/@eastassemblychurch4046" bg={C.red} hover="#c4141b"><Icon name="youtube" size={18} /> YouTube</DarkBtn>
                <DarkBtn href="https://www.facebook.com/EastAssemblyChurch" bg={C.blue} hover="#0b8fc4"><Icon name="facebook" size={18} /> Facebook</DarkBtn>
                <DarkBtn to="/live" bg="#12384c" hover="#0b2a3d">Live Stream</DarkBtn>
              </div>
            </div>
            <div data-reveal="right">
              <div style={{ background: '#000', border: `2px solid ${C.dark}`, borderRadius: '6px', overflow: 'hidden' }}>
                <div role="img" aria-label="Camera operator filming worship" style={{ position: 'relative', aspectRatio: '16 / 9', ...bg('/MINISTRIES/media2.jpeg', 'center 30%') }}>
                  <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '84px', height: '84px', background: C.red, color: C.white, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="play" size={38} />
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', background: '#000' }}>
                  <span style={{ color: C.white, display: 'flex' }}><Icon name="play" size={18} /></span>
                  <div aria-hidden="true" style={{ position: 'relative', flex: 1, height: '5px', background: C.darkLine }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '38%', background: C.red }} />
                    <span style={{ position: 'absolute', left: 'calc(38% - 6px)', top: '-4px', width: '12px', height: '12px', background: C.white, borderRadius: '50%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY - the film strip */}
      <section style={{ background: C.bg, overflow: 'hidden' }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '100px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px' }} data-reveal>
            <span style={eyebrow}>In action</span>
            <h2 style={h2}>The team at work</h2>
          </div>
          <div data-reveal style={{ background: '#000', padding: '0 14px', border: `2px solid ${C.dark}` }}>
            <div aria-hidden="true" style={{ display: 'flex', gap: '12px', padding: '10px 0', overflow: 'hidden' }}>
              {Array.from({ length: 36 }, (_, i) => <span key={i} style={{ flex: 'none', width: '14px', height: '10px', background: '#cdd3da', borderRadius: '2px' }} />)}
            </div>
            <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px' }}>
              {GALLERY.map((src) => (
                <div key={src} role="img" aria-label="Media team in action" style={{ position: 'relative', aspectRatio: '4/3', ...bg(src, 'center 30%') }}>
                  <Brackets size={18} inset={10} />
                </div>
              ))}
            </div>
            <div aria-hidden="true" style={{ display: 'flex', gap: '12px', padding: '10px 0', overflow: 'hidden' }}>
              {Array.from({ length: 36 }, (_, i) => <span key={i} style={{ flex: 'none', width: '14px', height: '10px', background: '#cdd3da', borderRadius: '2px' }} />)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 110px', background: C.bg }}>
        <div data-reveal="scale" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', background: C.red, color: C.white, borderRadius: '6px', padding: 'clamp(48px, 7vw, 84px) 40px', textAlign: 'center' }}>
          <Brackets inset={16} />
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: 'clamp(32px, 4.6vw, 54px)', letterSpacing: '-.02em', margin: '0 0 16px', textWrap: 'balance' }}>Serve behind the scenes</h2>
          <p style={{ fontSize: '18px', maxWidth: '560px', margin: '0 auto 30px', lineHeight: 1.65 }}>Gifted in sound, video, photography, or design? Come and use your skills to help share the Gospel.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <YBtn to="/contact" bg={C.white} fg={C.ink} hover="#e8f4fb">Join the Team</YBtn>
            <YBtn to="/ministries" bg={C.ink} hover="#0b2a3d">Back to Ministries</YBtn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
