export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Machplastech Australia</h3>
          <p className="text-gray-300 mb-2">Korea-Australia Industrial Gateway</p>
          <p className="text-gray-400">419 Malvern Rd</p>
          <p className="text-gray-400">South Yarra VIC 3141</p>
          <p className="text-gray-400">Australia</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
          <p className="text-gray-300 mb-2">Australia: +61 493 468 123</p>
          <p className="text-gray-300 mb-2">Email: admin@machplastech.com.au</p>
          <p className="text-gray-400 mt-4">Korea HQ: +82 10 7671-8123</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Services</h3>
          <p className="text-gray-300">Market Research</p>
          <p className="text-gray-300">Business Matching</p>
          <p className="text-gray-300">Logistics Solutions</p>
          <p className="text-gray-300">After-Sales Support</p>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-700 text-gray-400">
        <p>&copy; 2025 Machplastech Australia. All rights reserved.</p>
      </div>
    </footer>
  )
}
