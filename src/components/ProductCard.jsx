import { useState, useEffect } from 'react'
import { ShoppingCart, ThumbsUp } from 'lucide-react'
import { ProductBadge, StarRating } from './ProductBadge'
import { useAppContext } from '../context/AppContext'

/**
 * Formats booked_count for compact display.
 *   649   → "649"
 *   1200  → "1.2k"
 *   10000 → "10k+"
 */
function formatBookedCount(count) {
  if (count >= 10000) return '10k+'
  if (count >= 1000) return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
  return String(count)
}

/**
 * ProductCard — individual product listing card.
 *
 * Visual states:
 *   - Trending     → orange flame badge on image
 *   - New          → lime sparkles badge on image
 *   - Vote to Launch → violet badge + full-width vote CTA (no price)
 *   - Out of Stock → black badge + grayscale image + "Notify Me" disabled button
 *   - Unrated      → "No reviews yet" in place of stars (rating === 0)
 *
 * Layout (matches SharePal reference):
 *   ┌─────────────────────────┐
 *   │  [Image 4:3 aspect]     │ ← badge top-left
 *   ├─────────────────────────┤
 *   │  Name (2-line clamp)    │
 *   │  ★ 4.6    649 booked   │
 *   │  ₹200/day      [Add]   │
 *   └─────────────────────────┘
 *
 * Image uses object-contain so product shots (typically on white bg) aren't cropped.
 */
export function ProductCard({ product }) {
  const {
    id,
    name,
    image,
    rating,
    booked_count,
    tag,
    per_day_rent,
    out_of_stock,
  } = product

  const [imgError, setImgError] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const isVoteToLaunch = tag === 'Vote to Launch'
  const { rentalDates, setIsDatePickerOpen } = useAppContext()

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => setIsAdded(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isAdded])

  const handleAddToCart = () => {
    if (out_of_stock) return
    if (!rentalDates.start || !rentalDates.end) {
      setIsDatePickerOpen(true)
    } else {
      setIsAdded(true)
    }
  }

  return (
    <article
      id={`product-card-${id}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm
        ring-1 ring-black/5 transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-md
        ${out_of_stock ? 'opacity-75' : ''}
      `}
      aria-label={`${name}${out_of_stock ? ' — out of stock' : ''}`}
    >
      {/* ── Product image ─────────────────────────────────────── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        {imgError ? (
          /* Graceful fallback */
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs text-neutral-400">Image unavailable</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className={`absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]
              ${out_of_stock ? 'grayscale' : ''}
            `}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        )}

        {/* Badge — top-left overlay */}
        <div className="absolute left-2 top-2">
          <ProductBadge tag={tag} outOfStock={out_of_stock} />
        </div>
      </div>

      {/* ── Card body ─────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Product name — max 2 lines */}
        <h2 className="line-clamp-2 text-[19px] font-semibold leading-snug text-neutral-900 min-h-[3.2rem]">
          {name}
        </h2>

        {/* Rating + Booked count */}
        <div className="flex items-center justify-between gap-2">
          <StarRating rating={rating} />
          <span className="flex-shrink-0 text-xs text-neutral-500">
            {formatBookedCount(booked_count)} booked
          </span>
        </div>

        {/* Price + CTA — pushes to bottom */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          {isVoteToLaunch ? (
            /* Vote to Launch: full-width vote button, no price */
            <button
              id={`vote-btn-${id}`}
              className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-100 active:bg-violet-200"
              aria-label={`Vote to launch ${name}`}
            >
              <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
              Vote to Launch
            </button>
          ) : (
            <>
              {/* Price block */}
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-neutral-400">Starting from</span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-base font-bold text-neutral-900">
                    ₹{Math.round(per_day_rent)}
                  </span>
                  <span className="text-xs text-neutral-500">/day</span>
                </div>
              </div>

              {/* Add to cart / Notify me */}
              <button
                id={`cart-btn-${id}`}
                onClick={handleAddToCart}
                disabled={out_of_stock || isAdded}
                className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all
                  ${out_of_stock
                    ? 'cursor-not-allowed bg-neutral-100 text-neutral-400 ring-1 ring-neutral-200'
                    : isAdded
                      ? 'bg-green-600 text-white'
                      : 'bg-[#1945E8] text-white hover:bg-[#1538cc] active:scale-95 active:opacity-90'
                  }`}
                aria-label={
                  out_of_stock
                    ? `${name} is currently out of stock`
                    : `Add ${name} to cart`
                }
              >
                {isAdded ? (
                  <>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
                    {out_of_stock ? 'Notify Me' : 'Add'}
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
