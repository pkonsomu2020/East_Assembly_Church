import { type CSSProperties, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Icon, type IconName } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'
import { Marquee, YBtn } from '../components/YouthKit'

/* ---------------------------------------------------------------- tokens */
const RED = '#ec1c24'
const BLUE = '#00adee'
const NAVY = '#12384c'
const INK = '#0b2a3d'

const eyebrow: CSSProperties = { color: RED, fontWeight: 800, letterSpacing: '.16em', fontSize: '13px', textTransform: 'uppercase' }
const h2: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans'",
  fontWeight: 800,
  fontSize: 'clamp(32px, 4.4vw, 50px)',
  color: NAVY,
  margin: '14px 0 0',
  letterSpacing: '-.02em',
  lineHeight: 1.05,
  textWrap: 'balance',
}
const lead: CSSProperties = { fontSize: '17px', lineHeight: 1.78, color: '#5a6772' }

const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

/** A snapshot-style print: white border, soft natural shadow. */
const print = (rotate: number): CSSProperties => ({
  background: '#fff',
  padding: '10px',
  borderRadius: '4px',
  boxShadow: '0 16px 34px rgba(11,42,61,.18)',
  transform: `rotate(${rotate}deg)`,
})

/** A vinyl record built from solid rings, with a coloured label. `fill` sizes it to its parent. */
function Vinyl({ size, label, spin = true, fill = false }: { size: number; label: string; spin?: boolean; fill?: boolean }) {
  const ring = (px: number, c: string) => `inset 0 0 0 ${px}px ${c}`
  return (
    <div
      className={spin ? 'ea-spin' : undefined}
      aria-hidden="true"
      style={{
        position: 'relative',
        width: fill ? '100%' : size,
        height: fill ? '100%' : size,
        borderRadius: '50%',
        background: '#101214',
        boxShadow: [
          ring(size * 0.03, '#1b1e21'),
          ring(size * 0.036, '#2c3034'),
          ring(size * 0.1, '#101214'),
          ring(size * 0.106, '#2c3034'),
          ring(size * 0.17, '#101214'),
          ring(size * 0.176, '#2c3034'),
        ].join(','),
      }}
    >
      {/* light catch so the spin is visible */}
      <span style={{ position: 'absolute', inset: '5%', borderRadius: '50%', border: '3px solid transparent', borderTopColor: '#4a5058' }} />
      <span style={{ position: 'absolute', left: '50%', top: '50%', width: '34%', height: '34%', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: label }} />
      <span style={{ position: 'absolute', left: '50%', top: '50%', width: '5%', height: '5%', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: '#fff' }} />
    </div>
  )
}

/* ------------------------------------------------------------------ data */
const TEAMS = [
  {
    img: '/thumbs/music-ministry.jpeg',
    title: 'Youth & Teens Worship',
    text: 'Leading engaging services for young members, fostering spiritual growth in a vibrant and inclusive environment. They serve in the Youth and Teens churches respectively.',
    label: BLUE,
    tilt: -1.5,
  },
  {
    img: '/thumbs/music-min1.jpeg',
    title: 'Main Church Worship',
    text: 'Leading the congregation in worship during Sunday services and mid-week gatherings, creating a spiritually enriching experience for all who attend.',
    label: RED,
    tilt: 1.2,
  },
]

const SCHEDULE = [
  { day: 'Saturday', label: 'Main Church Worship rehearsal', time: '2:00pm - 5:00pm' },
  { day: 'Saturday', label: 'Youth Worship rehearsal', time: '2:00pm - 5:00pm' },
  { day: '2nd Thursday', label: 'Team prayers (online)', time: 'Monthly' },
]

const ANNUAL = [
  { icon: 'handshake', name: 'Team Building' },
  { icon: 'music', name: 'Praise Fest / Worship Experience' },
  { icon: 'cross', name: 'Easter Cantata Service' },
  { icon: 'star', name: 'Christmas Cantata Service' },
]

/** Record sleeve with the disc sliding out on hover. */
function Sleeve({ t }: { t: (typeof TEAMS)[number] }) {
  const [on, setOn] = useState(false)
  return (
    <div onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)} style={{ transform: `rotate(${t.tilt}deg)` }}>
      <div style={{ position: 'relative', padding: '0 0 0 0', marginBottom: '26px' }}>
        <div style={{ position: 'absolute', top: '6%', bottom: '6%', right: on ? '-16%' : '-4%', aspectRatio: '1', transition: 'right .45s cubic-bezier(.2,.8,.2,1)' }}>
          <Vinyl size={300} fill label={t.label} spin={false} />
        </div>
        <div
          role="img"
          aria-label={t.title}
          style={{ position: 'relative', zIndex: 2, aspectRatio: '1 / 1', borderRadius: '4px', boxShadow: '0 16px 34px rgba(11,42,61,.2)', ...bg(t.img, 'center 30%') }}
        />
      </div>
      <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '24px', color: NAVY, margin: '0 0 10px' }}>{t.title}</h3>
      <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>{t.text}</p>
    </div>
  )
}

export default function MusicMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO */}
      <section style={{ background: '#fff', overflow: 'hidden' }}>
        <div
          className="ea-2col"
          style={{ maxWidth: '1260px', margin: '0 auto', padding: '150px 26px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}
        >
          <div>
            <span style={{ ...eyebrow, animation: 'eaUp .3s ease both', display: 'inline-block' }}>Music Ministry</span>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: 'clamp(42px, 6vw, 82px)',
                lineHeight: 1,
                letterSpacing: '-.03em',
                color: NAVY,
                margin: '16px 0 22px',
                textWrap: 'balance',
                animation: 'eaUp .3s ease .02s both',
              }}
            >
              Ministering the Word through{' '}
              <span style={{ color: RED, borderBottom: `.1em solid ${BLUE}` }}>music</span>
            </h1>
            <p style={{ fontSize: '19px', lineHeight: 1.7, color: '#5a6772', maxWidth: '520px', margin: '0 0 32px', animation: 'eaUp .3s ease .04s both' }}>
              We seek to encourage, empower, uplift, and serve the church in our ministry of the Word of God
              through music.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
              <YBtn to="/contact" bg={RED} hover="#c4141b">Join the Team</YBtn>
              <YBtn to="/ministries" bg={NAVY} hover={INK}>All Ministries</YBtn>
            </div>
          </div>

          {/* the photo, popping out of the page */}
          <div style={{ position: 'relative', minHeight: '480px' }}>
            <div className="ea-pop" style={{ position: 'relative', padding: '28px 18px 36px 28px' }}>
              <span aria-hidden="true" style={{ position: 'absolute', inset: '4px 0 12px 22px', background: BLUE, borderRadius: '10px', transform: 'rotate(5deg)' }} />
              <div style={{ position: 'relative', ...print(-3), padding: '14px', boxShadow: '0 28px 56px rgba(11,42,61,.3)' }}>
                <div role="img" aria-label="The worship team leading praise" style={{ aspectRatio: '4 / 3', ...bg('/MINISTRIES/music-min1.jpeg', 'center 35%') }} />
              </div>
              <span style={{ position: 'absolute', left: '-6px', top: '6px', width: '78px', height: '78px', borderRadius: '50%', background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-10deg)', boxShadow: '0 12px 24px rgba(236,28,36,.35)' }}>
                <Icon name="music" size={36} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <Marquee words={['Music Ministry', 'Praise', 'Worship']} bg={RED} fg="#fff" />

      {/* MISSION & OBJECTIVE */}
      <section style={{ maxWidth: '1060px', margin: '0 auto', padding: '100px 26px 80px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>
          {[
            { bg: RED, icon: 'music', title: 'Our Mission', body: 'To encourage, empower, uplift, and serve the church in our ministry of the Word of God through music.', lift: 0, tilt: -1 },
            { bg: BLUE, icon: 'target', title: 'Our Objective', body: 'To connect the congregation to God through music, praise, and worship, in order to deliver revival and growth.', lift: 44, tilt: 1 },
          ].map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 120} style={{ paddingTop: c.lift }}>
              <div style={{ position: 'relative', background: c.bg, color: '#fff', borderRadius: '10px', padding: '40px 36px 40px', transform: `rotate(${c.tilt}deg)`, boxShadow: '0 18px 36px rgba(11,42,61,.16)' }}>
                <span style={{ position: 'absolute', top: '-26px', left: '30px', width: '58px', height: '58px', borderRadius: '50%', background: '#fff', color: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 18px rgba(11,42,61,.2)' }}>
                  <Icon name={c.icon as IconName} size={26} />
                </span>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '28px', margin: '14px 0 12px' }}>{c.title}</h3>
                <p style={{ lineHeight: 1.7, fontSize: '17px', margin: 0, fontWeight: 600 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAMS - record sleeves */}
      <section style={{ background: '#f2f9fd', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '100px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 64px' }} data-reveal>
            <span style={eyebrow}>Our teams</span>
            <h2 style={h2}>Two teams, one worship</h2>
            <p style={{ ...lead, marginTop: '16px' }}>
              Under one music pastor, each team is guided by its own leadership committee.
            </p>
          </div>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px' }}>
            {TEAMS.map((t, i) => (
              <div key={t.title} data-reveal data-reveal-delay={i * 120} style={{ paddingRight: '14%' }}>
                <Sleeve t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE + ANNUAL */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px' }}>
          {/* Set list */}
          <div data-reveal="left">
            <span style={eyebrow}>When we gather</span>
            <h2 style={{ ...h2, fontSize: 'clamp(28px, 3.4vw, 38px)' }}>Rehearsals &amp; prayers</h2>
            <div style={{ marginTop: '28px', background: '#fffdf6', border: '1px solid #ece5d0', borderRadius: '6px', padding: '8px 0', transform: 'rotate(-1deg)', boxShadow: '0 14px 30px rgba(11,42,61,.1)' }}>
              {SCHEDULE.map((s, i) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 22px', borderTop: i ? '2px dashed #e2dac0' : 'none' }}>
                  <span style={{ flex: 'none', minWidth: '104px', textAlign: 'center', background: i === 2 ? BLUE : RED, color: '#fff', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '13.5px', padding: '8px 10px', borderRadius: '4px', transform: `rotate(${i % 2 ? 2 : -2}deg)` }}>{s.day}</span>
                  <span style={{ flex: 1, color: NAVY, fontWeight: 700, fontSize: '15.5px' }}>{s.label}</span>
                  <span style={{ flex: 'none', color: '#6b7885', fontSize: '13.5px', fontWeight: 700 }}>{s.time}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Annual */}
          <div data-reveal="right">
            <span style={eyebrow}>All year round</span>
            <h2 style={{ ...h2, fontSize: 'clamp(28px, 3.4vw, 38px)' }}>Signature events</h2>
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              {ANNUAL.map((a, i) => (
                <div
                  key={a.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    background: i % 3 === 0 ? NAVY : '#fff',
                    color: i % 3 === 0 ? '#fff' : NAVY,
                    border: i % 3 === 0 ? 'none' : '1px solid #e1ebf2',
                    borderRadius: '10px',
                    padding: '22px 20px',
                    transform: `rotate(${[1.5, -1.2, -1.5, 1.2][i]}deg)`,
                    boxShadow: '0 12px 26px rgba(11,42,61,.1)',
                  }}
                >
                  <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: i % 2 ? BLUE : RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={a.icon as IconName} size={24} />
                  </span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '16px', lineHeight: 1.3 }}>{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORSHIP SCRIPTURE BAND */}
      <section style={{ background: NAVY, color: '#fff', overflow: 'hidden' }}>
        <div className="ea-2col" style={{ maxWidth: '1100px', margin: '0 auto', padding: '90px 26px', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: '56px', alignItems: 'center' }}>
          <div data-reveal="left" style={{ padding: '10px' }}>
            <div style={print(-3)}>
              <div role="img" aria-label="Worship in song" style={{ aspectRatio: '1', ...bg('/MINISTRIES/music-min2.jpeg', 'center 20%') }} />
            </div>
          </div>
          <div data-reveal="right">
            <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '96px', lineHeight: 0.6, color: BLUE, height: '44px' }}>&ldquo;</div>
            <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.4, margin: '0 0 22px', textWrap: 'pretty' }}>
              Make a joyful noise unto the Lord, all the earth. Serve the Lord with gladness; come before his
              presence with singing.
            </p>
            <span style={{ display: 'inline-block', background: RED, color: '#fff', fontWeight: 800, letterSpacing: '.1em', fontSize: '13px', padding: '8px 14px', borderRadius: '4px' }}>PSALM 100:1-2</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 26px 110px', overflow: 'hidden' }}>
        <div data-reveal="scale" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', background: RED, color: '#fff', borderRadius: '12px', padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div style={{ position: 'absolute', right: '-70px', top: '-70px', opacity: 1 }} aria-hidden="true">
            <Vinyl size={190} label={BLUE} />
          </div>
          <h2 style={{ position: 'relative', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: 'clamp(30px, 4.4vw, 52px)', letterSpacing: '-.02em', margin: '0 0 16px', textWrap: 'balance' }}>
            Lift your voice with us
          </h2>
          <p style={{ position: 'relative', fontSize: '18px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.65 }}>
            If you love to sing or play, come and serve God and His people through the ministry of music.
          </p>
          <div style={{ position: 'relative', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <YBtn to="/contact" bg="#fff" fg={RED} hover="#fde7e8">Get In Touch</YBtn>
            <YBtn to="/ministries" bg={NAVY} hover={INK}>Back to Ministries</YBtn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
