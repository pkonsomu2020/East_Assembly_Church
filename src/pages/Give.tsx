import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'

export default function Give() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav />

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
            GENEROSITY
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
            Give &amp; Support the Mission
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
            Your generosity fuels the Gospel - discipleship, outreach, and caring for our community.
            Thank you for giving cheerfully.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 26px' }}>
        <div className="ea-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div data-reveal="left">
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>
              WAYS TO GIVE
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '34px',
                color: '#12384c',
                margin: '12px 0 24px',
              }}
            >
              Choose what works for you
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e7f0f6',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  boxShadow: '0 8px 24px rgba(16,80,120,.06)',
                }}
              >
                <span
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '13px',
                    background: '#3ba55d',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    flex: 'none',
                    fontSize: '13px',
                  }}
                >
                  MPESA
                </span>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '16px' }}>
                    M-PESA Paybill
                  </div>
                  <div style={{ color: '#5a6772', fontSize: '14.5px' }}>
                    Paybill &amp; account details provided by the church.
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e7f0f6',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  boxShadow: '0 8px 24px rgba(16,80,120,.06)',
                }}
              >
                <span
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '13px',
                    background: '#e8f7fd',
                    color: '#0e9fd6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flex: 'none',
                  }}
                >
                  <Icon name="landmark" size={22} />
                </span>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '16px' }}>
                    Bank Transfer
                  </div>
                  <div style={{ color: '#5a6772', fontSize: '14.5px' }}>
                    Give directly via bank deposit or standing order.
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e7f0f6',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  boxShadow: '0 8px 24px rgba(16,80,120,.06)',
                }}
              >
                <span
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '13px',
                    background: '#fdecec',
                    color: '#ec1c24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flex: 'none',
                  }}
                >
                  <Icon name="heart" size={22} />
                </span>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#12384c', fontSize: '16px' }}>
                    In Person
                  </div>
                  <div style={{ color: '#5a6772', fontSize: '14.5px' }}>
                    Give during any of our Sunday services.
                  </div>
                </div>
              </div>
            </div>
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
                fontSize: '24px',
                color: '#12384c',
                margin: '0 0 22px',
              }}
            >
              Give Online
            </h2>
            <label style={{ fontSize: '13.5px', fontWeight: 700, color: '#6b7885', display: 'block', marginBottom: '10px' }}>
              Select amount (KES)
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '16px' }}>
              <Hover
                as="button"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1.5px solid #dbe8f1',
                  background: '#f7fbfe',
                  fontWeight: 800,
                  color: '#12384c',
                  fontFamily: 'Mulish',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
                hoverStyle={{ borderColor: '#00adee', color: '#0e9fd6' }}
              >
                500
              </Hover>
              <button
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1.5px solid #ec1c24',
                  background: '#fdecec',
                  fontWeight: 800,
                  color: '#ec1c24',
                  fontFamily: 'Mulish',
                  cursor: 'pointer',
                }}
              >
                1,000
              </button>
              <Hover
                as="button"
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1.5px solid #dbe8f1',
                  background: '#f7fbfe',
                  fontWeight: 800,
                  color: '#12384c',
                  fontFamily: 'Mulish',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
                hoverStyle={{ borderColor: '#00adee', color: '#0e9fd6' }}
              >
                2,500
              </Hover>
            </div>
            <input
              placeholder="Other amount"
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #dbe8f1',
                fontFamily: 'Mulish',
                fontSize: '15px',
                background: '#f7fbfe',
                marginBottom: '14px',
              }}
            />
            <label style={{ fontSize: '13.5px', fontWeight: 700, color: '#6b7885', display: 'block', marginBottom: '10px' }}>
              Giving type
            </label>
            <select
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #dbe8f1',
                fontFamily: 'Mulish',
                fontSize: '15px',
                background: '#f7fbfe',
                marginBottom: '20px',
                color: '#1f2733',
              }}
            >
              <option>Tithe</option>
              <option>Offering</option>
              <option>Missions</option>
              <option>Building Fund</option>
              <option>Benevolence</option>
            </select>
            <Hover
              as="button"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '100px',
                border: 'none',
                background: 'linear-gradient(135deg,#00adee,#0b7bb0)',
                color: '#fff',
                fontWeight: 800,
                fontFamily: 'Mulish',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'transform .2s',
              }}
              hoverStyle={{ transform: 'translateY(-2px)' }}
            >
              Proceed to Give
            </Hover>
            <p style={{ textAlign: 'center', color: '#8496a5', fontSize: '12.5px', margin: '16px 0 0' }}>
              <Icon name="lock" size={14} /> Secure giving &middot; &ldquo;God loves a cheerful giver.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
