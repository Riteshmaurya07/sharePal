import { CheckCircle2 } from 'lucide-react'

const FEATURES = [
  {
    title: 'Hassle-Free Experience',
    text: 'Skip the heavy upfront costs. Rent the latest consoles and games instantly without breaking the bank.'
  },
  {
    title: 'Huge Game Library',
    text: 'Access a massive collection of top-tier titles, pre-loaded digital accounts, or physical discs.'
  },
  {
    title: 'Flexible Durations',
    text: 'Rent for a weekend party, a two-week vacation, or a whole month. You decide the duration.'
  }
]

export function Testimonials() {
  return (
    <section className="bg-neutral-50 py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">What Our Renters Value</h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            The core benefits that make renting the smartest choice for gamers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="relative rounded-2xl bg-white p-6 shadow-sm border border-neutral-100">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-neutral-900">{feature.title}</h4>
              <p className="text-sm leading-relaxed text-neutral-600">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
