export function ImpactStats() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-neutral-100">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold text-neutral-900 md:text-[32px]">
          Join the movement
        </h2>
        <p className="mb-10 text-sm text-neutral-500 md:text-base">
          Together, we're making a huge impact on the environment and your wallet.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
          <div className="flex flex-col items-center pt-6 sm:pt-0">
            <h3 className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 lg:text-5xl">
              250Cr+
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Saved Together
            </p>
          </div>
          
          <div className="flex flex-col items-center pt-6 sm:pt-0">
            <h3 className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 lg:text-5xl">
              4.5M Kg
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              CO₂e Emissions Saved
            </p>
          </div>
          
          <div className="flex flex-col items-center pt-6 sm:pt-0">
            <h3 className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 lg:text-5xl">
              100K+
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Products in Circulation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
