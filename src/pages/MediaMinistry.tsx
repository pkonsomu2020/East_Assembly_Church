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
const card: CSSProperties = { background: '#fff', border: '1px solid #e7f0f6', borderRadius: '22px', padding: '30px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }
const bg = (src: string, position = 'center'): CSSProperties => ({ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: position, backgroundRepeat: 'no-repeat' })

const SERVICES = [
  { icon: 'broadcast', title: 'Live Streaming', text: 'Every service streamed live on YouTube and Facebook, so no one misses a moment.' },
  { icon: 'sliders', title: 'Sound & Audio', text: 'Clear, balanced sound that carries worship and the Word across the room.' },
  { icon: 'video', title: 'Video & Camera', text: 'Capturing services and events from every angle, for the screen and the stream.' },
  { icon: 'monitor', title: 'Projection & Lyrics', text: 'Song lyrics, scriptures, and visuals that help the congregation follow along.' },
  { icon: 'camera', title: 'Photography', text: 'Telling the story of church life through beautiful pictures.' },
  { icon: 'megaphone', title: 'Communication', text: 'Sharing the Gospel and church news across our online platforms.' },
]

const GALLERY = ['/MINISTRIES/media1.jpeg', '/MINISTRIES/media2.jpeg', '/MINISTRIES/media4.jpeg']

export default function MediaMinistry() {
  useMotion()
  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - full image */}
      <section style={{ position: 'relative', minHeight: '620px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', backgroundImage: 'linear-gradient(180deg, rgba(11,42,61,.6), rgba(11,42,61,.86)), url(/MINISTRIES/media3.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ maxWidth: '840px', padding: '150px 26px 80px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#fdecec', border: '1px solid #f6b9bc', color: '#ec1c24', padding: '8px 16px', borderRadius: '100px', fontSize: '12.5px', fontWeight: 800, letterSpacing: '.05em', animation: 'eaUp .6s ease both' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec1c24', display: 'inline-block', animation: 'eaPulse 1s infinite alternate' }} />
            MEDIA &amp; COMMUNICATION
          </span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '56px', lineHeight: 1.05, letterSpacing: '-.02em', margin: '16px 0 18px', textWrap: 'balance', animation: 'eaUp .7s ease .08s both' }}>
            Telling the story of what God is doing
          </h1>
          <p style={{ fontSize: '18.5px', lineHeight: 1.7, color: '#e6eef4', maxWidth: '640px', margin: '0 auto 32px', animation: 'eaUp .7s ease .16s both' }}>
            We share the Gospel through media, live streaming, and creative storytelling, carrying worship
            and the Word beyond the four walls of the church.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Hover as={Link} to="/live" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'linear-gradient(135deg,#ec1c24,#ff5058)', boxShadow: '0 12px 30px rgba(236,28,36,.35)', fontSize: '15.5px' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Watch Live</Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'rgba(255,255,255,.14)', border: '1.6px solid rgba(255,255,255,.55)', fontSize: '15.5px' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>All Ministries</Hover>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>Behind the scenes</span>
          <h2 style={h2}>What our team does</h2>
          <p style={{ ...lead, marginTop: '14px' }}>One team serving every service and event, so worship reaches every screen.</p>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {SERVICES.map((s, i) => (
            <Hover key={s.title} data-reveal data-reveal-delay={(i % 3) * 100} style={{ ...card, transition: 'transform .25s, box-shadow .25s' }} hoverStyle={{ transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }}>
              <span style={{ width: '54px', height: '54px', borderRadius: '15px', background: '#e8f7fd', color: '#0e9fd6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}><Icon name={s.icon as IconName} size={24} /></span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', color: '#12384c', margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '15px', margin: 0 }}>{s.text}</p>
            </Hover>
          ))}
        </div>
      </section>

      {/* WATCH ONLINE */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div data-reveal="left">
              <span style={eyebrow}>Worship with us anywhere</span>
              <h2 style={h2}>Live every Sunday, online</h2>
              <p style={{ ...lead, margin: '18px 0 24px' }}>
                Can&rsquo;t make it in person? Join the East Assembly family live, wherever you are. Our team
                streams every service so you never miss a moment.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Hover as="a" href="https://www.youtube.com/@eastassemblychurch4046" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#fdecec', color: '#ec1c24', fontWeight: 800, padding: '13px 22px', borderRadius: '100px', border: '1.6px solid #f6b9bc' }} hoverStyle={{ background: '#ec1c24', color: '#fff', borderColor: '#ec1c24' }}><Icon name="youtube" size={18} /> YouTube</Hover>
                <Hover as="a" href="https://www.facebook.com/EastAssemblyChurch" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#e8f7fd', color: '#0e9fd6', fontWeight: 800, padding: '13px 22px', borderRadius: '100px', border: '1.6px solid #b9e6f7' }} hoverStyle={{ background: '#00adee', color: '#fff', borderColor: '#00adee' }}><Icon name="facebook" size={18} /> Facebook</Hover>
                <Link to="/live" className="ea-btn-b" style={{ padding: '13px 22px' }}>Live Stream</Link>
              </div>
            </div>
            <div role="img" aria-label="Camera operator filming worship" data-reveal="right" style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 24px 54px rgba(16,80,120,.16)', ...bg('/MINISTRIES/media2.jpeg', 'center 30%') }} />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }} data-reveal>
          <span style={eyebrow}>In action</span>
          <h2 style={h2}>The team at work</h2>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px' }}>
          {GALLERY.map((src, i) => (
            <div key={src} role="img" aria-label="Media team in action" data-reveal data-reveal-delay={i * 90} style={{ borderRadius: '20px', aspectRatio: '4/3', boxShadow: '0 12px 30px rgba(16,80,120,.1)', ...bg(src, 'center 30%') }} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 96px' }}>
        <div data-reveal="scale" style={{ maxWidth: '1000px', margin: '0 auto', background: 'linear-gradient(135deg,#00adee,#0b7bb0)', color: '#fff', borderRadius: '28px', padding: '60px', textAlign: 'center', boxShadow: '0 30px 60px rgba(0,120,180,.22)' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>Serve behind the scenes</h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '560px', margin: '0 auto 30px', lineHeight: 1.6 }}>Gifted in sound, video, photography, or design? Come and use your skills to help share the Gospel.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#0b7bb0', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>Join the Team</Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', background: 'rgba(255,255,255,.16)', border: '1.7px solid rgba(255,255,255,.55)', color: '#fff', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'background .2s' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>Back to Ministries</Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
