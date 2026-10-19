import Link from 'next/link'
import Seal from '@/components/Seal'
import { contact } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-[#B9C4CC]">
      <div className="max-w-[1240px] mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Seal size={36} color="#FFFFFF" />
            <span className="text-white font-bold tracking-[0.16em]">MACH</span>
          </div>
          <p className="text-sm leading-relaxed">Korea–Australia trade across industrial and medical &amp; cosmetic products.</p>
        </div>

        <div className="text-sm leading-relaxed">
          <h3 className="text-white font-bold mb-3">{contact.au.label}</h3>
          {contact.au.address.map((l) => (
            <p key={l}>{l}</p>
          ))}
          <p className="mt-2">
            <a href={`tel:${contact.au.tel}`} className="hover:text-white">{contact.au.phone}</a>
          </p>
        </div>

        <div className="text-sm leading-relaxed">
          <h3 className="text-white font-bold mb-3">{contact.kr.label}</h3>
          <p>{contact.kr.addressKo}</p>
          <p className="mt-2">
            <a href={`tel:${contact.kr.tel}`} className="hover:text-white">{contact.kr.phone}</a>
          </p>
        </div>

        <div className="text-sm leading-relaxed">
          <h3 className="text-white font-bold mb-3">Divisions</h3>
          <p><Link href="/industries" className="hover:text-white">Industrial</Link></p>
          <p><a href={`mailto:${contact.email.industrial}`} className="hover:text-white break-all">{contact.email.industrial}</a></p>
          <p className="mt-3"><Link href="/medical-cosmetics" className="hover:text-white">Medical &amp; Cosmetics</Link></p>
          <p><a href={`mailto:${contact.email.medical}`} className="hover:text-white break-all">{contact.email.medical}</a></p>
        </div>
      </div>

      <div className="border-t border-[#2A3B4B]">
        <div className="max-w-[1240px] mx-auto px-6 py-6 flex flex-wrap justify-between gap-3 text-xs">
          <span className="text-white font-bold tracking-[0.16em]">MACH MEDICAL &amp; COSMETICS</span>
          <span>&copy; {new Date().getFullYear()} Mach. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
