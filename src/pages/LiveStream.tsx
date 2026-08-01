import { type CSSProperties, useCallback, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Hover } from '../components/Hover'
import { Icon } from '../components/Icon'
import { useMotion } from '../hooks/useMotion'

/* East Assembly Church YouTube channel.
   CHANNEL_ID is the permanent "UC…" id; the uploads playlist is the same id
   with "UC" swapped for "UU". Update CHANNEL_ID if the church changes channels. */
const CHANNEL_ID = 'UCqTLXiXCYBkbmw5VSRol1sw'
const UPLOADS_PLAYLIST = 'UU' + CHANNEL_ID.slice(2)
const CHANNEL_URL = 'https://www.youtube.com/@eastassemblychurch4046'
const FACEBOOK_URL = 'https://www.facebook.com/EastAssemblyChurch'

const LIVE_EMBED = `https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&rel=0`
const PLAYLIST_EMBED = `https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}&rel=0`

/* Optional: set VITE_YOUTUBE_API_KEY (see .env.example) to auto-fetch a grid of
   past services that play inline. Without it, the page falls back to YouTube's
   built-in playlist player (which also plays every past service, on-page). */
const API_KEY = (import.meta.env as Record<string, string | undefined>).VITE_YOUTUBE_API_KEY

interface Video {
  id: string
  title: string
  thumb: string
  date: string
}

const iframeProps = {
  style: { position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 } as CSSProperties,
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  allowFullScreen: true,
}

function Frame({ src, title }: { src: string; title: string }) {
  return (
    <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '24px', overflow: 'hidden', background: '#0b2a3d', boxShadow: '0 30px 66px rgba(16,80,120,.22)' }}>
      <iframe src={src} title={title} {...iframeProps} />
    </div>
  )
}

export default function LiveStream() {
  useMotion()
  const [videos, setVideos] = useState<Video[]>([])
  const [nextToken, setNextToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(Boolean(API_KEY))
  const [failed, setFailed] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  const fmtDate = (iso: string) =>
    iso ? new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''

  // Full archive via the YouTube Data API (needs a key), paginated.
  const fetchPage = useCallback((token?: string) => {
    if (!API_KEY) return
    setLoading(true)
    const url =
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=24&playlistId=${UPLOADS_PLAYLIST}&key=${API_KEY}` +
      (token ? `&pageToken=${token}` : '')
    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('YouTube API error'))))
      .then((data: { nextPageToken?: string; items?: Array<{ snippet: { title: string; publishedAt: string; resourceId: { videoId: string }; thumbnails?: { medium?: { url: string }; high?: { url: string } } } }> }) => {
        const list: Video[] = (data.items || [])
          .filter((it) => it.snippet.thumbnails && it.snippet.title !== 'Private video' && it.snippet.title !== 'Deleted video')
          .map((it) => ({
            id: it.snippet.resourceId.videoId,
            title: it.snippet.title,
            thumb: it.snippet.thumbnails?.high?.url || it.snippet.thumbnails?.medium?.url || '',
            date: fmtDate(it.snippet.publishedAt),
          }))
        setVideos((prev) => (token ? [...prev, ...list] : list))
        setNextToken(data.nextPageToken || null)
        setLoading(false)
      })
      .catch(() => {
        setFailed(true)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (API_KEY) {
      fetchPage()
      return
    }
    // No key: pull the most recent services from the channel's RSS feed
    // (keyless). Read via a CORS-friendly reader since YouTube's feed itself
    // does not send CORS headers.
    let active = true
    setLoading(true)
    const rss = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(rss)}`)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error('feed error'))))
      .then((text) => {
        if (!active) return
        const doc = new DOMParser().parseFromString(text, 'application/xml')
        const list: Video[] = Array.from(doc.getElementsByTagName('entry'))
          .map((en) => {
            const id = en.getElementsByTagName('yt:videoId')[0]?.textContent || ''
            return {
              id,
              title: en.getElementsByTagName('title')[0]?.textContent || 'Service',
              thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
              date: fmtDate(en.getElementsByTagName('published')[0]?.textContent || ''),
            }
          })
          .filter((v) => v.id)
        if (list.length) setVideos(list)
        else setFailed(true)
        setLoading(false)
      })
      .catch(() => {
        if (active) {
          setFailed(true)
          setLoading(false)
        }
      })
    return () => {
      active = false
    }
  }, [fetchPage])

  const showGrid = !failed && (loading || videos.length > 0)
  // The newest video: during a live service this IS the live broadcast (so it
  // plays live here); the rest of the time it's the most recent past service.
  const featured = videos[0]

  return (
    <div style={{ fontFamily: "'Mulish',sans-serif", background: '#fff', color: '#4a5763', paddingTop: '92px' }}>
      <Nav active="home" />

      {/* HERO + LIVE PLAYER */}
      <section style={{ background: 'linear-gradient(180deg,#ffffff,#f2f9fd)', borderBottom: '1px solid #e7f0f6' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '60px 26px 20px', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fdecec',
              border: '1px solid #f6b9bc',
              color: '#ec1c24',
              padding: '8px 16px',
              borderRadius: '100px',
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '.05em',
              animation: 'eaUp .6s ease both',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec1c24', display: 'inline-block', animation: 'eaPulse 1s infinite alternate' }} />
            LIVE SUNDAYS
          </span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '46px', color: '#12384c', margin: '16px 0 10px', letterSpacing: '-.02em', animation: 'eaUp .7s ease .08s both' }}>
            Worship With Us <span style={{ color: '#00adee' }}>Online</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#5a6772', maxWidth: '640px', margin: '0 auto', animation: 'eaUp .7s ease .16s both' }}>
            This player streams live automatically whenever we&rsquo;re on air. At all other times it plays
            our most recent service, so there&rsquo;s always something to watch.
          </p>
        </div>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 26px 30px' }} data-reveal="scale">
          <Frame
            src={featured ? `https://www.youtube.com/embed/${featured.id}?rel=0` : LIVE_EMBED}
            title={featured ? featured.title : 'East Assembly Church live stream'}
          />
          {featured && (
            <p style={{ textAlign: 'center', color: '#5a6772', fontSize: '14.5px', margin: '18px 0 0' }}>
              <span style={{ color: '#12384c', fontWeight: 800 }}>Now showing:</span> {featured.title}
            </p>
          )}
        </div>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 26px 56px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Hover as="a" href={CHANNEL_URL} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', textDecoration: 'none', color: '#ec1c24', fontWeight: 800, padding: '12px 22px', borderRadius: '100px', background: '#fdecec', border: '1.6px solid #f6b9bc' }} hoverStyle={{ background: '#ec1c24', color: '#fff', borderColor: '#ec1c24' }}>
            <Icon name="youtube" size={18} /> Open on YouTube
          </Hover>
          <Hover as="a" href={FACEBOOK_URL} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', textDecoration: 'none', color: '#0e9fd6', fontWeight: 800, padding: '12px 22px', borderRadius: '100px', background: '#e8f7fd', border: '1.6px solid #b9e6f7' }} hoverStyle={{ background: '#00adee', color: '#fff', borderColor: '#00adee' }}>
            <Icon name="facebook" size={18} /> Watch on Facebook
          </Hover>
        </div>
      </section>

      {/* PAST SERVICES */}
      <section style={{ maxWidth: '1260px', margin: '0 auto', padding: '80px 26px 96px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px' }} data-reveal>
          <span style={{ color: '#ec1c24', fontWeight: 800, letterSpacing: '.14em', fontSize: '13px' }}>ON DEMAND</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '38px', color: '#12384c', margin: '12px 0 12px', letterSpacing: '-.01em' }}>
            Past services
          </h2>
          <p style={{ fontSize: '16px', color: '#5a6772', lineHeight: 1.6, margin: 0 }}>
            Every service is saved here automatically. Tap any one to play it right here on the page.
          </p>
        </div>

        {showGrid ? (
          <>
            <div className="ea-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px' }}>
              {videos.slice(1).map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: '#fff',
                    border: '1px solid #e7f0f6',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 26px rgba(16,80,120,.06)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/9', background: '#0b2a3d' }}>
                    {activeId === v.id ? (
                      <iframe src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`} title={v.title} {...iframeProps} />
                    ) : (
                      <Hover
                        as="button"
                        onClick={() => setActiveId(v.id)}
                        aria-label={`Play ${v.title}`}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          padding: 0,
                          border: 0,
                          cursor: 'pointer',
                          backgroundImage: `url(${v.thumb})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        hoverStyle={{ filter: 'brightness(.9)' }}
                      >
                        <span style={{ width: '58px', height: '58px', borderRadius: '50%', background: 'rgba(236,28,36,.94)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 22px rgba(236,28,36,.45)' }}>
                          <Icon name="play" size={24} />
                        </span>
                      </Hover>
                    )}
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <div style={{ color: '#8496a5', fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>{v.date}</div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '15.5px', color: '#12384c', margin: 0, lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {v.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {loading && <span style={{ color: '#8496a5', fontWeight: 700, fontSize: '15px' }}>Loading services&hellip;</span>}
              {!loading && API_KEY && nextToken && (
                <Hover
                  as="button"
                  onClick={() => fetchPage(nextToken)}
                  style={{ background: '#e8f7fd', color: '#0e9fd6', fontWeight: 800, border: '1.7px solid #b9e6f7', borderRadius: '100px', padding: '14px 34px', cursor: 'pointer', fontFamily: "'Mulish',sans-serif", fontSize: '15px' }}
                  hoverStyle={{ background: '#00adee', color: '#fff', borderColor: '#00adee' }}
                >
                  Load more services
                </Hover>
              )}
              <Hover
                as="a"
                href={`${CHANNEL_URL}/videos`}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', textDecoration: 'none', background: '#fdecec', color: '#ec1c24', fontWeight: 800, border: '1.7px solid #f6b9bc', borderRadius: '100px', padding: '14px 30px' }}
                hoverStyle={{ background: '#ec1c24', color: '#fff', borderColor: '#ec1c24' }}
              >
                <Icon name="youtube" size={18} /> View all on YouTube
              </Hover>
            </div>
          </>
        ) : (
          <div data-reveal="scale" style={{ maxWidth: '1040px', margin: '0 auto' }}>
            <Frame src={PLAYLIST_EMBED} title="East Assembly Church past services" />
            <p style={{ textAlign: 'center', color: '#8496a5', fontSize: '14px', margin: '18px 0 0' }}>
              Use the playlist controls above to browse and play every past service, or{' '}
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer" style={{ color: '#0e9fd6', fontWeight: 700 }}>
                view them all on YouTube
              </a>
              .
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
