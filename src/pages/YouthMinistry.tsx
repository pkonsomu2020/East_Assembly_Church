import { type CSSProperties } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'
import { Icon } from '../components/Icon'
import { Y, chunk, Sticker, Marquee, YBtn } from '../components/YouthKit'

/* ---------------------------------------------------------------- tokens */
const display: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans'",
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '-.02em',
  lineHeight: 0.98,
  textWrap: 'balance',
}
const lead: CSSProperties = { fontSize: '17px', lineHeight: 1.75, color: '#33434f' }

const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

/* ------------------------------------------------------------------ data */
const CAGE = [
  { n: '01', bg: Y.blue, fg: Y.navy, title: 'Connecting', text: 'Creating spaces where young people connect with God, with others, and with themselves.' },
  { n: '02', bg: Y.red, fg: Y.white, title: 'Abiding', text: 'Learning to remain and conform to Christ (Romans 12:1-2) through vineyards and Bible study.' },
  { n: '03', bg: Y.yellow, fg: Y.navy, title: 'Grow', text: 'Bearing fruit through pruning and abiding, rooted in the promises of John 15.' },
  { n: '04', bg: Y.white, fg: Y.navy, title: 'Expand', text: 'Becoming lights that draw others to the Vine through outreach and events.' },
]

const CLASSES = [
  { tag: '2 Cor 2:15', ages: '16 - 21 yrs', title: 'Aroma', text: 'University-aged youth exploring faith through discussion-based topics.', tilt: -1.2, tagBg: Y.blue },
  { tag: 'Young professionals', ages: '22 - 25 yrs', title: 'BOC (Beloved of Christ)', text: 'Those beginning to settle into life, growing through book-based discussions.', tilt: 1, tagBg: Y.red },
  { tag: 'Established adults', ages: '26 yrs and above', title: 'Bereans', text: 'Established young adults going deeper into rich, scriptural study.', tilt: -0.8, tagBg: Y.yellow },
]

export default function YouthMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#33434f' }}>
      <Nav active="ministries" />

      {/* HERO */}
      <section style={{ background: Y.yellow, color: Y.navy, overflow: 'hidden' }}>
        <div
          className="ea-2col"
          style={{ maxWidth: '1260px', margin: '0 auto', padding: '150px 26px 90px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '56px', alignItems: 'center' }}
        >
          <div>
            <div style={{ animation: 'eaUp .3s ease both' }}>
              <Sticker bg={Y.blue} fg={Y.navy} rotate={-3}>Youth Ministry</Sticker>
            </div>
            <h1 style={{ ...display, fontSize: 'clamp(52px, 8vw, 104px)', color: Y.navy, margin: '24px 0 26px', animation: 'eaUp .3s ease .02s both' }}>
              Abide in the Vine
            </h1>
            <p style={{ fontSize: '20px', lineHeight: 1.65, fontWeight: 600, color: Y.navy, maxWidth: '540px', margin: '0 0 14px', animation: 'eaUp .3s ease .04s both' }}>
              &ldquo;I am the vine; you are the branches. If you remain in me and I in you, you will bear
              much fruit; apart from me you can do nothing.&rdquo;
            </p>
            <div style={{ marginBottom: '34px', animation: 'eaUp .3s ease .05s both' }}>
              <Sticker bg={Y.red} fg={Y.white} rotate={2}>John 15:5</Sticker>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
              <YBtn to="/contact" bg={Y.navy} hover="#12384c">Connect With Us</YBtn>
              <YBtn to="/ministries" bg={Y.red} hover="#c4141b">All Ministries</YBtn>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <div
              role="img"
              aria-label="Youth worshipping together"
              style={{ aspectRatio: '4 / 5', transform: 'rotate(3deg)', borderRadius: '14px', ...chunk(Y.red, 12), ...bg('/MINISTRIES/youth-img4.jpg') }}
            />
          </div>
        </div>
      </section>

      <Marquee words={['Connecting', 'Abiding', 'Grow', 'Expand']} bg={Y.blue} fg={Y.navy} />

      {/* INTRO - a generation seeking connection */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div data-reveal="left" style={{ padding: '10px' }}>
            <div
              role="img"
              aria-label="Young people in worship"
              style={{ aspectRatio: '4/3', transform: 'rotate(-2.5deg)', borderRadius: '14px', ...chunk(Y.blue, 12), ...bg('/MINISTRIES/youth-img3.jpg') }}
            />
          </div>
          <div data-reveal="right">
            <Sticker bg={Y.yellow} rotate={-3}>Why the Vine</Sticker>
            <h2 style={{ ...display, fontSize: 'clamp(34px, 4.4vw, 54px)', color: Y.navy, margin: '22px 0 20px' }}>
              A generation searching for connection
            </h2>
            <p style={{ ...lead, margin: '0 0 16px' }}>
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
      <section style={{ background: Y.navy, color: '#fff', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }} data-reveal>
            <Sticker bg={Y.red} fg={Y.white} rotate={2}>Our framework</Sticker>
            <h2 style={{ ...display, fontSize: 'clamp(38px, 5.4vw, 68px)', color: '#fff', margin: '22px 0 18px' }}>
              The C.A.G.E. journey
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#cfe4f0', margin: 0 }}>
              Four movements that help every young person connect, abide, grow, and expand in Christ.
            </p>
          </div>

          <div data-reveal="scale" style={{ maxWidth: '640px', margin: '0 auto 60px', background: '#fff', borderRadius: '14px', padding: '22px', ...chunk(Y.yellow, 10) }}>
            <img src="/MINISTRIES/youth-img1.png" alt="The C.A.G.E. model: Connecting, Abiding, Grow, Expand" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
          </div>

          <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {CAGE.map((c, i) => (
              <div key={c.title} data-reveal data-reveal-delay={i * 90}>
                <div
                  style={{
                    background: c.bg,
                    color: c.fg,
                    borderRadius: '14px',
                    padding: '26px 24px 30px',
                    height: '100%',
                    transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                    ...chunk('#000', 6),
                  }}
                >
                  <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '64px', lineHeight: 1, marginBottom: '14px' }}>{c.n}</div>
                  <h3 style={{ ...display, fontSize: '26px', margin: '0 0 10px' }}>{c.title}</h3>
                  <p style={{ lineHeight: 1.55, fontSize: '15px', margin: 0, fontWeight: 600 }}>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABIDING - where it happens */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }} data-reveal>
          <Sticker bg={Y.blue} rotate={-2}>Where abiding happens</Sticker>
          <h2 style={{ ...display, fontSize: 'clamp(34px, 4.8vw, 60px)', color: Y.navy, margin: '22px 0 0' }}>
            Vineyards &amp; Bible study
          </h2>
        </div>

        <div
          data-reveal
          style={{
            display: 'flex',
            gap: '22px',
            alignItems: 'center',
            background: Y.red,
            color: '#fff',
            borderRadius: '14px',
            padding: '30px 34px',
            marginBottom: '40px',
            flexWrap: 'wrap',
            ...chunk(Y.navy, 8),
          }}
        >
          <span style={{ width: '64px', height: '64px', flex: 'none', borderRadius: '50%', background: Y.yellow, color: Y.navy, border: `3px solid ${Y.navy}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="users" size={28} />
          </span>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h3 style={{ ...display, fontSize: '32px', margin: '0 0 8px' }}>Vineyards</h3>
            <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0, fontWeight: 600 }}>
              Small accountability groups of four, walking closely together in honesty, prayer, and growth.
            </p>
          </div>
        </div>

        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '30px' }}>
          {CLASSES.map((c, i) => (
            <div key={c.title} data-reveal data-reveal-delay={i * 110}>
              <Hover
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '28px',
                  transform: `rotate(${c.tilt}deg)`,
                  transition: 'transform .2s, box-shadow .2s',
                  ...chunk(Y.navy, 6),
                }}
                hoverStyle={{ transform: 'rotate(0deg) translate(-3px,-3px)', boxShadow: `9px 9px 0 ${Y.navy}` }}
              >
                <span style={{ alignSelf: 'flex-start', marginBottom: '18px' }}>
                  <Sticker bg={c.tagBg} fg={c.tagBg === Y.red ? Y.white : Y.navy} rotate={-2} style={{ fontSize: '12px' }}>{c.tag}</Sticker>
                </span>
                <h3 style={{ ...display, fontSize: '26px', color: Y.navy, margin: '0 0 12px' }}>{c.title}</h3>
                <div style={{ alignSelf: 'flex-start', background: Y.navy, color: Y.yellow, fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '17px', padding: '6px 14px', borderRadius: '6px', margin: '0 0 14px' }}>{c.ages}</div>
                <p style={{ color: '#33434f', lineHeight: 1.6, fontSize: '15.5px', margin: 0 }}>{c.text}</p>
              </Hover>
            </div>
          ))}
        </div>
      </section>

      {/* SCRIPTURE BAND */}
      <section style={{ background: Y.red, color: '#fff', overflow: 'hidden' }}>
        <div className="ea-2col" style={{ maxWidth: '1160px', margin: '0 auto', padding: '90px 26px', display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: '56px', alignItems: 'center' }}>
          <div data-reveal="left" style={{ padding: '10px' }}>
            <div role="img" aria-label="Youth gathered in worship" style={{ aspectRatio: '1', transform: 'rotate(-3deg)', borderRadius: '14px', ...chunk(Y.yellow, 10), ...bg('/MINISTRIES/youth-img2.jpg', 'center 25%') }} />
          </div>
          <div data-reveal="right">
            <p style={{ ...display, textTransform: 'none', fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.2, margin: '0 0 22px' }}>
              This is to my Father&rsquo;s glory, that you bear much fruit, showing yourselves to be my
              disciples.
            </p>
            <Sticker bg={Y.yellow} rotate={-2}>John 15:8</Sticker>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 26px 110px', overflow: 'hidden' }}>
        <div
          data-reveal="scale"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: Y.blue,
            color: Y.navy,
            borderRadius: '16px',
            padding: 'clamp(36px, 6vw, 70px)',
            textAlign: 'center',
            ...chunk(Y.navy, 12),
          }}
        >
          <h2 style={{ ...display, fontSize: 'clamp(34px, 5vw, 60px)', margin: '0 0 18px' }}>
            Come and abide with us
          </h2>
          <p style={{ fontSize: '19px', fontWeight: 600, maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Join a vineyard, find your Bible study class, and grow with a community of young people
            rooted in Christ.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <YBtn to="/contact" bg={Y.yellow} fg={Y.navy} hover="#f2c01f">Get Connected</YBtn>
            <YBtn to="/ministries" bg={Y.navy} hover="#12384c">Back to Ministries</YBtn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
