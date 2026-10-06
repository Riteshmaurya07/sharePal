import { useState, useEffect } from 'react'
import { X, Calendar as CalendarIcon } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export function DatePickerModal() {
  const { isDatePickerOpen, setIsDatePickerOpen, rentalDates, setRentalDates } = useAppContext()
  
  // Local state for the modal so we can cancel without applying
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    if (isDatePickerOpen) {
      // Sync local state with global when opening
      setStart(rentalDates.start || '')
      setEnd(rentalDates.end || '')
    }
  }, [isDatePickerOpen, rentalDates])

  if (!isDatePickerOpen) return null

  // Get today's date in YYYY-MM-DD for the min attribute
  const today = new Date().toISOString().split('T')[0]

  const handleApply = () => {
    setRentalDates({ start, end })
    setIsDatePickerOpen(false)
  }

  const handleClose = () => {
    setIsDatePickerOpen(false)
  }

  // Calculate days
  const startDate = start ? new Date(start) : null
  const endDate = end ? new Date(end) : null
  const isValidRange = startDate && endDate && startDate <= endDate
  const days = isValidRange ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1 : 0

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity">
      <div 
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="date-picker-title"
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
          <h2 id="date-picker-title" className="text-lg font-bold text-neutral-900">Select Rental Dates</h2>
          <button 
            onClick={handleClose}
            className="rounded-full p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
            aria-label="Close date picker"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
            <div className="flex-1 flex flex-col gap-1.5">
              <label htmlFor="start-date" className="text-sm font-semibold text-neutral-700 flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 text-[#1945E8]" />
                Delivery Date
              </label>
              <input
                type="date"
                id="start-date"
                min={today}
                value={start}
                onChange={(e) => {
                  setStart(e.target.value)
                  // if end date is before new start date, clear it
                  if (end && e.target.value > end) setEnd('')
                }}
                className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#1945E8] focus:ring-1 focus:ring-[#1945E8] transition-all"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1.5">
              <label htmlFor="end-date" className="text-sm font-semibold text-neutral-700 flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 text-[#1945E8]" />
                Pickup Date
              </label>
              <input
                type="date"
                id="end-date"
                min={start || today}
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                disabled={!start}
                className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-[#1945E8] focus:ring-1 focus:ring-[#1945E8] disabled:opacity-50 transition-all"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-neutral-600">
              {days > 0 ? (
                <span className="font-medium text-neutral-900">
                  {days} day{days > 1 ? 's' : ''} total
                </span>
              ) : (
                'Select start & end dates'
              )}
            </div>

            <div className="flex w-full gap-2 sm:w-auto">
              <button
                onClick={handleClose}
                className="flex-1 rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 sm:flex-none transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                disabled={!isValidRange}
                className="flex-1 rounded-xl bg-[#1945E8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1538cc] disabled:opacity-50 sm:flex-none transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
