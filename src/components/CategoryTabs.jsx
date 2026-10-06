import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CATEGORIES = [
  { label: 'Photography', href: '#photography' },
  { label: 'Gaming', href: '#gaming' },
  { label: 'Outdoor', href: '#outdoor' },
  { label: 'Entertainment', href: '#entertainment' },
]

/**
 * CategoryTabs — horizontal scrollable category navigator.
 *
 * - On mobile (<md): transparent bg, white text, left/right scroll arrows
 * - On desktop (≥md): bg-neutral-150, neutral text, active tab has purple underline
 * - Active tab is always "Gaming" (index 1) for this page
 * - The sticky offset accounts for the fixed header height:
 *     mobile header ≈ 88px, desktop header ≈ 84px
 */
export function CategoryTabs() {
  const [activeIdx] = useState(1) // Gaming is always active on this page
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 160, behavior: 'smooth' })
  }

  return (
    <nav
      className="sticky z-20 py-1 transition-all duration-300 bg-transparent md:bg-neutral-150 md:mx-0 md:w-full"
      style={{ top: 0 }}
      aria-label="Product categories"
    >
      <div className="relative mx-auto w-full max-w-3xl px-8">

        {/* Left arrow — mobile only */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-1 top-1/2 z-10 flex h-6 w-7 -translate-y-1/2 items-center justify-center rounded-full border-none bg-transparent text-white/50 hover:bg-[#1945E8] hover:text-white transition-colors md:hidden"
          aria-label="Scroll categories left"
          tabIndex={-1}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Scrollable tabs */}
        <div
          ref={scrollRef}
          className="flex w-full items-center overflow-x-auto scrollbar-hide"
          role="tablist"
          aria-label="Product category tabs"
        >
          {CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeIdx
            return (
              <div
                key={cat.label}
                className="relative flex-shrink-0 basis-[40%] cursor-pointer px-2 py-2 text-center sm:basis-1/2 md:basis-1/3 md:px-4 lg:basis-1/4"
                role="tab"
                id={`category-tab-${idx}`}
                aria-selected={isActive}
              >
                <a
                  href={cat.href}
                  className={`relative inline-block w-full max-w-44 px-3 transition-all duration-200
                    ${isActive
                      ? 'text-sm font-bold text-white md:text-neutral-900'
                      : 'text-sm font-medium text-white/70 hover:text-white md:text-neutral-500 md:hover:text-neutral-900'
                    }`}
                >
                  {cat.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <div
                      className="absolute left-1/2 mx-auto mt-2 h-[2px] w-full -translate-x-1/2 rounded-full md:w-10/12 bg-[#8A2BE2]"
                      role="none"
                    />
                  )}
                </a>
              </div>
            )
          })}
        </div>

        {/* Right arrow — mobile only */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-1 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-none bg-transparent text-white/50 hover:bg-[#1945E8] hover:text-white transition-colors md:hidden"
          aria-label="Scroll categories right"
          tabIndex={-1}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  )
}
