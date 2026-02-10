import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      title: 'Market Research',
      desc: 'Australian market analysis, feasibility studies, competitor analysis, and regulatory review',
      image: '/images/services/business_meeting.jpg'
    },
    {
      title: 'Business Matching',
      desc: 'Connect Korean manufacturers with Australian buyers and support partnership development',
      image: '/images/services/warehouse.jpg'
    },
    {
      title: 'Logistics',
      desc: 'Shipping coordination, warehousing, and delivery management across APAC',
      image: '/images/services/container-port.jpg'
    },
    {
      title: 'After-Sales',
      desc: 'Technical support, parts supply, maintenance service, and ongoing assistance',
      image: '/images/services/cargo_ship.jpg'
    }
  ]

  const industries = [
    {
      title: 'Agriculture & Food',
      items: ['Automated harvesting equipment', 'Food processing machinery', 'Smart farm solutions'],
      image: '/images/industries/smart_farm.jpg',
      color: 'border-green-500'
    },
    {
      title: 'Manufacturing',
      items: ['Industrial automation systems', 'Precision machining equipment', 'Quality control systems'],
      image: '/images/industries/cnc-machine.jpg',
      color: 'border-blue-500'
    },
    {
      title: 'Advanced Materials',
      items: ['Engineering plastics', 'Semiconductor materials', 'Specialized components'],
      image: '/images/industries/materials.jpg',
      color: 'border-purple-500'
    },
    {
      title: 'Industrial Equipment',
      items: ['Robotics & automation', 'Material handling systems', 'Production line equipment'],
      image: '/images/industries/industrial_robot.webp',
      color: 'border-orange-500'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">MACHPLASTECH Australia</h1>
        <p className="text-2xl mb-2 font-light">Your Gateway to Korean Industrial Innovation</p>
        <p className="text-xl mb-8 font-semibold">Australia ↔ Korea Trade Bridge</p>
        <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Start Your Project →
        </Link>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">What We Do</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="relative h-40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-blue-900">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Korean Technology for Australian Industries</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industries.map((industry, i) => (
            <div key={i} className={`bg-gray-50 border-l-4 ${industry.color} rounded overflow-hidden`}>
              <div className="relative h-32">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-blue-900">{industry.title}</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  {industry.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">How We Work</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { num: '1', title: 'Consultation', desc: 'Initial inquiry & requirement analysis' },
              { num: '2', title: 'Sourcing', desc: 'Korean manufacturer identification' },
              { num: '3', title: 'Negotiation', desc: 'Terms negotiation & contract facilitation' },
              { num: '4', title: 'Logistics', desc: 'Export documentation & shipping' },
              { num: '5', title: 'Support', desc: 'Installation & ongoing assistance' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.num}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="border border-gray-200 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Cultural Bridge</h3>
              <p className="text-gray-600">Bilingual team with deep understanding of both Korean and Australian business cultures</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Strong Network</h3>
              <p className="text-gray-600">Established relationships with leading Korean manufacturers and Australian buyers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Market Expertise</h3>
              <p className="text-gray-600">In-depth knowledge of Australian market requirements and Korean capabilities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Korea & Australia</h3>
              <p className="text-gray-600">Direct support in both countries with local presence and understanding</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
