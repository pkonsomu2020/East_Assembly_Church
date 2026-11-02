import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'
import { YBtn } from '../components/YouthKit'

const RED = '#ec1c24'
const BLUE = '#00adee'
const NAVY = '#12384c'
const TABS = [RED, BLUE, NAVY]

const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

/** A snapshot-style print: white border, soft natural shadow. */
const print = (rotate: number): CSSProperties => ({
  background: '#fff',
  padding: '8px',
  borderRadius: '4px',
  boxShadow: '0 14px 30px rgba(11,42,61,.2)',
  transform: `rotate(${rotate}deg)`,
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
  { name: 'Youth Ministry', desc: 'Empowering young hearts with faith, fellowship, and fun. Join us as we grow in Christ together!', label: '[ youth ]', delay: 0, img: '/thumbs/youth-img4.jpg', to: '/ministries/youth-ministry' },
  { name: 'Music Ministry', desc: 'Bringing heavenly melodies to our worship, our Music Ministry glorifies God through harmonious praise.', label: '[ music ]', delay: 80, img: '/thumbs/music-min1.jpeg', imgPos: 'center 35%', to: '/ministries/music-ministry' },
  { name: 'Teens Ministry', desc: 'Empowering teens to live boldly for Christ. Providing a place to grow, connect, and impact the world.', label: '[ teens ]', delay: 160, img: '/thumbs/teens3.jpg', to: '/ministries/teens-ministry' },
  { name: 'Children’s Ministry', desc: 'Nurturing young hearts to know and love Jesus. Providing a safe and fun environment for kids to grow in faith.', label: '[ children ]', delay: 0, to: '/ministries/childrens-ministry' },
  { name: 'Discipleship Ministry', desc: 'Growing in faith, knowledge, and love. Our Discipleship Ministry equips believers to live out their faith boldly.', label: '[ discipleship ]', delay: 80, img: '/thumbs/Descipleship-img.jpg', to: '/ministries/discipleship-ministry' },
  { name: 'Chaplaincy Ministry', desc: 'Bringing comfort, hope, and spiritual support. Serving those in need with compassion and grace.', label: '[ chaplaincy ]', delay: 160, img: '/thumbs/chaplaincy1.jpeg', to: '/ministries/chaplaincy-ministry' },
  { name: 'Home Care Ministry', desc: 'Bringing Christ’s love and care to your doorstep. Offering support and companionship to those in need.', label: '[ home care ]', delay: 0, img: '/thumbs/caregroup1.jpeg', to: '/ministries/home-care-ministry' },
  { name: 'Marriage Care Ministry', desc: 'Strengthening marriages with love and wisdom. Providing support and guidance for couples.', label: '[ marriage ]', delay: 80, img: '/thumbs/marriage2.jpeg', to: '/ministries/marriage-care-ministry' },
  { name: 'Men’s & Young Men’s', desc: 'Empowering men and young men to follow Jesus. Equipping and inspiring growth in faith and leadership.', label: '[ men ]', delay: 160, img: '/thumbs/men1.jpg', imgPos: 'center 30%', to: '/ministries/mens-young-mens-ministry' },
  { name: 'Prayer & Intercessory', desc: 'Connecting hearts to God through prayer. Dedicated to seeking God’s will and power.', label: '[ prayer ]', delay: 0, img: '/thumbs/prayer1.jpeg', imgPos: 'center 30%', to: '/ministries/prayer-intercessory-ministry' },
  { name: 'Women’s Ministry (Royal Daughters / Lady of Virtue)', desc: 'Royal Daughters / Lady of Virtue. Nurturing women in their journey with Jesus. Our Women’s Ministry provides support, fellowship, and spiritual growth opportunities.', label: '[ women ]', delay: 80, img: '/thumbs/women1.jpg', imgPos: 'center 30%', to: '/ministries/womens-ministry' },
  { name: 'Hospitality & Welcome', desc: 'Welcoming all with open arms. Our Hospitality Ministry creates a warm and inviting atmosphere for everyone.', label: '[ hospitality ]', delay: 160, img: '/thumbs/welcome-bg.jpeg', imgPos: 'center 30%', to: '/ministries/hospitality-welcome-ministry' },
  { name: 'Media & Communication', desc: 'Enhancing worship experiences through technology. Managing audio, visual systems, and social media to connect and inspire.', label: '[ media ]', delay: 0, img: '/thumbs/media1.jpeg', to: '/ministries/media-communication-ministry' },
]

export default function Ministries() {
  useMotion()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="ministries" />

      {/* HEADER */}
      <section style={{ background: '#f2f9fd', overflow: 'hidden' }}>
        <div
          className="ea-2col"
          style={{ maxWidth: '1260px', margin: '0 auto', padding: '70px 26px 80px', display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: '40px', alignItems: 'center' }}
        >
          <div>
            <span style={{ color: RED, fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', animation: 'eaUp .3s ease both', display: 'inline-block' }}>
              SERVING, GROWING, AND IMPACTING TOGETHER
            </span>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: 'clamp(38px, 5.4vw, 70px)',
                color: NAVY,
                margin: '16px 0 20px',
                letterSpacing: '-.03em',
                lineHeight: 1.02,
                textWrap: 'balance',
                animation: 'eaUp .3s ease .02s both',
              }}
            >
              Ministries at <span style={{ color: BLUE }}>East Assembly</span> Church
            </h1>
            <p style={{ fontSize: '18px', color: '#5a6772', maxWidth: '600px', margin: 0, lineHeight: 1.7, animation: 'eaUp .3s ease .04s both' }}>
              Explore the diverse ministries at East Assembly Church, each offering unique opportunities for service, growth, and community impact. Discover where you can plug in and make a difference!
            </p>
          </div>
          <div className="ea-hide-md" style={{ position: 'relative', height: '340px', animation: 'eaUp .3s ease .03s both' }} aria-hidden="true">
            <div style={{ position: 'absolute', left: '2%', top: '8%', width: '52%', ...print(-6) }}>
              <div style={{ aspectRatio: '4/5', ...bg('/thumbs/youth-img4.jpg') }} />
            </div>
            <div style={{ position: 'absolute', right: '0', top: '0', width: '50%', ...print(5) }}>
              <div style={{ aspectRatio: '1', ...bg('/thumbs/music-min1.jpeg', 'center 35%') }} />
            </div>
            <div style={{ position: 'absolute', right: '10%', bottom: '0', width: '44%', ...print(-3) }}>
              <div style={{ aspectRatio: '4/3', ...bg('/thumbs/men1.jpg', 'center 30%') }} />
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '90px 26px 100px' }}>
        <div className="ea-3col ea-mgrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '40px 28px', alignItems: 'start' }}>
          {ministries.map((m, i) => {
            const tab = TABS[i % 3]
            return (
              <div key={m.name} data-reveal data-reveal-delay={m.delay}>
                <div className="ea-mcard" style={{ background: '#fff', border: '1px solid #e3edf4', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 10px 26px rgba(16,80,120,.08)' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4 / 3' }}>
                    {m.img ? (
                      <div className="ea-mimg" role="img" aria-label={m.name} style={{ position: 'absolute', inset: 0, ...bg(m.img, m.imgPos) }} />
                    ) : (
                      <div style={{ position: 'absolute', inset: 0, background: '#ffd23f', color: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="child" size={72} />
                      </div>
                    )}
                    <span
                      className="ea-mtab"
                      style={{ position: 'absolute', left: 0, bottom: 0, background: tab, color: '#fff', fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '15px', letterSpacing: '.08em', padding: '8px 16px' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div style={{ padding: '24px 24px 26px' }}>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '21px', lineHeight: 1.2, color: NAVY, margin: '0 0 10px' }}>{m.name}</h3>
                    <p style={{ color: '#5a6772', lineHeight: 1.65, fontSize: '15px', margin: '0 0 20px' }}>{m.desc}</p>
                    <Hover
                      as={Link}
                      to={m.to ?? '/contact'}
                      style={{ display: 'inline-block', textDecoration: 'none', background: tab, color: '#fff', fontWeight: 800, fontSize: '13.5px', letterSpacing: '.04em', textTransform: 'uppercase', padding: '11px 20px', borderRadius: '4px', transition: 'opacity .15s' }}
                      hoverStyle={{ opacity: 0.85 }}
                    >
                      Read more &rarr;
                    </Hover>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 26px 100px' }}>
        <div data-reveal="scale" style={{ maxWidth: '1000px', margin: '0 auto', background: BLUE, color: '#fff', borderRadius: '8px', padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-.02em', margin: '0 0 14px', textWrap: 'balance' }}>
            Not sure where you fit? Let&rsquo;s help.
          </h2>
          <p style={{ fontSize: '18px', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.65 }}>
            Reach out and we&rsquo;ll connect you with the right ministry and people.
          </p>
          <YBtn to="/contact" bg="#fff" fg="#0b7bb0" hover="#e8f7fd">Get Connected</YBtn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
