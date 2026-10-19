import Link from 'next/link'
import Image from 'next/image'
import Seal from '@/components/Seal'
import { contact } from '@/lib/site'

function Eyebrow({ children, className = 'text-muted' }) {
  return <p className={`text-[13px] font-medium tracking-[0.3em] ${className}`}>{children}</p>
}

const steps = [
  { title: 'Consultation', desc: 'We define what you need, your volumes and your timeline.' },
  { title: 'Sourcing', desc: 'We shortlist Korean suppliers and arrange samples.' },
  { title: 'Negotiation', desc: 'We negotiate price and terms in Korean on your behalf.' },
  { title: 'Logistics', desc: 'We manage shipping, customs and compliance paperwork.' },
  { title: 'Support', desc: 'We stay your local contact after delivery.' },
]

const reasons = [
  { title: 'Bilingual team', desc: 'Korean and English, so nothing is lost between supplier and buyer.' },
  { title: 'Supplier network', desc: 'Direct relationships with Korean manufacturers and brands.' },
  { title: 'Australian market knowledge', desc: 'Local regulation, standards and buyer expectations.' },
  { title: 'Two offices', desc: 'Melbourne and Yangsan, Korea.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-24 flex flex-wrap items-center gap-14">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-6">
            <Eyebrow className="text-[#B9C4CC]">KOREA – AUSTRALIA TRADE BRIDGE</Eyebrow>
            <h1 className="text-4xl md:text-[56px] leading-[1.12] font-bold tracking-tight">
              Korean products and technology, delivered to Australian business.
            </h1>
            <p className="text-lg md:text-[19px] leading-relaxed text-[#D3DAE0] max-w-[620px]">
              Mach sources, imports and supports Korean goods across two divisions — industrial materials and
              equipment, and medical and cosmetic products.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/industries" className="px-6 py-[15px] bg-white text-ink font-bold rounded hover:bg-[#E4E8E6] transition">
                Industrial division
              </Link>
              <Link href="/medical-cosmetics" className="px-6 py-[15px] border-[1.5px] border-white font-bold rounded hover:bg-white/10 transition">
                Medical &amp; Cosmetics
              </Link>
            </div>
          </div>
          <div className="flex-[1_1_260px] hidden sm:flex justify-center">
            <Seal size={280} color="#FFFFFF" stroke={5} title="Mach seal mark" />
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-24 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow>OUR DIVISIONS</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">Two divisions, one trade partner.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-white border border-line rounded-lg p-8 md:p-10 flex flex-col gap-5">
              <div className="relative h-[220px] rounded-md overflow-hidden">
                <Image src="/images/industries/factory.jpg" alt="Manufacturing facility" fill className="object-cover" />
              </div>
              <Eyebrow>INDUSTRIAL · MACHPLASTECH</Eyebrow>
              <h3 className="text-2xl md:text-[28px] font-bold leading-snug">
                Industrial technology and advanced materials for Australian manufacturers.
              </h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-base">
                <li>Engineering plastics and advanced materials</li>
                <li>Manufacturing and automation equipment</li>
                <li>Agriculture and food processing machinery</li>
                <li>Industrial equipment and robotics</li>
              </ul>
              <Link href="/industries" className="self-start mt-auto px-[22px] py-3.5 bg-ink text-white font-bold rounded hover:bg-[#22364A] transition">
                Explore Industrial
              </Link>
            </article>

            <article className="bg-white border border-line rounded-lg p-8 md:p-10 flex flex-col gap-5">
              <div className="h-[220px] rounded-md bg-teal-soft flex items-center justify-center">
                <Seal size={140} color="#1F5F6B" stroke={6} />
              </div>
              <Eyebrow className="text-teal-dark">MEDICAL &amp; COSMETICS</Eyebrow>
              <h3 className="text-2xl md:text-[28px] font-bold leading-snug">
                Import and distribution of Korean medical and cosmetic products.
              </h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-base">
                <li>Skincare and cosmetics</li>
                <li>Hair and scalp care</li>
                <li>Professional salon products</li>
                <li>Medical consumables and devices</li>
              </ul>
              <Link href="/medical-cosmetics" className="self-start mt-auto px-[22px] py-3.5 bg-teal-dark text-white font-bold rounded hover:bg-ink transition">
                Explore Medical &amp; Cosmetics
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white border-y border-line">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-[88px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow>HOW WE WORK</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">From first call to after-sales.</h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-[18px] flex flex-col gap-2">
                <span className="text-sm font-bold text-muted">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xl font-bold">{s.title}</span>
                <span className="text-[15px] leading-relaxed text-body">{s.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Mach */}
      <section id="about">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-[88px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow>WHY MACH</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">On the ground in both countries.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white border border-line rounded-lg p-7 flex flex-col gap-2.5">
                <span className="text-[19px] font-bold">{r.title}</span>
                <span className="text-[15px] leading-relaxed text-body">{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-8">
        <div className="max-w-[1240px] mx-auto px-6 pb-20 md:pb-[88px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow>CONTACT</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">Talk to us in English or Korean.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="bg-white border border-line rounded-lg p-8 flex flex-col gap-2.5 text-base">
              <Eyebrow>MELBOURNE OFFICE</Eyebrow>
              <span>{contact.au.address.slice(0, 2).join(', ')}</span>
              <a href={`tel:${contact.au.tel}`} className="hover:text-teal-dark">{contact.au.phone}</a>
            </div>
            <div className="bg-white border border-line rounded-lg p-8 flex flex-col gap-2.5 text-base">
              <Eyebrow>KOREA OFFICE</Eyebrow>
              <span>{contact.kr.addressKo}</span>
              <a href={`tel:${contact.kr.tel}`} className="hover:text-teal-dark">{contact.kr.phone}</a>
            </div>
            <div className="bg-white border border-line rounded-lg p-8 flex flex-col gap-2.5 text-base">
              <Eyebrow>EMAIL</Eyebrow>
              <span>
                Industrial ·{' '}
                <a href={`mailto:${contact.email.industrial}`} className="underline hover:text-teal-dark break-all">{contact.email.industrial}</a>
              </span>
              <span>
                Medical &amp; Cosmetics ·{' '}
                <a href={`mailto:${contact.email.medical}`} className="underline hover:text-teal-dark break-all">{contact.email.medical}</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
