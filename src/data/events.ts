/**
 * Church events. Each event's `end` (or `start`) date decides when it is "past".
 *
 * The homepage shows only upcoming events (soonest first); once an event's date
 * has passed it automatically drops off the homepage and is visible only on the
 * /events page. The /events page lists every event.
 *
 * Add the real events to the EVENTS array below.
 */
export interface EventItem {
  id: string
  title: string
  category: string
  /** Theme accent for the badge: brand red '#ec1c24' or brand blue '#00adee'. */
  color: string
  start: string
  end?: string
  dateLabel: string
  time: string
  location: string
  cost?: string
  description: string
  image: string
  /** Registration/details link — an external URL or an in-app route. */
  register: string
}

export const EVENTS: EventItem[] = [
  // Real events go here.
]

/** End-of-day date used to decide whether an event has passed. */
function eventEnd(e: EventItem): number {
  return new Date(`${e.end || e.start}T23:59:59`).getTime()
}

/** Upcoming events (not yet finished), soonest first. */
export function upcomingEvents(now: Date = new Date()): EventItem[] {
  const t = now.getTime()
  return EVENTS.filter((e) => eventEnd(e) >= t).sort((a, b) => a.start.localeCompare(b.start))
}

/** Past events, most recent first. */
export function pastEvents(now: Date = new Date()): EventItem[] {
  const t = now.getTime()
  return EVENTS.filter((e) => eventEnd(e) < t).sort((a, b) => b.start.localeCompare(a.start))
}

/** All events — upcoming first (soonest), then past (most recent). */
export function allEvents(now: Date = new Date()): EventItem[] {
  return [...upcomingEvents(now), ...pastEvents(now)]
}
