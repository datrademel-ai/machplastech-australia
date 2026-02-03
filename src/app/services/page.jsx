export const metadata = {
  title: 'Our Services - Machplastech Australia',
  description: 'Comprehensive trade and business services connecting Australia and Korea',
}

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Our Services</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Comprehensive solutions for Korea-Australia trade</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Market Research</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Australian market analysis and opportunity assessment</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Feasibility studies for market entry</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Competitor analysis and positioning strategy</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Regulatory and compliance review</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <div className="text-6xl mb-6">🤝</div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Business Matching</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Connect Korean manufacturers with Australian buyers</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Partnership development and management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Contract negotiation support</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Cultural bridge and communication facilitation</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <div className="text-6xl mb-6">🚚</div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Logistics Solutions</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Shipping coordination between Korea and Australia</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Customs clearance and documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Warehousing and distribution management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Delivery tracking and coordination</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <div className="text-6xl mb-6">🔧</div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">After-Sales Support</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Technical support and troubleshooting</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Parts supply and replacement coordination</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Maintenance service arrangement</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-900 mr-2">✓</span>
              <span>Ongoing relationship management</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-700 mb-8">Let's discuss how we can help your business succeed</p>
        <a href="/contact" className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition">
          Contact Us Today
        </a>
      </div>
    </div>
  )
}
