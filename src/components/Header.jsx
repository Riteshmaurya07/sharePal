import { Search, ShoppingCart, User, Calendar, MapPin } from 'lucide-react'
import { SharePalLogo } from './SharePalLogo'
import { useAppContext } from '../context/AppContext'

function formatDateLabel(dateString) {
  if (!dateString) return ''
  const d = new Date(dateString)
  const day = d.getDate()
  const suffix = ['th', 'st', 'nd', 'rd'][
    day % 10 > 3 || Math.floor(day % 100 / 10) === 1 ? 0 : day % 10
  ]
  const month = d.toLocaleString('en-US', { month: 'short' })
  return `${day}${suffix} ${month}`
}

export function Header() {
  const { rentalDates, setIsDatePickerOpen } = useAppContext()

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-neutral-100 h-[88px] flex flex-col justify-center">
      {/* ── DESKTOP HEADER ──────────────────────────────────────────────────────── */}
      <div className="mx-auto hidden w-full max-w-[1307px] items-center justify-between px-0 lg:flex h-full">
        {/* Left group: logo + location */}
        <div className="flex items-center gap-12 h-full">
          <a className="h-full flex items-start" href="/" aria-label="SharePal Home">
            <div
              className="flex h-[72px] w-[172px] items-center justify-center rounded-b-[18px] shadow-sm"
              style={{ backgroundColor: '#1A4DE0' }}
            >
              <div className="mt-[-4px]">
                <SharePalLogo />
              </div>
            </div>
          </a>

          {/* Location selector */}
          <button
            className="flex items-center gap-1.5 text-[15px] font-semibold text-neutral-800 hover:text-neutral-600"
            aria-label="Select city"
          >
            <MapPin className="h-4 w-4 text-neutral-400" />
            Bangalore
          </button>
        </div>

        {/* Center/Right controls */}
        <div className="flex items-center gap-8">
          {/* Date Selector */}
          <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 pl-4 shadow-sm h-[44px]">
            <div className="flex items-center gap-4 text-[13px] font-medium text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neutral-400" />
                <span className="min-w-[140px]">
                  {rentalDates.start ? `Delivery Date: ${formatDateLabel(rentalDates.start)}` : 'Select Delivery'}
                </span>
              </div>
              <div className="h-4 w-[1px] bg-neutral-200"></div>
              <div className="flex items-center gap-2">
                <span className="min-w-[140px]">
                  {rentalDates.end ? `Pickup Date: ${formatDateLabel(rentalDates.end)}` : 'Select Pickup'}
                </span>
              </div>
            </div>
            <button
              id="select-dates-desktop"
              onClick={() => setIsDatePickerOpen(true)}
              className="ml-4 h-[36px] px-5 rounded-full bg-[#111827] text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
            >
              Edit
            </button>
          </div>

          {/* Icons: Search, Cart, Account */}
          <div className="flex items-center gap-6 text-neutral-600">
            <button aria-label="Search" className="hover:text-neutral-900 transition-colors">
              <Search className="h-5 w-5" strokeWidth={2} />
            </button>
            <button aria-label="Cart" className="relative hover:text-neutral-900 transition-colors">
              <ShoppingCart className="h-5 w-5" strokeWidth={2} />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                0
              </span>
            </button>
            <button aria-label="Account" className="hover:text-neutral-900 transition-colors">
              <User className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE HEADER ───────────────────────────────────────────────────────── */}
      <div className="flex h-full w-full flex-col justify-between px-4 py-2 lg:hidden">
        {/* Top row: Logo + City + Icons */}
        <div className="flex w-full items-center justify-between h-full">
          {/* Logo pill */}
          <a
            className="flex h-[56px] w-[130px] items-center justify-center rounded-b-xl shadow-sm self-start"
            href="/"
            style={{ backgroundColor: '#1A4DE0' }}
            aria-label="SharePal Home"
          >
            <div className="scale-75 mt-[-4px]">
              <SharePalLogo />
            </div>
          </a>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm font-semibold text-neutral-800">
              Bangalore
            </button>
            <div className="h-4 w-[1px] bg-neutral-200"></div>
            <button aria-label="Search" className="text-neutral-600">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="relative text-neutral-600">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
