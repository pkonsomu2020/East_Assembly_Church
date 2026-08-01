import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon, type IconName } from '../components/Icon'

const eyebrow: CSSProperties = { color: '#0e9fd6', fontWeight: 800, letterSpacing: '.16em', fontSize: '13px', textTransform: 'uppercase' }
const h2: CSSProperties = { fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '40px', color: '#12384c', margin: '14px 0 0', letterSpacing: '-.01em', textWrap: 'balance' }
const lead: CSSProperties = { fontSize: '17px', lineHeight: 1.78, color: '#5a6772' }
const card: CSSProperties = { background: '#fff', border: '1px solid #e7f0f6', borderRadius: '20px', padding: '26px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }
const bg = (src: string, position = 'center'): CSSProperties => ({ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: position, backgroundRepeat: 'no-repeat' })

const OBJECTIVES = [
  { icon: 'pray', title: 'Strengthen Prayer Life' },
  { icon: 'crown', title: 'Develop Servant Leadership' },
  { icon: 'book', title: 'Discipleship' },
  { icon: 'handshake', title: 'Foster Belonging' },
  { icon: 'mountain', title: 'Annual Retreat' },
  { icon: 'calendar', title: 'Monthly Fellowship' },
  { icon: 'users', title: 'Support System' },
  { icon: 'link', title: 'Resource Network' },
  { icon: 'gift', title: 'Utilize Men’s Gifts' },
]

export default function MensMinistry() {
  useMotion()
  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - image left, navy panel right */}
      <section className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', minHeight: '580px' }}>
        <div role="img" aria-label="Men in fellowship" style={{ minHeight: '340px', ...bg('/MINISTRIES/men1.jpg', 'center 30%') }} />
        <div style={{ background: 'linear-gradient(150deg,#0b2a3d,#0e5f86)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 6% 70px' }}>
          <span style={{ ...eyebrow, color: '#7fd0f2', animation: 'eaUp .6s ease both' }}>Men&rsquo;s &amp; Young Men&rsquo;s Ministry</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '50px', lineHeight: 1.07, letterSpacing: '-.02em', margin: '16px 0 20px', textWrap: 'balance', animation: 'eaUp .7s ease .08s both' }}>
            Equipping men for God&rsquo;s will
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#cfe4f0', maxWidth: '520px', margin: '0 0 10px', animation: 'eaUp .7s ease .16s both' }}>
            &ldquo;God is faithful, through whom you were called into fellowship with His Son, Jesus Christ
            our Lord.&rdquo;
          </p>
          <div style={{ color: '#7fd0f2', fontWeight: 800, letterSpacing: '.08em', fontSize: '13px', marginBottom: '30px', animation: 'eaUp .7s ease .2s both' }}>1 CORINTHIANS 1:9</div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'linear-gradient(135deg,#ec1c24,#ff5058)', boxShadow: '0 12px 30px rgba(236,28,36,.35)', fontSize: '15.5px' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Join the Fellowship</Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'rgba(255,255,255,.12)', border: '1.6px solid rgba(255,255,255,.5)', fontSize: '15.5px' }} hoverStyle={{ background: 'rgba(255,255,255,.24)' }}>All Ministries</Hover>
          </div>
        </div>
      </section>

      {/* PURPOSE & MISSION */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 40px' }} data-reveal>
          <span style={eyebrow}>Who we are</span>
          <h2 style={h2}>A brotherhood growing in Christ</h2>
          <p style={{ ...lead, marginTop: '14px' }}>
            The Men&rsquo;s Fellowship encourages Christian growth through worship, prayer, and action,
            helping men fulfil their responsibilities to God, church, family, and community.
          </p>
        </div>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[
            { tint: '#fdecec', color: '#ec1c24', icon: 'sparkles', title: 'Our Purpose', body: 'Equipping Men for God’s Will, helping men fulfil their responsibilities according to God’s Word and Spirit.' },
            { tint: '#e8f7fd', color: '#0e9fd6', icon: 'target', title: 'Our Mission', body: 'Building Relationships, Fostering Growth, improving men’s walk with Jesus, their families, and the community.' },
          ].map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 120} style={{ ...card, padding: '36px' }}>
              <span style={{ width: '56px', height: '56px', borderRadius: '16px', background: c.tint, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Icon name={c.icon as IconName} size={24} /></span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '23px', color: '#12384c', margin: '0 0 10px' }}>{c.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '16px', margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 OBJECTIVES */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
            <span style={eyebrow}>What we set out to do</span>
            <h2 style={h2}>Nine objectives</h2>
          </div>
          <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {OBJECTIVES.map((o, i) => (
              <Hover key={o.title} data-reveal data-reveal-delay={(i % 3) * 90} style={{ display: 'flex', alignItems: 'center', gap: '16px', ...card, transition: 'transform .2s, box-shadow .2s' }} hoverStyle={{ transform: 'translateY(-4px)', boxShadow: '0 20px 40px rgba(16,80,120,.12)' }}>
                <span style={{ width: '50px', height: '50px', flex: 'none', borderRadius: '14px', background: '#e8f7fd', color: '#0e9fd6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={o.icon as IconName} size={24} /></span>
                <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '16px' }}>{o.title}</span>
              </Hover>
            ))}
          </div>
        </div>
      </section>

      {/* GIFTS BAND */}
      <section style={{ position: 'relative', color: '#fff', backgroundImage: 'linear-gradient(135deg, rgba(11,42,61,.84), rgba(14,95,134,.8)), url(/MINISTRIES/men3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '92px 26px', textAlign: 'center' }} data-reveal="scale">
          <span style={{ ...eyebrow, color: '#7fd0f2' }}>Serving together</span>
          <h2 style={{ ...h2, color: '#fff', margin: '14px 0 14px' }}>Every man has a gift to give</h2>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#dcecf5', margin: 0 }}>
            Through monthly fellowships, an annual retreat, and a strong support network, we help every man
            discover and use his God-given gifts to build the church.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '92px 26px 96px' }}>
        <div data-reveal="scale" style={{ maxWidth: '1000px', margin: '0 auto', background: 'linear-gradient(135deg,#00adee,#0b7bb0)', color: '#fff', borderRadius: '28px', padding: '60px', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,120,180,.22)' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>Become the man God called you to be</h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>Join a fellowship of men who pray, grow, and serve together. Reach out and we will welcome you in.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#0b7bb0', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Get In Touch</Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', background: 'rgba(255,255,255,.16)', border: '1.7px solid rgba(255,255,255,.55)', color: '#fff', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'background .2s' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>Back to Ministries</Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
