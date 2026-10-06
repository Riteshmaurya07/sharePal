import { Gamepad2, Monitor, Joystick, Headset, Car, PlaySquare, MonitorPlay, AlignJustify } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

const SUB_CATEGORIES = [
  { label: 'All', icon: AlignJustify },
  { label: 'GTA VI', icon: Gamepad2 },
  { label: 'PS5 Console', icon: PlaySquare },
  { label: 'Xbox Console', icon: MonitorPlay },
  { label: 'VR', icon: Headset },
  { label: 'Racing Wheel', icon: Car },
  { label: 'PS5 Games', icon: Joystick },
  { label: 'Big Screen Gaming', icon: Monitor },
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
            const Icon = cat.icon
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex flex-col items-center justify-center min-w-[72px] px-2 py-2 rounded-xl text-xs font-semibold transition-colors border ${
                  isActive
                    ? 'border-[#1945E8] bg-blue-50 text-[#1945E8]'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-[#1945E8]'
                }`}
              >
                <Icon className="h-5 w-5 mb-1" strokeWidth={2} />
                <span className="truncate w-full text-center">{cat.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Desktop Vertical Sidebar */}
      <aside className="hidden md:block w-40 flex-shrink-0">
        <div className="sticky top-[100px] bg-white rounded-xl shadow-sm border border-neutral-100 p-3 overflow-hidden">
          <ul className="grid grid-cols-2 gap-2">
            {SUB_CATEGORIES.map((cat) => {
              const isActive = cat.label === activeCategory
              const Icon = cat.icon
              return (
                <li key={cat.label}>
                  <button
                    onClick={() => setActiveCategory(cat.label)}
                    className={`flex h-20 w-full flex-col items-center justify-center rounded-xl p-2 text-center text-xs transition-all border ${
                      isActive
                        ? 'border-[#1945E8] bg-blue-50 text-[#1945E8] font-bold'
                        : 'border-neutral-100 bg-white text-neutral-600 hover:border-[#1945E8] font-medium'
                    }`}
                  >
                    <Icon className="mb-1.5 h-6 w-6" strokeWidth={1.5} />
                    <span className="leading-tight">{cat.label}</span>
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
