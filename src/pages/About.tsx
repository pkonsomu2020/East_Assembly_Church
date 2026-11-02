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
      <section style={{ background: '#f2f9fd', borderBottom: '1px solid #e7f0f6' }}>
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
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', animation: 'eaUp .3s ease both' }}>
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
                animation: 'eaUp .3s ease .02s both',
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
              We thank God for seeing the church through the building and relocation.
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
                background: '#ec1c24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '24px',
                marginBottom: '20px',
              }}
            >
              <Icon name="flag" size={24} />
            </span>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
              Our Mission
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>
              To revive believers and connect others to Jesus Christ through Discipleship and Evangelism.
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
                background: '#00adee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '24px',
                marginBottom: '20px',
              }}
            >
              <Icon name="eye" size={24} />
            </span>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
              Our Vision
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15.5px', margin: 0 }}>
              A family of believers, impacting the world with the Gospel of Jesus Christ through love and Discipleship.
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
                background: '#ec1c24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
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

      {/* THE GROWTH */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '88px 26px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>THE GROWTH</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '40px', color: '#12384c', margin: '14px 0 22px' }}>
            Serving Since 1981
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#5a6772', margin: '0 0 18px' }}>
            The fellowship grew rapidly as a response to child evangelism and the loving, zealous leadership of Rev.
            Malya. Missionary Glen Ford pastored the church from 1989 when Rev. Malya left for Tanzania, until a Kenyan
            pastor, Rev. John Wafula, took over in 1990. The latter pastored the church until he went to be with the Lord
            in February 1992. Rev. Glen Ford stepped in to help the church cope with the sudden demise of Rev. Wafula
            until May 1992, when Pastor Tembu took over.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#5a6772', margin: '0 0 18px' }}>
            The church continued to grow progressively with the help of the following associate pastors: Pius Wawire,
            Peter Obiero, Elvis Irungu, Anne Bulbul, Bernard Amianda, Walter Nyangweso, Joyce Wangechi, Jane Tembu,
            Joshua Kiruma, Chaplain Margaret, Alex Nduati and David Thuo.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#5a6772', margin: 0 }}>
            The congregation relocated to the proposed EAST northern campus grounds in June 2002 after four years of
            construction.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '88px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>WHAT WE HOLD TO</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '40px', color: '#12384c', margin: '14px 0 0' }}>
            Core Values
          </h2>
        </div>
        <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '22px' }}>
          {[
            { v: 'Excellence', ref: 'Colossians 3:23' },
            { v: 'Authenticity', ref: '1 Timothy 1:5' },
            { v: 'Sincerity', ref: 'Joshua 24:14' },
            { v: 'Teamwork', ref: 'Ecclesiastes 4:9' },
          ].map((c, i) => (
            <div
              key={c.v}
              data-reveal
              data-reveal-delay={i * 100}
              style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: '0 8px 26px rgba(16,80,120,.06)' }}
            >
              <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 8px' }}>{c.v}</h3>
              <p style={{ color: '#0e9fd6', fontWeight: 700, fontSize: '14.5px', margin: 0 }}>({c.ref})</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 96px' }}>
        <div
          data-reveal="scale"
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            background: '#00adee',
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
                borderRadius: '6px',
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
                background: '#12384c',
                color: '#fff',
                fontWeight: 800,
                padding: '15px 30px',
                borderRadius: '6px',
                transition: 'background .2s',
              }}
              hoverStyle={{ background: '#0b2a3d' }}
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
