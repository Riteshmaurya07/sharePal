import { Star, Flame, Sparkles, ThumbsUp, PackageX } from 'lucide-react'

// Badge config keyed by tag value
const BADGE_CONFIG = {
  Trending: {
    label: 'Trending',
    icon: null,
    className: 'border border-orange-500 bg-white text-orange-500 uppercase tracking-wider',
  },
  New: {
    label: 'New',
    icon: Sparkles,
    className: 'bg-[#9EFF00] text-black',
  },
  'Vote to Launch': {
    label: 'Vote to Launch',
    icon: ThumbsUp,
    className: 'bg-violet-600 text-white',
  },
}

/**
 * ProductBadge — pill badge overlaid on product card image.
 *
 * Priority: Out of Stock > tag badge
 * If tag is empty string or not in config, renders nothing.
 */
export function ProductBadge({ tag, outOfStock }) {
  if (outOfStock) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-[3px] text-[10px] font-semibold text-white backdrop-blur-sm">
        <PackageX className="h-3 w-3" aria-hidden="true" />
        Out of Stock
      </span>
    )
  }

  const cfg = BADGE_CONFIG[tag]
  if (!cfg) return null

  const Icon = cfg.icon
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-[3px] text-[10px] font-bold leading-none ${cfg.className}`}
    >
      {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
      {cfg.label}
    </span>
  )
}

/**
 * StarRating — star icon + numeric rating.
 * rating === 0 → "No reviews yet" muted text.
 */
export function StarRating({ rating }) {
  if (!rating || rating === 0) {
    return (
      <span className="text-xs text-neutral-400 italic">No reviews yet</span>
    )
  }

  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
      <span className="text-xs font-semibold text-neutral-700">{rating.toFixed(1)}</span>
    </div>
  )
}
