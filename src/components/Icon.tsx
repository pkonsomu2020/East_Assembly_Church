import { type ReactNode } from 'react'

/**
 * Lightweight line-icon set (stroke-based, inherits `currentColor`) used across
 * the site in place of emoji, so every ministry page shares one clean icon style.
 *
 * Usage: <Icon name="users" size={24} />  — colour comes from the parent's `color`.
 */
export type IconName =
  | 'users' | 'user' | 'music' | 'child' | 'cross' | 'home' | 'heart' | 'hand-heart'
  | 'pray' | 'plus-square' | 'video' | 'book' | 'graduation' | 'clock' | 'award'
  | 'rings' | 'coffee' | 'utensils' | 'calendar' | 'mountain' | 'flame' | 'handshake'
  | 'trophy' | 'box' | 'tent' | 'crown' | 'link' | 'gift' | 'laptop' | 'sunrise'
  | 'broadcast' | 'sliders' | 'monitor' | 'camera' | 'megaphone' | 'star' | 'sparkles'
  | 'target' | 'trending-up' | 'check' | 'globe' | 'compass' | 'flower' | 'shield'
  | 'palette' | 'clipboard' | 'play' | 'church' | 'bread' | 'phone' | 'chat'
  | 'landmark' | 'lock' | 'mail' | 'map-pin'
  | 'flag' | 'eye' | 'sun'
  | 'facebook' | 'youtube' | 'instagram'

const P: Record<IconName, ReactNode> = {
  users: (<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  user: (<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>),
  music: (<><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>),
  child: (<><circle cx="12" cy="5" r="2.5" /><path d="M12 8v7" /><path d="M8.5 11h7" /><path d="M9 21l3-4 3 4" /></>),
  cross: (<><path d="M12 3v18" /><path d="M7 8h10" /></>),
  home: (<><path d="M3 10.5 12 4l9 6.5" /><path d="M5 9.5V20h14V9.5" /></>),
  heart: (<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z" />),
  'hand-heart': (<><path d="M11 13.5 8 10.6a1.9 1.9 0 0 1 2.7-2.7l.3.3.3-.3a1.9 1.9 0 0 1 2.7 2.7z" /><path d="M3 15.5a2 2 0 0 1 2-2h2l3 2h3.5a1.5 1.5 0 0 1 0 3H10" /><path d="M3 21h4l3-2" /></>),
  pray: (<><path d="M10 21V11a1.5 1.5 0 0 0-3 0v4l-3 3" /><path d="M14 21V11a1.5 1.5 0 0 1 3 0v4l3 3" /><path d="M10 21h4" /></>),
  'plus-square': (<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M12 8v8" /><path d="M8 12h8" /></>),
  video: (<><path d="M22 8.5 16 12l6 3.5v-7z" /><rect x="2" y="6" width="14" height="12" rx="2" /></>),
  book: (<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>),
  graduation: (<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2.5 9 2.5 12 0v-5" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  award: (<><circle cx="12" cy="9" r="5" /><path d="M8.5 13 7 21l5-3 5 3-1.5-8" /></>),
  rings: (<><circle cx="9" cy="14" r="4.5" /><circle cx="15" cy="14" r="4.5" /><path d="M9 4.5 10.5 7h-3z" /></>),
  coffee: (<><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z" /><path d="M17 9h2a2 2 0 0 1 0 4h-2" /><path d="M7 3v2" /><path d="M11 3v2" /></>),
  utensils: (<><path d="M6 3v7a2 2 0 0 0 4 0V3" /><path d="M8 10v11" /><path d="M17 3c-1.5 0-3 1.7-3 4.5s1.5 4.5 3 4.5v9" /></>),
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 3v4" /><path d="M16 3v4" /></>),
  mountain: (<path d="M3 20 10 6l3.5 6.5L16 9l5 11z" />),
  flame: (<path d="M12 3s5 3.5 5 9a5 5 0 0 1-10 0c0-1.6.8-2.8.8-2.8s.2 1.8 1.8 1.8c1.4 0 1.2-2.4-.4-4.2C11 5.4 12 4 12 3z" />),
  handshake: (<><path d="m11 7 3-2 6 5-2 2" /><path d="M8 12 5 9 3 11l4 4 3-2" /><path d="m10 13 2 2 2.5-2.5" /><path d="m13 16 1.5 1.5" /></>),
  trophy: (<><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v4a5 5 0 0 1-10 0V4z" /><path d="M7 6H4v2a3 3 0 0 0 3 3" /><path d="M17 6h3v2a3 3 0 0 1-3 3" /></>),
  box: (<><path d="M21 8 12 3 3 8v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" /></>),
  tent: (<><path d="M3 20 12 4l9 16" /><path d="M12 4v16" /><path d="M8 20l4-6 4 6" /></>),
  crown: (<path d="M3 8l4 4 5-7 5 7 4-4-2 12H5z" />),
  link: (<><path d="M9 12h6" /><path d="M10 8H8a4 4 0 0 0 0 8h2" /><path d="M14 8h2a4 4 0 0 1 0 8h-2" /></>),
  gift: (<><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M4 12v9h16v-9" /><path d="M12 8v13" /><path d="M12 8S10.5 3.5 8 4.5 9.5 8 12 8z" /><path d="M12 8s1.5-4.5 4-3.5S14.5 8 12 8z" /></>),
  laptop: (<><rect x="4" y="5" width="16" height="11" rx="2" /><path d="M2 20h20" /></>),
  sunrise: (<><path d="M12 3v4" /><path d="m5.5 9.5 1.5 1.5" /><path d="m18.5 9.5-1.5 1.5" /><path d="M8 17a4 4 0 0 1 8 0" /><path d="M2 21h20" /></>),
  broadcast: (<><circle cx="12" cy="12" r="2" /><path d="M6.5 6.5a8 8 0 0 0 0 11" /><path d="M17.5 6.5a8 8 0 0 1 0 11" /><path d="M3.5 3.5a12 12 0 0 0 0 17" /><path d="M20.5 3.5a12 12 0 0 1 0 17" /></>),
  sliders: (<><path d="M4 21v-7" /><path d="M4 10V3" /><path d="M12 21v-9" /><path d="M12 8V3" /><path d="M20 21v-5" /><path d="M20 12V3" /><path d="M1.5 14h5" /><path d="M9.5 8h5" /><path d="M17.5 16h5" /></>),
  monitor: (<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /></>),
  camera: (<><path d="M4 8h3l1.8-2h6.4L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="3.2" /></>),
  megaphone: (<><path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1z" /><path d="M18 8.5a4 4 0 0 1 0 7" /></>),
  star: (<path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.4l6-.8z" />),
  sparkles: (<><path d="m12 3 1.6 4.6L18 9.2l-4.4 1.6L12 15.4l-1.6-4.6L6 9.2l4.4-1.6z" /><path d="m18 14 .8 2.2 2.2.8-2.2.8L18 20l-.8-2.2-2.2-.8 2.2-.8z" /></>),
  flag: (<><path d="M5 21V4" /><path d="M5 4h13l-3 4.5 3 4.5H5" /></>),
  eye: (<><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>),
  sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></>),
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
  'trending-up': (<><path d="M3 17 9 11l4 4 8-8" /><path d="M17 7h4v4" /></>),
  check: (<path d="M20 6 9 17l-5-5" />),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.8 3 2.8 15 0 18c-2.8-3-2.8-15 0-18z" /></>),
  compass: (<><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5.5-5 2 2-5.5z" /></>),
  flower: (<><circle cx="12" cy="12" r="2.2" /><circle cx="12" cy="6.5" r="2.2" /><circle cx="12" cy="17.5" r="2.2" /><circle cx="6.5" cy="12" r="2.2" /><circle cx="17.5" cy="12" r="2.2" /></>),
  shield: (<path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6z" />),
  palette: (<><path d="M12 3a9 9 0 1 0 0 18c1 0 1.6-.9 1.6-1.7 0-1-.9-1.6-.9-2.6s.9-1.5 1.9-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8.2-9-8.2z" /><circle cx="8" cy="10" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="16" cy="10.5" r="1" /></>),
  clipboard: (<><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H9z" /><path d="M9 12h6" /><path d="M9 16h4" /></>),
  play: (<path d="M7 4v16l13-8z" />),
  church: (<><path d="M12 2v6" /><path d="M9 5h6" /><path d="M6 22V11l6-4 6 4v11" /><path d="M10 22v-4a2 2 0 0 1 4 0v4" /></>),
  bread: (<path d="M5 12a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4l-2 8H7z" />),
  phone: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />),
  chat: (<path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />),
  landmark: (<><path d="M3 21h18" /><path d="M5 21V10" /><path d="M9.5 21V10" /><path d="M14.5 21V10" /><path d="M19 21V10" /><path d="M12 3 3.5 8h17z" /></>),
  lock: (<><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>),
  'map-pin': (<><path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  // Brand glyphs — rendered filled (see BRANDS below).
  facebook: (<path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />),
  youtube: (<path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />),
  instagram: (<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.4-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />),
}

const BRANDS = new Set<IconName>(['facebook', 'youtube', 'instagram'])

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const brand = BRANDS.has(name)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={brand ? 'currentColor' : 'none'}
      stroke={brand ? 'none' : 'currentColor'}
      strokeWidth={brand ? 0 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  )
}
