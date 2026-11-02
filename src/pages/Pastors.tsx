import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useMotion } from '../hooks/useMotion'

interface Pastor {
  name: string
  role: string
  /** Optional second line (areas of responsibility). */
  focus?: string
  /** Portrait in /public. Without one, a solid initials tile is shown. */
  photo?: string
}

/* Add a `photo: '/pastors/name.jpg'` to any entry once the portrait is available. */
const LEADERS: Pastor[] = [
  {
    name: 'Rev. Elvis Irungu',
    role: 'Senior Pastor',
    focus: 'In charge of East Assembly Church',
    photo: '/PASTORS/pst.elvis.jpg',
  },
  {
    name: 'Bishop Pius Tembu, PhD',
    role: 'Bishop Emeritus',
    focus: 'Retired Senior Pastor of East Assembly Church',
    photo: '/bishop-tembu.jpeg',
  },
]

const TEAM: Pastor[] = [
  { name: 'Rev. Chaplain Margaret Kihoro', role: 'Chaplain and Care Zones Pastor', photo: '/thumbs/pastors/REV.%20MARGARET%20KIHORO%202.jpg' },
  { name: 'Rev. James Macharia', role: 'Pastor', photo: '/thumbs/pastors/PST.JAMESMACHARIA.jpeg' },
  { name: 'Rev. Philip Arunga', role: 'Youth and Teens Pastor', photo: '/thumbs/pastors/PST.%20JOMBA%20101.jpg' },
  { name: 'Pastor Dennis Omondi', role: 'Pastor and Music Director', photo: '/thumbs/pastors/PST%20DENNIS%204.jpg' },
  { name: 'Rev. Kelvin Macharia', role: 'Prayer Co-ordination and Missions', photo: '/thumbs/pastors/PST.%20KELVIN%20MACHARIA%208.jpg' },
  { name: 'Pastor Joy Arunga', role: 'Children’s Church Pastor', photo: '/thumbs/pastors/PST.%20JOY%20ARUNGA.jpg' },
  { name: 'Pastor Enoch Mutembei', role: 'Associate Pastor', photo: '/thumbs/pastors/PST_ENOCH.jpg' },
]

const TILES = ['#12384c', '#00adee', '#ec1c24']

/** Up to two initials, ignoring titles such as Rev./Pastor/Bishop/Chaplain. */
function initials(name: string): string {
  const skip = new Set(['rev.', 'pastor', 'bishop', 'chaplain', 'dr.', 'phd', 'phd,'])
  const parts = name.replace(',', '').split(' ').filter((p) => !skip.has(p.toLowerCase()))
  return (parts[0]?.[0] ?? '') + (parts[parts.length - 1]?.[0] ?? '')
}

function Portrait({ p, tile }: { p: Pastor; tile: string }) {
  return p.photo ? (
    <img
      src={p.photo}
      alt={p.name}
      loading="lazy"
      decoding="async"
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
    />
  ) : (
    <div
      role="img"
      aria-label={p.name}
      style={{
        width: '100%',
        height: '100%',
        background: tile,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Plus Jakarta Sans'",
        fontWeight: 800,
        fontSize: '64px',
        letterSpacing: '.02em',
      }}
    >
      {initials(p.name)}
    </div>
  )
}

export default function Pastors() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="about" />

      {/* HEADER */}
      <section style={{ background: '#f2f9fd', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '76px 26px', textAlign: 'center' }}>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', animation: 'eaUp .3s ease both' }}>
            OUR LEADERSHIP
          </span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '52px',
              color: '#00adee',
              margin: '14px 0 16px',
              letterSpacing: '-.02em',
              animation: 'eaUp .3s ease .02s both',
            }}
          >
            Our Pastoral Team
          </h1>
          <p style={{ fontSize: '18px', color: '#5a6772', maxWidth: '660px', margin: '0 auto', lineHeight: 1.65, animation: 'eaUp .3s ease .04s both' }}>
            Explore the legacy and dedication of our esteemed Pastoral Team, whose leadership and guidance have been
            instrumental in shaping our spiritual journey.
          </p>
        </div>
      </section>

      {/* CHURCH LEADERSHIP */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 26px 24px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {LEADERS.map((p, i) => (
            <div key={p.name} data-reveal="scale" data-reveal-delay={i * 140}>
              <div style={{ aspectRatio: '4 / 5', border: '2px solid #12384c', overflow: 'hidden', background: '#12384c' }}>
                <Portrait p={p} tile={i === 0 ? '#ec1c24' : '#12384c'} />
              </div>
              <div style={{ borderTop: '4px solid ' + (i === 0 ? '#ec1c24' : '#00adee'), paddingTop: '18px', marginTop: '-2px' }}>
                <span style={{ color: i === 0 ? '#ec1c24' : '#0e9fd6', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', textTransform: 'uppercase' }}>
                  {p.role}
                </span>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '32px', color: '#12384c', margin: '10px 0 8px', lineHeight: 1.1 }}>
                  {p.name}
                </h2>
                {p.focus && <p style={{ color: '#5a6772', fontSize: '16px', lineHeight: 1.55, margin: 0 }}>{p.focus}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 26px 80px' }}>
        <div style={{ borderTop: '2px solid #12384c', paddingTop: '18px', marginBottom: '36px' }} data-reveal>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '26px', color: '#12384c', margin: 0 }}>
            Pastors &amp; Ministry Leaders
          </h2>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '40px 28px' }}>
          {TEAM.map((p, i) => (
            <div key={p.name} data-reveal data-reveal-delay={(i % 3) * 90}>
              <div style={{ aspectRatio: '4 / 5', border: '2px solid #12384c', overflow: 'hidden', background: TILES[i % 3] }}>
                <Portrait p={p} tile={TILES[i % 3]} />
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', color: '#12384c', margin: '16px 0 6px' }}>
                {p.name}
              </h3>
              <div style={{ color: '#ec1c24', fontWeight: 800, fontSize: '12.5px', letterSpacing: '.09em', textTransform: 'uppercase' }}>
                {p.role}
              </div>
              {p.focus && (
                <p style={{ color: '#5a6772', fontSize: '14.5px', lineHeight: 1.55, margin: '8px 0 0' }}>{p.focus}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 96px' }}>
        <div
          data-reveal
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: '#12384c',
            color: '#fff',
            padding: '56px 40px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '34px', margin: '0 0 14px' }}>
            Need prayer or counsel?
          </h2>
          <p style={{ color: '#cfe4f0', fontSize: '17px', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Our pastoral team is here to walk with you. Reach out any time.
          </p>
          <Link to="/contact" className="ea-btn-r">Contact the Team</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
