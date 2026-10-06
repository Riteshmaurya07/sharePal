import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Rahul Sharma',
    date: '2 months ago',
    text: 'Rented a PS5 for a weekend trip. The process was super smooth, delivery was on time, and the console was in perfect condition. Highly recommended!',
    rating: 5
  },
  {
    name: 'Priya Patel',
    date: '3 weeks ago',
    text: 'SharePal is my go-to for gaming rentals. Zero deposit is a huge plus. The customer support is very responsive.',
    rating: 5
  },
  {
    name: 'Karthik Reddy',
    date: '1 month ago',
    text: 'Got the PS5 VR combo. Amazing experience. The games were pre-installed which saved a lot of download time.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Trusted by thousands</h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">See what our customers have to say about us.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="relative rounded-2xl bg-white p-6 shadow-sm border border-neutral-100">
              <Quote className="absolute right-4 top-4 h-8 w-8 text-neutral-100" />
              
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="mb-4 text-sm leading-relaxed text-neutral-700 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1945E8] text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{review.name}</h4>
                  <p className="text-xs text-neutral-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
