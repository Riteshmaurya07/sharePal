import { SharePalLogo } from './SharePalLogo'

export function HeroBanner() {
  return (
    <div className="relative w-full h-auto md:h-[246px] rounded-[16px] overflow-hidden flex flex-col items-center justify-center shadow-md bg-[#4c187c]" style={{ background: 'linear-gradient(90deg, #370068 0%, #6E00D0 50%, #370068 100%)' }}>
      
      {/* Left Artwork */}
      <div className="absolute left-0 top-0 bottom-0 w-[45%] md:w-[22%] pointer-events-none flex items-center justify-start opacity-20 md:opacity-100 mix-blend-screen md:mix-blend-normal">
        <img 
          src="https://images.sharepal.in/super-categories/gaming-left.webp" 
          alt="" 
          className="h-[80%] md:h-[90%] w-full object-contain object-left-center p-0"
          aria-hidden="true"
        />
      </div>

      {/* Right Artwork */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] md:w-[24%] pointer-events-none flex items-center justify-end opacity-20 md:opacity-100 mix-blend-screen md:mix-blend-normal">
        <img 
          src="https://images.sharepal.in/super-categories/gaming-right.webp" 
          alt="" 
          className="h-[85%] md:h-[95%] w-full object-contain object-right-center p-0"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[700px] px-4 py-8 md:py-0 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-[42px] font-bold text-white mb-2 leading-none text-shadow-sm">
          Gaming Consoles
        </h1>
        
        <h2 className="text-sm md:text-[20px] text-white/95 font-semibold mb-6 leading-relaxed flex flex-wrap items-center justify-center gap-[6px] text-shadow-sm max-w-lg md:max-w-none">
          <span>Rent the latest gaming gadgets from</span>
          <div className="inline-flex items-center bg-[#5B21B6] rounded px-1.5 py-[3px] shadow-sm" style={{ marginTop: '-2px' }}>
            <div className="scale-75 md:scale-90 origin-center -mx-2 -my-2">
              <SharePalLogo />
            </div>
          </div>
          <span>PS5, Xbox, Oculus VR, Racing Wheel on rent.</span>
        </h2>

        {/* Bottom Platform Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-90 mt-2">
          {/* PlayStation */}
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M12,0.8L1.6,6.8L12,12.8L22.4,6.8L12,0.8z M12,14.6L1.6,8.6v6l10.4,6l10.4-6v-6L12,14.6z"/>
            </svg>
            <span className="text-white font-bold tracking-[0.05em] uppercase text-xs md:text-[14px]">PlayStation</span>
          </div>
          
          <span className="text-white/40 text-sm hidden md:inline">•</span>
          
          {/* Xbox */}
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
              <path d="M7 7l10 10m0-10L7 17" stroke="white" strokeWidth="2" />
            </svg>
            <span className="text-white font-bold tracking-[0.05em] uppercase text-xs md:text-[14px]">XBOX</span>
          </div>
          
          <span className="text-white/40 text-sm hidden md:inline">•</span>
          
          {/* Meta Quest */}
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M22.9,9.4c-1.3-2.6-3.8-4.4-6.8-4.4c-2.3,0-4.3,1.1-5.6,2.8C9.3,6.1,7.2,5,5,5C1.8,5-0.6,7.7,0.1,10.8 c0.5,2.1,2,3.8,3.9,4.6c1.6,0.7,3.6,0.8,5.4,0c2-0.9,3.5-2.6,3.5-2.6s1.6,1.7,3.5,2.6c1.8,0.8,3.7,0.7,5.4,0 c1.9-0.8,3.4-2.5,3.9-4.6C23.6,12.6,23.5,10.7,22.9,9.4z M17,13.2c-1.5,0-2.8-1-3.3-2.4c-0.2-0.6-0.3-1.3-0.1-1.9 C14.1,7.2,15.5,6,17.2,6c1.8,0,3.3,1.3,3.6,3.1C21.1,11,19.2,13.2,17,13.2z" />
            </svg>
            <span className="text-white font-bold tracking-[0.05em] uppercase text-xs md:text-[14px]">Meta Quest</span>
          </div>
        </div>
      </div>
    </div>
  )
}
