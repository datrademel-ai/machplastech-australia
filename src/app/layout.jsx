import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Machplastech Australia - Korea-Australia Industrial Gateway',
  description: 'Your gateway to Korean industrial innovation. Connecting Australian businesses with Korean manufacturing technology.',
  keywords: 'Korean industrial equipment, Australia Korea trade, automation systems, engineering plastics, Korean technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
