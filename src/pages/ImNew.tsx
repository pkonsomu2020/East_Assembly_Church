import Nav from '../components/Nav'
import Footer from '../components/Footer'
import JoinForm from '../components/JoinForm'
import { useMotion } from '../hooks/useMotion'

const DOCTRINES: [string, string][] = [
  [
    "There is One True God - revealed in three persons...Father, Son, and Holy Spirit (commonly known as the Trinity).",
    "Luke 3:22"
  ],
  [
    "In the Deity of the Lord Jesus Christ - As God's son Jesus was both human and divine.",
    "Matthew 1:23"
  ],
  [
    "The Fall of Man ushered in evil and death, both physical and spiritual, into the world.",
    "Gen 1:26"
  ],
  [
    "The Salvation of Man - Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God.",
    "Titus 2:11"
  ],
  [
    "The Ordinances of the Church: (i) Water Baptism by Immersion after repenting of one's sins and receiving Christ's gift of salvation (Mark 16:6); (ii) Holy Communion (the Lord's Supper) as a symbolic remembrance of Christ's suffering and death for our salvation (1 Cor 11:26).",
    "Mark 16:6 · 1 Cor 11:26"
  ],
  [
    "Baptism in the Holy Spirit is for everyone and empowers believers for witnessing and effective service, just as it did in New Testament times.",
    "Acts 8:12-17"
  ],
  [
    "The Initial Physical Evidence of Baptism in the Holy Spirit is 'Speaking in Tongues,' as experienced on the Day of Pentecost and referenced throughout Acts and the Epistles.",
    "Acts 2:4"
  ],
  [
    "Sanctification is an act of separation from that which is evil, and of dedication unto God.",
    "Romans 12:1"
  ],
  [
    "The Church has a Mission to seek and save all who are lost in sin.",
    "John 3:16"
  ],
  [
    "The Ministry - A divinely called and scripturally ordained leadership ministry serves the Church.",
    "Mark 16:15-20"
  ],
  [
    "Divine Healing of the sick is a privilege for Christians today.",
    "Isaiah 51:4"
  ],
  [
    "The Blessed Hope – When Jesus Raptures His church prior to His return to earth.",
    "Titus 2:13"
  ],
  [
    "The Millennial Reign of Christ - when Jesus returns with His saints to reign on earth for one thousand years.",
    "Rev 1:7"
  ],
  [
    "A Final Judgment Will Take Place for those who have rejected Christ.",
    "Matt 25:46"
  ],
  [
    "New Heavens and a New Earth - that Christ is preparing for all people, of all time who have accepted Him.",
    "Rev 21:22"
  ]
]

export default function ImNew() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="new" />

      <section
        style={{
          position: 'relative',
          background: '#f2f9fd',
          overflow: 'hidden',
          borderBottom: '1px solid #e7f0f6',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-60px',
            width: '420px',
            height: '420px',
            background: 'none',
          }}
        />
        <div
          className="ea-2col"
          style={{
            position: 'relative',
            maxWidth: '1260px',
            margin: '0 auto',
            padding: '84px 26px',
            display: 'grid',
            gridTemplateColumns: '1.2fr .9fr',
            gap: '52px',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                color: '#ec1c24',
                fontWeight: 800,
                letterSpacing: '.14em',
                fontSize: '13px',
                animation: 'eaUp .3s ease both',
              }}
            >
              KARIBU - WELCOME
            </span>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '56px',
                color: '#12384c',
                margin: '14px 0 18px',
                letterSpacing: '-.02em',
                lineHeight: 1.05,
                animation: 'eaUp .3s ease .02s both',
              }}
            >
              We&rsquo;re so glad <span style={{ color: '#00adee' }}>you&rsquo;re here</span>
            </h1>
            <p
              style={{
                fontSize: '18.5px',
                color: '#5a6772',
                maxWidth: '520px',
                lineHeight: 1.65,
                margin: '0 0 32px',
                animation: 'eaUp .3s ease .04s both',
              }}
            >
              We&rsquo;re excited to welcome you to our church family. Whether you&rsquo;re exploring faith for the first time or looking for a new community, we&rsquo;re here to walk alongside you on your journey.
            </p>
            <a href="#plan" className="ea-btn-r" style={{ animation: 'eaUp .3s ease .06s both' }}>
              Plan Your Visit
            </a>
          </div>
          <div
            data-reveal="right"
            role="img"
            aria-label="Karibu, welcome to East Assembly Church"
            style={{
              borderRadius: '24px',
              aspectRatio: '4/5',
              boxShadow: '0 28px 60px rgba(16,80,120,.14)',
              backgroundImage: 'url(/welcome-img.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </section>

      <section id="plan" style={{ maxWidth: '1260px', margin: '0 auto', padding: '88px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 52px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>
            WHAT TO EXPECT
          </span>
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
            Your first Sunday, made simple
          </h2>
        </div>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          <div
            data-reveal
            data-reveal-delay="0"
            style={{
              background: '#fff',
              border: '1px solid #e7f0f6',
              borderRadius: '22px',
              padding: '32px',
              boxShadow: '0 8px 26px rgba(16,80,120,.06)',
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '16px',
                color: '#fff',
                background: '#ec1c24',
                width: '46px',
                height: '46px',
                borderRadius: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              1
            </span>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '20px',
                color: '#12384c',
                margin: '0 0 10px',
              }}
            >
              Arrive &amp; Be Welcomed
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>
              Our hospitality team will greet you at the door, help you find a seat, and answer any questions. Come as you are.
            </p>
          </div>
          <div
            data-reveal
            data-reveal-delay="120"
            style={{
              background: '#fff',
              border: '1px solid #e7f0f6',
              borderRadius: '22px',
              padding: '32px',
              boxShadow: '0 8px 26px rgba(16,80,120,.06)',
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '16px',
                color: '#fff',
                background: '#00adee',
                width: '46px',
                height: '46px',
                borderRadius: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              2
            </span>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '20px',
                color: '#12384c',
                margin: '0 0 10px',
              }}
            >
              Worship &amp; The Word
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>
              Expect heartfelt worship and a practical, Bible-based message. Our Main Service runs from 10.30am to 12.30pm.
            </p>
          </div>
          <div
            data-reveal
            data-reveal-delay="240"
            style={{
              background: '#fff',
              border: '1px solid #e7f0f6',
              borderRadius: '22px',
              padding: '32px',
              boxShadow: '0 8px 26px rgba(16,80,120,.06)',
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '16px',
                color: '#fff',
                background: '#ec1c24',
                width: '46px',
                height: '46px',
                borderRadius: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              3
            </span>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '20px',
                color: '#12384c',
                margin: '0 0 10px',
              }}
            >
              Kids Are Cared For
            </h3>
            <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15px', margin: 0 }}>
              Safe, fun, age-appropriate programs run for children and teens so the whole family is looked after.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 26px 88px' }}>
        <div
          data-reveal
          style={{ background: '#f2f9fd', border: '1px solid #e7f0f6', borderRadius: '26px', padding: '44px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ec1c24' }} />
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '26px',
                color: '#12384c',
                margin: 0,
              }}
            >
              Service Times
            </h2>
          </div>
          <div className="ea-5col" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px' }}>
            <div
              style={{
                textAlign: 'center',
                padding: '26px 14px',
                borderRadius: '18px',
                background: '#fff',
                border: '1px solid #e7f0f6',
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  color: '#12384c',
                  fontSize: '16px',
                  marginBottom: '8px',
                }}
              >
                1st Service
              </div>
              <div style={{ color: '#0e9fd6', fontWeight: 700, fontSize: '14px' }}>8:00 - 9:30 AM</div>
            </div>
            <div
              style={{
                textAlign: 'center',
                padding: '26px 14px',
                borderRadius: '18px',
                background: '#fff',
                border: '1px solid #e7f0f6',
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  color: '#12384c',
                  fontSize: '16px',
                  marginBottom: '8px',
                }}
              >
                Youth Service
              </div>
              <div style={{ color: '#0e9fd6', fontWeight: 700, fontSize: '14px' }}>9:00 - 10:30 AM</div>
            </div>
            <div
              style={{
                textAlign: 'center',
                padding: '26px 14px',
                borderRadius: '18px',
                background: '#fff',
                border: '1px solid #e7f0f6',
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  color: '#12384c',
                  fontSize: '16px',
                  marginBottom: '8px',
                }}
              >
                Main Service
              </div>
              <div style={{ color: '#0e9fd6', fontWeight: 700, fontSize: '14px' }}>10:30 - 12:30</div>
            </div>
            <div
              style={{
                textAlign: 'center',
                padding: '26px 14px',
                borderRadius: '18px',
                background: '#fff',
                border: '1px solid #e7f0f6',
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  color: '#12384c',
                  fontSize: '16px',
                  marginBottom: '8px',
                }}
              >
                Teen Service
              </div>
              <div style={{ color: '#0e9fd6', fontWeight: 700, fontSize: '14px' }}>10:30 - 12:30</div>
            </div>
            <div
              style={{
                textAlign: 'center',
                padding: '26px 14px',
                borderRadius: '18px',
                background: '#fff',
                border: '1px solid #e7f0f6',
              }}
            >
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 800,
                  color: '#12384c',
                  fontSize: '16px',
                  marginBottom: '8px',
                }}
              >
                Children&rsquo;s
              </div>
              <div style={{ color: '#0e9fd6', fontWeight: 700, fontSize: '14px' }}>10:30 - 12:30</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US — membership / registration form */}
      <section id="join" style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', padding: '80px 26px 96px' }}>
        <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 44px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>
            BECOME PART OF THE FAMILY
          </span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '42px',
              color: '#12384c',
              margin: '14px 0 16px',
              letterSpacing: '-.01em',
              textWrap: 'balance',
            }}
          >
            Join Us
          </h2>
          <p style={{ fontSize: '17px', color: '#5a6772', lineHeight: 1.7, margin: 0 }}>
            Please take a moment to fill out this registration form to help us get to know you better and to
            keep you informed about upcoming events and opportunities to get involved.
          </p>
        </div>
        <div data-reveal>
          <JoinForm />
        </div>
      </section>

      {/* BELIEFS */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '88px 26px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }} data-reveal>
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>OUR BELIEFS</span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '38px', color: '#12384c', margin: '14px 0 14px' }}>
              Kenya Assemblies Of God Doctrinal Statements
            </h2>
            <p style={{ fontSize: '17px', color: '#5a6772', lineHeight: 1.7, margin: 0 }}>
              We believe&hellip; The Bible is inspired by God and declares His design and plan for mankind. (1 Timothy 3:15-17)
            </p>
          </div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '14px' }}>
            {DOCTRINES.map(([text, ref], i) => (
              <li key={i} data-reveal style={{ background: '#fff', border: '1px solid #e7f0f6', borderRadius: '16px', padding: '20px 24px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, color: '#ec1c24', fontSize: '20px', minWidth: '28px' }}>{i + 1}.</span>
                <div>
                  <div style={{ color: '#4a5763', lineHeight: 1.6, fontSize: '16px' }}>{text}</div>
                  <div style={{ color: '#0e9fd6', fontWeight: 700, fontSize: '14px', marginTop: '6px' }}>{ref}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  )
}
