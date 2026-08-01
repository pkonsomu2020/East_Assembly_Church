import { type CSSProperties, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, type IconName } from './Icon'
import { type EventItem } from '../data/events'

const bg = (src: string): CSSProperties => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

const accentLight = (color: string) => (color === '#ec1c24' ? '#ff9ea2' : '#7fd0f2')

function Detail({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <span style={{ display: 'flex', gap: '9px', alignItems: 'center' }}>
      <Icon name={icon} size={15} />
      {children}
    </span>
  )
}

function RegisterButton({ e, light }: { e: EventItem; light?: boolean }) {
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    fontWeight: 800,
    fontSize: '14px',
    padding: '11px 22px',
    borderRadius: '100px',
    background: light ? '#fff' : e.color,
    color: light ? e.color : '#fff',
    alignSelf: 'flex-start',
  }
  const label = (
    <>
      More Info <Icon name="play" size={13} />
    </>
  )
  return e.register.startsWith('http') ? (
    <a href={e.register} target="_blank" rel="noreferrer" style={style}>{label}</a>
  ) : (
    <Link to={e.register} style={style}>{label}</Link>
  )
}

/** Poster card with a hover-reveal details panel (used on the homepage). */
export function EventCard({ e }: { e: EventItem }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        borderRadius: '22px',
        overflow: 'hidden',
        aspectRatio: '3/4',
        transition: 'box-shadow .3s, transform .3s',
        transform: hover ? 'translateY(-6px)' : 'none',
        boxShadow: hover ? '0 28px 56px rgba(16,80,120,.22)' : '0 10px 30px rgba(16,80,120,.1)',
        ...bg(e.image),
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 3,
          background: e.color,
          color: '#fff',
          fontWeight: 800,
          fontSize: '12px',
          letterSpacing: '.04em',
          padding: '6px 14px',
          borderRadius: '100px',
        }}
      >
        {e.category}
      </span>

      {/* Always-visible summary */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,transparent 45%,rgba(11,42,61,.92))' }} />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          padding: '22px',
          color: '#fff',
          transition: 'opacity .3s',
          opacity: hover ? 0 : 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cfe4f0', fontWeight: 700, marginBottom: '6px' }}>
          <Icon name="calendar" size={15} />
          {e.dateLabel}
        </div>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '21px', margin: 0, lineHeight: 1.2 }}>{e.title}</h3>
      </div>

      {/* Hover-reveal details */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          background: 'linear-gradient(150deg,rgba(18,56,76,.96),rgba(11,42,61,.97))',
          color: '#fff',
          padding: '26px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          opacity: hover ? 1 : 0,
          transform: hover ? 'none' : 'translateY(14px)',
          transition: 'opacity .3s, transform .3s',
          pointerEvents: hover ? 'auto' : 'none',
        }}
      >
        <span style={{ color: accentLight(e.color), fontWeight: 800, fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '10px' }}>{e.category}</span>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', margin: '0 0 12px', lineHeight: 1.2 }}>{e.title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#dbe7f0', marginBottom: '14px' }}>
          <Detail icon="calendar">{e.dateLabel}</Detail>
          <Detail icon="clock">{e.time}</Detail>
          <Detail icon="map-pin">{e.location}</Detail>
          {e.cost && <Detail icon="landmark">{e.cost}</Detail>}
        </div>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#c9dae6', margin: '0 0 18px' }}>{e.description}</p>
        <RegisterButton e={e} light />
      </div>
    </div>
  )
}

/** Detailed card with everything always visible (used on the /events page). */
export function EventCardDetailed({ e, past }: { e: EventItem; past?: boolean }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e7f0f6',
        borderRadius: '22px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(16,80,120,.08)',
        display: 'flex',
        flexDirection: 'column',
        opacity: past ? 0.75 : 1,
      }}
    >
      <div role="img" aria-label={e.title} style={{ aspectRatio: '16/10', position: 'relative', ...bg(e.image) }}>
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: past ? '#8496a5' : e.color,
            color: '#fff',
            fontWeight: 800,
            fontSize: '12px',
            letterSpacing: '.04em',
            padding: '6px 14px',
            borderRadius: '100px',
          }}
        >
          {past ? 'Past' : e.category}
        </span>
      </div>
      <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '22px', color: '#12384c', margin: '0 0 14px', lineHeight: 1.22 }}>{e.title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14px', color: '#5a6772', marginBottom: '16px' }}>
          <span style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#12384c', fontWeight: 700 }}>
            <span style={{ color: e.color }}><Icon name="calendar" size={16} /></span>{e.dateLabel}
          </span>
          <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: e.color }}><Icon name="clock" size={16} /></span>{e.time}</span>
          <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: e.color }}><Icon name="map-pin" size={16} /></span>{e.location}</span>
          {e.cost && <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: e.color }}><Icon name="landmark" size={16} /></span>{e.cost}</span>}
        </div>
        <p style={{ color: '#5a6772', lineHeight: 1.6, fontSize: '14.5px', margin: '0 0 20px', flex: 1 }}>{e.description}</p>
        {!past && <RegisterButton e={e} />}
      </div>
    </div>
  )
}
