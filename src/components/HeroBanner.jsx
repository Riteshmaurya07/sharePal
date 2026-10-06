import { SharePalLogo } from './SharePalLogo'

/**
 * HeroBanner — the purple gradient hero section.
 *
 * Reference page structure:
 *   - On mobile: block px-2 md:mb-4 md:hidden  → shown only on mobile
 *   - On desktop: visible in the main purple wrapper
 *   - Has rounded-xl on mobile with shadow
 *   - h1: "Gaming Consoles" using Ubuntu bold
 *   - h2/subtitle: "Rent the latest gaming gadgets from [logo]"
 *   - Left-aligned on mobile, center on desktop
 *   - Min height: 150px mobile / 228px desktop
 */
export function HeroBanner() {
  return (
    <>
      {/* Mobile hero card — rounded, shadow */}
      <div className="block px-2 pb-3 md:mb-4 md:hidden">
        <div
          className="relative flex min-h-[150px] w-full items-center justify-center overflow-hidden rounded-xl shadow-lg"
          style={{ background: 'linear-gradient(360deg, #8A2BE2 0%, #4C187C 100%)' }}
          aria-label="Gaming Consoles category banner"
        >
          {/* Decorative element — right side */}
          <div
            className="absolute -bottom-10 -right-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="h-[200px] w-[200px] rounded-full opacity-10 blur-3xl"
              style={{ background: '#9EFF00' }} />
          </div>

          <HeroBannerContent />
        </div>
      </div>

      {/* Desktop hero — full-width inside purple section */}
      <div
        className="relative hidden min-h-[228px] w-full items-center justify-center overflow-hidden lg:rounded-xl md:flex md:mb-4"
        aria-label="Gaming Consoles category banner"
      >
        {/* Decorative glow — right */}
        <div
          className="absolute -bottom-12 -right-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="h-[250px] w-[250px] rounded-full opacity-15 blur-3xl"
            style={{ background: '#9EFF00' }} />
        </div>

        <HeroBannerContent desktop />
      </div>
    </>
  )
}

/**
 * Inner content shared between mobile and desktop hero.
 */
function HeroBannerContent({ desktop = false }) {
  return (
    <div
      className={`relative z-10 flex w-full flex-col gap-1.5 px-4 text-white
        ${desktop ? 'items-center gap-3 text-center' : 'items-start'}
      `}
    >
      {/* h1: category title */}
      <h1
        className="font-bold capitalize leading-tight -tracking-tight drop-shadow-lg"
        style={{
          fontFamily: "'Ubuntu', sans-serif",
          fontSize: desktop ? 'clamp(1.75rem, 3vw, 2.5rem)' : '1.375rem',
        }}
      >
        Gaming Consoles
      </h1>

      {/* Subtitle with inline logo */}
      <div className={`flex flex-col gap-1 ${desktop ? 'items-center' : 'items-start'}`}>
        <h2
          className={`font-bold opacity-100 drop-shadow-md
            ${desktop
              ? 'max-w-[70%] text-center text-base lg:text-lg xl:text-xl'
              : 'w-[75%] text-sm text-start'
            }`}
        >
          Rent the latest gaming gadgets from{' '}
          <span className="mx-1 inline-flex w-14 items-center justify-center align-middle md:w-20">
            <SharePalLogo />
          </span>
        </h2>
      </div>
    </div>
  )
}
