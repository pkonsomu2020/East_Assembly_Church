import { type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Hover } from './Hover'

/** Flat, saturated palette shared by the Youth and Teens pages. */
export const Y = {
  red: '#ec1c24',
  blue: '#00adee',
  navy: '#0b2a3d',
  yellow: '#ffd23f',
  white: '#ffffff',
}

/** Thick outline + hard offset shadow, the "sticker card" look. */
export const chunk = (shadow: string = Y.navy, offset = 6): CSSProperties => ({
  border: `3px solid ${Y.navy}`,
  boxShadow: `${offset}px ${offset}px 0 ${shadow}`,
})

/** Tilted label. */
export function Sticker({
  children,
  bg = Y.yellow,
  fg = Y.navy,
  rotate = -4,
  style,
}: {
  children: ReactNode
  bg?: string
  fg?: string
  rotate?: number
  style?: CSSProperties
}) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: bg,
        color: fg,
        border: `3px solid ${Y.navy}`,
        borderRadius: '8px',
        padding: '6px 14px',
        fontFamily: "'Plus Jakarta Sans'",
        fontWeight: 800,
        fontSize: '14px',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

/** Endlessly scrolling text band. */
export function Marquee({ words, bg, fg }: { words: string[]; bg: string; fg: string }) {
  const row = (k: string) => (
    <span key={k} style={{ display: 'inline-flex', alignItems: 'center' }}>
      {words.map((w, i) => (
        <span key={w + i} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span>{w}</span>
          <span style={{ margin: '0 26px', fontSize: '.6em' }}>&#9679;</span>
        </span>
      ))}
    </span>
  )
  return (
    <div
      className="ea-marquee"
      aria-hidden="true"
      style={{
        background: bg,
        color: fg,
        borderTop: `3px solid ${Y.navy}`,
        borderBottom: `3px solid ${Y.navy}`,
        padding: '16px 0',
        fontFamily: "'Plus Jakarta Sans'",
        fontWeight: 800,
        fontSize: '28px',
        letterSpacing: '.04em',
        textTransform: 'uppercase',
      }}
    >
      <div className="ea-marquee-track">
        {row('a')}
        {row('b')}
        {row('c')}
        {row('d')}
      </div>
    </div>
  )
}

/** Solid button used on the Youth / Teens pages. */
export function YBtn({
  to,
  bg,
  fg = Y.white,
  hover,
  children,
}: {
  to: string
  bg: string
  fg?: string
  hover: string
  children: ReactNode
}) {
  return (
    <Hover
      as={Link}
      to={to}
      style={{
        textDecoration: 'none',
        display: 'inline-block',
        background: bg,
        color: fg,
        fontWeight: 800,
        fontSize: '15.5px',
        letterSpacing: '.03em',
        textTransform: 'uppercase',
        padding: '16px 32px',
        borderRadius: '8px',
        transition: 'background .15s',
      }}
      hoverStyle={{ background: hover }}
    >
      {children}
    </Hover>
  )
}
