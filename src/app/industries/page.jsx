export const metadata = {
  title: 'Industries We Serve - Machplastech Australia',
  description: 'Korean technology solutions for Australian agriculture, manufacturing, materials, and industrial sectors',
}

export default function Industries() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Industries We Serve</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Korean Technology for Australian Industries</p>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">🌾 Agriculture & Food Processing</h2>
            <p className="text-lg text-gray-600 mb-6">Advanced automation solutions for modern farming</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">→</span>
                <span><strong>Automated Harvesting Equipment:</strong> Precision machinery for efficient crop collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">→</span>
                <span><strong>Food Processing Machinery:</strong> Hygienic and efficient processing systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">→</span>
                <span><strong>Smart Farm Solutions:</strong> IoT-enabled monitoring and control systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">→</span>
                <span><strong>Sorting & Packaging Systems:</strong> Automated quality control and packaging</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400">
            [Agriculture Automation Image]
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400">
            [Manufacturing Image]
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">🏭 Manufacturing & Production</h2>
            <p className="text-lg text-gray-600 mb-6">Cutting-edge manufacturing technology</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">→</span>
                <span><strong>Industrial Automation Systems:</strong> Complete factory automation solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">→</span>
                <span><strong>Precision Machining Equipment:</strong> CNC and MCT for high-precision work</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">→</span>
                <span><strong>Quality Control Systems:</strong> Automated inspection and testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">→</span>
                <span><strong>Production Line Integration:</strong> End-to-end manufacturing solutions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">🔬 Advanced Materials</h2>
            <p className="text-lg text-gray-600 mb-6">High-performance materials for demanding applications</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">→</span>
                <span><strong>Engineering Plastics:</strong> POM, PA6, PEEK, PPS, PTFE and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">→</span>
                <span><strong>Semiconductor Materials:</strong> High-purity components for chip manufacturing</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">→</span>
                <span><strong>Specialized Components:</strong> Custom-engineered parts for specific needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">→</span>
                <span><strong>Material Testing & Certification:</strong> Quality assurance services</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400">
            [Materials Image]
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400">
            [Industrial Equipment Image]
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">⚡ Industrial Equipment</h2>
            <p className="text-lg text-gray-600 mb-6">Comprehensive industrial machinery solutions</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">→</span>
                <span><strong>Robotics & Automation:</strong> Industrial robots for various applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">→</span>
                <span><strong>Material Handling Systems:</strong> Conveyors, lifts, and transport solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">→</span>
                <span><strong>Production Line Equipment:</strong> Assembly and processing machinery</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">→</span>
                <span><strong>Power & Control Systems:</strong> Electrical and control infrastructure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
        <p className="text-xl mb-8">We work across many sectors. Contact us to discuss your specific needs.</p>
        <a href="/contact" className="inline-block bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition">
          Get in Touch
        </a>
      </div>
    </div>
  )
}
