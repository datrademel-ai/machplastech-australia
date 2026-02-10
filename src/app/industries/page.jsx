import Image from 'next/image'

export const metadata = {
  title: 'Industries We Serve - Machplastech Australia',
  description: 'Korean technology solutions for Australian agriculture, manufacturing, materials, and industrial sectors',
}

export default function Industries() {
  const industries = [
    {
      title: 'Agriculture & Food Processing',
      subtitle: 'Advanced automation solutions for modern farming',
      image: '/images/industries/smart_farm.jpg',
      color: 'text-green-600',
      items: [
        { name: 'Automated Harvesting Equipment', desc: 'Precision machinery for efficient crop collection' },
        { name: 'Food Processing Machinery', desc: 'Hygienic and efficient processing systems' },
        { name: 'Smart Farm Solutions', desc: 'IoT-enabled monitoring and control systems' },
        { name: 'Sorting & Packaging Systems', desc: 'Automated quality control and packaging' }
      ]
    },
    {
      title: 'Manufacturing & Production',
      subtitle: 'Cutting-edge manufacturing technology',
      image: '/images/industries/cnc-machine.jpg',
      color: 'text-blue-600',
      items: [
        { name: 'Industrial Automation Systems', desc: 'Complete factory automation solutions' },
        { name: 'Precision Machining Equipment', desc: 'CNC and MCT for high-precision work' },
        { name: 'Quality Control Systems', desc: 'Automated inspection and testing' },
        { name: 'Production Line Integration', desc: 'End-to-end manufacturing solutions' }
      ]
    },
    {
      title: 'Advanced Materials',
      subtitle: 'High-performance materials for demanding applications',
      image: '/images/industries/materials.jpg',
      color: 'text-purple-600',
      items: [
        { name: 'Engineering Plastics', desc: 'POM, PA6, ABS, MP5000, PTFE and more' },
        { name: 'Semiconductor Materials', desc: 'High-purity components for chip manufacturing' },
        { name: 'Specialized Components', desc: 'Custom-engineered parts for specific needs' },
        { name: 'Material Testing & Certification', desc: 'Quality assurance services' }
      ]
    },
    {
      title: 'Industrial Equipment',
      subtitle: 'Comprehensive industrial machinery solutions',
      image: '/images/industries/industrial_robot.webp',
      color: 'text-orange-600',
      items: [
        { name: 'Robotics & Automation', desc: 'Industrial robots for various applications' },
        { name: 'Material Handling Systems', desc: 'Conveyors, lifts, and transport solutions' },
        { name: 'Production Line Equipment', desc: 'Assembly and processing machinery' },
        { name: 'Power & Control Systems', desc: 'Electrical and control infrastructure' }
      ]
    }
  ]

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Industries We Serve</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Korean Technology for Australian Industries</p>

      <div className="space-y-16">
        {industries.map((industry, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">{industry.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{industry.subtitle}</p>
              <ul className="space-y-3 text-gray-700">
                {industry.items.map((item, j) => (
                  <li key={j} className="flex items-start">
                    <span className={`${industry.color} font-bold mr-2`}>→</span>
                    <span><strong>{item.name}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`relative h-64 rounded-xl overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
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
