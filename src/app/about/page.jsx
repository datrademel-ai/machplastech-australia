export const metadata = {
  title: 'About Us - Machplastech Australia',
  description: 'Learn about Machplastech Australia, your trusted Korea-Australia industrial gateway',
}

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">About Machplastech Australia</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Your trusted partner for Korea-Australia industrial trade</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Machplastech Australia serves as the vital bridge connecting Australian businesses with Korea's advanced industrial technology. As part of the Machplastech group with headquarters in Korea, we have consistently served as a trusted partner in international trade and industrial solutions over the years.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is to facilitate successful business partnerships by providing comprehensive support throughout the entire process—from initial market research and partner matching to logistics coordination and ongoing after-sales support.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand both Korean manufacturing excellence and Australian market needs, making us uniquely positioned to create valuable connections that drive business growth.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">🤝 Partnership</h3>
              <p className="text-gray-700">We build long-term relationships based on trust, transparency, and mutual success.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">🎯 Excellence</h3>
              <p className="text-gray-700">We are committed to delivering the highest quality products and services to our clients.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">🌏 Innovation</h3>
              <p className="text-gray-700">We continuously seek innovative solutions to meet evolving market needs.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🌉</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Cultural Bridge</h3>
            <p className="text-gray-700">Bilingual team with deep understanding of both Korean and Australian business cultures</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🔗</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Strong Network</h3>
            <p className="text-gray-700">Established relationships with leading Korean manufacturers and Australian buyers</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Market Expertise</h3>
            <p className="text-gray-700">In-depth knowledge of Australian market requirements and Korean capabilities</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Full Support</h3>
            <p className="text-gray-700">Comprehensive service from initial consultation to ongoing maintenance</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-12 text-white mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Global Network</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🇰🇷 Korea Headquarters</h3>
            <p className="mb-2"><strong>Machplastech Co., Ltd.</strong></p>
            <p className="mb-2">Phone: +82 10 7671-8123</p>
            <p className="mb-2">Email: admin@machplastech.com</p>
            <p className="mt-4 text-blue-200">Manufacturing, Engineering Plastics Distribution, Precision Machining</p>
          </div>

          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🇦🇺 Australia Office</h3>
            <p className="mb-2"><strong>Machplastech Australia</strong></p>
            <p className="mb-2">419 Malvern Rd, South Yarra VIC 3141</p>
            <p className="mb-2">Phone: +61 493 468 123</p>
            <p className="mb-2">Email: admin@machplastech.com.au</p>
            <p className="mt-4 text-blue-200">Trade Facilitation, Market Entry, Business Development</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">Ready to Explore Opportunities?</h2>
        <p className="text-xl text-gray-700 mb-8">Let's discuss how Korean technology can benefit your business</p>
        <a href="/contact" className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition">
          Contact Us Today
        </a>
      </div>
    </div>
  )
}
