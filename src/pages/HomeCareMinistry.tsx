import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'

/* ---------------------------------------------------------------- tokens */
const eyebrow: CSSProperties = { color: '#0e9fd6', fontWeight: 800, letterSpacing: '.16em', fontSize: '13px', textTransform: 'uppercase' }
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
interface Overseer {
  name: string
  phone?: string
  accent: string
  zones: string[]
}

const OVERSEERS: Overseer[] = [
  {
    name: 'Sarah Mudogo',
    phone: '0722775555',
    accent: '#00adee',
    zones: ['Buruburu 2', 'Buruburu 3', 'City Council', 'Prudential', 'Uhuru', 'Harambee', 'Rabai'],
  },
  {
    name: 'Patrick Thuita',
    accent: '#ec1c24',
    zones: ['Umoja', 'Tena', 'Innercore', 'Kariobangi South', 'Jerusalem Jericho', 'Buruburu 1', 'Buruburu 5 ext', 'Outering', 'Pioneer'],
  },
  {
    name: 'Francis Oraro',
    phone: '0721787670',
    accent: '#0e9fd6',
    zones: ['Buruburu 4', 'Buruburu 5', 'Langata', 'Karen', 'Lavington', 'South B', 'Jamuhuri'],
  },
  {
    name: 'James Kyalo',
    phone: '0725920772',
    accent: '#ec1c24',
    zones: ['Nyayo Embakasi', 'Donholm', 'Savannah', 'Greenspan', 'Pipeline', 'Kirima', 'Fedha', 'Tumaini', 'Ruaka', 'Saika', 'Njiru', 'Komarock', 'Kayole', 'Kinoo', 'Riverside'],
  },
]

export default function HomeCareMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - split: text left, image right */}
      <section className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', minHeight: '560px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 6% 70px', background: '#f2f9fd' }}>
          <span style={{ ...eyebrow, animation: 'eaUp .3s ease both' }}>Home Care Ministry</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '52px',
              lineHeight: 1.06,
              letterSpacing: '-.02em',
              color: '#12384c',
              margin: '16px 0 20px',
              textWrap: 'balance',
              animation: 'eaUp .3s ease .02s both',
            }}
          >
            Building community, sharing life
          </h1>
          <p style={{ ...lead, maxWidth: '520px', margin: '0 0 30px', animation: 'eaUp .3s ease .04s both' }}>
            Part of our cell group ministry, Home Care is a family of 14 care zones, each led by a dedicated
            team, offering a supportive community close to where you live.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
            <Link to="/contact" className="ea-btn-r">Join a Care Zone</Link>
            <Link to="/ministries" className="ea-btn-b">All Ministries</Link>
          </div>
        </div>
        <div role="img" aria-label="Members sharing life in a care group" style={{ minHeight: '340px', ...bg('/MINISTRIES/caregroup1.jpeg') }} />
      </section>

      {/* ABOUT + STATS */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: '56px', alignItems: 'center' }}>
          <div role="img" aria-label="A home cell group in prayer" data-reveal="left" style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 24px 54px rgba(16,80,120,.16)', ...bg('/MINISTRIES/caregroup2.jpeg') }} />
          <div data-reveal="right">
            <span style={eyebrow}>Doing life together</span>
            <h2 style={h2}>Care groups since day one</h2>
            <p style={{ ...lead, margin: '18px 0 26px' }}>
              Established since the church&rsquo;s inception, each of our 14 home care zones has a leader and
              an assistant who create a nurturing environment. We help you find a zone that matches your
              location and schedule, so you never walk alone.
            </p>
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              <div>
                <div data-count="14" style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '40px', color: '#00adee' }}>14</div>
                <div style={{ color: '#6b7885', fontSize: '14px', fontWeight: 600 }}>Care zones</div>
              </div>
              <div>
                <div data-count="4" style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '40px', color: '#ec1c24' }}>4</div>
                <div style={{ color: '#6b7885', fontSize: '14px', fontWeight: 600 }}>Overseers</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '40px', color: '#00adee' }}>1</div>
                <div style={{ color: '#6b7885', fontSize: '14px', fontWeight: 600 }}>Church family</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY BAND */}
      <section
        style={{
          position: 'relative',
          color: '#fff',
          backgroundImage: 'linear-gradient(rgba(11,42,61,.82),rgba(11,42,61,.82)), url(/MINISTRIES/caregroup3.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '84px 26px', textAlign: 'center' }} data-reveal="scale">
          <span style={{ ...eyebrow, color: '#7fd0f2' }}>Serve. Love. Grow.</span>
          <h2 style={{ ...h2, color: '#fff', margin: '14px 0 14px' }}>The teams behind every zone</h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#dcecf5', margin: 0 }}>
            Warm, dedicated leaders and assistants who open their homes and hearts week after week.
          </p>
        </div>
      </section>

      {/* OVERSEERS DIRECTORY */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>Find your zone</span>
          <h2 style={h2}>Overseers &amp; care zones</h2>
          <p style={{ ...lead, marginTop: '14px' }}>
            Reach out to the overseer nearest you and they will connect you to the right care zone.
          </p>
        </div>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {OVERSEERS.map((o, i) => (
            <div key={o.name} data-reveal data-reveal-delay={(i % 2) * 120} style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '22px', padding: '30px', boxShadow: '0 8px 26px rgba(16,80,120,.06)', borderTop: `4px solid ${o.accent}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap', marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ width: '48px', height: '48px', flex: 'none', borderRadius: '50%', background: o.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800 }}>
                    {o.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '18px' }}>{o.name}</div>
                    <div style={{ color: '#8496a5', fontSize: '13px' }}>Zone Overseer</div>
                  </div>
                </div>
                {o.phone ? (
                  <a href={`tel:+254${o.phone.slice(1)}`} style={{ textDecoration: 'none', color: o.accent, fontWeight: 800, fontSize: '14px', whiteSpace: 'nowrap' }}>
                    📞 {o.phone}
                  </a>
                ) : (
                  <span style={{ color: '#8496a5', fontSize: '13px' }}>via the church office</span>
                )}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {o.zones.map((z) => (
                  <span key={z} style={{ background: '#00adee', color: '#fff', fontSize: '13px', fontWeight: 600, padding: '6px 13px', borderRadius: '6px' }}>{z}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 96px' }}>
        <div
          data-reveal="scale"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: '#00adee',
            color: '#fff',
            borderRadius: '28px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(0,120,180,.22)',
          }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>
            Join a care zone today
          </h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '560px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Experience the warmth of our church family in a community near you. We would love to help you
            find your place.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#0b7bb0', fontWeight: 800, padding: '15px 32px', borderRadius: '6px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>
              Get Connected
            </Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', background: '#12384c', color: '#fff', fontWeight: 800, padding: '15px 32px', borderRadius: '6px', display: 'inline-block', transition: 'background .2s' }} hoverStyle={{ background: '#0b2a3d' }}>
              Back to Ministries
            </Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
