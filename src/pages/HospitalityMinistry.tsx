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
const card: CSSProperties = { background: '#fff', border: '1px solid #e7f0f6', borderRadius: '22px', padding: '30px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }
const bg = (src: string, position = 'center'): CSSProperties => ({ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: position, backgroundRepeat: 'no-repeat' })

const OFFERINGS = [
  { icon: 'handshake', title: 'A Dynamic Team', text: 'Our team is here to make you feel like our special guest from the moment you arrive.' },
  { icon: 'coffee', title: 'Tea Time', text: 'Enjoy a moment of relaxation in our exclusive area for visitors, complete with comfy seats and a well-laid table just for you.' },
  { icon: 'clipboard', title: 'Church Activities', text: 'Learn about our various church activities and find where you can quickly fit in and become part of our growing fellowship.' },
  { icon: 'handshake', title: 'Stay Connected', text: 'Receive an information card with all you need to know about us, and share your contact details with us, and we’ll reach out to you within 24 hours.' },
  { icon: 'utensils', title: 'Special Luncheon', text: 'Meet the Pastors: join us for a unique luncheon with our pastors and leaders to interact and hear about the vision our church has for you.' },
]

export default function HospitalityMinistry() {
  useMotion()
  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - text left, greeting image right */}
      <section className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', minHeight: '580px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 6% 70px', background: '#f2f9fd' }}>
          <span style={{ ...eyebrow, animation: 'eaUp .3s ease both' }}>Hospitality &amp; Welcome Ministry</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '52px', lineHeight: 1.06, letterSpacing: '-.02em', color: '#12384c', margin: '16px 0 18px', textWrap: 'balance', animation: 'eaUp .3s ease .02s both' }}>
            Your first handshake with the church
          </h1>
          <p style={{ ...lead, maxWidth: '520px', margin: '0 0 30px', animation: 'eaUp .3s ease .04s both' }}>
            Nothing beats a warm welcome. Our Hospitality Department makes sure every visitor and member
            feels right at home at East Assembly.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
            <Link to="/im-new" className="ea-btn-r">Plan Your Visit</Link>
            <Link to="/ministries" className="ea-btn-b">All Ministries</Link>
          </div>
        </div>
        <div role="img" aria-label="A warm welcome and handshake at church" style={{ minHeight: '340px', ...bg('/welcome-bg.jpeg', 'center 30%') }} />
      </section>

      {/* OFFERINGS */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>What to expect</span>
          <h2 style={h2}>Welcomed from the moment you arrive</h2>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {OFFERINGS.map((o, i) => (
            <Hover key={o.title} data-reveal data-reveal-delay={(i % 3) * 100} style={{ ...card, transition: 'transform .25s, box-shadow .25s' }} hoverStyle={{ transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }}>
              <span style={{ width: '54px', height: '54px', borderRadius: '15px', background: '#ec1c24', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}><Icon name={o.icon as IconName} size={24} /></span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', color: '#12384c', margin: '0 0 10px' }}>{o.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '15px', margin: 0 }}>{o.text}</p>
            </Hover>
          ))}
        </div>
      </section>

      {/* BISHOP WELCOME QUOTE */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 26px' }}>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', alignItems: 'stretch' }}>
            <div role="img" aria-label="Bishop Pius Tembu, PhD" data-reveal="left" style={{ minHeight: '440px', ...bg('/bishop-tembu.jpeg', 'center 15%') }} />
            <div style={{ padding: 'clamp(44px, 6vw, 76px) clamp(28px, 5vw, 56px)' }} data-reveal="right">
              <span style={eyebrow}>Karibu, we&rsquo;re so glad you&rsquo;re here</span>
              <div style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: '72px', color: '#00adee', lineHeight: 1, margin: '6px 0 -12px' }}>&ldquo;</div>
              <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: '24px', lineHeight: 1.45, color: '#12384c', margin: '0 0 26px', textWrap: 'pretty' }}>
                Whether you&rsquo;re new to town, exploring faith, or looking for a church home, we&rsquo;re
                excited to welcome you. Join us for worship this Sunday and discover a community where you
                can belong, grow, and serve.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#00adee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800 }}>PT</span>
                <div>
                  <div style={{ fontWeight: 800, color: '#12384c', fontFamily: "'Plus Jakarta Sans'" }}>Bishop Pius Tembu, PhD</div>
                  <div style={{ color: '#6b7885', fontSize: '14px' }}>Senior Pastor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '92px 26px 96px' }}>
        <div data-reveal="scale" style={{ maxWidth: '1000px', margin: '0 auto', background: '#ec1c24', color: '#fff', borderRadius: '28px', padding: '60px', textAlign: 'center', boxShadow: '0 30px 60px rgba(236,28,36,.24)' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>We can&rsquo;t wait to meet you</h2>
          <p style={{ color: '#ffe1e2', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>Whether you&rsquo;re an invited guest or visitor, our ministry ensures you are warmly welcomed and feel like coming back again.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/im-new" style={{ textDecoration: 'none', background: '#fff', color: '#ec1c24', fontWeight: 800, padding: '15px 32px', borderRadius: '6px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Plan Your Visit</Hover>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#12384c', color: '#fff', fontWeight: 800, padding: '15px 32px', borderRadius: '6px', display: 'inline-block', transition: 'background .2s' }} hoverStyle={{ background: '#0b2a3d' }}>Contact Us</Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
