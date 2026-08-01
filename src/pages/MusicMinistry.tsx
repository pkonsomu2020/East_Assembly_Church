import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon, type IconName } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'

/* ---------------------------------------------------------------- tokens */
const eyebrow: CSSProperties = { color: '#ec1c24', fontWeight: 800, letterSpacing: '.16em', fontSize: '13px', textTransform: 'uppercase' }
const h2: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans'",
  fontWeight: 800,
  fontSize: '40px',
  color: '#12384c',
  margin: '14px 0 0',
  letterSpacing: '-.01em',
  textWrap: 'balance',
}
const lead: CSSProperties = { fontSize: '17px', lineHeight: 1.78, color: '#5a6772' }

const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

/* ------------------------------------------------------------------ data */
const TEAMS = [
  {
    img: '/MINISTRIES/music-min3.jpeg',
    title: 'Youth & Teens Worship',
    text: 'Leading engaging services for young members, fostering spiritual growth in a vibrant and inclusive environment. They serve in the Youth and Teens churches respectively.',
  },
  {
    img: '/MINISTRIES/music-min1.jpeg',
    title: 'Main Church Worship',
    text: 'Leading the congregation in worship during Sunday services and mid-week gatherings, creating a spiritually enriching experience for all who attend.',
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

export default function MusicMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - statement panel */}
      <section
        style={{
          background: 'linear-gradient(135deg,#0b2a3d 0%,#0e5f86 60%,#0e9fd6 100%)',
          color: '#fff',
          textAlign: 'center',
          padding: '150px 26px 96px',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#ff9ea2', animation: 'eaUp .6s ease both' }}>Music Ministry</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '56px',
              lineHeight: 1.06,
              letterSpacing: '-.02em',
              margin: '16px 0 20px',
              textWrap: 'balance',
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            Ministering the Word through music
          </h1>
          <p style={{ fontSize: '19px', lineHeight: 1.7, color: '#dcecf5', maxWidth: '640px', margin: '0 auto 32px', animation: 'eaUp .7s ease .16s both' }}>
            We seek to encourage, empower, uplift, and serve the church in our ministry of the Word of God
            through music.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'linear-gradient(135deg,#ec1c24,#ff5058)', boxShadow: '0 12px 30px rgba(236,28,36,.35)', fontSize: '15.5px' }} hoverStyle={{ transform: 'translateY(-2px)' }}>
              Join the Team
            </Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'rgba(255,255,255,.14)', border: '1.6px solid rgba(255,255,255,.55)', fontSize: '15.5px' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>
              All Ministries
            </Hover>
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <div role="img" aria-label="The worship team leading praise" style={{ height: '360px', ...bg('/MINISTRIES/music-min1.jpeg', 'center 35%') }} />

      {/* MISSION & OBJECTIVE */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[
            { tint: '#fdecec', color: '#ec1c24', icon: 'music', title: 'Our Mission', body: 'To encourage, empower, uplift, and serve the church in our ministry of the Word of God through music.' },
            { tint: '#e8f7fd', color: '#0e9fd6', icon: 'target', title: 'Our Objective', body: 'To connect the congregation to God through music, praise, and worship, in order to deliver revival and growth.' },
          ].map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 120} style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '22px', padding: '36px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }}>
              <span style={{ width: '56px', height: '56px', borderRadius: '16px', background: c.tint, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}><Icon name={c.icon as IconName} size={24} /></span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '23px', color: '#12384c', margin: '0 0 10px' }}>{c.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '16px', margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAMS */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }} data-reveal>
            <span style={eyebrow}>Our teams</span>
            <h2 style={h2}>Two teams, one worship</h2>
            <p style={{ ...lead, marginTop: '14px' }}>
              Under one music pastor, each team is guided by its own leadership committee.
            </p>
          </div>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
            {TEAMS.map((t, i) => (
              <div key={t.title} data-reveal data-reveal-delay={i * 120} style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(16,80,120,.08)' }}>
                <div role="img" aria-label={t.title} style={{ aspectRatio: '16/9', ...bg(t.img, 'center 30%') }} />
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '23px', color: '#12384c', margin: '0 0 10px' }}>{t.title}</h3>
                  <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE + ANNUAL */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
          {/* Schedule */}
          <div data-reveal="left">
            <span style={eyebrow}>When we gather</span>
            <h2 style={{ ...h2, fontSize: '34px' }}>Rehearsals &amp; prayers</h2>
            <div style={{ marginTop: '24px', border: '1px solid #e7f0f6', borderRadius: '20px', overflow: 'hidden' }}>
              {SCHEDULE.map((s, i) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 22px', borderTop: i ? '1px solid #eef4f9' : 'none', background: '#fff' }}>
                  <span style={{ flex: 'none', width: '96px', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#0e9fd6', fontSize: '14px' }}>{s.day}</span>
                  <span style={{ flex: 1, color: '#12384c', fontWeight: 600, fontSize: '15px' }}>{s.label}</span>
                  <span style={{ flex: 'none', color: '#6b7885', fontSize: '13.5px', fontWeight: 700 }}>{s.time}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Annual */}
          <div data-reveal="right">
            <span style={eyebrow}>All year round</span>
            <h2 style={{ ...h2, fontSize: '34px' }}>Signature events</h2>
            <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {ANNUAL.map((a) => (
                <div key={a.name} style={{ display: 'flex', gap: '14px', alignItems: 'center', background: '#fff', border: '1px solid #e7f0f6', borderRadius: '18px', padding: '20px' }}>
                  <span style={{ width: '46px', height: '46px', flex: 'none', borderRadius: '13px', background: '#fdecec', color: '#ec1c24', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}><Icon name={a.icon as IconName} size={24} /></span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '15px', lineHeight: 1.3 }}>{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORSHIP SCRIPTURE BAND */}
      <section
        style={{
          position: 'relative',
          color: '#fff',
          backgroundImage: 'linear-gradient(135deg, rgba(11,42,61,.86), rgba(14,95,134,.82)), url(/MINISTRIES/music-min2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '92px 26px', textAlign: 'center' }} data-reveal="scale">
          <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: '27px', lineHeight: 1.5, margin: '0 0 18px', textWrap: 'pretty' }}>
            Make a joyful noise unto the Lord, all the earth. Serve the Lord with gladness; come before his
            presence with singing.
          </p>
          <div style={{ color: '#ff9ea2', fontWeight: 800, letterSpacing: '.1em', fontSize: '14px' }}>PSALM 100:1-2</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '92px 26px 96px' }}>
        <div
          data-reveal="scale"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'linear-gradient(135deg,#ec1c24,#ff5058)',
            color: '#fff',
            borderRadius: '28px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(236,28,36,.24)',
          }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>
            Lift your voice with us
          </h2>
          <p style={{ color: '#ffe1e2', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            If you love to sing or play, come and serve God and His people through the ministry of music.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#ec1c24', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>
              Get In Touch
            </Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', background: 'rgba(255,255,255,.16)', border: '1.7px solid rgba(255,255,255,.55)', color: '#fff', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'background .2s' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>
              Back to Ministries
            </Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
