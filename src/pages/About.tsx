import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'

/** Cover-image background for a photo tile. */
const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

export default function About() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="about" />

      {/* INTRO / CHURCH BACKGROUND */}
      <section style={{ background: 'linear-gradient(180deg,#ffffff,#f2f9fd)', borderBottom: '1px solid #e7f0f6' }}>
        <div
          className="ea-2col"
          style={{
            maxWidth: '1260px',
            margin: '0 auto',
            padding: '80px 26px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          <div data-reveal="left">
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', animation: 'eaUp .6s ease both' }}>
              ABOUT EAST ASSEMBLY
            </span>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '52px',
                color: '#00adee',
                margin: '14px 0 22px',
                letterSpacing: '-.02em',
                lineHeight: 1.05,
                animation: 'eaUp .7s ease .08s both',
              }}
            >
              Church Background
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: '#5a6772', margin: '0 0 18px' }}>
              KA.G. Buruburu started as a fellowship on EAST campus in 1981, pioneered by the late Rev. Simon Malya. The
              services continued in the old library until a sanctuary was constructed with the help of Rev. Marvin Gorman
              from the USA.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.75, color: '#5a6772', margin: '0 0 32px' }}>
              From those humble beginnings, East Assembly has grown into a vibrant, welcoming family committed to loving
              God, loving people, and making disciples across Buruburu and beyond.
            </p>
            <Link to="/contact" className="ea-btn-r">Get In Touch</Link>
          </div>
          <div
            data-reveal="right"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '480px' }}
          >
            <div role="img" aria-label="East Assembly sanctuary building" style={{ gridRow: '1/3', borderRadius: '20px', boxShadow: '0 20px 46px rgba(16,80,120,.12)', ...bg('/sanctuary-img.jpg') }} />
            <div role="img" aria-label="The East Assembly congregation" style={{ borderRadius: '20px', boxShadow: '0 20px 46px rgba(16,80,120,.12)', ...bg('/congregation-img.jpg') }} />
            <div role="img" aria-label="The worship team leading praise" style={{ borderRadius: '20px', boxShadow: '0 20px 46px rgba(16,80,120,.12)', ...bg('/worship-team.jpg') }} />
          </div>
        </div>
      </section>

      {/* MISSION / VISION / HEART */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '88px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 52px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>WHAT DRIVES US</span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '40px',
              color: '#12384c',
              margin: '14px 0 0',
              textWrap: 'balance',
            }}
          >
            Our Mission, Vision &amp; Heart
          </h2>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          <div
            data-reveal
            data-reveal-delay="0"
            style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '22px', padding: '34px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }}
          >
            <span
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: '#fdecec',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ec1c24',
                fontSize: '24px',
                marginBottom: '20px',
              }}
            >
              <Icon name="sparkles" size={24} />
            </span>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
              Our Mission
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>
              To impact the world with the Gospel of Jesus Christ through love and discipleship, raising believers who
              love God and love people.
            </p>
          </div>
          <div
            data-reveal
            data-reveal-delay="120"
            style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '22px', padding: '34px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }}
          >
            <span
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: '#e8f7fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0e9fd6',
                fontSize: '24px',
                marginBottom: '20px',
              }}
            >
              <Icon name="target" size={24} />
            </span>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
              Our Vision
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>
              A thriving community where every person belongs, grows in faith, builds meaningful relationships, and
              discovers their God-given purpose.
            </p>
          </div>
          <div
            data-reveal
            data-reveal-delay="240"
            style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '22px', padding: '34px', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }}
          >
            <span
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: '#fdecec',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ec1c24',
                fontSize: '24px',
                marginBottom: '20px',
              }}
            >
              <Icon name="heart" size={24} />
            </span>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
              Our Heart
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>
              &ldquo;I care&hellip; We care.&rdquo; More than a motto, it is the way we love one another and serve our
              community in Buruburu and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 96px' }}>
        <div
          data-reveal="scale"
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            background: 'linear-gradient(135deg,#00adee,#0b7bb0)',
            color: '#fff',
            borderRadius: '28px',
            padding: '64px',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(0,120,180,.22)',
          }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '38px', margin: '0 0 16px', textWrap: 'balance' }}>
            Come and be part of the family
          </h2>
          <p style={{ fontSize: '17px', color: '#e2f4fc', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.65 }}>
            We would love to meet you this Sunday. Plan your first visit or reach out - we care.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Hover
              as={Link}
              to="/im-new"
              style={{
                textDecoration: 'none',
                background: '#fff',
                color: '#0b7bb0',
                fontWeight: 800,
                padding: '15px 30px',
                borderRadius: '100px',
                transition: 'transform .2s',
              }}
              hoverStyle={{ transform: 'translateY(-2px)' }}
            >
              Plan Your Visit
            </Hover>
            <Hover
              as={Link}
              to="/pastors"
              style={{
                textDecoration: 'none',
                background: 'rgba(255,255,255,.16)',
                border: '1.7px solid rgba(255,255,255,.5)',
                color: '#fff',
                fontWeight: 800,
                padding: '15px 30px',
                borderRadius: '100px',
                transition: 'background .2s',
              }}
              hoverStyle={{ background: 'rgba(255,255,255,.26)' }}
            >
              Meet Our Pastors
            </Hover>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
