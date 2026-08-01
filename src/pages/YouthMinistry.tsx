import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon } from '../components/Icon'

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
const CAGE = [
  { n: '01', color: '#0e9fd6', title: 'Connecting', text: 'Creating spaces where young people connect with God, with others, and with themselves.' },
  { n: '02', color: '#ec1c24', title: 'Abiding', text: 'Learning to remain and conform to Christ (Romans 12:1-2) through vineyards and Bible study.' },
  { n: '03', color: '#0e9fd6', title: 'Grow', text: 'Bearing fruit through pruning and abiding, rooted in the promises of John 15.' },
  { n: '04', color: '#ec1c24', title: 'Expand', text: 'Becoming lights that draw others to the Vine through outreach and events.' },
]

const CLASSES = [
  { tag: '2 Cor 2:15', title: 'Aroma', text: 'University-aged youth exploring faith through discussion-based topics.' },
  { tag: 'Young professionals', title: 'BOC (Beloved of Christ)', text: 'Those beginning to settle into life, growing through book-based discussions.' },
  { tag: 'Established adults', title: 'Bereans', text: 'Established young adults going deeper into rich, scriptural study.' },
]

export default function YouthMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - split: navy panel + image */}
      <section className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', minHeight: '600px' }}>
        <div
          style={{
            background: 'linear-gradient(150deg,#0b2a3d,#0e5f86)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '150px 6% 70px',
          }}
        >
          <span style={{ ...eyebrow, color: '#7fd0f2', animation: 'eaUp .6s ease both' }}>Youth Ministry</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '58px',
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              margin: '16px 0 22px',
              textWrap: 'balance',
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            Abide in the Vine
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#cfe4f0', maxWidth: '520px', margin: '0 0 10px', animation: 'eaUp .7s ease .16s both' }}>
            &ldquo;I am the vine; you are the branches. If you remain in me and I in you, you will bear
            much fruit; apart from me you can do nothing.&rdquo;
          </p>
          <div style={{ color: '#7fd0f2', fontWeight: 800, letterSpacing: '.08em', fontSize: '13px', marginBottom: '30px', animation: 'eaUp .7s ease .2s both' }}>
            JOHN 15:5
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Hover
              as={Link}
              to="/contact"
              style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'linear-gradient(135deg,#00adee,#0b7bb0)', boxShadow: '0 12px 30px rgba(0,120,180,.35)', fontSize: '15.5px' }}
              hoverStyle={{ transform: 'translateY(-2px)' }}
            >
              Connect With Us
            </Hover>
            <Hover
              as={Link}
              to="/ministries"
              style={{ textDecoration: 'none', color: '#fff', fontWeight: 800, padding: '15px 30px', borderRadius: '100px', background: 'rgba(255,255,255,.12)', border: '1.6px solid rgba(255,255,255,.5)', fontSize: '15.5px' }}
              hoverStyle={{ background: 'rgba(255,255,255,.24)' }}
            >
              All Ministries
            </Hover>
          </div>
        </div>
        <div role="img" aria-label="Youth worshipping together" style={{ minHeight: '340px', ...bg('/MINISTRIES/youth-img4.jpg') }} />
      </section>

      {/* INTRO - a generation seeking connection */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
          <div role="img" aria-label="Young people in worship" data-reveal="left" style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 24px 54px rgba(16,80,120,.16)', ...bg('/MINISTRIES/youth-img3.jpg') }} />
          <div data-reveal="right">
            <span style={eyebrow}>Why the Vine</span>
            <h2 style={h2}>A generation searching for connection</h2>
            <p style={{ ...lead, margin: '18px 0 16px' }}>
              In a sight-and-sound generation, many young people struggle to form deep connections,
              chasing trends built on reputation rather than character, and are easily distracted.
            </p>
            <p style={{ ...lead, margin: 0 }}>
              A vine is a plant with trailing or climbing stems that reach out and take hold. Like branches
              on the true Vine, our youth are invited to remain in Christ, draw life from Him, and bear
              lasting fruit.
            </p>
          </div>
        </div>
      </section>

      {/* C.A.G.E. FRAMEWORK */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
            <span style={eyebrow}>Our framework</span>
            <h2 style={h2}>The C.A.G.E. journey</h2>
            <p style={{ ...lead, marginTop: '14px' }}>
              Four movements that help every young person connect, abide, grow, and expand in Christ.
            </p>
          </div>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: '48px', alignItems: 'center' }}>
            <div data-reveal="left" style={{ ...card, padding: '26px', background: '#fff' }}>
              <img src="/MINISTRIES/youth-img1.png" alt="The C.A.G.E. model: Connecting, Abiding, Grow, Expand" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }} />
            </div>
            <div>
              {CAGE.map((c, i) => (
                <div
                  key={c.title}
                  data-reveal="right"
                  data-reveal-delay={i * 90}
                  style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', padding: '18px 0', borderBottom: i < 3 ? '1px solid #e2edf5' : 'none' }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans'",
                      fontWeight: 800,
                      fontSize: '20px',
                      color: '#fff',
                      background: c.color,
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 'none',
                    }}
                  >
                    {c.n}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', color: '#12384c', margin: '2px 0 6px' }}>{c.title}</h3>
                    <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '15px', margin: 0 }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABIDING - where it happens */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 44px' }} data-reveal>
          <span style={eyebrow}>Where abiding happens</span>
          <h2 style={h2}>Vineyards &amp; Bible study</h2>
        </div>

        <div
          data-reveal
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            background: 'linear-gradient(135deg,#0b2a3d,#0e5f86)',
            color: '#fff',
            borderRadius: '22px',
            padding: '30px 34px',
            marginBottom: '26px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ width: '54px', height: '54px', flex: 'none', borderRadius: '15px', background: 'rgba(255,255,255,.14)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}><Icon name="users" size={24} /></span>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '21px', margin: '0 0 6px' }}>Vineyards</h3>
            <p style={{ color: '#cfe4f0', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Small accountability groups of four, walking closely together in honesty, prayer, and growth.
            </p>
          </div>
        </div>

        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {CLASSES.map((c, i) => (
            <Hover
              key={c.title}
              data-reveal
              data-reveal-delay={i * 110}
              style={{ ...card, display: 'flex', flexDirection: 'column', transition: 'transform .25s, box-shadow .25s' }}
              hoverStyle={{ transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }}
            >
              <span style={{ alignSelf: 'flex-start', background: '#e8f7fd', color: '#0e9fd6', fontWeight: 800, fontSize: '12px', letterSpacing: '.04em', padding: '6px 13px', borderRadius: '100px', marginBottom: '16px' }}>
                {c.tag}
              </span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '21px', color: '#12384c', margin: '0 0 10px' }}>{c.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '15px', margin: 0 }}>{c.text}</p>
            </Hover>
          ))}
        </div>
      </section>

      {/* SCRIPTURE BAND */}
      <section
        style={{
          position: 'relative',
          color: '#fff',
          backgroundImage: 'linear-gradient(135deg, rgba(11,42,61,.9), rgba(14,95,134,.88)), url(/MINISTRIES/youth-img2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '92px 26px', textAlign: 'center' }} data-reveal="scale">
          <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: '27px', lineHeight: 1.5, margin: '0 0 18px', textWrap: 'pretty' }}>
            This is to my Father&rsquo;s glory, that you bear much fruit, showing yourselves to be my
            disciples.
          </p>
          <div style={{ color: '#7fd0f2', fontWeight: 800, letterSpacing: '.1em', fontSize: '14px' }}>JOHN 15:8</div>
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
            Come and abide with us
          </h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Join a vineyard, find your Bible study class, and grow with a community of young people
            rooted in Christ.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#0b7bb0', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>
              Get Connected
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
