import { Star } from 'lucide-react'

const TESTIMONIALS = [
  { text: "Seamless renting experience. Quality products at great prices.", rating: 5 },
  { text: "Loved the huge game library and zero hassle returns.", rating: 5 },
  { text: "Highly recommend for trying out new consoles before buying.", rating: 5 }
]

export function Testimonials() {
  return (
    <section className="bg-neutral-50 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl text-left">
            Served more than <span className="text-orange-500">1 Lakh Orders</span>
          </h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[280px] snap-center rounded-2xl bg-white p-6 shadow-sm border border-neutral-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < item.rating ? 'fill-amber-400 text-amber-400' : 'fill-neutral-200 text-neutral-200'}`}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-neutral-800 flex-1 mb-4 line-clamp-3">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500">
                  VR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Verified Renter</h4>
                  <p className="text-xs text-neutral-500">SharePal User</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
