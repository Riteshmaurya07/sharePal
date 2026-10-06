import { useMemo } from 'react'
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { CategoryTabs } from './components/CategoryTabs'
import { Sidebar } from './components/Sidebar'
import { ProductGrid } from './components/ProductGrid'
import { FloatingDateCTA } from './components/FloatingDateCTA'
import { FloatingChat } from './components/FloatingChat'
import { DatePickerModal } from './components/DatePickerModal'
import { FilterSortBar } from './components/FilterSortBar'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { ImpactStats } from './components/ImpactStats'
import { Footer } from './components/Footer'
import { useAppContext } from './context/AppContext'
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
  const { searchQuery, activeCategory, sortBy, availabilityFilter } = useAppContext()

  const products = useMemo(() => {
    let filtered = productsData.products

    // Category Filter
    if (activeCategory !== 'All') {
      if (activeCategory === 'PS5 Console') {
        filtered = filtered.filter(p => (p.name.includes('PS5') || p.name.includes('PlayStation')) && !p.name.includes('Wheel'))
      } else if (activeCategory === 'PS5 Games') {
        filtered = filtered.filter(p => 
          p.name.includes('Game') || p.name.includes('FC') || 
          p.name.includes('God Of War') || p.name.includes('Uncharted') || 
          p.name.includes('Cricket') || p.name.includes('Ghost of Tsushima') || 
          p.name.includes('Spider-Man')
        )
      } else if (activeCategory === 'Racing Wheel') {
        filtered = filtered.filter(p => p.name.includes('Wheel'))
      } else {
        // Xbox, VR, Big Screen have no data in this subset
        filtered = []
      }
    }

    // Availability Filter
    if (availabilityFilter === 'available') {
      filtered = filtered.filter(p => !p.out_of_stock)
    }

    // Search Filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      filtered = filtered.filter(p => p.name.toLowerCase().includes(lowerQuery))
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'price_asc') return a.per_day_rent - b.per_day_rent
      if (sortBy === 'price_desc') return b.per_day_rent - a.per_day_rent
      if (sortBy === 'rating_desc') return b.rating - a.rating
      return 0 // relevance
    })

    return filtered
  }, [searchQuery, activeCategory, sortBy, availabilityFilter])

  return (
    <div className="min-h-dvh w-full bg-white">
      {/* Fixed navigation header */}
      <Header />

      {/* Floating bottom rental-dates CTA */}
      <FloatingDateCTA />

      {/* Floating chat CTA */}
      <FloatingChat />

      {/* Date Picker Modal */}
      <DatePickerModal />

      <main className="min-h-screen pt-[136px] bg-[#F7F8F9]">
        <CategoryTabs />

        <div className="mx-auto w-full max-w-[1307px] px-0 sm:px-4 lg:px-0 py-6 flex flex-col md:flex-row gap-[34px] items-start">
          <Sidebar />

          <div className="flex-1 w-full md:w-[1143px] min-w-0 flex flex-col">
            <HeroBanner />

            <div className="mt-5">
              <div className="flex items-end justify-between px-4 sm:px-0 mb-[14px] border-b border-neutral-200 pb-3">
                <h2 className="text-[22px] font-bold text-neutral-900">Gaming Gadgets On Rent</h2>
                <span className="text-sm font-semibold text-neutral-500">Total items: {products.length} items</span>
              </div>
              
              <div className="px-3 sm:px-0 pb-12">
                <div className="md:hidden">
                  <FilterSortBar />
                </div>
                <ProductGrid products={products} />
              </div>
            </div>
          </div>
        </div>

        {/* Informational Sections */}
        <div className="w-full bg-[#F7F8F9]">
          <FAQ />
          <div className="container mx-auto max-w-[1307px] px-4 py-6 text-[13px] text-neutral-500 font-medium">
            <span className="cursor-pointer hover:text-neutral-800">Home</span> <span className="mx-2 text-neutral-400">&gt;</span> <span className="cursor-pointer hover:text-neutral-800">Bangalore</span> <span className="mx-2 text-neutral-400">&gt;</span> <span className="text-neutral-900 font-semibold cursor-default">Gaming Consoles on rent</span>
          </div>
          <Testimonials />
          <ImpactStats />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
