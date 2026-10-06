import { SharePalLogo } from './SharePalLogo'

const FOOTER_LINKS = {
  Company: ['About Us', 'Careers', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'],
  Categories: ['Rent Gaming Consoles', 'Rent DSLR Cameras', 'Rent Trekking Gear', 'Rent Speakers'],
  Cities: ['Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad']
}

const SEO_LINKS = [
  'PS5 on rent in Bangalore',
  'PS4 on rent in Bangalore',
  'Xbox on rent in Bangalore',
  'Gaming laptops on rent',
  'Nintendo Switch on rent',
  'VR Headset on rent in Bangalore',
  'Rent PS5 Games',
  'Rent PS4 Controllers'
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 pt-12 pb-24 text-white md:pb-12">
      {/* SEO Links Section */}
      <div className="container mx-auto max-w-7xl px-4 border-b border-neutral-800 pb-10">
        <h3 className="mb-4 text-lg font-bold text-neutral-300">Popular Gaming Searches</h3>
        <div className="flex flex-wrap gap-2">
          {SEO_LINKS.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto max-w-7xl px-4 pt-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-block rounded-xl bg-[#5B21B6] p-2">
              <SharePalLogo />
            </div>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-400">
              SharePal is India's most trusted lifestyle gear rental platform. Rent Cameras, Gaming Consoles, Trekking Gear and more with Zero Deposit.
            </p>
          </div>

          {/* Dynamic Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-300">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-[#9EFF00]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} SharePal. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            {/* Social Icons Placeholder */}
            {['fb', 'tw', 'ig', 'in'].map((social) => (
              <a key={social} href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-xs text-neutral-400 transition-colors hover:bg-[#1945E8] hover:text-white uppercase font-bold">
                {social.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
