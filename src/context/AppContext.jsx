import { createContext, useContext, useState, useMemo } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  // Date Picker State - Default to tomorrow and tomorrow + 2 days
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const pickup = new Date(tomorrow)
  pickup.setDate(pickup.getDate() + 2)

  const defaultStart = tomorrow.toISOString().split('T')[0]
  const defaultEnd = pickup.toISOString().split('T')[0]

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [rentalDates, setRentalDates] = useState({ start: defaultStart, end: defaultEnd })

  // Search State
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Filter & Sort State
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('relevance') // 'relevance', 'price_asc', 'price_desc', 'rating_desc'
  const [availabilityFilter, setAvailabilityFilter] = useState('all') // 'all', 'available'

  const value = useMemo(() => ({
    isDatePickerOpen, setIsDatePickerOpen,
    rentalDates, setRentalDates,
    searchQuery, setSearchQuery,
    isSearchOpen, setIsSearchOpen,
    activeCategory, setActiveCategory,
    sortBy, setSortBy,
    availabilityFilter, setAvailabilityFilter
  }), [
    isDatePickerOpen, rentalDates, searchQuery, isSearchOpen,
    activeCategory, sortBy, availabilityFilter
  ])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
