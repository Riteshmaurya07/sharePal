import { useAppContext } from '../context/AppContext'

const SUB_CATEGORIES = [
  { label: 'All' },
  { label: 'GTA VI' },
  { label: 'PS5 Console' },
  { label: 'Xbox Console' },
  { label: 'VR' },
  { label: 'Racing Wheel' },
  { label: 'PS5 Games' },
  { label: 'Big Screen Gaming' },
]

export function Sidebar() {
  const { activeCategory, setActiveCategory } = useAppContext()

  return (
    <>
      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide py-3 border-b border-neutral-100 bg-white sticky top-[84px] z-10">
        <div className="flex px-4 gap-2 w-max">
          {SUB_CATEGORIES.map((cat) => {
            const isActive = cat.label === activeCategory
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  isActive
                    ? 'border-[#1945E8] bg-blue-50 text-[#1945E8]'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Desktop Vertical Sidebar */}
      <aside className="hidden md:block w-44 flex-shrink-0">
        <div className="sticky top-[100px] bg-white rounded-xl shadow-sm border border-neutral-100 p-2 overflow-hidden">
          <ul className="flex flex-col gap-1">
            {SUB_CATEGORIES.map((cat) => {
              const isActive = cat.label === activeCategory
              return (
                <li key={cat.label}>
                  <button
                    onClick={() => setActiveCategory(cat.label)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                      isActive
                        ? 'border-l-4 border-[#1945E8] bg-blue-50 text-[#1945E8] font-bold'
                        : 'border-l-4 border-transparent text-neutral-600 hover:bg-neutral-50 font-medium'
                    }`}
                  >
                    {cat.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}
