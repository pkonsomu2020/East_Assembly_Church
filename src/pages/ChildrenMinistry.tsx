import { type CSSProperties, type ReactNode } from 'react'
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
const card: CSSProperties = {
  background: '#fff',
  border: '1px solid #e7f0f6',
  borderRadius: '22px',
  padding: '30px',
  boxShadow: '0 8px 26px rgba(16,80,120,.06)',
}

/* ------------------------------------------------------------------ data */
const OBJECTIVES = [
  'Trained teachers guiding children in a graded, age-appropriate setup.',
  'Nurturing God-fearing children who long for a deep relationship with Christ.',
  'Interesting, doctrinally sound Bible study for an ever-changing world.',
  'Equipping children with the Word to overcome the trials they face daily.',
  'Inspiring them to love God with all their heart, mind, and soul.',
  'Teaching the joy of service, so no child is a bench-warmer.',
]

const CLASSES = [
  { color: '#00adee', tint: '#e8f7fd', icon: 'child', title: 'Ages 2 - 5', text: 'Our littlest ones begin their journey with Jesus.' },
  { color: '#ec1c24', tint: '#fdecec', icon: 'palette', title: 'Grade 1 - 3', text: 'Learning the Bible through fun and creativity.' },
  { color: '#0e9fd6', tint: '#e8f7fd', icon: 'book', title: 'Grade 4 - 5', text: 'Digging deeper into God’s Word together.' },
  { color: '#ec1c24', tint: '#fdecec', icon: 'star', title: 'Pre-teens', text: 'Getting ready to grow into the teens ministry.' },
]

const ACTIVITIES = [
  { icon: 'calendar', name: 'Vacation Bible Study', note: 'A full week every holiday' },
  { icon: 'pray', name: 'Teachers’ Prayer Day', note: 'Quarterly' },
  { icon: 'music', name: 'Kids’ Music', note: 'Choirs, praise & worship' },
  { icon: 'utensils', name: 'Fathers & Sons Breakfast', note: 'Mentoring young boys' },
  { icon: 'heart', name: 'Community CSR', note: 'Serving our neighbours' },
  { icon: 'users', name: 'Teachers’ Meetings', note: 'Every Sunday after service' },
  { icon: 'mountain', name: 'Teachers’ Retreat', note: 'Quarterly fellowship' },
  { icon: 'sparkles', name: 'Missionattes', note: 'Every third Saturday' },
]

function Check({ children }: { children: ReactNode }) {
  return (
    <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', listStyle: 'none', marginBottom: '14px' }}>
      <span style={{ width: '26px', height: '26px', flex: 'none', borderRadius: '8px', background: '#e8f7fd', color: '#0e9fd6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>&#10003;</span>
      <span style={{ color: '#5a6772', fontSize: '15.5px', lineHeight: 1.55 }}>{children}</span>
    </li>
  )
}

export default function ChildrenMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - bright and playful */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg,#eaf7fe 0%,#fef1f1 100%)', paddingTop: '150px' }}>
        <div style={{ position: 'absolute', top: '-60px', left: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(0,173,238,.14)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-30px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(236,28,36,.1)' }} />
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto', padding: '0 26px 40px', textAlign: 'center' }}>
          <span style={{ ...eyebrow, animation: 'eaUp .6s ease both' }}>Children&rsquo;s Ministry</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '56px',
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              color: '#12384c',
              margin: '14px 0 18px',
              textWrap: 'balance',
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            Raising kids who <span style={{ color: '#00adee' }}>love</span> Jesus
          </h1>
          <p style={{ fontSize: '18.5px', lineHeight: 1.7, color: '#5a6772', maxWidth: '620px', margin: '0 auto 30px', animation: 'eaUp .7s ease .16s both' }}>
            Nurturing the children of Kenya in the knowledge of Jesus Christ and the Word of God.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Link to="/contact" className="ea-btn-r">Volunteer With Us</Link>
            <Link to="/ministries" className="ea-btn-b">All Ministries</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '18px', marginTop: '34px', animation: 'eaUp .7s ease .3s both' }}>
            <span style={{ color: '#0e9fd6' }}><Icon name="child" size={30} /></span>
            <span style={{ color: '#ec1c24' }}><Icon name="book" size={30} /></span>
            <span style={{ color: '#0e9fd6' }}><Icon name="music" size={30} /></span>
            <span style={{ color: '#ec1c24' }}><Icon name="heart" size={30} /></span>
            <span style={{ color: '#0e9fd6' }}><Icon name="cross" size={30} /></span>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[
            { tint: '#e8f7fd', color: '#0e9fd6', icon: 'target', title: 'Our Vision', body: 'To equip the lives of children with the Word of God and raise their self-awareness as to who they are, based on His Word.' },
            { tint: '#fdecec', color: '#ec1c24', icon: 'sparkles', title: 'Our Mission', body: 'Nurturing the children of Kenya in the knowledge of Jesus Christ and the Word of God.' },
          ].map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 120} style={{ ...card, padding: '36px' }}>
              <span style={{ width: '56px', height: '56px', borderRadius: '16px', background: c.tint, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}><Icon name={c.icon as IconName} size={24} /></span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '23px', color: '#12384c', margin: '0 0 10px' }}>{c.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '16px', margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIVES */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px' }} data-reveal>
            <span style={eyebrow}>What we set out to do</span>
            <h2 style={h2}>Our objectives</h2>
          </div>
          <ul className="ea-2col" data-reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 48px', margin: 0, padding: 0 }}>
            {OBJECTIVES.map((o) => (
              <Check key={o}>{o}</Check>
            ))}
          </ul>
        </div>
      </section>

      {/* CLASSES & SERVICES */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 20px' }} data-reveal>
          <span style={eyebrow}>Sunday kids&rsquo; church</span>
          <h2 style={h2}>Classes for every age</h2>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '48px' }} data-reveal>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#12384c', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '12px 22px', borderRadius: '100px' }}>
            <Icon name="clock" size={20} /> Every Sunday at 10:30am &amp; 12:30pm, alongside the main service
          </span>
        </div>
        <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
          {CLASSES.map((c, i) => (
            <Hover
              key={c.title}
              data-reveal
              data-reveal-delay={i * 100}
              style={{ ...card, textAlign: 'center', borderTop: `4px solid ${c.color}`, transition: 'transform .25s, box-shadow .25s' }}
              hoverStyle={{ transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }}
            >
              <div style={{ width: '64px', height: '64px', margin: '0 auto 16px', borderRadius: '50%', background: c.tint, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}><Icon name={c.icon as IconName} size={30} /></div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '19px', color: '#12384c', margin: '0 0 8px' }}>{c.title}</h3>
              <p style={{ color: '#5a6772', lineHeight: 1.55, fontSize: '14px', margin: 0 }}>{c.text}</p>
            </Hover>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
            <span style={eyebrow}>All year round</span>
            <h2 style={h2}>Activities &amp; events</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '18px' }}>
            {ACTIVITIES.map((a, i) => (
              <div key={a.name} data-reveal data-reveal-delay={(i % 4) * 80} style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#fff', border: '1px solid #e7f0f6', borderRadius: '18px', padding: '20px' }}>
                <span style={{ width: '50px', height: '50px', flex: 'none', borderRadius: '14px', background: '#fdecec', color: '#ec1c24', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}><Icon name={a.icon as IconName} size={22} /></span>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '15.5px' }}>{a.name}</div>
                  <div style={{ color: '#8496a5', fontSize: '13px', marginTop: '2px' }}>{a.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDING PROGRAM */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '92px 26px' }}>
        <div
          data-reveal="scale"
          style={{ background: 'linear-gradient(135deg,#0b2a3d,#0e5f86)', color: '#fff', borderRadius: '28px', padding: 'clamp(36px, 5vw, 60px)', boxShadow: '0 30px 60px rgba(0,120,180,.2)' }}
        >
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <span style={{ ...eyebrow, color: '#ff9ea2' }}>The hands &amp; feet of Jesus</span>
              <h2 style={{ ...h2, color: '#fff', margin: '14px 0 16px' }}>A Saturday feeding program</h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#cfe4f0', margin: 0 }}>
                For many children from informal settlements like Kiambiu, our simple Saturday breakfast is
                possibly the only meal they will have that day. It is also a moment for our teachers to know
                the young ones and care for their deeper needs.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { big: 'bread', label: 'Breakfast every Saturday' },
                { big: 'child', label: 'Underprivileged children' },
                { big: 'home', label: 'Kiambiu & nearby areas' },
                { big: 'heart', label: 'Love in action' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '30px', marginBottom: '8px', color: '#fff', display: 'flex', justifyContent: 'center' }}><Icon name={s.big as IconName} size={28} /></div>
                  <div style={{ fontSize: '13px', color: '#e2edf4', fontWeight: 600, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section style={{ padding: '0 26px 96px' }}>
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
            Come and serve the little ones
          </h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '560px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Our dedicated team of 8 volunteers would love your help. If you are saved and have a heart for
            kids, there is a place for you, and you can serve for a lifetime.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover as={Link} to="/contact" style={{ textDecoration: 'none', background: '#fff', color: '#0b7bb0', fontWeight: 800, padding: '15px 32px', borderRadius: '100px', display: 'inline-block', transition: 'transform .2s' }} hoverStyle={{ transform: 'translateY(-2px)' }}>
              Become a Volunteer
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
