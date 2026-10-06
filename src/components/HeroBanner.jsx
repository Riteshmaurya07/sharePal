import { SharePalLogo } from './SharePalLogo'

export function HeroBanner() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 md:py-8">
      <div 
        className="relative overflow-hidden rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-lg"
        style={{ background: 'linear-gradient(135deg, #4C187C 0%, #8A2BE2 50%, #4C187C 100%)' }}
      >
        {/* Abstract Gaming Artwork / Shapes for Left and Right */}
        <div className="absolute top-0 left-0 w-32 h-full opacity-20 pointer-events-none hidden md:block">
          <div className="absolute top-1/4 left-4 w-16 h-16 rounded-full border-4 border-white/40" />
          <div className="absolute bottom-1/4 left-10 w-12 h-12 rotate-45 border-4 border-white/40" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-full opacity-20 pointer-events-none hidden md:block">
          <div className="absolute top-1/3 right-8 w-14 h-14 rounded-full border-4 border-white/40" />
          <div className="absolute bottom-1/3 right-12 w-10 h-10 border-4 border-white/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight flex flex-wrap items-center justify-center gap-2">
            Rent the latest gaming gadgets from 
            <div className="inline-flex items-center bg-[#5B21B6] rounded px-2 py-1">
              <SharePalLogo />
            </div>
          </h1>
          <p className="text-sm md:text-lg text-white/90 font-medium">
            PS5, Xbox, Oculus VR, Racing Wheel on rent.
          </p>
        </div>

        {/* Bottom Platform Logos (simulated with text for fidelity without external images) */}
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-80">
          <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">PlayStation</span>
          <span className="text-white/50">•</span>
          <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">Xbox</span>
          <span className="text-white/50">•</span>
          <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">Oculus</span>
          <span className="text-white/50">•</span>
          <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">Logitech</span>
        </div>
      </div>
    </div>
  )
}
