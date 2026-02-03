export const metadata = {
  title: 'Korean Solutions - Machplastech Australia',
  description: 'Explore our range of Korean industrial solutions and products',
}

export default function Solutions() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Korean Solutions</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Advanced technology from Korea's leading manufacturers</p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Automation Systems</h2>
          <p className="text-gray-600 mb-4">Complete automation solutions for various industries</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Industrial robotics</li>
            <li>• Process automation</li>
            <li>• Control systems</li>
            <li>• Integration services</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Processing Equipment</h2>
          <p className="text-gray-600 mb-4">High-performance processing machinery</p>
          <ul className="space-y-2 text-gray-700">
            <li>• CNC machining centers</li>
            <li>• Food processing equipment</li>
            <li>• Material handling systems</li>
            <li>• Packaging machinery</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Engineering Plastics</h2>
          <p className="text-gray-600 mb-4">Premium engineering plastic materials</p>
          <ul className="space-y-2 text-gray-700">
            <li>• POM (Polyacetal)</li>
            <li>• PA6/PA66 (Nylon)</li>
            <li>• PEEK (High-performance)</li>
            <li>• Custom materials</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Precision Components</h2>
          <p className="text-gray-600 mb-4">High-precision manufactured parts</p>
          <ul className="space-y-2 text-gray-700">
            <li>• CNC machined parts</li>
            <li>• Custom components</li>
            <li>• Laser marked products</li>
            <li>• Quality certified</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Smart Solutions</h2>
          <p className="text-gray-600 mb-4">IoT and Industry 4.0 technology</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Smart factory systems</li>
            <li>• IoT monitoring</li>
            <li>• Data analytics</li>
            <li>• Cloud integration</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Custom Solutions</h2>
          <p className="text-gray-600 mb-4">Tailored to your specific needs</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Requirement analysis</li>
            <li>• Custom design</li>
            <li>• Prototyping</li>
            <li>• Full production</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Why Korean Technology?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Quality & Reliability</h3>
            <p className="text-gray-700">Korean manufacturers are known for their commitment to quality, rigorous testing, and reliable performance. Products meet international standards and certifications.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Innovation</h3>
            <p className="text-gray-700">Korea is at the forefront of technological innovation, particularly in automation, electronics, and advanced manufacturing. Access cutting-edge solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Cost-Effective</h3>
            <p className="text-gray-700">Korean products offer excellent value, combining high quality with competitive pricing. Get premium technology without premium prices.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Strong Support</h3>
            <p className="text-gray-700">Through our network, you receive comprehensive support including installation, training, maintenance, and ongoing technical assistance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
