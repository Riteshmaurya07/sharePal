import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MAIN_CATEGORIES = [
  { label: 'Photography', active: false },
  { label: 'Gaming', active: true },
  { label: 'Outdoor', active: false },
  { label: 'Entertainment', active: false },
]

export function CategoryTabs() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 160, behavior: 'smooth' })
  }

  return (
    <nav className="w-full bg-white border-b border-neutral-200">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        
        {/* Left arrow — mobile only */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/90 shadow-sm md:hidden"
          aria-label="Scroll categories left"
          tabIndex={-1}
        >
          <ChevronLeft className="h-5 w-5 text-neutral-600" />
        </button>

        {/* Scrollable tabs */}
        <div
          ref={scrollRef}
          className="flex w-full items-center overflow-x-auto scrollbar-hide py-2"
          role="tablist"
          aria-label="Main categories"
        >
          {MAIN_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.label}
              className="relative flex-shrink-0 cursor-pointer px-4 sm:px-6 text-center"
              role="tab"
              id={`main-cat-tab-${idx}`}
              aria-selected={cat.active}
            >
              <button
                className={`relative inline-block w-full whitespace-nowrap pb-2 transition-colors duration-200
                  ${cat.active
                    ? 'text-sm font-bold text-[#8A2BE2]'
                    : 'text-sm font-medium text-neutral-500 hover:text-neutral-900'
                  }`}
              >
                {cat.label}
                {/* Active underline indicator */}
                {cat.active && (
                  <div
                    className="absolute -bottom-2 left-1/2 mx-auto h-[3px] w-full -translate-x-1/2 rounded-t-md bg-[#8A2BE2]"
                    role="none"
                  />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Right arrow — mobile only */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/90 shadow-sm md:hidden"
          aria-label="Scroll categories right"
          tabIndex={-1}
        >
          <ChevronRight className="h-5 w-5 text-neutral-600" />
        </button>
      </div>
    </nav>
  )
}
