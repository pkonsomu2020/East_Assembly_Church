import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'

const iconBox = {
  width: '52px',
  height: '52px',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '22px',
  flex: 'none',
} as const

const infoCard = {
  background: '#fff',
  border: '1px solid #e7f0f6',
  borderRadius: '20px',
  padding: '26px',
  display: 'flex',
  gap: '18px',
  alignItems: 'center',
  boxShadow: '0 8px 24px rgba(16,80,120,.06)',
}

const cardTitle = {
  fontFamily: "'Plus Jakarta Sans'",
  fontWeight: 800,
  color: '#12384c',
  fontSize: '16px',
  marginBottom: '3px',
} as const

const input = {
  padding: '14px 16px',
  borderRadius: '12px',
  border: '1px solid #dbe8f1',
  fontFamily: 'Mulish',
  fontSize: '15px',
  background: '#f7fbfe',
} as const

export default function Contact() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="contact" />

      <section style={{ background: 'linear-gradient(180deg,#ffffff,#f2f9fd)', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '76px 26px', textAlign: 'center' }}>
          <span
            style={{
              color: '#ec1c24',
              fontWeight: 800,
              letterSpacing: '.14em',
              fontSize: '13px',
              animation: 'eaUp .6s ease both',
            }}
          >
            WE&rsquo;D LOVE TO HEAR FROM YOU
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
            Get In Touch
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#5a6772',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.65,
              animation: 'eaUp .7s ease .16s both',
            }}
          >
            Questions, prayer requests, or just want to say hello? Reach out - because we care.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '80px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '44px' }}>
          <div data-reveal="left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={infoCard}>
                <span style={{ ...iconBox, background: '#fdecec', color: '#ec1c24' }}><Icon name="map-pin" size={22} /></span>
                <div>
                  <div style={cardTitle}>Visit Us</div>
                  <div style={{ color: '#5a6772', fontSize: '14.5px' }}>
                    Mesora Round-About, Buruburu, Nairobi, Kenya.
                  </div>
                </div>
              </div>
              <div style={infoCard}>
                <span style={{ ...iconBox, background: '#e8f7fd', color: '#0e9fd6' }}><Icon name="mail" size={22} /></span>
                <div>
                  <div style={cardTitle}>Email Us</div>
                  <a href="mailto:info@eastassembly.org" style={{ color: '#0e9fd6', fontSize: '14.5px', textDecoration: 'none' }}>
                    info@eastassembly.org
                  </a>
                </div>
              </div>
              <div style={infoCard}>
                <span style={{ ...iconBox, background: '#fdecec', color: '#ec1c24' }}><Icon name="phone" size={22} /></span>
                <div>
                  <div style={cardTitle}>Call Us</div>
                  <a href="tel:+254721467846" style={{ color: '#0e9fd6', fontSize: '14.5px', textDecoration: 'none' }}>
                    +254 721 467 846
                  </a>
                </div>
              </div>
            </div>
            <div
              className="ea-ph"
              data-label="[ Google map, Buruburu ]"
              style={{ borderRadius: '20px', height: '200px', marginTop: '18px' }}
            />
          </div>
          <div
            data-reveal="right"
            style={{
              background: '#fff',
              border: '1px solid #e7f0f6',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 16px 40px rgba(16,80,120,.08)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '26px',
                color: '#12384c',
                margin: '0 0 24px',
              }}
            >
              Send us a message
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="ea-frow" style={{ display: 'flex', gap: '14px' }}>
                <input placeholder="First name" style={{ ...input, flex: 1, minWidth: 0 }} />
                <input placeholder="Last name" style={{ ...input, flex: 1, minWidth: 0 }} />
              </div>
              <input placeholder="Email address" style={input} />
              <input placeholder="Phone number" style={input} />
              <textarea
                placeholder="How can we pray for you or help?"
                rows={5}
                style={{ ...input, resize: 'vertical' }}
              />
              <Hover
                as="button"
                style={{
                  padding: '16px',
                  borderRadius: '100px',
                  border: 'none',
                  background: 'linear-gradient(135deg,#ec1c24,#ff5058)',
                  color: '#fff',
                  fontWeight: 800,
                  fontFamily: 'Mulish',
                  fontSize: '15.5px',
                  cursor: 'pointer',
                  transition: 'transform .2s',
                }}
                hoverStyle={{ transform: 'translateY(-2px)' }}
              >
                Send Message
              </Hover>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
