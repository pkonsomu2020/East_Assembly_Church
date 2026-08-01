import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon } from '../components/Icon'
import { EventCard } from '../components/EventCard'
import { useMotion } from '../hooks/useMotion'
import { upcomingEvents } from '../data/events'

const cardLift = { transform: 'translateY(-8px)', boxShadow: '0 26px 50px rgba(16,80,120,.14)' }

/** Cover-image background for a photo tile. */
const bg = (src: string, position = 'center'): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: position,
  backgroundRepeat: 'no-repeat',
})

export default function Home() {
  useMotion()
  const events = upcomingEvents().slice(0, 3)

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763' }}>
      <Nav active="home" />

      {/* HERO — banner carousel */}
      <section className="ea-hero-wrap" aria-label="East Assembly service banners">
        <div className="ea-hero">
          <img
            className="ea-hero-slide"
            style={{ animationDelay: '0s' }}
            src="/HERO/EAST%20ASSEMBLY%20HOME%20WEBSITE%20BANNER%20MAIN%20SERVICES.png"
            alt="Worship Services: First Service 8:00 to 9:30 AM, Second Service 10:30 AM to 12:30 PM"
          />
          <img
            className="ea-hero-slide"
            style={{ animationDelay: '-7s' }}
            src="/HERO/EAST%20ASSEMBLY%20HOME%20WEBSITE%20BANNER%20YOUTH%20AND%20TEENS%20SERVICES.png"
            alt="Youth and Teens Services at East Assembly Church"
          />
          <img
            className="ea-hero-slide"
            style={{ animationDelay: '-14s' }}
            src="/HERO/EAST%20ASSEMBLY%20HOME%20WEBSITE%20BANNER%20TUESDAY%20EVENING%20SERVICE.png"
            alt="Tuesday Evening Service at East Assembly Church"
          />
          <div
            style={{
              position: 'absolute',
              bottom: '28px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <span className="ea-dot" style={{ animationDelay: '0s' }} />
            <span className="ea-dot" style={{ animationDelay: '-7s' }} />
            <span className="ea-dot" style={{ animationDelay: '-14s' }} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '96px 26px' }}>
        <div
          className="ea-2col"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'center' }}
        >
          <div data-reveal="left" style={{ position: 'relative' }}>
            <div
              role="img"
              aria-label="East Assembly KAG Buru Buru Church building"
              style={{ borderRadius: '24px', aspectRatio: '4/3', boxShadow: '0 28px 60px rgba(16,80,120,.14)', ...bg('/sanctuary-img.jpg', 'center top') }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-26px',
                right: '-14px',
                background: '#fff',
                border: '1px solid #eaf1f7',
                borderRadius: '18px',
                padding: '20px 24px',
                boxShadow: '0 18px 44px rgba(16,80,120,.14)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <span
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg,#ec1c24,#ff5058)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '24px',
                }}
              >
                <Icon name="heart" size={22} />
              </span>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '19px', color: '#12384c' }}>
                  I care&hellip;
                </div>
                <div style={{ color: '#00adee', fontSize: '14px', fontWeight: 700 }}>We care.</div>
              </div>
            </div>
          </div>
          <div data-reveal="right">
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>
              ABOUT EAST ASSEMBLY
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '42px',
                lineHeight: 1.12,
                color: '#12384c',
                margin: '14px 0 20px',
                letterSpacing: '-.01em',
                textWrap: 'balance',
              }}
            >
              A community passionate about loving God &amp; people
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.72, color: '#5a6772', margin: '0 0 18px' }}>
              East Assembly - KAG Buru Buru Church is a dynamic community of believers who are
              passionate about loving God, loving people, and making a positive impact in our world.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.72, color: '#5a6772', margin: '0 0 30px' }}>
              We foster a welcoming environment where individuals can grow in their faith, build
              meaningful relationships, and discover their God-given purpose.
            </p>
            <div style={{ display: 'flex', gap: '38px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <div>
                <div
                  data-count="14"
                  data-suffix="+"
                  style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', color: '#00adee' }}
                >
                  14+
                </div>
                <div style={{ color: '#6b7885', fontSize: '14px', fontWeight: 600 }}>Ministries</div>
              </div>
              <div>
                <div
                  data-count="5"
                  style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', color: '#ec1c24' }}
                >
                  5
                </div>
                <div style={{ color: '#6b7885', fontSize: '14px', fontWeight: 600 }}>Weekly Services</div>
              </div>
              <div>
                <div
                  data-count="1"
                  style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '36px', color: '#00adee' }}
                >
                  1
                </div>
                <div style={{ color: '#6b7885', fontSize: '14px', fontWeight: 600 }}>Family in Christ</div>
              </div>
            </div>
            <Link to="/about" className="ea-btn-r">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      <section
        style={{
          background: '#f2f9fd',
          padding: '96px 0',
          borderTop: '1px solid #e7f0f6',
          borderBottom: '1px solid #e7f0f6',
        }}
      >
        <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 26px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }} data-reveal>
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>
              OUR MINISTRIES
            </span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '42px',
                margin: '14px 0 16px',
                letterSpacing: '-.01em',
                color: '#12384c',
                textWrap: 'balance',
              }}
            >
              Find your place to grow &amp; serve
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.65, color: '#5a6772', margin: 0 }}>
              From children&rsquo;s programs to adult Bible studies, there&rsquo;s something for
              everyone at East Assembly.
            </p>
          </div>
          <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px' }}>
            {[
              { img: '/youth-ministry.jpg', title: 'Youth Ministry', desc: 'Empowering young hearts with faith, fellowship, and fun. Join us as we grow in Christ together!', delay: '0' },
              { img: '/music-ministry.jpeg', title: 'Music Ministry', desc: 'Bringing heavenly melodies to our worship, glorifying God through harmonious praise.', delay: '120' },
              { img: '/Descipleship-img.jpg', title: 'Discipleship Ministry', desc: 'Growing in faith, knowledge, and love, equipping believers to live out their faith boldly.', delay: '240' },
            ].map((m) => (
              <Hover
                key={m.title}
                as={Link}
                to="/ministries"
                data-reveal
                data-reveal-delay={m.delay}
                style={{
                  textDecoration: 'none',
                  background: '#fff',
                  border: '1px solid #e7f0f6',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  display: 'block',
                  transition: 'transform .25s,box-shadow .25s',
                  boxShadow: '0 8px 26px rgba(16,80,120,.06)',
                }}
                hoverStyle={cardLift}
              >
                <div role="img" aria-label={m.title} style={{ aspectRatio: '16/10', ...bg(m.img) }} />
                <div style={{ padding: '26px' }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
                    {m.title}
                  </h3>
                  <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '15px', margin: '0 0 16px' }}>{m.desc}</p>
                  <span style={{ color: '#ec1c24', fontWeight: 800, fontSize: '14.5px' }}>Read more &rarr;</span>
                </div>
              </Hover>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '46px' }} data-reveal>
            <Link to="/ministries" className="ea-btn-b">View All Ministries</Link>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '96px 26px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
          data-reveal
        >
          <div style={{ maxWidth: '640px' }}>
            <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>WHAT&rsquo;S NEXT</span>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans'",
                fontWeight: 800,
                fontSize: '42px',
                color: '#12384c',
                margin: '14px 0 0',
                letterSpacing: '-.01em',
                textWrap: 'balance',
              }}
            >
              Upcoming Events
            </h2>
          </div>
          <Link to="/events" className="ea-btn-b">View All Events</Link>
        </div>
        {events.length > 0 ? (
          <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px' }}>
            {events.map((e, i) => (
              <div key={e.id} data-reveal data-reveal-delay={i * 120}>
                <EventCard e={e} />
              </div>
            ))}
          </div>
        ) : (
          <div
            data-reveal
            style={{
              background: '#f2f9fd',
              border: '1px solid #e7f0f6',
              borderRadius: '24px',
              padding: '56px 26px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 10px' }}>
              No upcoming events right now
            </h3>
            <p style={{ color: '#6b7885', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
              We don&rsquo;t have any events scheduled at the moment. Please check back soon.
            </p>
          </div>
        )}
      </section>

      {/* CONNECT WITH US */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '96px 26px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>TAKE A STEP</span>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '42px',
              color: '#12384c',
              margin: '14px 0 0',
              letterSpacing: '-.01em',
            }}
          >
            Connect With Us
          </h2>
        </div>
        <div className="ea-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '22px' }}>
          {[
            { to: '/im-new', img: '/decide-img.jpg', title: 'I Have Decided', sub: 'Give your life to Jesus', cta: 'Connect', delay: '0' },
            { to: '/im-new', img: '/welcome-bg.jpeg', title: 'Karibu', sub: 'We’re glad you’re here', cta: 'Connect', delay: '100' },
            { to: '/ministries', img: '/community-img.jpg', title: 'Connect', sub: 'Find a community with us', cta: 'Connect', delay: '200' },
            { to: '/contact', img: '/prayer-img.jpg', title: 'Prayer / Testimony', sub: 'Share with us', cta: 'Share', delay: '300' },
          ].map((c) => (
            <Hover
              key={c.title}
              as={Link}
              to={c.to}
              role="img"
              aria-label={c.title}
              data-reveal
              data-reveal-delay={c.delay}
              style={{
                textDecoration: 'none',
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                display: 'flex',
                alignItems: 'flex-end',
                transition: 'transform .25s',
                ...bg(c.img),
              }}
              hoverStyle={{ transform: 'translateY(-6px)' }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg,transparent 42%,rgba(18,56,76,.9))',
                  zIndex: 1,
                }}
              />
              <div style={{ position: 'relative', zIndex: 2, padding: '24px', color: '#fff' }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '20px', margin: '0 0 6px' }}>
                  {c.title}
                </h3>
                <p style={{ color: '#dbe7f0', fontSize: '14px', margin: '0 0 12px' }}>{c.sub}</p>
                <span style={{ color: '#ff9ea2', fontWeight: 800, fontSize: '14px' }}>{c.cta} &rarr;</span>
              </div>
            </Hover>
          ))}
        </div>
      </section>

      {/* FIRST TIME QUOTE */}
      <section style={{ background: '#f2f9fd', borderTop: '1px solid #e7f0f6', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 26px' }}>
          <div
            className="ea-2col"
            style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', alignItems: 'stretch' }}
          >
            <div
              role="img"
              aria-label="Bishop Pius Tembu, PhD, Senior Pastor"
              data-reveal="left"
              style={{ minHeight: '460px', ...bg('/bishop-tembu.jpeg', 'center 15%') }}
            />
            <div style={{ padding: '76px 56px' }} className="ea-quotepad" data-reveal="right">
              <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>
                IS THIS YOUR FIRST TIME?
              </span>
              <div style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: '72px', color: '#00adee', lineHeight: 1, margin: '6px 0 -12px' }}>
                &ldquo;
              </div>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans'",
                  fontWeight: 600,
                  fontSize: '25px',
                  lineHeight: 1.45,
                  color: '#12384c',
                  margin: '0 0 26px',
                  textWrap: 'pretty',
                }}
              >
                Whether you&rsquo;re new to town, exploring faith, or looking for a church home,
                we&rsquo;re excited to welcome you. Join us for worship this Sunday and discover a
                community where you can belong, grow, and serve.
              </p>
              <div style={{ marginBottom: '30px' }}>
                <div style={{ fontWeight: 800, color: '#12384c', fontFamily: "'Plus Jakarta Sans'" }}>
                  Bishop Pius Tembu, PhD
                </div>
                <div style={{ color: '#6b7885', fontSize: '14px' }}>Senior Pastor</div>
              </div>
              <Link to="/im-new" className="ea-btn-r">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE PLATFORMS */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '88px 26px 96px' }}>
        <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
          <Hover
            as="a"
            href="https://www.youtube.com/@eastassemblychurch4046"
            target="_blank"
            rel="noreferrer"
            data-reveal
            data-reveal-delay="0"
            style={{
              textDecoration: 'none',
              background: '#fff',
              border: '1px solid #e7f0f6',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              boxShadow: '0 8px 24px rgba(16,80,120,.06)',
              transition: 'transform .2s',
            }}
            hoverStyle={{ transform: 'translateY(-4px)' }}
          >
            <span
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '15px',
                background: '#fdecec',
                color: '#ec1c24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                flex: 'none',
              }}
            >
              <Icon name="youtube" size={26} />
            </span>
            <div>
              <div style={{ fontWeight: 800, color: '#12384c', fontFamily: "'Plus Jakarta Sans'" }}>YouTube</div>
              <div style={{ color: '#6b7885', fontSize: '14px' }}>Live every Sunday</div>
            </div>
          </Hover>
          <Hover
            as="a"
            href="https://www.facebook.com/EastAssemblyChurch"
            target="_blank"
            rel="noreferrer"
            data-reveal
            data-reveal-delay="120"
            style={{
              textDecoration: 'none',
              background: '#fff',
              border: '1px solid #e7f0f6',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              boxShadow: '0 8px 24px rgba(16,80,120,.06)',
              transition: 'transform .2s',
            }}
            hoverStyle={{ transform: 'translateY(-4px)' }}
          >
            <span
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '15px',
                background: '#e8f7fd',
                color: '#0e9fd6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: 800,
                flex: 'none',
              }}
            >
              <Icon name="facebook" size={24} />
            </span>
            <div>
              <div style={{ fontWeight: 800, color: '#12384c', fontFamily: "'Plus Jakarta Sans'" }}>Facebook</div>
              <div style={{ color: '#6b7885', fontSize: '14px' }}>Watch our content</div>
            </div>
          </Hover>
          <Hover
            as={Link}
            to="/give"
            data-reveal
            data-reveal-delay="240"
            style={{
              textDecoration: 'none',
              background: '#fff',
              border: '1px solid #e7f0f6',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              boxShadow: '0 8px 24px rgba(16,80,120,.06)',
              transition: 'transform .2s',
            }}
            hoverStyle={{ transform: 'translateY(-4px)' }}
          >
            <span
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '15px',
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
              <div style={{ fontWeight: 800, color: '#12384c', fontFamily: "'Plus Jakarta Sans'" }}>Give Online</div>
              <div style={{ color: '#6b7885', fontSize: '14px' }}>Support the mission</div>
            </div>
          </Hover>
        </div>
      </section>

      <Footer />
    </div>
  )
}
