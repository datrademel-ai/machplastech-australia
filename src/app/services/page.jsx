import Image from 'next/image'

export const metadata = {
  title: 'Our Services - Machplastech Australia',
  description: 'Comprehensive trade and business services connecting Australia and Korea',
}

export default function Services() {
  const services = [
    {
      title: 'Market Research',
      image: '/images/services/business_meeting.jpg',
      items: [
        'Australian market analysis and opportunity assessment',
        'Feasibility studies for market entry',
        'Competitor analysis and positioning strategy',
        'Regulatory and compliance review'
      ]
    },
    {
      title: 'Business Matching',
      image: '/images/services/warehouse.jpg',
      items: [
        'Connect Korean manufacturers with Australian buyers',
        'Partnership development and management',
        'Contract negotiation support',
        'Cultural bridge and communication facilitation'
      ]
    },
    {
      title: 'Logistics Solutions',
      image: '/images/services/container-port.jpg',
      items: [
        'Shipping coordination between Korea and Australia',
        'Customs clearance and documentation',
        'Warehousing and distribution management',
        'Delivery tracking and coordination'
      ]
    },
    {
      title: 'After-Sales Support',
      image: '/images/services/cargo_ship.jpg',
      items: [
        'Technical support and troubleshooting',
        'Parts supply and replacement coordination',
        'Maintenance service arrangement',
        'Ongoing relationship management'
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Our Services</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Comprehensive solutions for Korea-Australia trade</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {services.map((service, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">{service.title}</h2>
              <ul className="space-y-3 text-gray-700">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
