import { SharePalLogo } from './SharePalLogo'

export function HeroBanner() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 md:py-8">
      <div 
        className="relative overflow-hidden rounded-2xl flex flex-col md:flex-row items-center justify-center text-center shadow-lg"
        style={{ background: 'linear-gradient(108.8deg, #370068 -3.14%, #6E00D0 100%)', minHeight: '260px' }}
      >
        {/* Left Artwork */}
        <div className="absolute left-0 bottom-0 top-0 w-[45%] md:w-1/3 pointer-events-none flex items-end md:items-center justify-start opacity-30 md:opacity-100">
          <img 
            src="https://images.sharepal.in/super-categories/gaming-left.webp" 
            alt="" 
            className="h-full w-full object-cover md:object-contain object-left-bottom md:object-left p-0"
            aria-hidden="true"
          />
        </div>

        {/* Right Artwork */}
        <div className="absolute right-0 bottom-0 top-0 w-[45%] md:w-1/3 pointer-events-none flex items-end md:items-center justify-end opacity-30 md:opacity-100">
          <img 
            src="https://images.sharepal.in/super-categories/gaming-right.webp" 
            alt="" 
            className="h-full w-full object-cover md:object-contain object-right-bottom md:object-right p-0"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-2xl px-4 py-8 md:py-12 flex flex-col items-center">
          <h1 className="text-[22px] sm:text-3xl md:text-[32px] lg:text-[40px] font-bold text-white mb-3 md:mb-5 leading-tight flex flex-wrap items-center justify-center gap-1.5 md:gap-2 text-shadow-sm">
            <span>Rent the latest gaming gadgets from</span>
            <div className="inline-flex items-center bg-[#5B21B6] rounded px-2 py-1 ml-1" style={{ marginTop: '-4px' }}>
              <SharePalLogo />
            </div>
          </h1>
          <p className="text-sm md:text-lg lg:text-[20px] text-white/90 font-medium mb-6 md:mb-8 text-shadow-sm">
            PS5, Xbox, Oculus VR, Racing Wheel on rent.
          </p>

          {/* Bottom Platform Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-90 mt-2">
            <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm">PLAYSTATION</span>
            <span className="text-white/50 text-xs md:text-sm">•</span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm">XBOX</span>
            <span className="text-white/50 text-xs md:text-sm">•</span>
            <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm">META QUEST</span>
          </div>
        </div>
      </div>
    </div>
  )
}
