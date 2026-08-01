import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { useMotion } from '../hooks/useMotion'

export default function Pastors() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="about" />

      <section style={{ background: 'linear-gradient(180deg,#ffffff,#f2f9fd)', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '76px 26px', textAlign: 'center' }}>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', animation: 'eaUp .6s ease both' }}>
            OUR LEADERSHIP
          </span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '52px',
              color: '#00adee',
              margin: '14px 0 16px',
              letterSpacing: '-.02em',
              animation: 'eaUp .7s ease .08s both',
            }}
          >
            The Pastoral Team
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#5a6772',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.65,
              animation: 'eaUp .7s ease .16s both',
            }}
          >
            Servant leaders devoted to shepherding, teaching, and caring for the East Assembly family.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 26px 60px' }}>
        <div
          data-reveal="scale"
          className="ea-2col"
          style={{
            background: '#fff',
            border: '1px solid #e7f0f6',
            borderRadius: '26px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '.85fr 1.15fr',
            boxShadow: '0 22px 54px rgba(16,80,120,.1)',
          }}
        >
          <div className="ea-ph" data-label="[ Bishop Pius Tembu portrait ]" style={{ minHeight: '440px' }} />
          <div style={{ padding: '54px 48px' }}>
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '12.5px' }}>
              SENIOR PASTOR
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '34px', color: '#12384c', margin: '12px 0 6px' }}>
              Bishop Pius Tembu, PhD
            </h2>
            <p style={{ color: '#5a6772', lineHeight: 1.72, fontSize: '16px', margin: '18px 0 0' }}>
              Bishop Pius Tembu leads East Assembly Church with a shepherd&rsquo;s heart and a passion for the Gospel. Under his guidance, the church has grown into a vibrant, welcoming family committed to loving God, loving people, and making disciples of all nations.
            </p>
            <p style={{ color: '#12384c', lineHeight: 1.72, fontSize: '17px', margin: '16px 0 0', fontWeight: 600, fontStyle: 'italic' }}>
              &ldquo;Welcome to East Assembly Church! Whether you&rsquo;re new to town, exploring faith, or looking for a church home, we&rsquo;re excited to welcome you.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '20px 26px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>
            SERVING TOGETHER
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', color: '#12384c', margin: '12px 0 0' }}>
            Ministry Leaders
          </h2>
        </div>
        <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
          {[
            { title: 'Associate Pastor', role: 'Pastoral Care', delay: '0' },
            { title: 'Youth Pastor', role: <>Youth &amp; Teens</>, delay: '100' },
            { title: 'Worship Leader', role: 'Music Ministry', delay: '200' },
            { title: 'Discipleship Lead', role: 'Discipleship', delay: '300' },
          ].map((m) => (
            <Hover
              key={m.title}
              data-reveal
              data-reveal-delay={m.delay}
              style={{
                background: '#fff',
                border: '1px solid #e7f0f6',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(16,80,120,.06)',
                transition: 'transform .2s',
              }}
              hoverStyle={{ transform: 'translateY(-5px)' }}
            >
              <div className="ea-ph" data-label="[ portrait ]" style={{ aspectRatio: '1/1' }} />
              <div style={{ padding: '22px' }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '18px', color: '#12384c', margin: '0 0 4px' }}>
                  {m.title}
                </h3>
                <p style={{ color: '#0e9fd6', fontSize: '14px', margin: 0, fontWeight: 600 }}>{m.role}</p>
              </div>
            </Hover>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#8496a5', fontSize: '14px', margin: '28px 0 0', fontStyle: 'italic' }}>
          Leader names &amp; portraits to be provided by the church.
        </p>
      </section>

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
            boxShadow: '0 30px 60px rgba(200,30,40,.22)',
          }}
        >
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '34px', margin: '0 0 14px' }}>
            Need prayer or counsel?
          </h2>
          <p style={{ color: '#ffe1e2', fontSize: '17px', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Our pastoral team is here to walk with you. Reach out any time - we care.
          </p>
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
            Contact the Team
          </Hover>
        </div>
      </section>

      <Footer />
    </div>
  )
}
