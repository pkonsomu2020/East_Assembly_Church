import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon, type IconName } from '../components/Icon'

const eyebrow: CSSProperties = { color: '#ec1c24', fontWeight: 800, letterSpacing: '.16em', fontSize: '13px', textTransform: 'uppercase' }
const h2: CSSProperties = { fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '40px', color: '#12384c', margin: '14px 0 0', letterSpacing: '-.01em', textWrap: 'balance' }
const lead: CSSProperties = { fontSize: '17px', lineHeight: 1.78, color: '#5a6772' }
const bg = (src: string, position = 'center'): CSSProperties => ({ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: position, backgroundRepeat: 'no-repeat' })

const TIMES = [
  { icon: 'laptop', title: 'Morning Prayer (Zoom)', time: '6:00 - 6:30 AM', note: 'Daily, in one accord online' },
  { icon: 'sunrise', title: 'Physical Morning Prayer', time: '6:00 - 7:00 AM', note: 'Gathering at the church' },
  { icon: 'flame', title: 'Tuesday Evening Prayer', time: '6:00 - 7:30 PM', note: 'Midweek intercession' },
  { icon: 'utensils', title: 'Prayer & Fasting Week', time: 'Monthly', note: 'At the beginning of each month' },
]

export default function PrayerMinistry() {
  useMotion()
  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - full image */}
      <section style={{ position: 'relative', minHeight: '620px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', backgroundImage: 'linear-gradient(180deg, rgba(11,42,61,.62), rgba(11,42,61,.86)), url(/MINISTRIES/prayer1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }}>
        <div style={{ maxWidth: '820px', padding: '150px 26px 80px' }}>
          <span style={{ ...eyebrow, color: '#ff9ea2', animation: 'eaUp .6s ease both' }}>Prayer &amp; Intercessory Ministry</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '62px', lineHeight: 1.03, letterSpacing: '-.02em', margin: '14px 0 18px', textWrap: 'balance', animation: 'eaUp .7s ease .08s both' }}>
            A praying church
          </h1>
          <p style={{ fontSize: '18.5px', lineHeight: 1.7, color: '#e6eef4', maxWidth: '600px', margin: '0 auto 10px', animation: 'eaUp .7s ease .16s both' }}>
            East Assembly is built on the biblical foundation of prayer, praying in one accord.
          </p>
          <div style={{ color: '#ff9ea2', fontWeight: 800, letterSpacing: '.1em', fontSize: '13px', marginBottom: '30px', animation: 'eaUp .7s ease .2s both' }}>ACTS 5</div>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'linear-gradient(135deg,#ec1c24,#ff5058)', boxShadow: '0 12px 30px rgba(236,28,36,.35)', fontSize: '15.5px' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Pray With Us</Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'rgba(255,255,255,.14)', border: '1.6px solid rgba(255,255,255,.55)', fontSize: '15.5px' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>All Ministries</Hover>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '92px 26px', textAlign: 'center' }}>
        <div data-reveal>
          <div style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: '72px', color: '#00adee', lineHeight: 1, marginBottom: '-14px' }}>&ldquo;</div>
          <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: '27px', lineHeight: 1.5, color: '#12384c', margin: '0 0 18px', textWrap: 'pretty' }}>
            Without prayer there is no vision. Without prayer there is no direction, nor revelation of what
            God is speaking in current times.
          </p>
          <p style={{ ...lead, maxWidth: '640px', margin: '0 auto' }}>
            Prayer is part and parcel of who East is. More than that, it connects us to the divine and makes
            us the light that Jesus commanded us to be.
          </p>
        </div>
      </section>

      {/* PRAYER TIMES */}
      <section style={{ background: '#0b2a3d', color: '#fff' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
            <span style={{ ...eyebrow, color: '#ff9ea2' }}>When we pray</span>
            <h2 style={{ ...h2, color: '#fff' }}>Altars of prayer</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#cfe4f0', marginTop: '14px' }}>Join us at any of these times, in person or online.</p>
          </div>
          <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '22px' }}>
            {TIMES.map((t, i) => (
              <div key={t.title} data-reveal data-reveal-delay={i * 100} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.14)', borderRadius: '20px', padding: '28px' }}>
                <div style={{ color: '#7fd0f2', marginBottom: '14px' }}><Icon name={t.icon as IconName} size={28} /></div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '18px', color: '#fff', margin: '0 0 8px' }}>{t.title}</h3>
                <div style={{ color: '#7fd0f2', fontWeight: 800, fontSize: '15px', marginBottom: '6px' }}>{t.time}</div>
                <p style={{ color: '#aec6d6', fontSize: '13.5px', lineHeight: 1.5, margin: 0 }}>{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERCESSION feature */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
          <div data-reveal="left">
            <span style={eyebrow}>Standing in the gap</span>
            <h2 style={h2}>Intercession that carries the church</h2>
            <p style={{ ...lead, margin: '18px 0 16px' }}>
              Our intercessors lift up the church, its leaders, families, and the nation, seeking God&rsquo;s
              will and power for every season.
            </p>
            <p style={{ ...lead, margin: 0 }}>
              As we pray in one accord, we believe God for vision, direction, revival, and growth.
            </p>
          </div>
          <div role="img" aria-label="Members in prayer and worship" data-reveal="right" style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 24px 54px rgba(16,80,120,.16)', ...bg('/MINISTRIES/prayer2.jpeg', 'center 20%') }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 96px' }}>
        <div data-reveal="scale" style={{ maxWidth: '1000px', margin: '0 auto', background: 'linear-gradient(135deg,#00adee,#0b7bb0)', color: '#fff', borderRadius: '28px', padding: '60px', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,120,180,.22)' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>Bring your requests to the altar</h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>Share a prayer request or join our daily times of prayer. We would love to stand with you.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#0b7bb0', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Share a Request</Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', background: 'rgba(255,255,255,.16)', border: '1.7px solid rgba(255,255,255,.55)', color: '#fff', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'background .2s' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>Back to Ministries</Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
