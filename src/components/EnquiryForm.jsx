'use client'

import { useState } from 'react'
import { contact } from '@/lib/site'

// Static site (output: 'export') has no backend, so the form opens the
// visitor's email app with the enquiry pre-filled, addressed to the right division.
const types = [
  { value: 'industrial', label: 'Industrial products / equipment', to: contact.email.industrial },
  { value: 'brand', label: 'Korean brand / manufacturer (Medical & Cosmetics)', to: contact.email.medical },
  { value: 'clinic', label: 'Australian clinic or salon', to: contact.email.medical },
  { value: 'retailer', label: 'Australian retailer / distributor', to: contact.email.medical },
  { value: 'other', label: 'Other', to: contact.email.industrial },
]

const field =
  'w-full px-3.5 py-3 border border-[#B5BEC4] rounded bg-white text-ink focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent'

export default function EnquiryForm({ defaultType = 'industrial', buttonClass = 'bg-ink hover:bg-[#22364A]' }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', type: defaultType, message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const t = types.find((x) => x.value === form.type) || types[0]
    const subject = `Website enquiry – ${t.label}${form.company ? ` – ${form.company}` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Enquiry type: ${t.label}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${t.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-[18px] sm:grid-cols-2">
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Name *
        <input name="name" required value={form.name} onChange={onChange} className={field} autoComplete="name" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Company
        <input name="company" value={form.company} onChange={onChange} className={field} autoComplete="organization" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Email *
        <input type="email" name="email" required value={form.email} onChange={onChange} className={field} autoComplete="email" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Phone
        <input type="tel" name="phone" value={form.phone} onChange={onChange} className={field} autoComplete="tel" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium sm:col-span-2">
        I am enquiring about
        <select name="type" value={form.type} onChange={onChange} className={field}>
          {types.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium sm:col-span-2">
        Message *
        <textarea name="message" required rows={5} value={form.message} onChange={onChange} className={`${field} resize-y`} />
      </label>
      <div className="sm:col-span-2 flex flex-col gap-3">
        <button type="submit" className={`self-start px-7 py-3.5 text-white font-bold rounded transition ${buttonClass}`}>
          Send enquiry
        </button>
        {sent && (
          <p className="text-sm text-body" role="status">
            Your email app should open with the message ready to send. If it doesn&apos;t, email us directly at{' '}
            <a className="underline" href={`mailto:${(types.find((x) => x.value === form.type) || types[0]).to}`}>
              {(types.find((x) => x.value === form.type) || types[0]).to}
            </a>.
          </p>
        )}
      </div>
    </form>
  )
}
