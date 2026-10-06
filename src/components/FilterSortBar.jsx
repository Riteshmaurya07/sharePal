import { SlidersHorizontal, Search } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export function FilterSortBar() {
  const { 
    searchQuery, setSearchQuery,
    sortBy, setSortBy,
    availabilityFilter, setAvailabilityFilter 
  } = useAppContext()

  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between border-t border-b border-neutral-100 mb-6">
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
        <div className="flex items-center gap-1.5 rounded-lg bg-neutral-50 px-3 py-1.5 text-sm">
          <SlidersHorizontal className="h-4 w-4 text-neutral-500" />
          <span className="font-medium text-neutral-700">Filter:</span>
          <select 
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="bg-transparent font-semibold text-neutral-900 outline-none cursor-pointer"
            aria-label="Filter by availability"
          >
            <option value="all">All</option>
            <option value="available">Available</option>
          </select>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-neutral-50 px-3 py-1.5 text-sm">
          <span className="font-medium text-neutral-700">Sort:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent font-semibold text-neutral-900 outline-none cursor-pointer"
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
