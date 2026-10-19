import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Mach – Korea–Australia Trade | Industrial · Medical & Cosmetics',
  description:
    'Mach sources, imports and supports Korean products in Australia across two divisions: industrial materials and equipment, and medical and cosmetic products.',
  keywords:
    'Korean cosmetics import Australia, K-beauty distributor Australia, Korean medical devices, Korean industrial equipment, engineering plastics, Australia Korea trade',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ground text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
