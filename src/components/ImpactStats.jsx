import { Leaf, Users, PackageCheck } from 'lucide-react'

export function ImpactStats() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Happy Customers',
      color: 'text-[#1945E8]',
      bg: 'bg-blue-50'
    },
    {
      icon: PackageCheck,
      value: '1M+',
      label: 'Orders Delivered',
      color: 'text-violet-600',
      bg: 'bg-violet-50'
    },
    {
      icon: Leaf,
      value: '10,000 kg',
      label: 'E-Waste Saved',
      color: 'text-[#7ACC00]',
      bg: 'bg-green-50'
    }
  ]

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Making an Impact</h2>
        <p className="mt-2 text-sm text-neutral-600 md:text-base">
          Every time you rent, you help build a more sustainable world.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-6">
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
                  <Icon className="h-8 w-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl font-bold text-neutral-900">{stat.value}</h3>
                <p className="mt-1 font-medium text-neutral-500">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
