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
const card: CSSProperties = { background: '#fff', border: '1px solid #e7f0f6', borderRadius: '20px', padding: '26px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }
const bg = (src: string, position = 'center'): CSSProperties => ({ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: position, backgroundRepeat: 'no-repeat' })

const OBJECTIVES = [
  { icon: 'users', title: 'Support & bless families', text: 'Strengthening homes as the heart of the church.' },
  { icon: 'church', title: 'Assist pastors & church', text: 'Through giving, prayer, and faithful participation.' },
  { icon: 'globe', title: 'Support national church', text: 'Via fundraising and WWK Day contributions.' },
]

const MISSIONETTES = [
  { color: '#ec1c24', tint: '#fdecec', icon: 'sun', title: 'Rainbow', age: 'Preschool' },
  { color: '#00adee', tint: '#e8f7fd', icon: 'flower', title: 'Daisies', age: 'Kindergarten - Grade 1' },
  { color: '#0e9fd6', tint: '#e8f7fd', icon: 'heart', title: 'Primes', age: 'Grade 2 - 3' },
  { color: '#ec1c24', tint: '#fdecec', icon: 'star', title: 'Stars', age: 'Grade 4 - 8 & young ladies' },
]

const CATEGORIES = ['Below 20', '20 - 30', '30 - 40', '40 - 50', 'Above 50', 'Single parents', 'Widows']
const ACTIVITIES = ['Retreats', 'Annual Dinners', 'Conferences', 'Workshops', 'Seminars']
const MEMBERSHIP = [
  'Be a member of the Assemblies of God.',
  'Be born again and in good standing.',
  'Enrol in the monthly contributions.',
  'Attend local and national conventions.',
]

export default function WomensMinistry() {
  useMotion()
  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - image left, text right */}
      <section className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', minHeight: '580px' }}>
        <div role="img" aria-label="Royal Daughters women leaders" style={{ minHeight: '340px', ...bg('/MINISTRIES/women4.jpg', 'center 25%') }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 6% 70px', background: '#f2f9fd' }}>
          <span style={{ ...eyebrow, animation: 'eaUp .3s ease both' }}>Royal Daughters · Lady of Virtue</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '52px', lineHeight: 1.06, letterSpacing: '-.02em', color: '#12384c', margin: '16px 0 18px', textWrap: 'balance', animation: 'eaUp .3s ease .02s both' }}>
            Empowered women, growing together
          </h1>
          <p style={{ ...lead, maxWidth: '520px', margin: '0 0 10px', animation: 'eaUp .3s ease .04s both' }}>
            A beacon of empowerment and growth for women, uplifting one another spiritually, socially, and in
            health.
          </p>
          <div style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.08em', fontSize: '13px', marginBottom: '30px', animation: 'eaUp .3s ease .05s both' }}>EPHESIANS 6:7</div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
            <Link to="/contact" className="ea-btn-r">Join Us</Link>
            <Link to="/ministries" className="ea-btn-b">All Ministries</Link>
          </div>
        </div>
      </section>

      {/* MISSION + OBJECTIVES */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }} data-reveal>
          <span style={eyebrow}>Our mission</span>
          <h2 style={h2}>Rising higher in Christ</h2>
          <p style={{ ...lead, marginTop: '14px' }}>
            The Royal Daughters&rsquo; Ministry (WWK) empowers women to attain higher spiritual, financial,
            social, and health standards, delivering revival and growth to the body of Christ.
          </p>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {OBJECTIVES.map((o, i) => (
            <div key={o.title} data-reveal data-reveal-delay={i * 120} style={{ ...card, padding: '32px', textAlign: 'center' }}>
              <div style={{ marginBottom: '14px', color: i % 2 === 0 ? '#0e9fd6' : '#ec1c24' }}><Icon name={o.icon as IconName} size={30} /></div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '19px', color: '#12384c', margin: '0 0 8px' }}>{o.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES BAND */}
      <section style={{ position: 'relative', color: '#fff', backgroundImage: 'linear-gradient(rgba(18,56,76,.82),rgba(18,56,76,.82)), url(/MINISTRIES/women1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 35%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '84px 26px', textAlign: 'center' }} data-reveal="scale">
          <span style={{ ...eyebrow, color: '#ffd6d8' }}>Fellowship &amp; growth</span>
          <h2 style={{ ...h2, color: '#fff', margin: '14px 0 22px' }}>Life together, all year round</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {ACTIVITIES.map((a) => (
              <span key={a} style={{ background: '#00adee', color: '#fff', borderRadius: '6px', padding: '10px 22px', fontSize: '15px', fontWeight: 700 }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONETTES */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>For the girls</span>
          <h2 style={h2}>Missionettes clubs</h2>
          <p style={{ ...lead, marginTop: '14px' }}>
            A mentoring journey for girls from age 3 through to marriage, organised into four clubs.
          </p>
        </div>
        <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
          {MISSIONETTES.map((m, i) => (
            <Hover key={m.title} data-reveal data-reveal-delay={i * 100} style={{ ...card, textAlign: 'center', borderTop: `4px solid ${m.color}`, transition: 'transform .25s, box-shadow .25s' }} hoverStyle={{ transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 16px', borderRadius: '50%', background: (m.color === '#ec1c24' ? '#ec1c24' : '#00adee'), color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={m.icon as IconName} size={28} /></div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', color: '#12384c', margin: '0 0 6px' }}>{m.title}</h3>
              <p style={{ color: '#6b7885', fontSize: '13.5px', margin: 0 }}>{m.age}</p>
            </Hover>
          ))}
        </div>
      </section>

      {/* CATEGORIES + MEMBERSHIP */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div data-reveal="left">
              <span style={eyebrow}>Every season of life</span>
              <h2 style={{ ...h2, fontSize: '32px' }}>Groups for every woman</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '22px' }}>
                {CATEGORIES.map((c) => (
                  <span key={c} style={{ background: '#00adee', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '9px 18px', borderRadius: '6px' }}>{c}</span>
                ))}
              </div>
            </div>
            <div data-reveal="right">
              <span style={eyebrow}>Come on board</span>
              <h2 style={{ ...h2, fontSize: '32px' }}>Membership</h2>
              <ul style={{ margin: '22px 0 0', padding: 0 }}>
                {MEMBERSHIP.map((m) => (
                  <li key={m} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', listStyle: 'none', marginBottom: '14px' }}>
                    <span style={{ width: '26px', height: '26px', flex: 'none', borderRadius: '8px', background: '#ec1c24', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>&#10003;</span>
                    <span style={{ color: '#5a6772', fontSize: '15.5px', lineHeight: 1.55 }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '92px 26px 96px' }}>
        <div data-reveal="scale" style={{ maxWidth: '1000px', margin: '0 auto', background: '#ec1c24', color: '#fff', borderRadius: '28px', padding: '60px', textAlign: 'center', boxShadow: '0 30px 60px rgba(236,28,36,.24)' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>You are a royal daughter</h2>
          <p style={{ color: '#ffe1e2', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>Come and flourish with a sisterhood that will pray for you, grow with you, and celebrate you.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#ec1c24', fontWeight: 800, padding: '15px 32px', borderRadius: '6px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Get In Touch</Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', background: '#12384c', color: '#fff', fontWeight: 800, padding: '15px 32px', borderRadius: '6px', display: 'inline-block', transition: 'background .2s' }} hoverStyle={{ background: '#0b2a3d' }}>Back to Ministries</Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
