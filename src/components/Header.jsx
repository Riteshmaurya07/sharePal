import { MapPin, ChevronDown, Search, ShoppingCart, Calendar, User } from 'lucide-react'
import { SharePalLogo } from './SharePalLogo'
import { useAppContext } from '../context/AppContext'

function formatDateShort(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
}

/**
 * Header — sticky top navigation matching SharePal's purple header exactly.
 *
 * Desktop layout (≥lg):
 *   [Logo pill] ←gap-28→ [City | Delivery | Pickup | Select] ←flex-1→ [Search] [Cart] [Profile]
 *
 * Mobile layout (<lg):
 *   Row 1: [Logo pill]  [City badge] [Profile icon]
 *   Row 2: [📅 Select Rental Dates ................... Select▶]
 *
 * The header is `h-max` (auto height) and uses `flex-col`. Main content
 * needs top padding of ~96px mobile / ~84px desktop to clear it.
 */
export function Header() {
  const { rentalDates, setIsDatePickerOpen } = useAppContext()
  const displayStart = formatDateShort(rentalDates.start) || 'Delivery Date'
  const displayEnd = formatDateShort(rentalDates.end) || 'Pickup Date'

  return (
    <header
      id="site-header"
      className="fixed left-0 right-0 top-0 z-50 flex h-max w-full flex-col items-center justify-center gap-1 overflow-hidden pb-3 pt-[env(safe-area-inset-top)] transition-all duration-500 md:pb-4 lg:flex-row"
      style={{ backgroundColor: '#4C187C' }}
      role="banner"
    >
      {/* ── DESKTOP ROW (≥lg) ─────────────────────────────────────── */}
      <div className="container mx-auto hidden w-full max-w-7xl items-end justify-between gap-1 px-4 transition-all lg:flex">

        {/* Left group: logo */}
        <div className="flex items-end justify-start gap-28">
          <a className="h-full flex-1" href="#" aria-label="SharePal Home">
            <div
              className="flex h-[68px] w-40 flex-col items-center justify-end gap-1 rounded-bl-2xl rounded-br-2xl p-3 pt-[18px] shadow-sm"
              style={{ backgroundColor: '#5B21B6' }}
            >
              <div className="flex items-center justify-center">
                <SharePalLogo />
              </div>
            </div>
          </a>
        </div>

        {/* Middle: date picker pill */}
        <div className="relative flex items-center justify-center gap-2 rounded-full border-2 bg-white border-[#8A2BE2]">
          {/* City */}
          <button
            type="button"
            id="city-selector-desktop"
            className="city flex items-center justify-center gap-1 rounded-l-full bg-neutral-200 p-1.5 px-[10px] py-[6px] text-sm font-semibold text-[#1945E8] hover:bg-neutral-300 transition-colors"
            aria-label="Select city"
          >
            <MapPin className="w-5 h-5" />
            <span>Bangalore</span>
            <ChevronDown className="h-4 w-4 font-bold" />
          </button>

          {/* Delivery date */}
          <div
            id="delivery-date-desktop"
            className="flex cursor-pointer items-center justify-center gap-2 bg-white text-neutral-700 hover:text-neutral-900 transition-colors"
            onClick={() => setIsDatePickerOpen(true)}
            aria-label="Edit Dates"
            role="button"
            tabIndex={0}
          >
            <div className="delivery-date flex items-center justify-center gap-2 text-sm font-semibold">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {displayStart}
            </div>
            <span className="h-5 w-px bg-neutral-200 mx-1" />
            <div className="pickup-date flex items-center justify-center gap-2 text-sm font-semibold">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {displayEnd}
            </div>
          </div>

          {/* Select CTA */}
          <button
            id="select-dates-desktop"
            onClick={() => setIsDatePickerOpen(true)}
            className="inline-flex h-full items-center justify-center gap-1 rounded-full bg-[#1945E8] px-3 py-[8px] text-sm font-semibold text-white hover:opacity-90 active:opacity-75 transition-opacity"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span className="pr-1 font-semibold leading-5 tracking-wide">
              {rentalDates.start ? 'Edit' : 'Select'}
            </span>
          </button>
        </div>

        {/* Right: search, cart, profile */}
        <div className="right flex items-end justify-end gap-3 text-white transition-colors duration-300">
          <button
            id="search-desktop"
            className="relative flex h-11 w-11 items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Search"
          >
            <Search className="h-7 w-7" />
          </button>

          <button
            id="cart-desktop"
            className="relative flex h-11 w-11 items-center justify-center rounded-full p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-7 w-7" />
          </button>

          <div className="profile flex cursor-pointer items-center justify-end gap-3">
            <button
              id="profile-desktop"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-[#8A2BE2] bg-white p-0.5 text-neutral-900 hover:bg-gray-200 transition-colors"
              aria-label="Profile"
            >
              <User className="h-6 w-6" />
            </button>
            <span className="text-sm font-medium text-white">Hi, Login</span>
          </div>
        </div>
      </div>

      {/* ── MOBILE ROW (<lg) ──────────────────────────────────────── */}
      <div className="mobile container mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-4 lg:hidden">

        {/* Row 1: Logo + City + Profile */}
        <div className="flex h-full w-full items-center justify-between gap-1">
          {/* Logo pill */}
          <a
            className="logo flex h-10 flex-col items-center justify-end gap-1 rounded-bl-xl rounded-br-xl px-3 pb-1 pt-3"
            href="#"
            style={{ backgroundColor: '#5B21B6' }}
            aria-label="SharePal Home"
          >
            <div className="flex w-full max-w-28 items-center justify-center">
              <SharePalLogo />
            </div>
          </a>

          {/* Right: city + profile */}
          <div className="flex w-full items-center justify-end gap-1.5 pt-1.5 md:gap-4 text-gray-900">
            {/* City selector */}
            <button
              type="button"
              id="city-selector-mobile"
              className="city flex items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium text-white shadow-md bg-[#8A2BE2] border-[#8A2BE2]"
              aria-label="Select city"
            >
              <MapPin className="w-4 h-4 fill-white text-white" />
              <span>Bangalore</span>
              <ChevronDown className="w-3 h-3 font-bold" />
            </button>

            {/* Profile icon */}
            <div className="profile flex items-center justify-center gap-1 p-0">
              <button
                id="profile-mobile"
                className="flex h-8 min-h-8 w-8 min-w-8 cursor-pointer items-center justify-center rounded-full border-2 border-neutral-200 bg-neutral-900 p-0.5 text-white hover:bg-neutral-950 transition-colors"
                aria-label="Profile"
              >
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Date selector bar */}
        <div 
          className="flex h-[34px] w-full cursor-pointer items-center justify-between gap-1 rounded-full border-2 bg-white border-[#8A2BE2]"
          onClick={() => setIsDatePickerOpen(true)}
          role="button"
          tabIndex={0}
        >
          <div className="flex w-max items-center justify-center gap-2 rounded-full px-2 text-sm">
            <div className="delivery-date flex items-center justify-center gap-1 px-0 text-xs font-semibold">
              <Calendar className="mx-1 w-4 h-4" aria-hidden="true" />
              <span className="text-xs text-neutral-700">
                {rentalDates.start ? `${displayStart} - ${displayEnd}` : 'Select Rental Dates'}
              </span>
            </div>
          </div>
          <button
            id="select-dates-mobile"
            className="inline-flex h-full items-center justify-center gap-1 rounded-full bg-[#1945E8] px-2 py-[6px] pr-3 text-xs font-semibold text-white hover:opacity-90 active:opacity-75 transition-opacity"
            aria-label="Select rental dates"
          >
            <Calendar className="h-3 w-3" aria-hidden="true" />
            {rentalDates.start ? 'Edit' : 'Select'}
          </button>
        </div>
      </div>
    </header>
  )
}
