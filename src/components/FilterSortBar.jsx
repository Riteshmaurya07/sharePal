import { SlidersHorizontal, Search } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export function FilterSortBar() {
  const { 
    searchQuery, setSearchQuery,
    sortBy, setSortBy,
    availabilityFilter, setAvailabilityFilter 
  } = useAppContext()

  return (
    <div className="flex flex-col gap-3 pb-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
      {/* Search Input */}
      <div className="relative w-full max-w-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-neutral-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="block w-full rounded-full border border-neutral-200 bg-neutral-50 py-2 pl-10 pr-4 text-sm text-neutral-900 outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2] transition-all"
        />
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex items-center gap-3 self-end sm:self-auto">
        <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm">
          <SlidersHorizontal className="h-3.5 w-3.5 text-neutral-500" />
          <span className="text-xs font-medium text-neutral-700">Filter:</span>
          <select 
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="bg-transparent text-xs font-semibold text-neutral-900 outline-none"
            aria-label="Filter by availability"
          >
            <option value="all">All Items</option>
            <option value="available">Available Now</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm">
          <span className="text-xs font-medium text-neutral-700">Sort:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-xs font-semibold text-neutral-900 outline-none"
            aria-label="Sort products"
          >
            <option value="relevance">Relevance</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating_desc">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  )
}
