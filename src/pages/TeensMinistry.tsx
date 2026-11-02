import { type CSSProperties } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon, type IconName } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'
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
const OBJECTIVES = [
  { icon: 'cross', bg: Y.yellow, fg: Y.navy, title: 'Christ Centered', text: 'Keeping Jesus at the heart of everything we do.' },
  { icon: 'shield', bg: Y.white, fg: Y.navy, title: 'Self-esteem & Awareness', text: 'Helping teens know and value who God made them to be.' },
  { icon: 'compass', bg: Y.red, fg: Y.white, title: 'Identity', text: 'Anchoring identity in Christ, not in trends or pressure.' },
  { icon: 'handshake', bg: Y.navy, fg: Y.white, title: 'Relationships', text: 'Building healthy friendships, family, and community.' },
]

const PROGRAMS = [
  { icon: 'palette', bg: Y.white, fg: Y.navy, title: 'Creative Arts', text: 'Dance, drama, and singing crews, Teens Worship Sundays, and film productions.' },
  { icon: 'trophy', bg: Y.yellow, fg: Y.navy, title: 'Sports Tournaments', text: 'Sunday soccer and basketball matches featuring local and KAG community teams.' },
  { icon: 'box', bg: Y.blue, fg: Y.navy, title: 'Box Sundays', text: 'Open Q&A with anonymous questions, plus counseling and mentorship follow-ups.' },
  { icon: 'graduation', bg: Y.red, fg: Y.white, title: 'Ex-Cans Program', text: 'A Jan-Aug life-skills journey for Form Four leavers: career, personality, and finance.' },
  { icon: 'tent', bg: Y.white, fg: Y.navy, title: 'Teen Camps', text: 'A six-day December workshop with preaching, sports, tournaments, and theme nights.' },
]

const MORE = ['Home Visitations', 'Cocktail for Parents', 'Teen Friendly mentorship', 'Bi-quarterly Fun Days']

const GALLERY = ['/MINISTRIES/teens1.jpg', '/MINISTRIES/teens2.jpg', '/MINISTRIES/teens5.jpg', '/MINISTRIES/teens4.jpg']
const TILTS = [-3, 2.5, -2, 3]

export default function TeensMinistry() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#33434f' }}>
      <Nav active="ministries" />

      {/* HERO */}
      <section style={{ background: Y.red, color: '#fff', overflow: 'hidden' }}>
        <div
          className="ea-2col"
          style={{ maxWidth: '1260px', margin: '0 auto', padding: '150px 26px 90px', display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: '56px', alignItems: 'center' }}
        >
          <div>
            <div style={{ animation: 'eaUp .3s ease both' }}>
              <Sticker bg={Y.yellow} fg={Y.navy} rotate={-3}>Teens Ministry</Sticker>
            </div>
            <h1
              style={{
                ...display,
                fontSize: 'clamp(64px, 11vw, 150px)',
                color: '#fff',
                textShadow: `5px 5px 0 ${Y.navy}`,
                margin: '22px 0 26px',
                animation: 'eaUp .3s ease .02s both',
              }}
            >
              I BELONG
            </h1>
            <p style={{ fontSize: '20px', lineHeight: 1.65, fontWeight: 600, maxWidth: '560px', margin: '0 0 14px', animation: 'eaUp .3s ease .04s both' }}>
              Connecting with teenagers aged 13 to 19 in a way that speaks their language, so every teen
              knows they belong in Christ and to His church family.
            </p>
            <div style={{ marginBottom: '34px', animation: 'eaUp .3s ease .05s both' }}>
              <Sticker bg={Y.blue} fg={Y.navy} rotate={2}>1 Corinthians 3:23</Sticker>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'eaUp .3s ease .06s both' }}>
              <YBtn to="/contact" bg={Y.yellow} fg={Y.navy} hover="#f2c01f">Join the Crew</YBtn>
              <YBtn to="/ministries" bg={Y.navy} hover="#12384c">All Ministries</YBtn>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <div
              role="img"
              aria-label="Teens together"
              style={{ aspectRatio: '4 / 5', transform: 'rotate(-3deg)', borderRadius: '14px', ...chunk(Y.navy, 12), ...bg('/MINISTRIES/teens3.jpg') }}
            />
          </div>
        </div>
      </section>

      <Marquee words={['I Belong', 'I Belong', 'I Belong']} bg={Y.navy} fg={Y.yellow} />

      {/* INTRO */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div data-reveal="left">
            <Sticker bg={Y.blue} rotate={-3}>Who we are</Sticker>
            <h2 style={{ ...display, fontSize: 'clamp(34px, 4.4vw, 54px)', color: Y.navy, margin: '22px 0 20px' }}>
              A place for every teenager
            </h2>
            <p style={{ ...lead, margin: '0 0 16px' }}>
              Adolescence brings big changes physically, emotionally, and socially. Our Teens Ministry
              walks with 13 to 19 year-olds through it all, offering spiritual support and counsel around
              the real challenges they face, from relationships to peer pressure.
            </p>
            <p style={{ ...lead, margin: 0 }}>
              Whatever their background, teens belong here, in Christ and in the family of the church.
            </p>
          </div>
          <div data-reveal="right" style={{ padding: '10px' }}>
            <div
              role="img"
              aria-label="Teens hanging out together"
              style={{ aspectRatio: '4/3', transform: 'rotate(2.5deg)', borderRadius: '14px', ...chunk(Y.red, 12), ...bg('/MINISTRIES/teens1.jpg') }}
            />
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section style={{ background: Y.blue, overflow: 'hidden', borderTop: `3px solid ${Y.navy}`, borderBottom: `3px solid ${Y.navy}` }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 22px' }} data-reveal>
            <Sticker bg={Y.yellow} rotate={2}>What we aim for</Sticker>
            <h2 style={{ ...display, fontSize: 'clamp(38px, 5.4vw, 68px)', color: Y.navy, margin: '22px 0 0' }}>
              Our four objectives
            </h2>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '52px' }} data-reveal>
            {['Integrity', 'Honesty'].map((v, i) => (
              <span key={v} style={{ display: 'inline-block', margin: '6px 8px' }}>
                <Sticker bg={i === 0 ? Y.red : Y.white} fg={i === 0 ? Y.white : Y.navy} rotate={i === 0 ? -3 : 3}>{v}</Sticker>
              </span>
            ))}
          </div>
          <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
            {OBJECTIVES.map((o, i) => (
              <div key={o.title} data-reveal data-reveal-delay={i * 100}>
                <div
                  style={{
                    background: o.bg,
                    color: o.fg,
                    borderRadius: '14px',
                    padding: '28px 24px',
                    height: '100%',
                    transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                    ...chunk(Y.navy, 6),
                  }}
                >
                  <span style={{ width: '56px', height: '56px', borderRadius: '50%', background: Y.navy, color: Y.white, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                    <Icon name={o.icon as IconName} size={26} />
                  </span>
                  <h3 style={{ ...display, fontSize: '22px', margin: '0 0 10px' }}>{o.title}</h3>
                  <p style={{ lineHeight: 1.55, fontSize: '15px', margin: 0, fontWeight: 600 }}>{o.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '100px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }} data-reveal>
          <Sticker bg={Y.red} fg={Y.white} rotate={-2}>Get involved</Sticker>
          <h2 style={{ ...display, fontSize: 'clamp(38px, 5.4vw, 68px)', color: Y.navy, margin: '22px 0 16px' }}>
            Programs &amp; activities
          </h2>
          <p style={{ ...lead, fontSize: '19px', margin: 0 }}>There is always something happening, all year round.</p>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '30px' }}>
          {PROGRAMS.map((p, i) => (
            <div key={p.title} data-reveal data-reveal-delay={(i % 3) * 100}>
              <Hover
                style={{
                  background: p.bg,
                  color: p.fg,
                  borderRadius: '14px',
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: `rotate(${[-1, 1, -0.8, 1, -1, 0.8][i]}deg)`,
                  transition: 'transform .2s, box-shadow .2s',
                  ...chunk(Y.navy, 6),
                }}
                hoverStyle={{ transform: 'rotate(0deg) translate(-3px,-3px)', boxShadow: `9px 9px 0 ${Y.navy}` }}
              >
                <span style={{ width: '58px', height: '58px', borderRadius: '50%', background: Y.navy, color: Y.white, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <Icon name={p.icon as IconName} size={26} />
                </span>
                <h3 style={{ ...display, fontSize: '24px', margin: '0 0 10px' }}>{p.title}</h3>
                <p style={{ lineHeight: 1.6, fontSize: '15.5px', margin: 0, fontWeight: 600 }}>{p.text}</p>
              </Hover>
            </div>
          ))}
          <div data-reveal data-reveal-delay="100">
            <div
              style={{
                background: Y.navy,
                color: '#fff',
                borderRadius: '14px',
                padding: '28px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transform: 'rotate(.8deg)',
                ...chunk(Y.red, 6),
              }}
            >
              <h3 style={{ ...display, fontSize: '24px', margin: '0 0 18px' }}>And more</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {MORE.map((m, i) => (
                  <Sticker key={m} bg={[Y.yellow, Y.blue, Y.white, Y.yellow][i]} rotate={[-2, 2, -1, 2][i]} style={{ fontSize: '12.5px', textTransform: 'none', letterSpacing: 0 }}>
                    {m}
                  </Sticker>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background: Y.yellow, overflow: 'hidden', borderTop: `3px solid ${Y.navy}`, borderBottom: `3px solid ${Y.navy}` }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '90px 26px 100px' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }} data-reveal>
            <Sticker bg={Y.blue} rotate={-2}>Life together</Sticker>
            <h2 style={{ ...display, fontSize: 'clamp(36px, 5vw, 62px)', color: Y.navy, margin: '22px 0 0' }}>
              In the Teens Ministry
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '28px' }}>
            {GALLERY.map((src, i) => (
              <div key={src} data-reveal data-reveal-delay={i * 80} style={{ padding: '8px' }}>
                <div
                  role="img"
                  aria-label="Teens ministry moment"
                  style={{ aspectRatio: '3/4', transform: `rotate(${TILTS[i]}deg)`, borderRadius: '12px', ...chunk(Y.navy, 8), ...bg(src) }}
                />
              </div>
            ))}
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
            background: Y.red,
            color: '#fff',
            borderRadius: '16px',
            padding: 'clamp(36px, 6vw, 70px)',
            textAlign: 'center',
            ...chunk(Y.navy, 12),
          }}
        >
          <h2 style={{ ...display, fontSize: 'clamp(34px, 5vw, 60px)', margin: '0 0 18px' }}>
            You belong with us
          </h2>
          <p style={{ fontSize: '19px', fontWeight: 600, maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Come as you are and find your people. Reach out and we will help you plug in.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <YBtn to="/contact" bg={Y.yellow} fg={Y.navy} hover="#f2c01f">Get In Touch</YBtn>
            <YBtn to="/ministries" bg={Y.navy} hover="#12384c">Back to Ministries</YBtn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
