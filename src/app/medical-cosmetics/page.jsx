import Seal from '@/components/Seal'
import EnquiryForm from '@/components/EnquiryForm'
import { contact } from '@/lib/site'

export const metadata = {
  title: 'Medical & Cosmetics – Korean product import & distribution in Australia | Mach',
  description:
    'Mach imports and distributes Korean skincare, hair and scalp care, professional salon products and medical consumables in Australia, with AICIS, TGA and labelling requirements checked before stock lands.',
}

function Eyebrow({ children, className = 'text-muted' }) {
  return <p className={`text-[13px] font-medium tracking-[0.3em] ${className}`}>{children}</p>
}

const icon = 'w-9 h-9 text-teal-dark'
const categories = [
  {
    title: 'Skincare & cosmetics',
    desc: 'Cleansers, serums, moisturisers, sun care and K-beauty ranges.',
    svg: <path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z" />,
  },
  {
    title: 'Hair & scalp care',
    desc: 'Shampoos, scalp treatments and head spa products.',
    svg: <path d="M4 12h16M7 12c0-4 2-7 5-8M12 12c0-4 1.5-7 4-8M7 12v8M12 12v8M17 12v8" />,
  },
  {
    title: 'Professional salon products',
    desc: 'Back-bar and treatment products for salons and spas.',
    svg: <path d="M8 4h8v4H8zM7 8h10v12H7zM10 12h4" />,
  },
  {
    title: 'Medical consumables & devices',
    desc: 'Clinic consumables and devices sourced from Korean manufacturers.',
    svg: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />,
  },
]

const compliance = [
  { title: 'AICIS', desc: 'Industrial chemical importer registration for cosmetic products and ingredients.' },
  { title: 'TGA', desc: 'Therapeutic goods and medical device requirements, including ARTG inclusion where required.' },
  { title: 'Labelling', desc: 'Australian cosmetic ingredient labelling and English packaging information.' },
]

const steps = [
  { title: 'Enquiry', desc: 'Tell us the products, volumes and channel.' },
  { title: 'Product & compliance check', desc: 'Ingredients, classification and labelling reviewed.' },
  { title: 'Order & shipping', desc: 'Purchase, freight and customs managed.' },
  { title: 'Delivery & support', desc: 'Local delivery, reorders and after-sales.' },
]

export default function MedicalCosmetics() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20 flex flex-wrap items-center gap-14">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-6">
            <Eyebrow className="text-teal-dark">MEDICAL &amp; COSMETICS DIVISION</Eyebrow>
            <h1 className="text-4xl md:text-[54px] leading-[1.14] font-bold tracking-tight">
              Korean medical and cosmetic products, imported and distributed in Australia.
            </h1>
            <p className="text-lg md:text-[19px] leading-relaxed text-body max-w-[620px]">
              We help Korean brands enter the Australian market, and help Australian clinics, salons and retailers
              source Korean products with compliance handled.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#enquiry" className="px-6 py-[15px] bg-teal-dark text-white font-bold rounded hover:bg-ink transition">
                Send an enquiry
              </a>
              <a href="#partners" className="px-6 py-[15px] border-[1.5px] border-ink font-bold rounded hover:bg-white transition">
                Brands &amp; buyers
              </a>
            </div>
          </div>
          <div className="flex-[1_1_360px] h-[320px] md:h-[400px] rounded-lg bg-teal-soft flex items-center justify-center">
            <Seal size={200} color="#1F5F6B" stroke={6} title="Mach Medical & Cosmetics" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-y border-line">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-[88px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow>PRODUCT CATEGORIES</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">What we import.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="border border-line rounded-lg p-7 flex flex-col gap-3.5">
                <svg className={icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {c.svg}
                </svg>
                <span className="text-xl font-bold">{c.title}</span>
                <span className="text-[15px] leading-relaxed text-body">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-[88px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow>WHO WE WORK WITH</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">Both sides of the trade.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-white border border-line rounded-lg p-8 md:p-10 flex flex-col gap-4">
              <Eyebrow className="text-teal-dark">FOR KOREAN BRANDS</Eyebrow>
              <h3 className="text-2xl md:text-[26px] font-bold">Enter the Australian market.</h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-base">
                <li>Market and channel review for your range</li>
                <li>Importer registration and regulatory coordination</li>
                <li>English labelling and packaging checks</li>
                <li>Introductions to salons, clinics and retailers</li>
              </ul>
            </article>
            <article className="bg-white border border-line rounded-lg p-8 md:p-10 flex flex-col gap-4">
              <Eyebrow className="text-teal-dark">FOR AUSTRALIAN BUYERS</Eyebrow>
              <h3 className="text-2xl md:text-[26px] font-bold">Source Korean products with confidence.</h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-base">
                <li>Clinics, salons, spas and retailers</li>
                <li>Samples and supplier introductions</li>
                <li>Consolidated shipping from Korea</li>
                <li>A local contact for orders and support</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="bg-ink text-white">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-[88px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow className="text-[#B9C4CC]">COMPLIANCE</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">Checked before stock lands.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {compliance.map((c) => (
              <div key={c.title} className="border border-[#3A4C5C] rounded-lg p-[30px] flex flex-col gap-2.5">
                <span className="text-[22px] font-bold">{c.title}</span>
                <span className="text-[15px] leading-relaxed text-[#D3DAE0]">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-[88px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Eyebrow>PROCESS</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">Four steps to your shelf.</h2>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-teal pt-[18px] flex flex-col gap-2">
                <span className="text-sm font-bold text-teal-dark">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xl font-bold">{s.title}</span>
                <span className="text-[15px] leading-relaxed text-body">{s.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="bg-white border-t border-line scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-[88px] flex flex-wrap gap-14">
          <div className="flex-[1_1_320px] flex flex-col gap-4">
            <Eyebrow>ENQUIRY</Eyebrow>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">Start a conversation.</h2>
            <p className="text-base leading-relaxed text-body">We reply in English or Korean.</p>
            <div className="flex flex-col gap-1.5 text-base pt-2">
              <a href={`mailto:${contact.email.medical}`} className="underline hover:text-teal-dark">{contact.email.medical}</a>
              <a href={`tel:${contact.au.tel}`} className="hover:text-teal-dark">{contact.au.phone}</a>
              <a href={`tel:${contact.kr.tel}`} className="hover:text-teal-dark">{contact.kr.phone}</a>
            </div>
          </div>
          <div className="flex-[999_1_520px] min-w-0">
            <EnquiryForm defaultType="clinic" buttonClass="bg-teal-dark hover:bg-ink" />
          </div>
        </div>
      </section>
    </>
  )
}
