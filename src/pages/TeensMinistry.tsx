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
const OBJECTIVES = [
  { icon: 'cross', title: 'Christ Centered', text: 'Keeping Jesus at the heart of everything we do.' },
  { icon: 'shield', title: 'Self-esteem & Awareness', text: 'Helping teens know and value who God made them to be.' },
  { icon: 'compass', title: 'Identity', text: 'Anchoring identity in Christ, not in trends or pressure.' },
  { icon: 'handshake', title: 'Relationships', text: 'Building healthy friendships, family, and community.' },
]

const PROGRAMS = [
  { icon: 'palette', title: 'Creative Arts', text: 'Dance, drama, and singing crews, Teens Worship Sundays, and film productions.' },
  { icon: 'trophy', title: 'Sports Tournaments', text: 'Sunday soccer and basketball matches featuring local and KAG community teams.' },
  { icon: 'box', title: 'Box Sundays', text: 'Open Q&A with anonymous questions, plus counseling and mentorship follow-ups.' },
  { icon: 'graduation', title: 'Ex-Cans Program', text: 'A Jan-Aug life-skills journey for Form Four leavers: career, personality, and finance.' },
  { icon: 'tent', title: 'Teen Camps', text: 'A six-day December workshop with preaching, sports, tournaments, and theme nights.' },
]

const MORE = ['Home Visitations', 'Cocktail for Parents', 'Teen Friendly mentorship', 'Bi-quarterly Fun Days']

const GALLERY = ['/MINISTRIES/teens1.jpg', '/MINISTRIES/teens2.jpg', '/MINISTRIES/teens5.jpg', '/MINISTRIES/teens4.jpg']

export default function TeensMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - full image, centered mantra */}
      <section
        style={{
          position: 'relative',
          minHeight: '620px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          backgroundImage: 'linear-gradient(180deg, rgba(11,42,61,.66), rgba(11,42,61,.82)), url(/MINISTRIES/teens3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '820px', padding: '150px 26px 80px' }}>
          <span style={{ ...eyebrow, color: '#ff9ea2', animation: 'eaUp .6s ease both' }}>Teens Ministry</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '84px',
              lineHeight: 1,
              letterSpacing: '-.03em',
              margin: '14px 0 18px',
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            I BELONG
          </h1>
          <p style={{ fontSize: '18.5px', lineHeight: 1.7, color: '#e6eef4', maxWidth: '620px', margin: '0 auto 10px', animation: 'eaUp .7s ease .16s both' }}>
            Connecting with teenagers aged 13 to 19 in a way that speaks their language, so every teen
            knows they belong in Christ and to His church family.
          </p>
          <div style={{ color: '#ff9ea2', fontWeight: 800, letterSpacing: '.1em', fontSize: '13px', marginBottom: '30px', animation: 'eaUp .7s ease .2s both' }}>
            1 CORINTHIANS 3:23
          </div>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'linear-gradient(135deg,#ec1c24,#ff5058)', boxShadow: '0 12px 30px rgba(236,28,36,.35)', fontSize: '15.5px' }} hoverStyle={{ transform: 'translateY(-2px)' }}>
              Join the Crew
            </Hover>
            <Hover as={Link} to="/ministries" style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'rgba(255,255,255,.14)', border: '1.6px solid rgba(255,255,255,.55)', fontSize: '15.5px' }} hoverStyle={{ background: 'rgba(255,255,255,.26)' }}>
              All Ministries
            </Hover>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
          <div data-reveal="left">
            <span style={eyebrow}>Who we are</span>
            <h2 style={h2}>A place for every teenager</h2>
            <p style={{ ...lead, margin: '18px 0 16px' }}>
              Adolescence brings big changes physically, emotionally, and socially. Our Teens Ministry
              walks with 13 to 19 year-olds through it all, offering spiritual support and counsel around
              the real challenges they face, from relationships to peer pressure.
            </p>
            <p style={{ ...lead, margin: 0 }}>
              Whatever their background, teens belong here, in Christ and in the family of the church.
            </p>
          </div>
          <div role="img" aria-label="Teens hanging out together" data-reveal="right" style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 24px 54px rgba(16,80,120,.16)', ...bg('/MINISTRIES/teens1.jpg') }} />
        </div>
      </section>

      {/* OBJECTIVES */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 20px' }} data-reveal>
            <span style={eyebrow}>What we aim for</span>
            <h2 style={h2}>Our four objectives</h2>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '44px' }} data-reveal>
            {['Integrity', 'Honesty'].map((v) => (
              <span key={v} style={{ display: 'inline-block', margin: '6px', background: '#fff', border: '1px solid #dbe8f1', color: '#0e9fd6', fontWeight: 800, fontSize: '13px', padding: '8px 18px', borderRadius: '100px' }}>
                {v}
              </span>
            ))}
          </div>
          <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {OBJECTIVES.map((o, i) => (
              <div key={o.title} data-reveal data-reveal-delay={i * 100} style={{ ...card, textAlign: 'center' }}>
                <div style={{ fontSize: '34px', marginBottom: '14px', color: '#0e9fd6', display: 'flex', justifyContent: 'center' }}><Icon name={o.icon as IconName} size={30} /></div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '18px', color: '#12384c', margin: '0 0 8px' }}>{o.title}</h3>
                <p style={{ color: '#5a6772', lineHeight: 1.55, fontSize: '14px', margin: 0 }}>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>Get involved</span>
          <h2 style={h2}>Programs &amp; activities</h2>
          <p style={{ ...lead, marginTop: '14px' }}>There is always something happening, all year round.</p>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {PROGRAMS.map((p, i) => (
            <Hover
              key={p.title}
              data-reveal
              data-reveal-delay={(i % 3) * 100}
              style={{ ...card, display: 'flex', flexDirection: 'column', transition: 'transform .25s, box-shadow .25s' }}
              hoverStyle={{ transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }}
            >
              <span style={{ width: '54px', height: '54px', borderRadius: '15px', background: '#fdecec', color: '#ec1c24', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '18px' }}><Icon name={p.icon as IconName} size={24} /></span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', color: '#12384c', margin: '0 0 10px' }}>{p.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '15px', margin: 0 }}>{p.text}</p>
            </Hover>
          ))}
          <div data-reveal data-reveal-delay="100" style={{ ...card, background: 'linear-gradient(135deg,#0b2a3d,#0e5f86)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', margin: '0 0 16px' }}>And more</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {MORE.map((m) => (
                <span key={m} style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', borderRadius: '100px', padding: '7px 14px', fontSize: '13px', fontWeight: 700 }}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 26px 96px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }} data-reveal>
          <span style={eyebrow}>Life together</span>
          <h2 style={h2}>In the Teens Ministry</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
          {GALLERY.map((src, i) => (
            <div key={src} role="img" aria-label="Teens ministry moment" data-reveal data-reveal-delay={i * 80} style={{ borderRadius: '18px', aspectRatio: '3/4', boxShadow: '0 12px 30px rgba(16,80,120,.1)', ...bg(src) }} />
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
            background: 'linear-gradient(135deg,#ec1c24,#ff5058)',
            color: '#fff',
            borderRadius: '28px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(236,28,36,.24)',
          }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', margin: '0 0 14px', textWrap: 'balance' }}>
            You belong with us
          </h2>
          <p style={{ color: '#ffe1e2', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Come as you are and find your people. Reach out and we will help you plug in.
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
