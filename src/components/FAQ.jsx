import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'Do I need to pay any deposit for renting gaming consoles?',
    answer: 'No, SharePal offers a Zero Deposit policy on all our rentals. You only pay the rental fee.'
  },
  {
    question: 'How does the delivery and pickup process work?',
    answer: 'We provide free doorstep delivery and pickup. Our executive will deliver the console on your selected start date and pick it up on the end date.'
  },
  {
    question: 'What happens if the console gets damaged during my rental period?',
    answer: 'Minor scratches are ignored. For major damages, repair costs will be borne by the customer as per actuals from the authorized service center.'
  },
  {
    question: 'Do the rented games come with a physical disc or digital account?',
    answer: 'Most of our games are digital accounts pre-loaded onto the console. Some physical discs are also provided depending on availability.'
  }
]

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900 md:text-3xl">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div 
                key={idx} 
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left md:p-5 hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-neutral-800 md:text-lg">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-neutral-100 p-4 pt-3 text-sm text-neutral-600 md:p-5 md:pt-4 md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
