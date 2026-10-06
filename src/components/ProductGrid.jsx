import { Fragment } from 'react'
import { ProductCard } from './ProductCard'

/**
 * ProductGrid — responsive 2→3→4 column grid of ProductCards.
 *
 * Breakpoints matching SharePal reference:
 *   xs  (<640px)  → 2 columns  (default on mobile)
 *   sm  (640px+)  → 2 columns
 *   md  (768px+)  → 3 columns
 *   lg  (1024px+) → 4 columns
 *
 * The section wraps with py-6 vertical breathing room.
 */
export function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="flex min-h-[300px] w-full items-center justify-center py-20 text-neutral-400">
        <p className="text-sm">No products available at this time.</p>
      </div>
    )
  }

  return (
    <section aria-label="Gaming gadgets available for rent">
      {/* Chunk 1: First 4 products */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-[36px]">
        {products.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Banner 1 */}
      {products.length >= 4 && (
        <div className="rounded-2xl bg-[#0f1b4a] w-full overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-8 relative mt-6 mb-6">
          <div className="z-10 text-white flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Become an <span className="text-[#9EFF00]">Asset Partner.</span> Earn Monthly.
            </h3>
            <div className="flex gap-4 md:gap-8 mt-6">
              <div className="border border-white/20 rounded-lg p-3 text-center bg-white/5 backdrop-blur-sm">
                <div className="text-[#9EFF00] font-bold">Monthly</div>
                <div className="text-[#9EFF00] font-bold">Earnings</div>
              </div>
              <div className="border border-white/20 rounded-lg p-3 text-center bg-white/5 backdrop-blur-sm">
                <div className="text-[#9EFF00] font-bold">18% ROI</div>
                <div className="text-white text-[10px] mt-1">On your gear</div>
              </div>
              <div className="border border-white/20 rounded-lg p-3 text-center bg-white/5 backdrop-blur-sm">
                <div className="text-[#9EFF00] font-bold">Get 10%</div>
                <div className="text-[#9EFF00] font-bold">Cashback</div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 z-10">
            <button className="bg-[#9EFF00] text-black font-bold px-6 py-2 rounded-full hover:bg-[#8ade00] transition-colors whitespace-nowrap shadow-lg">
              Know More ↗
            </button>
          </div>
          {/* Decorative background shape */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-900/40 to-transparent pointer-events-none"></div>
        </div>
      )}

      {/* Chunk 2: Next 4 products */}
      {products.length > 4 && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-[36px]">
          {products.slice(4, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Banner 2 */}
      {products.length >= 8 && (
        <div className="rounded-2xl bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] w-full overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 md:p-8 relative mt-6 mb-6">
          <div className="z-10 text-white flex flex-col items-center text-center">
            <div className="text-white/80 uppercase tracking-widest text-sm font-semibold mb-2">Got gear you don't use anymore?</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Rent Out Your Gear on SharePal
            </h3>
            <button className="bg-[#9EFF00] text-black font-bold px-8 py-2.5 rounded-full hover:bg-[#8ade00] transition-colors mt-2 shadow-lg">
              Start Earning ↗
            </button>
          </div>
        </div>
      )}

      {/* Chunk 3: Remaining products */}
      {products.length > 8 && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-[36px]">
          {products.slice(8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
      {/* View all button hidden since all products are loaded */}
    </section>
  )
}
