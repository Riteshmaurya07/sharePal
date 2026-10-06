import { useAppContext } from '../context/AppContext'

const SUB_CATEGORIES = [
  { label: 'All', image: 'https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-100-games-with-1-controller/ps5-with-100-games-with-1-controller-on-rent-sharepal-1.webp' },
  { label: 'GTA VI', image: 'https://images.sharepal.in/categories/gaming-consoles/ps5-games/gta-V/gta v.webp' },
  { label: 'PS5 Console', image: 'https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-1-controller/ps5-console-with-1-controller-on-rent-sharepal-1.webp' },
  { label: 'Xbox Console', image: 'https://images.sharepal.in/categories/gaming-consoles/xbox/xbox-series-x/xbox-series-x-on-rent-sharepal-1.webp' },
  { label: 'VR', image: 'https://images.sharepal.in/categories/gaming-consoles/vr-headset/meta-quest-2/meta-quest-2-on-rent-sharepal-1.webp' },
  { label: 'Racing Wheel', image: 'https://images.sharepal.in/categories/gaming-consoles/gaming-accessories/logitech-G29-driving-force-racing-wheel/logitech-g29-racing-wheel-on-rent-sharepal-1.webp' },
  { label: 'PS5 Games', image: 'https://images.sharepal.in/categories/gaming-consoles/ps5-games/ps5-game-spiderman-2/spiderman 2.webp' },
  { label: 'Big Screen Gaming', image: 'https://images.sharepal.in/categories/gaming-consoles/big-screen-gaming/products/ps5-with-2-controllers-with-projector-on-rent+.webp' },
]

export function Sidebar() {
  const { activeCategory, setActiveCategory } = useAppContext()

  return (
    <>
      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide py-3 sticky top-[56px] z-10 bg-[#F7F8F9]">
        <div className="flex px-4 gap-2 w-max">
          {SUB_CATEGORIES.map((cat) => {
            const isActive = cat.label === activeCategory
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border bg-white ${
                  isActive
                    ? 'border-[#1945E8] text-[#1945E8]'
                    : 'border-neutral-200 text-neutral-600 hover:border-[#1945E8]'
                }`}
              >
                <img src={cat.image} alt="" className="w-5 h-5 object-contain" />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Desktop Vertical Sidebar */}
      <aside className="hidden md:block w-[130px] flex-shrink-0 mt-[13px]">
        <div className="sticky top-[150px] bg-transparent">
          <ul className="flex flex-col gap-[2px]">
            {SUB_CATEGORIES.map((cat) => {
              const isActive = cat.label === activeCategory
              return (
                <li key={cat.label}>
                  <button
                    onClick={() => setActiveCategory(cat.label)}
                    className={`group relative flex w-full flex-col items-center justify-center rounded-xl py-3 px-1 text-center transition-all bg-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${
                      isActive
                        ? 'border border-[#1945E8]'
                        : 'border border-transparent'
                    }`}
                  >
                    <div className={`mb-2 flex h-[60px] w-[60px] items-center justify-center rounded-full p-2 transition-colors ${isActive ? 'bg-blue-50' : 'bg-neutral-50 group-hover:bg-blue-50'}`}>
                      <img src={cat.image} alt="" className="h-full w-full object-contain mix-blend-multiply" />
                    </div>
                    <span className={`text-[11px] leading-tight px-1 font-semibold ${isActive ? 'text-[#1945E8]' : 'text-neutral-700 group-hover:text-[#1945E8]'}`}>
                      {cat.label}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[#1945E8]" />
                    )}
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
