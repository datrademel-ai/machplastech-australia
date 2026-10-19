import EnquiryForm from '@/components/EnquiryForm'
import { contact } from '@/lib/site'

export const metadata = {
  title: 'Contact | Mach – Korea–Australia Trade',
  description: 'Contact Mach in Melbourne or Korea about industrial or medical & cosmetic products.',
}

function Office({ data, extra }) {
  return (
    <div className="bg-white border border-line rounded-lg p-8 flex flex-col gap-3 text-base leading-relaxed">
      <p className="text-[13px] font-medium tracking-[0.3em] text-muted">{data.label.toUpperCase()}</p>
      <div>
        {data.address.map((l) => (
          <p key={l}>{l}</p>
        ))}
        {extra}
      </div>
      <a href={`tel:${data.tel}`} className="font-bold hover:text-teal-dark">{data.phone}</a>
      <p className="text-sm text-body">{data.hours}</p>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-20 flex flex-col gap-4">
          <p className="text-[13px] font-medium tracking-[0.3em] text-[#B9C4CC]">CONTACT</p>
          <h1 className="text-4xl md:text-[52px] font-bold leading-tight">Talk to us in English or Korean.</h1>
          <p className="text-lg text-[#D3DAE0] max-w-[620px]">
            Tell us what you need and we&apos;ll route it to the right division.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-20 flex flex-wrap gap-14">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">Send an enquiry</h2>
            <EnquiryForm />
          </div>
          <div className="flex-[1_1_320px] flex flex-col gap-5">
            <Office data={contact.au} />
            <Office data={contact.kr} extra={<p className="text-sm text-body mt-1">{contact.kr.addressKo}</p>} />
            <div className="bg-white border border-line rounded-lg p-8 flex flex-col gap-3 text-base">
              <p className="text-[13px] font-medium tracking-[0.3em] text-muted">EMAIL</p>
              <p>
                Industrial<br />
                <a href={`mailto:${contact.email.industrial}`} className="underline hover:text-teal-dark break-all">{contact.email.industrial}</a>
              </p>
              <p>
                Medical &amp; Cosmetics<br />
                <a href={`mailto:${contact.email.medical}`} className="underline hover:text-teal-dark break-all">{contact.email.medical}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
