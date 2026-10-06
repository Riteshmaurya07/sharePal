import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { CategoryTabs } from './components/CategoryTabs'
import { ProductGrid } from './components/ProductGrid'
import { FloatingDateCTA } from './components/FloatingDateCTA'
import productsData from './data/products.json'

/**
 * App — page shell for the SharePal Gaming Gadgets listing page.
 *
 * Layout matches the reference site structure:
 *
 *   <header fixed />          ← sticky purple nav, ~88px tall
 *   <main>
 *     <div py-24 md:py-20>   ← compensates for fixed header + provides outer padding
 *       <div purple-bg>      ← gradient section (contains tabs + hero on mobile)
 *         <CategoryTabs sticky />
 *         <HeroBanner />
 *       </div>
 *       <div container>      ← max-w-7xl, px-4
 *         <ProductGrid />
 *       </div>
 *     </div>
 *   </main>
 *   <FloatingDateCTA />       ← fixed bottom pill
 *
 * Data source: src/data/products.json (23 products, no backend)
 */
function App() {
  const products = productsData.products

  return (
    <div className="min-h-dvh w-full bg-white">
      {/* Fixed navigation header */}
      <Header />

      {/* Floating bottom rental-dates CTA */}
      <FloatingDateCTA />

      <main className="min-h-screen">
        {/*
          Outer wrapper that:
          1. Provides top padding equal to header height (pt-24 mobile / pt-20 desktop)
          2. The reference page uses `py-24 md:py-20` on a container inside main
        */}
        <div className="container mx-auto w-full max-w-7xl px-0 py-24 md:py-20">

          {/* Purple gradient section — tabs + hero */}
          <div
            className="relative max-md:pb-3"
            style={{ background: 'linear-gradient(360deg, #8A2BE2 0%, #4C187C 100%)' }}
          >
            <CategoryTabs />
            <HeroBanner />
          </div>

          {/* Product grid — white bg, padded */}
          <div className="px-3 sm:px-4 lg:px-6">
            <ProductGrid products={products} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
