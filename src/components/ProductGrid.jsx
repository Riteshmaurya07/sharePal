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
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-[36px]">
        {products.map((product, index) => {
          const card = <ProductCard key={product.id} product={product} />

          // Inject Banner 1 after 4th product
          if (index === 3) {
            return (
              <Fragment key={product.id}>
                {card}
                <div className="col-span-full rounded-2xl bg-[#0f1b4a] w-full overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-8 relative mt-4 mb-2">
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
              </Fragment>
            )
          }

          // Inject Banner 2 after 8th product
          if (index === 7) {
            return (
              <Fragment key={product.id}>
                {card}
                <div className="col-span-full rounded-2xl bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] w-full overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 md:p-8 relative mt-4 mb-2">
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
              </Fragment>
            )
          }

          return card
        })}
      </div>
      
      {/* View all button below grid */}
      <div className="w-full flex justify-center mt-12 mb-8">
        <button className="flex flex-col items-center">
          <span className="text-xs text-neutral-500 mb-2 uppercase tracking-wide">Showing 23 of 50 items</span>
          <div className="border-2 border-neutral-200 rounded-full px-8 py-2.5 text-sm font-bold text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50 transition-colors shadow-sm bg-white">
            View all
          </div>
        </button>
      </div>
    </section>
  )
}
