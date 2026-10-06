import { useEffect, useState } from 'react'
import { Calendar } from 'lucide-react'

/**
 * FloatingDateCTA — fixed bottom pill that appears after scrolling past the header.
 *
 * Matches the live SharePal site:
 *   - Fixed position: bottom = 5rem + safe-area-inset (above mobile nav)
 *   - Centered horizontally, max-width content
 *   - bg-[#1945E8] (primary-900), border-2 border-[#9EFF00] (secondary-500)
 *   - Text: "Select rental dates to view prices"
 *   - Fades in on scroll down, hidden at top
 *   - On md+ it sits at bottom-10 (40px)
 *
 * On desktop (≥md) this floats at bottom-10 center.
 * On mobile this sits just above the safe area inset bottom.
 */
export function FloatingDateCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling 120px past the top
      setVisible(window.scrollY > 120)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed left-4 right-4 z-[49] mx-auto flex max-w-max justify-center transition-all duration-500 md:bottom-10"
      style={{
        bottom: 'calc(5rem + env(safe-area-inset-bottom))',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(100px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-live="polite"
      aria-hidden={!visible}
    >
      <button
        id="floating-date-cta"
        className="relative rounded-full border-2 border-[#9EFF00] bg-[#1945E8] shadow-lg shadow-[#1945E8]/30 transition-transform active:scale-95"
        aria-label="Select rental dates to view prices"
      >
        <div className="delivery-date flex items-center justify-center gap-2 px-[18px] py-[14px] text-sm font-semibold text-white">
          <Calendar className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          Select rental dates to view prices
        </div>
      </button>
    </div>
  )
}
