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
    <header className="fixed top-0 z-50 w-full bg-[#4C187C] shadow-[0_2px_10px_rgba(0,0,0,0.1)] h-[84px] flex flex-col justify-center">
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

        {/* Center Date/Location Pill */}
        <div className="flex flex-1 justify-center max-w-[800px] px-8">
          <div className="flex items-center rounded-full bg-white p-1 pl-4 shadow-sm h-[48px] w-full max-w-[700px] justify-between">
            <div className="flex items-center gap-4 text-[13px] font-medium text-neutral-600 flex-1">
              
              {/* Location */}
              <div className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 transition-colors">
                <MapPin className="h-4 w-4 text-neutral-400" />
                <span className="min-w-[70px]">Bangalore</span>
              </div>
              <div className="h-5 w-[1px] bg-neutral-200"></div>

              {/* Delivery Date */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neutral-400" />
                <span className="min-w-[130px]">
                  {rentalDates.start ? `Delivery Date: ${formatDateLabel(rentalDates.start)}` : 'Select Delivery'}
                </span>
              </div>
              <div className="h-5 w-[1px] bg-neutral-200"></div>

              {/* Pickup Date */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-neutral-400" />
                <span className="min-w-[130px]">
                  {rentalDates.end ? `Pickup Date: ${formatDateLabel(rentalDates.end)}` : 'Select Pickup'}
                </span>
              </div>
            </div>

            <button
              id="select-dates-desktop"
              onClick={() => setIsDatePickerOpen(true)}
              className="ml-2 h-[38px] px-6 rounded-full bg-[#111827] text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
            >
              Select
            </button>
          </div>
        </div>

          {/* Icons: Search, Cart, Account */}
          <div className="flex items-center gap-5 text-white">
            <button aria-label="Search" className="hover:text-white/80 transition-colors">
              <Search className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button aria-label="Cart" className="relative hover:text-white/80 transition-colors">
              <ShoppingCart className="h-5 w-5" strokeWidth={2.5} />
              <span className="absolute -top-1.5 -right-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#1945E8] text-[9px] font-bold text-white border border-white">
                0
              </span>
            </button>
            <button aria-label="Account" className="flex items-center gap-2 ml-1 hover:text-white/80 transition-colors">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#400B68]">
                <User className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold tracking-wide">Hi, Login</span>
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
            <button className="flex items-center gap-1 text-sm font-semibold text-white">
              Bangalore
            </button>
            <div className="h-4 w-[1px] bg-white/20"></div>
            <button aria-label="Search" className="text-white hover:text-white/80">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="relative text-white hover:text-white/80">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
