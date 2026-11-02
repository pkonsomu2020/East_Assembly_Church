import { useLayoutEffect } from 'react'

/**
 * Shared motion system for East Assembly pages: scroll-reveal + count-up.
 *
 * Runs in a layout effect (before paint) so navigating to a page never flashes
 * content in-then-out. Elements already inside the initial viewport are shown
 * immediately with no delay; only elements below the fold animate in on scroll.
 */
export function useMotion(): void {
  useLayoutEffect(() => {
    const q = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel))
    const vh = () => window.innerHeight || document.documentElement.clientHeight

    // --- Scroll reveal ---
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target as HTMLElement
          const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10)
          window.setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'none'
          }, delay)
          io.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    const prep = () => {
      const fresh = q('[data-reveal]').filter((el) => {
        const marked = el as HTMLElement & { __ea?: number }
        if (marked.__ea) return false
        marked.__ea = 1
        return true
      })
      if (!fresh.length) return

      // Read every position first, then write: one layout pass for the whole
      // page instead of a forced layout per element.
      const limit = vh() * 0.9
      const onScreen = fresh.map((el) => {
        const rect = el.getBoundingClientRect()
        return rect.top < limit && rect.bottom > 0
      })

      fresh.forEach((el, i) => {
        // Already on screen when the page loads → show instantly, no hide, no
        // fade, no delay. This is what makes navigation feel immediate.
        if (onScreen[i]) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          return
        }

        // Below the fold → hide now (off-screen, so invisible to the user) and
        // reveal with a subtle animation when scrolled into view.
        const dir = el.getAttribute('data-reveal')
        const off =
          dir === 'left'
            ? 'translateX(-32px)'
            : dir === 'right'
              ? 'translateX(32px)'
              : dir === 'scale'
                ? 'scale(.93)'
                : 'translateY(34px)'
        el.style.opacity = '0'
        el.style.transform = off
        el.style.transition =
          'opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1)'
        io.observe(el)
      })
    }

    // --- Count up ---
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target as HTMLElement
          const target = parseFloat(el.getAttribute('data-count') || '0')
          const suffix = el.getAttribute('data-suffix') || ''
          const dur = 1200
          const t0 = performance.now()
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            el.textContent = Math.round(eased * target) + suffix
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          cio.unobserve(el)
        })
      },
      { threshold: 0.6 },
    )

    const prepCount = () => {
      q('[data-count]').forEach((el) => {
        if ((el as HTMLElement & { __eac?: number }).__eac) return
        ;(el as HTMLElement & { __eac?: number }).__eac = 1
        cio.observe(el)
      })
    }

    prep()
    prepCount()
    const mo = new MutationObserver(() => {
      prep()
      prepCount()
    })
    mo.observe(document.body, { childList: true, subtree: true })

    // Safety: never leave content hidden if an observer misses.
    const safety = window.setTimeout(() => {
      q('[data-reveal]').forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
    }, 3000)

    return () => {
      mo.disconnect()
      io.disconnect()
      cio.disconnect()
      clearTimeout(safety)
    }
  }, [])
}
