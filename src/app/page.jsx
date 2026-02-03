import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">MACHPLASTECH Australia</h1>
        <p className="text-2xl mb-2 font-light">Your Gateway to Korean Industrial Innovation</p>
        <p className="text-lg mb-1 opacity-95">호주 기업과 한국 제조기술을 연결하는 산업 비즈니스 파트너</p>
        <p className="text-xl mb-8 font-semibold">Australia ↔ Korea Trade Bridge</p>
        <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Start Your Project →
        </Link>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">What We Do</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Market Research</h3>
            <p className="text-sm text-gray-600 mb-4">시장 조사</p>
            <p className="text-gray-700 text-sm">Australian market analysis, feasibility studies, competitor analysis, and regulatory review</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Business Matching</h3>
            <p className="text-sm text-gray-600 mb-4">비즈니스 매칭</p>
            <p className="text-gray-700 text-sm">Connect Korean manufacturers with Australian buyers and support partnership development</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Logistics</h3>
            <p className="text-sm text-gray-600 mb-4">물류 솔루션</p>
            <p className="text-gray-700 text-sm">Shipping coordination, warehousing, and delivery management across APAC</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-2 text-blue-900">After-Sales</h3>
            <p className="text-sm text-gray-600 mb-4">사후 지원</p>
            <p className="text-gray-700 text-sm">Technical support, parts supply, maintenance service, and ongoing assistance</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Korean Technology for Australian Industries</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 border-l-4 border-blue-900 p-8 rounded">
            <h3 className="text-xl font-bold mb-4 text-blue-900">🌾 Agriculture & Food</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Automated harvesting equipment</li>
              <li>• Food processing machinery</li>
              <li>• Smart farm solutions</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-900 p-8 rounded">
            <h3 className="text-xl font-bold mb-4 text-blue-900">🏭 Manufacturing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Industrial automation systems</li>
              <li>• Precision machining equipment</li>
              <li>• Quality control systems</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-900 p-8 rounded">
            <h3 className="text-xl font-bold mb-4 text-blue-900">🔬 Advanced Materials</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Engineering plastics</li>
              <li>• Semiconductor materials</li>
              <li>• Specialized components</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-900 p-8 rounded">
            <h3 className="text-xl font-bold mb-4 text-blue-900">⚡ Industrial Equipment</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Robotics & automation</li>
              <li>• Material handling systems</li>
              <li>• Production line equipment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">How We Work</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Initial inquiry & requirement analysis</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Sourcing</h3>
              <p className="text-sm text-gray-600">Korean manufacturer identification</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Negotiation</h3>
              <p className="text-sm text-gray-600">Terms negotiation & contract facilitation</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Logistics</h3>
              <p className="text-sm text-gray-600">Export documentation & shipping</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-bold mb-2">Support</h3>
              <p className="text-sm text-gray-600">Installation & ongoing assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="border border-gray-200 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Your Trusted Partner</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years<br />Korea-Australia Trade Experience</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Projects<br />Successful Partnerships Delivered</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Bilingual<br />Korean & English Expertise</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">2</div>
              <div className="text-gray-600">Offices<br />Sydney + Seoul</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
