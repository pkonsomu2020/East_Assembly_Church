import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { EventCardDetailed } from '../components/EventCard'
import { useMotion } from '../hooks/useMotion'
import { allEvents } from '../data/events'

export default function Events() {
  useMotion()
  const events = allEvents()

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="events" />

      {/* HERO */}
      <section style={{ background: '#f2f9fd', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '76px 26px', textAlign: 'center' }}>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px', animation: 'eaUp .3s ease both' }}>
            WHAT&rsquo;S HAPPENING
          </span>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans'",
              fontWeight: 800,
              fontSize: '52px',
              color: '#00adee',
              margin: '14px 0 16px',
              letterSpacing: '-.02em',
              animation: 'eaUp .3s ease .02s both',
            }}
          >
            Church Events
          </h1>
          <p style={{ fontSize: '18px', color: '#5a6772', maxWidth: '640px', margin: '0 auto', lineHeight: 1.65, animation: 'eaUp .3s ease .04s both' }}>
            Conferences, retreats, fellowships, and more. There&rsquo;s always something happening at East
            Assembly.
          </p>
        </div>
      </section>

      {/* ALL EVENTS */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '80px 26px 96px' }}>
        {events.length ? (
          <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px' }}>
            {events.map((e, i) => (
              <div key={e.id} data-reveal data-reveal-delay={(i % 3) * 100}>
                <EventCardDetailed e={e} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto', padding: '40px 0' }} data-reveal>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '26px', color: '#12384c', margin: '0 0 12px' }}>
              No events yet
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7885', lineHeight: 1.6, margin: 0 }}>
              There are no events scheduled at the moment. Please check back soon.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
