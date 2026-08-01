import { type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon, type IconName } from '../components/Icon'

/* ---------------------------------------------------------------- tokens */
const eyebrow: CSSProperties = { color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }
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
  padding: '32px',
  boxShadow: '0 8px 26px rgba(16,80,120,.06)',
}
const lead: CSSProperties = { fontSize: '17px', lineHeight: 1.75, color: '#5a6772' }

/* ------------------------------------------------------------------ data */
interface Level {
  n: number
  title: string
  duration: string
  curriculum: string[]
  requirements: string[]
  certification: string
}

const LEVELS: Level[] = [
  {
    n: 1,
    title: 'Establishing the Vision',
    duration: '6 months · weekly (or accelerated for theology students)',
    curriculum: ['Introductory Guide', 'Book 1A: Establishing The Vision', 'Book 1B: Building The Basics'],
    requirements: ['Open to every believer ready to begin the journey'],
    certification: 'Foundation in the vision of the Great Commission',
  },
  {
    n: 2,
    title: 'Evangelism as a Lifestyle',
    duration: '6 months · bi-weekly / one-on-one',
    curriculum: [
      'Book 2A: Evangelizing as a Lifestyle',
      'Book 2B: Conserving Evangelism Fruit',
      'Book 3A: Discipling in Small Groups',
    ],
    requirements: [
      'Complete Level One & Training of Trainers (TOT)',
      'Personally disciple 2 people to Christ',
      '3 outreach trips: local, a low-income area, and one of choice',
    ],
    certification: 'Intermediate Discipleship Training Certificate',
  },
  {
    n: 3,
    title: 'Reproducing Laborers & Leadership',
    duration: 'Accelerated weekends · up to 5 sessions',
    curriculum: [
      'Book 3B: Reproducing Laborers',
      'Book 4A: Developing Leadership',
      'Book 4B: Mastering The Bible',
    ],
    requirements: [
      'Complete Level Two',
      'Teach as an ETS facilitator (min. 20 hours)',
      'Preach as an intern in at least 2 churches',
    ],
    certification: 'Advanced Training Certificate · Missionary Ordination',
  },
  {
    n: 4,
    title: 'Missions & Research',
    duration: '3–6 months · research-based correspondence',
    curriculum: [
      'Core: Urban Ministry · Life of Apostle Paul · Spiritual Warfare',
      'Choose 2 elective research projects (7–10 page reports)',
    ],
    requirements: [
      'Complete Level Three',
      'Teach as an ETS facilitator (min. 20 hours)',
      'Preach as an intern in at least 2 churches',
    ],
    certification: 'Diploma · Missionary for Life (Golden Seal) · Ordination',
  },
]

const STATS: { value: string; count?: number; suffix?: string; label: string }[] = [
  { value: '50+', count: 50, suffix: '+', label: 'Countries worldwide' },
  { value: '2008', label: 'Launched in Kenya' },
  { value: '9', count: 9, label: 'Missionaries ordained' },
  { value: '15+', count: 15, suffix: '+', label: 'Graduations held' },
]

const CONCERNS = [
  'The growth process is missing among many new converts.',
  'Discipleship is often misunderstood in Christian circles.',
  'Believer maturity in the body of Christ is too often assumed.',
  'Growing discipleship needs go unnoticed or ignored.',
]

const ELECTIVES = [
  'Cults, Sects & Heresies',
  'A Study of Cyber Missions',
  'Paying the Price of Revival',
  'Discipleship & Missions Made Simple',
  'Early Missionaries Around the World',
  'One missions topic of your choice',
]

const RESOURCES = [
  { title: 'New Life Books', desc: 'Studies in John, for new believers.' },
  { title: 'Children’s Books', desc: 'Life of Christ, Color Book Edition.' },
  { title: 'Priesthood of Every Believer', desc: 'Equipping every member for ministry.' },
]

/* -------------------------------------------------------------- helpers */
function Point({ children }: { children: ReactNode }) {
  return (
    <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', listStyle: 'none' }}>
      <span style={{ color: '#00adee', fontWeight: 800, flex: 'none', marginTop: '1px' }}>&#10003;</span>
      <span style={{ color: '#5a6772', fontSize: '14.5px', lineHeight: 1.55 }}>{children}</span>
    </li>
  )
}

export default function DiscipleshipMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="ministries" />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(180deg,#ffffff,#f2f9fd)', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '76px 26px', textAlign: 'center' }}>
          <span style={{ ...eyebrow, animation: 'eaUp .6s ease both' }}>DISCIPLESHIP MINISTRY</span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '54px',
              color: '#00adee',
              margin: '14px 0 14px',
              letterSpacing: '-.02em',
              lineHeight: 1.05,
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            Equipping The Saints
          </h1>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fdecec',
              border: '1px solid #f6b9bc',
              color: '#ec1c24',
              padding: '8px 16px',
              borderRadius: '100px',
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '.05em',
              animation: 'eaUp .7s ease .12s both',
            }}
          >
            ETS · EPHESIANS 4:11&ndash;12
          </div>
          <p style={{ ...lead, fontSize: '18px', maxWidth: '640px', margin: '22px auto 32px', animation: 'eaUp .7s ease .16s both' }}>
            A worldwide, scripture-based discipleship training program that equips believers to fulfil
            Christ&rsquo;s Great Commission: &ldquo;go and make disciples of all nations.&rdquo;
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', animation: 'eaUp .7s ease .24s both' }}>
            <Link to="/contact" className="ea-btn-r">Join a Discipleship Class</Link>
            <Link to="/ministries" className="ea-btn-b">All Ministries</Link>
          </div>
        </div>
      </section>

      {/* ABOUT ETS */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '56px', alignItems: 'center' }}>
          <div data-reveal="left">
            <span style={eyebrow}>ABOUT THE PROGRAM</span>
            <h2 style={h2}>Discipleship that multiplies</h2>
            <p style={{ ...lead, margin: '18px 0 16px' }}>
              Equipping The Saints (ETS) is a worldwide discipleship training program active in over fifty
              countries and adopted by numerous denominations, mission agencies, and churches. Founded by
              missionary David L. Dawson, it focuses on training disciples to help fulfil the Great Commission.
            </p>
            <p style={{ ...lead, margin: 0 }}>
              The materials are simplified, with scripture-based guided content focused on the stepwise
              application of biblical principles in a believer&rsquo;s process of growth, rooted in
              Matthew 28:18&ndash;20 and Ephesians 4:11&ndash;12.
            </p>
          </div>
          <div
            role="img"
            aria-label="Discipleship training and outreach in the community"
            data-reveal="right"
            style={{
              borderRadius: '24px',
              aspectRatio: '4/3',
              boxShadow: '0 24px 54px rgba(16,80,120,.14)',
              backgroundImage: 'url(/MINISTRIES/Descipleship-img.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '56px 26px' }}>
          <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {STATS.map((s, i) => (
              <div key={s.label} data-reveal data-reveal-delay={i * 90} style={{ textAlign: 'center' }}>
                {s.count !== undefined ? (
                  <div
                    data-count={s.count}
                    data-suffix={s.suffix || ''}
                    style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '44px', color: i % 2 ? '#ec1c24' : '#00adee' }}
                  >
                    {s.value}
                  </div>
                ) : (
                  <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '44px', color: i % 2 ? '#ec1c24' : '#00adee' }}>
                    {s.value}
                  </div>
                )}
                <div style={{ color: '#6b7885', fontSize: '14px', fontWeight: 600, marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PURPOSE / VISION */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>WHAT DRIVES US</span>
          <h2 style={h2}>Our Purpose &amp; Vision</h2>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {[
            {
              icon: 'sparkles',
              tint: '#fdecec',
              color: '#ec1c24',
              title: 'Our Purpose',
              body: 'That the saints understand they need to be equipped, and that gifted men and women of God make discipleship a main pillar for the growth of the church, spiritually and in numbers.',
            },
            {
              icon: 'target',
              tint: '#e8f7fd',
              color: '#0e9fd6',
              title: 'Our Objective',
              body: 'To instil in every believer the vision of the Great Commission and equip the saints to appreciate their responsibility for the work of ministry and edifying the Body of Christ.',
            },
            {
              icon: 'trending-up',
              tint: '#fdecec',
              color: '#ec1c24',
              title: 'Departmental Goal',
              body: 'To implement discipleship training programs that deliver revival and lasting growth across the body of Christ.',
            },
          ].map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 120} style={card}>
              <span
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: c.tint,
                  color: c.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                }}
              >
                <Icon name={c.icon as IconName} size={24} />
              </span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
                {c.title}
              </h3>
              <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DISCIPLESHIP */}
      <section style={{ background: '#0b2a3d', color: '#fff' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '80px 26px' }}>
          <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: '56px', alignItems: 'center' }}>
            <div data-reveal="left">
              <span style={{ ...eyebrow, color: '#ff9ea2' }}>WHY DISCIPLESHIP</span>
              <h2 style={{ ...h2, color: '#fff', margin: '14px 0 16px' }}>The need we&rsquo;re answering</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#c9dae6', margin: 0 }}>
                Across Kenya&rsquo;s body of Christ, discipleship is too often assumed rather than
                intentionally pursued. ETS exists to close that gap.
              </p>
            </div>
            <ul style={{ margin: 0, padding: 0 }} data-reveal="right">
              {CONCERNS.map((c) => (
                <li
                  key={c}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    listStyle: 'none',
                    background: 'rgba(255,255,255,.05)',
                    border: '1px solid rgba(255,255,255,.1)',
                    borderRadius: '14px',
                    padding: '16px 18px',
                    marginBottom: '12px',
                  }}
                >
                  <span style={{ color: '#00adee', fontWeight: 800, flex: 'none' }}>&#8250;</span>
                  <span style={{ color: '#e2edf4', fontSize: '15px', lineHeight: 1.55 }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE FOUR LEVELS */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '88px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
          <span style={eyebrow}>THE ETS JOURNEY</span>
          <h2 style={h2}>Four levels, one calling</h2>
          <p style={{ ...lead, marginTop: '14px' }}>
            A clear, stepwise path from establishing the vision to being ordained and sent as a
            missionary for life.
          </p>
        </div>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {LEVELS.map((lv, i) => (
            <div key={lv.n} data-reveal data-reveal-delay={i * 100} style={{ ...card, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                <span
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '15px',
                    background: 'linear-gradient(135deg,#00adee,#0b7bb0)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Plus Jakarta Sans'",
                    fontWeight: 800,
                    fontSize: '22px',
                    flex: 'none',
                  }}
                >
                  {lv.n}
                </span>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '.1em', color: '#ec1c24' }}>LEVEL {lv.n}</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '21px', color: '#12384c', margin: '2px 0 0' }}>
                    {lv.title}
                  </h3>
                </div>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  alignSelf: 'flex-start',
                  background: '#f2f9fd',
                  border: '1px solid #dbeaf4',
                  color: '#0b7bb0',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '7px 14px',
                  borderRadius: '100px',
                  marginBottom: '20px',
                }}
              >
                <Icon name="clock" size={16} /> {lv.duration}
              </div>

              <div style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '.08em', color: '#8496a5', marginBottom: '10px' }}>
                CURRICULUM
              </div>
              <ul style={{ margin: '0 0 18px', padding: 0 }}>
                {lv.curriculum.map((b) => (
                  <Point key={b}>{b}</Point>
                ))}
              </ul>

              <div style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '.08em', color: '#8496a5', marginBottom: '10px' }}>
                REQUIREMENTS
              </div>
              <ul style={{ margin: '0 0 20px', padding: 0 }}>
                {lv.requirements.map((r) => (
                  <Point key={r}>{r}</Point>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '18px',
                  borderTop: '1px dashed #e2edf5',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: '#ec1c24', flex: 'none', fontSize: '16px', display: 'inline-flex' }}><Icon name="award" size={18} /></span>
                <span style={{ fontSize: '14px', color: '#12384c', fontWeight: 700 }}>{lv.certification}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Level 4 electives */}
        <div data-reveal style={{ ...card, marginTop: '24px' }}>
          <span style={eyebrow}>LEVEL 4 · ELECTIVE RESEARCH</span>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '10px 0 18px' }}>
            Choose two research projects
          </h3>
          <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px 26px' }}>
            {ELECTIVES.map((e) => (
              <div key={e} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00adee', fontWeight: 800, flex: 'none' }}>&#10003;</span>
                <span style={{ color: '#5a6772', fontSize: '14.5px', lineHeight: 1.5 }}>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '80px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 48px' }} data-reveal>
            <span style={eyebrow}>TRAINING TOOLS</span>
            <h2 style={h2}>Additional resources</h2>
          </div>
          <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {RESOURCES.map((r, i) => (
              <div key={r.title} data-reveal data-reveal-delay={i * 120} style={card}>
                <span
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#e8f7fd',
                    color: '#0e9fd6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    marginBottom: '18px',
                  }}
                >
                  <Icon name="book" size={24} />
                </span>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '19px', color: '#12384c', margin: '0 0 8px' }}>
                  {r.title}
                </h3>
                <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '14.5px', margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#8496a5', fontSize: '14px', margin: '28px 0 0', fontStyle: 'italic' }}>
            Printed copies and e-copies available on request.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '88px 26px' }}>
        <div
          data-reveal="scale"
          className="ea-2col"
          style={{
            display: 'grid',
            gridTemplateColumns: '.8fr 1.2fr',
            background: '#fff',
            border: '1px solid #e7f0f6',
            borderRadius: '26px',
            overflow: 'hidden',
            boxShadow: '0 22px 54px rgba(16,80,120,.1)',
          }}
        >
          <div
            style={{
              minHeight: '360px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg,#0b3247,#0e9fd6)',
              color: '#fff',
              textAlign: 'center',
              padding: '32px',
            }}
          >
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '52px', lineHeight: 1 }}>DD</div>
              <div style={{ marginTop: '12px', fontWeight: 800, letterSpacing: '.12em', fontSize: '13px', color: '#cdeafd' }}>
                FOUNDER OF ETS
              </div>
              <div style={{ marginTop: '4px', fontSize: '13px', color: '#9fd3f2' }}>Home &amp; overseas missionary &middot; d. 2020</div>
            </div>
          </div>
          <div style={{ padding: '48px 44px' }}>
            <span style={eyebrow}>FOUNDER</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '32px', color: '#12384c', margin: '10px 0 6px' }}>
              Dave Dawson
            </h2>
            <p style={{ ...lead, margin: '16px 0 0' }}>
              For nearly forty years Dave Dawson devoted himself to training lay people for ministry. He
              taught at Denver Conservative Baptist Seminary, Dallas Bible College, and Southwestern Baptist
              Theological Seminary, and served as National Director for The Navigators in Singapore for twelve
              years, travelling extensively across America, Asia, Europe, the Eastern Bloc, and Africa.
            </p>
            <p style={{ ...lead, margin: '14px 0 0' }}>
              ETS was introduced in Kenya on 7&nbsp;August&nbsp;2008 through the first conference held at East
              Assembly Church. Dave visited Kenya for the 2018 ETS Anniversary conference and went home to be
              with the Lord in 2020. His legacy of disciple-making lives on.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '34px', margin: '0 0 14px', textWrap: 'balance' }}>
            Take your next step in discipleship
          </h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '540px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Join a Level One class or reach out to learn how ETS can equip you to make disciples of all nations.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover
              as={Link}
              to="/contact"
              style={{
                textDecoration: 'none',
                background: '#fff',
                color: '#0b7bb0',
                fontWeight: 800,
                padding: '15px 32px',
                borderRadius: '100px',
                display: 'inline-block',
                transition: 'transform .2s',
              }}
              hoverStyle={{ transform: 'translateY(-2px)' }}
            >
              Get Started
            </Hover>
            <Hover
              as={Link}
              to="/ministries"
              style={{
                textDecoration: 'none',
                background: 'rgba(255,255,255,.16)',
                border: '1.7px solid rgba(255,255,255,.5)',
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
