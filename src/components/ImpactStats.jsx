import { ShieldCheck, Truck, RefreshCcw } from 'lucide-react'

export function ImpactStats() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Zero Deposit',
      desc: 'Pay only for what you rent, with no hidden fees or large upfront deposits.',
      color: 'text-[#1945E8]',
      bg: 'bg-blue-50'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      desc: 'Enjoy free doorstep delivery and pickup across the city on your selected dates.',
      color: 'text-violet-600',
      bg: 'bg-violet-50'
    },
    {
      icon: RefreshCcw,
      title: 'Premium Quality',
      desc: 'All gear is rigorously tested, sanitized, and updated before every rental.',
      color: 'text-[#7ACC00]',
      bg: 'bg-green-50'
    }
  ]

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Why Rent from Us?</h2>
        <p className="mt-2 text-sm text-neutral-600 md:text-base">
          Experience gaming the smart, affordable, and hassle-free way.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((val, idx) => {
            const Icon = val.icon
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-6 text-center">
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${val.bg} ${val.color}`}>
                  <Icon className="h-8 w-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{val.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
