import { ROUTE_IMAGES } from './data/routeImages'

const done = new Set<string>()

type NetInfo = { saveData?: boolean; effectiveType?: string }
const conn = () => (navigator as Navigator & { connection?: NetInfo }).connection

/** Skip background downloads when the visitor has asked to save data or is on a very slow link. */
const allowed = () => {
  const c = conn()
  return !(c?.saveData || c?.effectiveType === '2g' || c?.effectiveType === 'slow-2g')
}

const normalise = (href: string) => {
  const p = href.replace(/[?#].*$/, '').replace(/\/$/, '')
  return p === '' ? '/' : p
}

/** Fetch one image; resolves when it has loaded (or failed). */
function load(url: string): Promise<void> {
  if (done.has(url)) return Promise.resolve()
  done.add(url)
  return new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = img.onerror = () => resolve()
    img.src = url
  })
}

/** Fetch a route's first-screen images right away (hover / touch). */
export function prefetchRoute(path: string) {
  if (!allowed()) return
  ;(ROUTE_IMAGES[normalise(path)] ?? []).forEach((u) => void load(u))
}

let pausedUntil = 0
const pause = (ms: number) => {
  pausedUntil = Math.max(pausedUntil, Date.now() + ms)
}

const idle = (fn: () => void) => {
  const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
  if (w.requestIdleCallback) w.requestIdleCallback(fn, { timeout: 4000 })
  else window.setTimeout(fn, 1500)
}

/**
 * Warm every route's first-screen images in the background: strictly one image
 * at a time, only while the browser is idle, and it steps aside for a few
 * seconds whenever the visitor clicks or navigates so it never competes with
 * the page they are actually waiting for.
 */
function warmAll() {
  if (!allowed()) return
  const queue = Object.values(ROUTE_IMAGES).flat()
  const step = () => {
    if (!queue.length) return
    if (Date.now() < pausedUntil) return void window.setTimeout(() => idle(step), 800)
    const url = queue.shift() as string
    void load(url).then(() => window.setTimeout(() => idle(step), 250))
  }
  idle(step)
}

export function startPrefetching() {
  const onIntent = (e: Event) => {
    const a = (e.target as HTMLElement | null)?.closest?.('a[href^="/"]') as HTMLAnchorElement | null
    if (a) prefetchRoute(a.getAttribute('href') || '')
  }
  document.addEventListener('mouseover', onIntent, { passive: true })
  document.addEventListener('touchstart', onIntent, { passive: true })
  document.addEventListener('click', () => pause(4000), { capture: true, passive: true })
  window.addEventListener('popstate', () => pause(4000))

  // Give the page a few quiet seconds after load before any background work.
  const start = () => window.setTimeout(warmAll, 2500)
  if (document.readyState === 'complete') start()
  else window.addEventListener('load', start, { once: true })
}
