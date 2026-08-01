import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon, type IconName } from '../components/Icon'

/* ---------------------------------------------------------------- tokens */
const GOLD = '#c98a2a'
const eyebrow: CSSProperties = { color: GOLD, fontWeight: 800, letterSpacing: '.16em', fontSize: '13px', textTransform: 'uppercase' }
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
const BELIEFS = [
  {
    img: '/MINISTRIES/marriage3.jpeg',
    title: 'Godly families begin at home',
    text: 'Godly, happy families are raised through long-term, intentional learning: family altars, Bible study, and prayer.',
  },
  {
    img: '/MINISTRIES/marriage2.jpeg',
    title: 'We grow better together',
    text: 'Community fellowships create a warm, conducive environment where couples learn and grow side by side.',
  },
  {
    img: '/MINISTRIES/marriage5.jpeg',
    title: 'Wisdom from one another',
    text: 'Marriages are strengthened as couples learn from each other and from seasoned, godly speakers.',
  },
  {
    img: '/MINISTRIES/marriage4.jpeg',
    title: 'Never neglect meeting together',
    text: 'Couples are encouraged not to give up the habit of meeting together in fellowship (Hebrews 10:25).',
  },
]

const EVENTS = [
  { icon: 'utensils', name: 'Breakfast Fellowships' },
  { icon: 'utensils', name: 'Luncheon Fellowships' },
  { icon: 'graduation', name: 'Couples Seminars' },
  { icon: 'mountain', name: 'Couples Retreats' },
  { icon: 'flame', name: 'Dinner Fellowships' },
  { icon: 'home', name: 'Group Home Fellowships' },
  { icon: 'book', name: 'Couples Classes' },
  { icon: 'rings', name: 'Premarital Counseling' },
]

export default function MarriageCareMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO — image led */}
      <section
        aria-label="Marriage Care Ministry"
        style={{
          position: 'relative',
          minHeight: '640px',
          display: 'flex',
          alignItems: 'flex-end',
          color: '#fff',
          backgroundImage:
            'linear-gradient(180deg, rgba(11,42,61,.5) 0%, rgba(11,42,61,.12) 32%, rgba(11,42,61,.92) 100%), url(/MINISTRIES/marriage1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 26px 74px', width: '100%', boxSizing: 'border-box' }}>
          <span style={{ ...eyebrow, color: '#f0c674', animation: 'eaUp .6s ease both' }}>Marriage Care Ministry · MCM</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '60px',
              lineHeight: 1.04,
              letterSpacing: '-.02em',
              margin: '16px 0 18px',
              maxWidth: '760px',
              textWrap: 'balance',
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            Loving Stronger Together
          </h1>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px', animation: 'eaUp .7s ease .12s both' }}>
            {['Wisdom', 'Love', 'Unity'].map((t) => (
              <span
                key={t}
                style={{
                  border: '1px solid rgba(255,255,255,.5)',
                  background: 'rgba(255,255,255,.1)',
                  borderRadius: '100px',
                  padding: '7px 16px',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '.04em',
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '18.5px', lineHeight: 1.7, color: '#e6eef4', maxWidth: '620px', margin: '0 0 32px', animation: 'eaUp .7s ease .16s both' }}>
            Marriage Care Ministry (MCM) at East Assembly Church is a platform for couples, young and
            old, to care for one another and build marriages that endure.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Hover
              as={Link}
              to="/contact"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 800,
                padding: '15px 30px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg,#ec1c24,#ff5058)',
                boxShadow: '0 12px 30px rgba(236,28,36,.35)',
                fontSize: '15.5px',
              }}
              hoverStyle={{ transform: 'translateY(-2px)' }}
            >
              Join a Fellowship
            </Hover>
            <Hover
              as={Link}
              to="/ministries"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 800,
                padding: '15px 30px',
                borderRadius: '100px',
                background: 'rgba(255,255,255,.14)',
                border: '1.6px solid rgba(255,255,255,.55)',
                fontSize: '15.5px',
              }}
              hoverStyle={{ background: 'rgba(255,255,255,.24)' }}
            >
              All Ministries
            </Hover>
          </div>
        </div>
      </section>

      {/* INTRO — text + image with overlapping scripture card */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div data-reveal="left">
            <span style={eyebrow}>Welcome, couples</span>
            <h2 style={h2}>A place to care for one another</h2>
            <p style={{ ...lead, margin: '18px 0 16px' }}>
              MCM promotes godly couples through fellowship and targeted teaching on marriage across every
              age and season of life, equipping couples to cultivate marriages that last.
            </p>
            <p style={{ ...lead, margin: 0 }}>
              We recognise the changes in society that threaten the foundations of marriage and family, and
              we hold out Bible-based guidance as a shelter and a strength for every home.
            </p>
          </div>
          <div data-reveal="right" style={{ position: 'relative' }}>
            <div style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 26px 56px rgba(16,80,120,.16)', ...bg('/MINISTRIES/marriage6.jpeg') }} role="img" aria-label="A couple receiving marriage counsel" />
            <div
              style={{
                position: 'absolute',
                left: '-14px',
                bottom: '-26px',
                background: '#fff',
                border: '1px solid #f0e6d2',
                borderRadius: '18px',
                padding: '18px 22px',
                boxShadow: '0 18px 44px rgba(16,80,120,.16)',
                maxWidth: '300px',
              }}
            >
              <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: GOLD, fontSize: '13px', letterSpacing: '.08em' }}>
                PSALM 128:3&ndash;4
              </div>
              <div style={{ color: '#12384c', fontWeight: 600, fontSize: '15px', lineHeight: 1.5, marginTop: '6px' }}>
                &ldquo;Your wife will be like a fruitful vine&hellip; thus is the man blessed who fears the Lord.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTING GODLY COUPLES — image-topped belief cards */}
      <section style={{ background: '#fbf7ef', borderTop: '1px solid #f0e6d2', borderBottom: '1px solid #f0e6d2' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }} data-reveal>
            <span style={eyebrow}>Promoting godly couples</span>
            <h2 style={h2}>What we believe about marriage</h2>
            <p style={{ ...lead, marginTop: '14px' }}>
              Intentional, long-term learning through the Word, prayer, and community raises godly
              and happy families.
            </p>
          </div>
          <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {BELIEFS.map((b, i) => (
              <div
                key={b.title}
                data-reveal
                data-reveal-delay={i * 100}
                style={{
                  background: '#fff',
                  border: '1px solid #f0e6d2',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 26px rgba(120,90,30,.08)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div role="img" aria-label={b.title} style={{ aspectRatio: '4/3', ...bg(b.img) }} />
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '18px', color: '#12384c', margin: '0 0 10px' }}>
                    {b.title}
                  </h3>
                  <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS & FORUMS */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>All year round</span>
          <h2 style={h2}>Fellowships &amp; forums</h2>
          <p style={{ ...lead, marginTop: '14px' }}>
            Throughout the year MCM hosts gatherings designed to refresh, teach, and knit couples together.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '18px' }}>
          {EVENTS.map((e, i) => (
            <Hover
              key={e.name}
              data-reveal
              data-reveal-delay={(i % 4) * 90}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: '#fff',
                border: '1px solid #eef0e6',
                borderRadius: '18px',
                padding: '20px 22px',
                boxShadow: '0 8px 24px rgba(120,90,30,.06)',
                transition: 'transform .2s, box-shadow .2s',
              }}
              hoverStyle={{ transform: 'translateY(-4px)', boxShadow: '0 20px 40px rgba(120,90,30,.14)' }}
            >
              <span
                style={{
                  width: '50px',
                  height: '50px',
                  flex: 'none',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg,#fbeede,#f7e2c4)',
                  color: GOLD,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                }}
              >
                <Icon name={e.icon as IconName} size={24} />
              </span>
              <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '15.5px' }}>{e.name}</span>
            </Hover>
          ))}
        </div>
      </section>

      {/* SCRIPTURE BAND */}
      <section
        style={{
          position: 'relative',
          color: '#fff',
          backgroundImage: 'linear-gradient(135deg, rgba(18,56,76,.94), rgba(11,42,61,.9)), url(/MINISTRIES/marriage2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '96px 26px', textAlign: 'center' }} data-reveal="scale">
          <div style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: '72px', color: GOLD, lineHeight: 1, marginBottom: '-16px' }}>&ldquo;</div>
          <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 600, fontSize: '27px', lineHeight: 1.5, color: '#fff', margin: '0 0 20px', textWrap: 'pretty' }}>
            And let us not neglect our meeting together, as some people do, but encourage one another, and
            all the more as you see the Day drawing near.
          </p>
          <div style={{ color: '#f0c674', fontWeight: 800, letterSpacing: '.1em', fontSize: '14px' }}>HEBREWS 10:25</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '92px 26px 96px' }}>
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
            Grow your marriage with us
          </h2>
          <p style={{ color: '#ffe6dc', fontSize: '17px', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            MCM is designed for your marriage&rsquo;s growth and a forum to serve the body of Christ. We
            welcome all couples to our forthcoming fellowships.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover
              as={Link}
              to="/contact"
              style={{
                textDecoration: 'none',
                background: '#fff',
                color: '#ec1c24',
                fontWeight: 800,
                padding: '15px 32px',
                borderRadius: '100px',
                display: 'inline-block',
                transition: 'transform .2s',
              }}
              hoverStyle={{ transform: 'translateY(-2px)' }}
            >
              Get In Touch
            </Hover>
            <Hover
              as={Link}
              to="/ministries"
              style={{
                textDecoration: 'none',
                background: 'rgba(255,255,255,.16)',
                border: '1.7px solid rgba(255,255,255,.55)',
                color: '#fff',
                fontWeight: 800,
                padding: '15px 32px',
                borderRadius: '100px',
                display: 'inline-block',
                transition: 'background .2s',
              }}
              hoverStyle={{ background: 'rgba(255,255,255,.26)' }}
            >
              Back to Ministries
            </Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
