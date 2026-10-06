import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

const CATEGORIES = [
  { label: 'All', href: '#all' },
  { label: 'PS5 Console', href: '#ps5-console' },
  { label: 'PS5 Games', href: '#ps5-games' },
  { label: 'Racing Wheel', href: '#racing-wheel' },
  { label: 'Xbox Console', href: '#xbox-console' },
  { label: 'VR', href: '#vr' },
  { label: 'Big Screen Gaming', href: '#big-screen' },
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
  const { activeCategory, setActiveCategory } = useAppContext()
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
            const isActive = cat.label === activeCategory
            return (
              <div
                key={cat.label}
                className="relative flex-shrink-0 cursor-pointer px-2 py-2 text-center"
                role="tab"
                id={`category-tab-${idx}`}
                aria-selected={isActive}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveCategory(cat.label)
                  }}
                  className={`relative inline-block w-full whitespace-nowrap px-3 transition-all duration-200
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
                </button>
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
