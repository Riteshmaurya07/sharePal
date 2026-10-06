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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
