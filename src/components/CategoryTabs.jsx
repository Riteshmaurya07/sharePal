const MAIN_CATEGORIES = [
  { label: 'Photography', active: false },
  { label: 'Gaming', active: true },
  { label: 'Outdoor', active: false },
  { label: 'Entertainment', active: false },
]

export function CategoryTabs() {
  return (
    <nav className="w-full bg-white border-b border-neutral-200 shadow-sm h-[48px] flex justify-center">
      <div className="flex w-full items-center justify-start overflow-x-auto scrollbar-hide md:justify-center px-4">
        {MAIN_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.label}
            className="relative flex-shrink-0 cursor-pointer px-5 md:px-8 h-full flex items-center justify-center"
            role="tab"
            id={`main-cat-tab-${idx}`}
            aria-selected={cat.active}
          >
            <button
              className={`relative inline-block whitespace-nowrap transition-colors duration-200
                ${cat.active
                  ? 'text-[15px] font-bold text-[#8A2BE2]'
                  : 'text-[15px] font-medium text-neutral-600 hover:text-neutral-900'
                }`}
            >
              {cat.label}
              {/* Active underline indicator */}
              {cat.active && (
                <div
                  className="absolute -bottom-[13px] left-1/2 mx-auto h-[4px] w-[140%] -translate-x-1/2 rounded-t-md bg-[#8A2BE2]"
                  role="none"
                />
              )}
            </button>
          </div>
        ))}
      </div>
    </nav>
  )
}
