import { type CSSProperties } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon, type IconName } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'
import { YBtn } from '../components/YouthKit'

/* ---------------------------------------------------------------- tokens */
const RED = '#ec1c24'
const BLUE = '#00adee'
const NAVY = '#12384c'
const YELLOW = '#ffd23f'
const GREEN = '#5fc97a'
const SKY = '#d3f0fb'

const eyebrow: CSSProperties = { color: RED, fontWeight: 800, letterSpacing: '.16em', fontSize: '13px', textTransform: 'uppercase' }
const h2: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans'",
  fontWeight: 800,
  fontSize: 'clamp(32px, 4.4vw, 52px)',
  color: NAVY,
  margin: '14px 0 0',
  letterSpacing: '-.02em',
  lineHeight: 1.05,
  textWrap: 'balance',
}

/* ---------------------------------------------------------- illustrations */
function Sun({ size = 150, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true" style={style}>
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x="56" y="4" width="8" height="20" rx="4" fill={YELLOW} transform={`rotate(${i * 30} 60 60)`} />
      ))}
      <circle cx="60" cy="60" r="28" fill={YELLOW} />
      <circle cx="50" cy="55" r="3.2" fill={NAVY} />
      <circle cx="70" cy="55" r="3.2" fill={NAVY} />
      <path d="M50 67q10 9 20 0" stroke={NAVY} strokeWidth="3.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function Cloud({ width = 170, style }: { width?: number; style?: CSSProperties }) {
  return (
    <svg width={width} height={width * 0.5} viewBox="0 0 160 80" aria-hidden="true" style={style}>
      <circle cx="40" cy="50" r="26" fill="#fff" />
      <circle cx="78" cy="36" r="32" fill="#fff" />
      <circle cx="118" cy="50" r="26" fill="#fff" />
      <rect x="40" y="46" width="78" height="30" rx="15" fill="#fff" />
    </svg>
  )
}

function Rainbow({ width = 260, style }: { width?: number; style?: CSSProperties }) {
  const arc = (r: number, c: string) => <path key={r} d={`M${110 - r} 110 A${r} ${r} 0 0 1 ${110 + r} 110`} stroke={c} strokeWidth="14" fill="none" />
  return (
    <svg width={width} height={width / 2} viewBox="0 0 220 112" aria-hidden="true" style={style}>
      {arc(100, RED)}
      {arc(86, YELLOW)}
      {arc(72, GREEN)}
      {arc(58, BLUE)}
    </svg>
  )
}

function Star({ size = 40, color = YELLOW, style }: { size?: number; color?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={style}>
      <path d="m12 2.2 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17l-5.9 3.2 1.2-6.5L2.5 9.1l6.6-.9z" fill={color} strokeLinejoin="round" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

function Block({ letter, color, rotate, size = 64, style }: { letter: string; color: string; rotate: number; size?: number; style?: CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '12px',
        background: color,
        color: color === YELLOW ? NAVY : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Plus Jakarta Sans'",
        fontWeight: 800,
        fontSize: size * 0.52,
        transform: `rotate(${rotate}deg)`,
        boxShadow: '0 6px 0 rgba(18,56,76,.18)',
        ...style,
      }}
    >
      {letter}
    </span>
  )
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
  { bg: BLUE, fg: '#fff', icon: 'child', title: 'Ages 2 - 5', text: 'Our littlest ones begin their journey with Jesus.', tilt: -2 },
  { bg: RED, fg: '#fff', icon: 'palette', title: 'Grade 1 - 3', text: 'Learning the Bible through fun and creativity.', tilt: 1.5 },
  { bg: YELLOW, fg: NAVY, icon: 'book', title: 'Grade 4 - 5', text: 'Digging deeper into God’s Word together.', tilt: -1.5 },
  { bg: GREEN, fg: NAVY, icon: 'star', title: 'Pre-teens', text: 'Getting ready to grow into the teens ministry.', tilt: 2 },
]

const ACTIVITIES = [
  { icon: 'calendar', name: 'Vacation Bible Study', note: 'A full week every holiday' },
  { icon: 'pray', name: 'Teachers’ Prayer Day', note: 'Quarterly' },
  { icon: 'music', name: 'Kids’ Music', note: 'Choirs, praise & worship' },
  { icon: 'utensils', name: 'Fathers & Sons Breakfast', note: 'Mentoring young boys' },
  { icon: 'heart', name: 'Community CSR', note: 'Serving our neighbours' },
  { icon: 'users', name: 'Teachers’ Meetings', note: 'Every Sunday after service' },
  { icon: 'mountain', name: 'Teachers’ Retreat', note: 'Quarterly fellowship' },
  { icon: 'users', name: 'Missionattes', note: 'Every third Saturday' },
]
const BUBBLES = [BLUE, RED, YELLOW, GREEN]

export default function ChildrenMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="ministries" />

      {/* HERO - a sunny scene */}
      <section style={{ position: 'relative', overflow: 'hidden', background: SKY, paddingTop: '150px' }}>
        <Sun size={150} style={{ position: 'absolute', top: '110px', right: '7%' }} />
        <div className="ea-drift" style={{ position: 'absolute', top: '140px', left: '5%' }}><Cloud width={190} /></div>
        <div className="ea-drift" style={{ position: 'absolute', top: '300px', right: '22%', animationDuration: '24s' }}><Cloud width={120} /></div>
        <Rainbow width={300} style={{ position: 'absolute', left: '-40px', bottom: '90px' }} />
        <Star size={34} style={{ position: 'absolute', top: '230px', left: '22%' }} />
        <Star size={26} color={RED} style={{ position: 'absolute', top: '190px', right: '34%' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto', padding: '30px 26px 150px', textAlign: 'center' }}>
          <span style={{ ...eyebrow, animation: 'eaUp .3s ease both', display: 'inline-block', background: '#fff', padding: '8px 16px', borderRadius: '30px' }}>Children&rsquo;s Ministry</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: 'clamp(44px, 7vw, 88px)',
              lineHeight: 1.02,
              letterSpacing: '-.03em',
              color: NAVY,
              margin: '20px 0 20px',
              textWrap: 'balance',
              animation: 'eaUp .3s ease .02s both',
            }}
          >
            Raising kids who <span style={{ color: '#fff', background: RED, padding: '0 .22em', borderRadius: '.2em', display: 'inline-block', transform: 'rotate(-3deg)' }}>love</span> Jesus
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.65, fontWeight: 600, color: NAVY, maxWidth: '600px', margin: '0 auto 30px', animation: 'eaUp .3s ease .04s both' }}>
            Nurturing the children of Kenya in the knowledge of Jesus Christ and the Word of God.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
            <YBtn to="/contact" bg={RED} hover="#c4141b">Volunteer With Us</YBtn>
            <YBtn to="/ministries" bg={NAVY} hover="#0b2a3d">All Ministries</YBtn>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '38px' }}>
            {(['child', 'book', 'music', 'heart', 'cross'] as IconName[]).map((n, i) => (
              <span
                key={n}
                className="ea-bounce"
                style={{ animationDelay: `${i * 0.18}s`, width: '56px', height: '56px', borderRadius: '50%', background: BUBBLES[i % 4], color: i % 4 === 2 || i % 4 === 3 ? NAVY : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Icon name={n} size={28} />
              </span>
            ))}
          </div>
        </div>

        {/* hills */}
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: -1, width: '100%', height: '130px', display: 'block' }}>
          <path d="M0 70 C240 10 420 20 640 60 C860 100 1100 20 1440 50 L1440 150 L0 150 Z" fill="#8fdc9f" />
          <path d="M0 110 C300 60 560 130 820 100 C1040 76 1240 70 1440 100 L1440 150 L0 150 Z" fill={GREEN} />
        </svg>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '26px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 3 }}>
          <Block letter="A" color={RED} rotate={-8} size={56} />
          <Block letter="B" color={YELLOW} rotate={4} size={56} />
          <Block letter="C" color={BLUE} rotate={-3} size={56} />
        </div>
      </section>

      {/* VISION + MISSION */}
      <section style={{ maxWidth: '1060px', margin: '0 auto', padding: '100px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {[
            { bg: BLUE, fg: '#fff', icon: 'eye', title: 'Our Vision', body: 'To equip the lives of children with the Word of God and raise their self-awareness as to who they are, based on His Word.', tilt: -1.2 },
            { bg: RED, fg: '#fff', icon: 'flag', title: 'Our Mission', body: 'Nurturing the children of Kenya in the knowledge of Jesus Christ and the Word of God.', tilt: 1.2 },
          ].map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 120}>
              <div style={{ position: 'relative', background: c.bg, color: c.fg, borderRadius: '28px', padding: '44px 36px 38px', transform: `rotate(${c.tilt}deg)`, boxShadow: '0 8px 0 rgba(18,56,76,.2)' }}>
                <span style={{ position: 'absolute', top: '-28px', left: '30px', width: '64px', height: '64px', borderRadius: '50%', background: YELLOW, color: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={c.icon as IconName} size={30} />
                </span>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '30px', margin: '16px 0 12px' }}>{c.title}</h3>
                <p style={{ lineHeight: 1.65, fontSize: '17.5px', margin: 0, fontWeight: 600 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIVES */}
      <section style={{ background: '#fff8e0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }} data-reveal>
            <span style={eyebrow}>What we set out to do</span>
            <h2 style={h2}>Our objectives</h2>
          </div>
          <ul className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: 0, padding: 0 }}>
            {OBJECTIVES.map((o, i) => (
              <li key={o} data-reveal data-reveal-delay={(i % 2) * 90} style={{ listStyle: 'none', display: 'flex', gap: '16px', alignItems: 'center', background: '#fff', borderRadius: '20px', padding: '20px 22px', border: `3px solid ${BUBBLES[i % 4]}`, transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}>
                <span style={{ position: 'relative', width: '52px', height: '52px', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Star size={52} color={BUBBLES[i % 4]} style={{ position: 'absolute', inset: 0 }} />
                  <span style={{ position: 'relative', color: i % 4 === 2 || i % 4 === 3 ? NAVY : '#fff', fontWeight: 800, fontSize: '16px' }}>&#10003;</span>
                </span>
                <span style={{ color: NAVY, fontSize: '16.5px', lineHeight: 1.5, fontWeight: 600 }}>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLASSES & SERVICES */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 22px' }} data-reveal>
          <span style={eyebrow}>Sunday kids&rsquo; church</span>
          <h2 style={h2}>Classes for every age</h2>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '56px' }} data-reveal>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: YELLOW, color: NAVY, fontWeight: 800, fontSize: '16px', padding: '14px 24px', borderRadius: '40px', transform: 'rotate(-1.5deg)' }}>
            <Icon name="clock" size={22} /> Every Sunday at 10:30am &amp; 12:30pm, alongside the main service
          </span>
        </div>
        <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '26px' }}>
          {CLASSES.map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 100}>
              <Hover
                style={{ background: c.bg, color: c.fg, borderRadius: '28px', padding: '32px 22px 30px', textAlign: 'center', height: '100%', transform: `rotate(${c.tilt}deg)`, transition: 'transform .2s', boxShadow: '0 8px 0 rgba(18,56,76,.2)' }}
                hoverStyle={{ transform: 'rotate(0deg) translateY(-8px)' }}
              >
                <div style={{ width: '78px', height: '78px', margin: '0 auto 18px', borderRadius: '50%', background: '#fff', color: c.bg === YELLOW ? NAVY : c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={c.icon as IconName} size={36} />
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '26px', margin: '0 0 10px' }}>{c.title}</h3>
                <p style={{ lineHeight: 1.55, fontSize: '15.5px', margin: 0, fontWeight: 600 }}>{c.text}</p>
              </Hover>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={{ background: SKY, overflow: 'hidden' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '96px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
            <span style={eyebrow}>All year round</span>
            <h2 style={h2}>Activities &amp; events</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px' }}>
            {ACTIVITIES.map((a, i) => (
              <div key={a.name + i} data-reveal data-reveal-delay={(i % 4) * 80}>
                <Hover
                  style={{ display: 'flex', gap: '16px', alignItems: 'center', background: '#fff', borderRadius: '22px', padding: '20px', transition: 'transform .2s', boxShadow: '0 6px 0 rgba(18,56,76,.12)' }}
                  hoverStyle={{ transform: 'translateY(-6px) rotate(-1deg)' }}
                >
                  <span style={{ width: '58px', height: '58px', flex: 'none', borderRadius: '50%', background: BUBBLES[i % 4], color: i % 4 === 2 || i % 4 === 3 ? NAVY : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={a.icon as IconName} size={26} />
                  </span>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: NAVY, fontSize: '16.5px', lineHeight: 1.25 }}>{a.name}</div>
                    <div style={{ color: '#5a6772', fontSize: '13.5px', marginTop: '3px', fontWeight: 600 }}>{a.note}</div>
                  </div>
                </Hover>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDING PROGRAM */}
      <section style={{ background: YELLOW, overflow: 'hidden' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
          <div className="ea-2col" data-reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span style={{ ...eyebrow, color: NAVY }}>The hands &amp; feet of Jesus</span>
              <h2 style={{ ...h2, margin: '14px 0 18px' }}>A Saturday feeding program</h2>
              <p style={{ fontSize: '17.5px', lineHeight: 1.7, color: NAVY, margin: 0, fontWeight: 600 }}>
                For many children from informal settlements like Kiambiu, our simple Saturday breakfast is
                possibly the only meal they will have that day. It is also a moment for our teachers to know
                the young ones and care for their deeper needs.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              {[
                { big: 'bread', label: 'Breakfast every Saturday', bg: RED, fg: '#fff', tilt: -2 },
                { big: 'child', label: 'Underprivileged children', bg: BLUE, fg: '#fff', tilt: 2 },
                { big: 'home', label: 'Kiambiu & nearby areas', bg: '#fff', fg: NAVY, tilt: 1.5 },
                { big: 'heart', label: 'Love in action', bg: NAVY, fg: '#fff', tilt: -1.5 },
              ].map((s) => (
                <div key={s.label} style={{ background: s.bg, color: s.fg, borderRadius: '24px', padding: '24px 18px', textAlign: 'center', transform: `rotate(${s.tilt}deg)`, boxShadow: '0 6px 0 rgba(18,56,76,.18)' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}><Icon name={s.big as IconName} size={34} /></div>
                  <div style={{ fontSize: '14.5px', fontWeight: 800, lineHeight: 1.35 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section style={{ padding: '100px 26px 110px', overflow: 'hidden' }}>
        <div
          data-reveal="scale"
          style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', background: BLUE, color: '#fff', borderRadius: '32px', padding: 'clamp(44px, 6vw, 72px) 34px', textAlign: 'center', boxShadow: '0 10px 0 rgba(18,56,76,.22)' }}
        >
          <Star size={44} style={{ position: 'absolute', top: '22px', left: '7%' }} />
          <Star size={30} color="#fff" style={{ position: 'absolute', top: '60px', right: '9%' }} />
          <Star size={26} color={RED} style={{ position: 'absolute', bottom: '34px', left: '12%' }} />
          <h2 style={{ position: 'relative', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: 'clamp(30px, 4.6vw, 54px)', letterSpacing: '-.02em', margin: '0 0 16px', textWrap: 'balance' }}>
            Come and serve the little ones
          </h2>
          <p style={{ position: 'relative', fontSize: '18px', fontWeight: 600, maxWidth: '560px', margin: '0 auto 30px', lineHeight: 1.65 }}>
            Our dedicated team of 8 volunteers would love your help. If you are saved and have a heart for
            kids, there is a place for you, and you can serve for a lifetime.
          </p>
          <div style={{ position: 'relative', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <YBtn to="/contact" bg={YELLOW} fg={NAVY} hover="#f2c01f">Become a Volunteer</YBtn>
            <YBtn to="/ministries" bg={NAVY} hover="#0b2a3d">Back to Ministries</YBtn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
