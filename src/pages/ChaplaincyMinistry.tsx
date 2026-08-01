import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon, type IconName } from '../components/Icon'

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
const card: CSSProperties = {
  background: '#fff',
  border: '1px solid #e7f0f6',
  borderRadius: '22px',
  padding: '30px',
  boxShadow: '0 8px 26px rgba(16,80,120,.06)',
}

const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

/* ------------------------------------------------------------------ data */
const SERVICES = [
  { icon: 'plus-square', title: 'Hospital Visitations', text: 'Visiting the sick at Kenyatta, Mathare, and Spinal Injury Hospitals with prayer and encouragement.' },
  { icon: 'home', title: 'Home Care', text: 'Weekly home visits to members who are sick, and to their relatives, offering spiritual and emotional support.' },
  { icon: 'heart', title: 'Grief Counseling', text: 'Psycho-social support for bereaved members, walking with them through seasons of loss.' },
  { icon: 'hand-heart', title: 'Financial Support', text: 'Practical help for members facing hardship in times of need.' },
]

const INSTITUTIONS = ['Kenyatta Hospital', 'Mathare Hospital', 'Spinal Injury Hospital']

const LEADERS = [
  { initials: 'MK', name: 'Rev. Chaplain Margaret Kihoro', role: 'Ministry Leader & Counselor' },
  { initials: 'CM', name: 'Chaplain Meshack', role: 'Mathare Hospital Coordinator' },
]

export default function ChaplaincyMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - split: image left, text right */}
      <section className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', minHeight: '580px' }}>
        <div role="img" aria-label="A chaplain comforting a grieving member" style={{ minHeight: '340px', ...bg('/MINISTRIES/chaplaincy1.jpeg', 'center') }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 6% 70px', background: '#f2f9fd' }}>
          <span style={{ ...eyebrow, animation: 'eaUp .6s ease both' }}>Chaplaincy Ministry</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '50px',
              lineHeight: 1.07,
              letterSpacing: '-.02em',
              color: '#12384c',
              margin: '16px 0 20px',
              textWrap: 'balance',
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            Comfort and support in times of need
          </h1>
          <p style={{ ...lead, maxWidth: '520px', margin: '0 0 22px', animation: 'eaUp .7s ease .16s both' }}>
            For 39 years, the Chaplaincy Ministry has been a beacon of hope, led by Rev. Chaplain Margaret
            Kihoro, offering hospital visits, home care, grief counseling, and practical support.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', animation: 'eaUp .7s ease .24s both' }}>
            <Link to="/contact" className="ea-btn-r">Request Support</Link>
            <Link to="/ministries" className="ea-btn-b">All Ministries</Link>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0e9fd6', fontWeight: 800, fontSize: '14px' }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: '26px', color: '#ec1c24' }}>39</span> years of care
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>How we care</span>
          <h2 style={h2}>Standing with you in every season</h2>
        </div>
        <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
          {SERVICES.map((s, i) => (
            <Hover
              key={s.title}
              data-reveal
              data-reveal-delay={i * 100}
              style={{ ...card, transition: 'transform .25s, box-shadow .25s' }}
              hoverStyle={{ transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }}
            >
              <span style={{ width: '54px', height: '54px', borderRadius: '15px', background: '#e8f7fd', color: '#0e9fd6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}><Icon name={s.icon as IconName} size={24} /></span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '18px', color: '#12384c', margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>{s.text}</p>
            </Hover>
          ))}
        </div>
      </section>

      {/* HOME VISITATIONS feature */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: '56px', alignItems: 'center' }}>
            <div data-reveal="left">
              <span style={eyebrow}>At the bedside &amp; the doorstep</span>
              <h2 style={h2}>Hospital &amp; home visitations</h2>
              <p style={{ ...lead, margin: '18px 0 16px' }}>
                For nearly four decades our team has visited the sick, led by Chaplain Meshack at Mathare
                Hospital, where six dedicated volunteers regularly bring prayer and encouragement.
              </p>
              <p style={{ ...lead, margin: 0 }}>
                Our associate pastors and visitation team also extend weekly home visits to members who are
                unwell, and to their families, offering comfort and presence when it matters most.
              </p>
            </div>
            <div role="img" aria-label="A home visitation to an elderly member" data-reveal="right" style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 24px 54px rgba(16,80,120,.16)', ...bg('/MINISTRIES/chaplaincy3.jpeg') }} />
          </div>
        </div>
      </section>

      {/* HEALING AND HOPE - counseling */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: '56px', alignItems: 'center' }}>
          <div role="img" aria-label="Grief counseling workshop" data-reveal="left" style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 24px 54px rgba(16,80,120,.16)', ...bg('/MINISTRIES/chaplaincy2.jpeg') }} />
          <div data-reveal="right">
            <span style={eyebrow}>Healing &amp; hope</span>
            <h2 style={h2}>Counseling &amp; bereavement support</h2>
            <p style={{ ...lead, margin: '18px 0 22px' }}>
              We offer grief counseling and psycho-social support to bereaved members, walking closely with
              them through loss. Sessions are available on the following days, with extra support for
              emergencies.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {['Thursday', 'Friday', 'Saturday'].map((d) => (
                <span key={d} style={{ background: '#fdecec', color: '#ec1c24', fontWeight: 800, fontSize: '14px', padding: '9px 18px', borderRadius: '100px' }}>{d}</span>
              ))}
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0e9fd6', fontWeight: 700, fontSize: '14.5px' }}>
              <span><Icon name="phone" size={16} /></span> Emergency support available any time
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONS + LEADERS */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div data-reveal="left">
              <span style={eyebrow}>Where we serve</span>
              <h2 style={{ ...h2, fontSize: '32px' }}>Institutions we visit</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '22px' }}>
                {INSTITUTIONS.map((n) => (
                  <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#fff', border: '1px solid #e7f0f6', borderRadius: '16px', padding: '18px 22px' }}>
                    <span style={{ width: '40px', height: '40px', flex: 'none', borderRadius: '11px', background: '#e8f7fd', color: '#0e9fd6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="plus-square" size={20} /></span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, color: '#12384c', fontSize: '16px' }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal="right">
              <span style={eyebrow}>Our leaders</span>
              <h2 style={{ ...h2, fontSize: '32px' }}>Serving with compassion</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '22px' }}>
                {LEADERS.map((l) => (
                  <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', border: '1px solid #e7f0f6', borderRadius: '18px', padding: '20px 22px' }}>
                    <span style={{ width: '54px', height: '54px', flex: 'none', borderRadius: '50%', background: 'linear-gradient(135deg,#ec1c24,#ff5058)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800 }}>{l.initials}</span>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '16px' }}>{l.name}</div>
                      <div style={{ color: '#6b7885', fontSize: '13.5px', marginTop: '2px' }}>{l.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '92px 26px 96px' }}>
        <div
          data-reveal="scale"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'linear-gradient(135deg,#00adee,#0b7bb0)',
            color: '#fff',
            borderRadius: '28px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(0,120,180,.22)',
          }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>
            Need prayer, a visit, or someone to talk to?
          </h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '560px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Our chaplaincy team is here to walk with you and your loved ones. Reach out any time, we care.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#0b7bb0', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>
              Contact the Team
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
