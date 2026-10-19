'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Seal from '@/components/Seal'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/industries', label: 'Industrial' },
  { href: '/medical-cosmetics', label: 'Medical & Cosmetics' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  return (
    <header className="bg-white border-b border-line sticky top-0 z-50">
      <nav className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between gap-4" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Seal size={40} title="Mach" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-[0.16em]">MACH</span>
            <span className="text-[10px] font-medium tracking-[0.24em] text-muted">KOREA · AUSTRALIA</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 text-[15px] font-medium">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-3.5 py-3 border-b-2 transition ${
                  isActive(item.href) ? 'border-ink' : 'border-transparent hover:border-line'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link href="/contact" className="block px-5 py-3 bg-ink text-white rounded hover:bg-[#22364A] transition">
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="lg:hidden p-2.5 -mr-2.5"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden border-t border-line px-6 py-2 text-base font-medium bg-white">
          {[...nav, { href: '/contact', label: 'Contact' }].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-3.5 ${isActive(item.href) ? 'text-teal-dark' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
