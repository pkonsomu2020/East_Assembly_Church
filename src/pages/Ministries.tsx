import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'

const cardLift = { transform: 'translateY(-7px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }

const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

interface Ministry {
  name: string
  desc: string
  label: string
  delay: number
  img?: string
  imgPos?: string
  /** Detail page route; falls back to /contact for ministries without a page yet. */
  to?: string
}

const ministries: Ministry[] = [
  { name: 'Youth Ministry', desc: 'Empowering young hearts with faith, fellowship, and fun as we grow in Christ together.', label: '[ youth ]', delay: 0, img: '/MINISTRIES/youth-img4.jpg', to: '/ministries/youth-ministry' },
  { name: 'Music Ministry', desc: 'Bringing heavenly melodies to our worship, glorifying God through harmonious praise.', label: '[ music ]', delay: 80, img: '/MINISTRIES/music-min1.jpeg', imgPos: 'center 35%', to: '/ministries/music-ministry' },
  { name: 'Teens Ministry', desc: 'A safe, vibrant space for teenagers to know Jesus, build friendships, and discover purpose.', label: '[ teens ]', delay: 160, img: '/MINISTRIES/teens3.jpg', to: '/ministries/teens-ministry' },
  { name: 'Children’s Ministry', desc: 'Nurturing the youngest members with fun, safe, age-appropriate biblical teaching.', label: '[ children ]', delay: 0, to: '/ministries/childrens-ministry' },
  { name: 'Discipleship Ministry', desc: 'Growing in faith, knowledge, and love, equipping believers to live out their faith boldly.', label: '[ discipleship ]', delay: 80, img: '/MINISTRIES/Descipleship-img.jpg', to: '/ministries/discipleship-ministry' },
  { name: 'Chaplaincy Ministry', desc: 'Hospital visits, home care, and grief counseling, bringing comfort in times of need.', label: '[ chaplaincy ]', delay: 160, img: '/MINISTRIES/chaplaincy1.jpeg', to: '/ministries/chaplaincy-ministry' },
  { name: 'Home Care Ministry', desc: 'Extending care, fellowship, and support to members through home visits and cell groups.', label: '[ home care ]', delay: 0, img: '/MINISTRIES/caregroup1.jpeg', to: '/ministries/home-care-ministry' },
  { name: 'Marriage Care Ministry', desc: 'Strengthening marriages and families through counsel, mentorship, and godly community.', label: '[ marriage ]', delay: 80, img: '/MINISTRIES/marriage2.jpeg', to: '/ministries/marriage-care-ministry' },
  { name: 'Men’s & Young Men’s', desc: 'Raising men of integrity who lead their families and communities with godly character.', label: '[ men ]', delay: 160, img: '/MINISTRIES/men1.jpg', imgPos: 'center 30%', to: '/ministries/mens-young-mens-ministry' },
  { name: 'Prayer & Intercessory', desc: 'A devoted community standing in the gap through prayer for the church and the nations.', label: '[ prayer ]', delay: 0, img: '/MINISTRIES/prayer1.jpeg', imgPos: 'center 30%', to: '/ministries/prayer-intercessory-ministry' },
  { name: 'Women’s Ministry', desc: 'Royal Daughters & Lady of Virtue, empowering women to flourish in faith and purpose.', label: '[ women ]', delay: 80, img: '/MINISTRIES/women1.jpg', imgPos: 'center 30%', to: '/ministries/womens-ministry' },
  { name: 'Hospitality & Welcome', desc: 'Making every guest feel at home with warmth, care, and a genuine welcome.', label: '[ hospitality ]', delay: 160, img: '/welcome-bg.jpeg', imgPos: 'center 30%', to: '/ministries/hospitality-welcome-ministry' },
  { name: 'Media & Communication', desc: 'Sharing the Gospel through media, live streaming, and creative storytelling.', label: '[ media ]', delay: 0, img: '/MINISTRIES/media1.jpeg', to: '/ministries/media-communication-ministry' },
  { name: 'Home Groups', desc: 'Doing life together in smaller communities that pray, study, and grow as one family.', label: '[ groups ]', delay: 80, img: '/MINISTRIES/caregroup2.jpeg' },
]

export default function Ministries() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="ministries" />

      <section style={{ background: 'linear-gradient(180deg,#ffffff,#f2f9fd)', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '76px 26px', textAlign: 'center' }}>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', animation: 'eaUp .6s ease both' }}>
            GET INVOLVED
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
            Our Ministries
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
            Explore the many ways to grow spiritually, connect with others, and serve our community. There&rsquo;s a place for everyone.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '80px 26px 96px' }}>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {ministries.map((m) => (
            <Hover
              key={m.name}
              data-reveal
              data-reveal-delay={m.delay}
              style={{
                background: '#fff',
                border: '1px solid #e7f0f6',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 8px 26px rgba(16,80,120,.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .25s,box-shadow .25s',
              }}
              hoverStyle={cardLift}
            >
              {m.img ? (
                <div role="img" aria-label={m.name} style={{ aspectRatio: '16/9', ...bg(m.img, m.imgPos) }} />
              ) : (
                <div
                  style={{
                    aspectRatio: '16/9',
                    background: 'linear-gradient(135deg,#e8f7fd,#fdecec)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0e9fd6',
                  }}
                >
                  <Icon name="child" size={56} />
                </div>
              )}
              <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', color: '#12384c', margin: '0 0 10px' }}>
                  {m.name}
                </h3>
                <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '14.5px', margin: '0 0 18px', flex: 1 }}>{m.desc}</p>
                <Link to={m.to ?? '/contact'} style={{ color: '#ec1c24', fontWeight: 800, fontSize: '14.5px', textDecoration: 'none' }}>
                  Read more &rarr;
                </Link>
              </div>
            </Hover>
          ))}
        </div>
      </section>

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
            Not sure where you fit? Let&rsquo;s help.
          </h2>
          <p style={{ color: '#e2f4fc', fontSize: '17px', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Reach out and we&rsquo;ll connect you with the right ministry and people.
          </p>
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
            Get Connected
          </Hover>
        </div>
      </section>

      <Footer />
    </div>
  )
}
