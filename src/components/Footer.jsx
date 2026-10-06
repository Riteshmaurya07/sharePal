import { SharePalLogo } from './SharePalLogo'

export function Footer() {
  return (
    <footer className="bg-[#0B101E] pt-12 pb-6 text-white w-full">
      <div className="mx-auto w-full max-w-[1307px] px-4">
        {/* Top Links Grid - 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 border-b border-white/10 pb-8">
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">Action Cameras</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">GoPro Cameras</li>
              <li className="hover:text-white cursor-pointer">Pocket Cameras</li>
              <li className="hover:text-white cursor-pointer">DJI Drones</li>
              <li className="hover:text-white cursor-pointer">360 Cameras</li>
              <li className="hover:text-white cursor-pointer">Camera Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">Rentals</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">DSLR Cameras</li>
              <li className="hover:text-white cursor-pointer">Camera Lenses</li>
              <li className="hover:text-white cursor-pointer">Mirrorless Cameras</li>
              <li className="hover:text-white cursor-pointer">Tripods & Mics</li>
              <li className="hover:text-white cursor-pointer">Gimbals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">Trekking Gear</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">Trekking Shoes</li>
              <li className="hover:text-white cursor-pointer">Trekking Jackets</li>
              <li className="hover:text-white cursor-pointer">Rucksacks & Bags</li>
              <li className="hover:text-white cursor-pointer">Tents & Sleeping Bags</li>
              <li className="hover:text-white cursor-pointer">Trekking Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">Riding Gear</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">Riding Jackets</li>
              <li className="hover:text-white cursor-pointer">Helmets & Gloves</li>
              <li className="hover:text-white cursor-pointer">Knee Guards</li>
              <li className="hover:text-white cursor-pointer">Saddle Bags</li>
              <li className="hover:text-white cursor-pointer">Action Cameras</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">Audio Visual Equipment</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">Party Speakers</li>
              <li className="hover:text-white cursor-pointer">Projectors</li>
              <li className="hover:text-white cursor-pointer">VR Headsets</li>
              <li className="hover:text-white cursor-pointer">Karaoke Setup</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="py-6 border-b border-white/10">
          <h4 className="text-[10px] font-bold text-white mb-2 uppercase">Disclaimer About Products</h4>
          <p className="text-[10px] leading-relaxed text-neutral-500">
            SharePal provides rentals for lifestyle and electronic products. Please verify the condition and accessories before renting. The brand logos and registered trademarks are the property of their respective owners. We ensure regular maintenance but users are responsible for proper handling during the rental period.
          </p>
        </div>

        {/* Bottom Section - Brand + Links */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4 inline-block scale-90 origin-left">
              <SharePalLogo />
            </div>
            <p className="text-[12px] text-neutral-400 mb-2">SharePal is India's most trusted lifestyle gear rental platform.</p>
            <p className="text-[12px] text-neutral-400">Support: 1800 123 4567</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">COMPANY</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">POLICIES</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Cancellation Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-[13px] mb-4">HELP</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-400">
              <li className="hover:text-white cursor-pointer">How it works</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Sitemap</li>
            </ul>
          </div>
        </div>

        {/* Very Bottom Copyright & Social */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between border-t border-white/10">
          <p className="text-[11px] text-neutral-500">© 2024 SharePal. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {['f', 't', 'in', 'ig'].map(icon => (
              <div key={icon} className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400 hover:text-white hover:bg-neutral-600 cursor-pointer">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
