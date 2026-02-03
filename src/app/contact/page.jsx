'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // EmailJS 설정 필요 (호주 사이트용 템플릿)
    // 지금은 콘솔에만 출력
    console.log('Form submitted:', formData)
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Contact Us</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Get in touch to start your project</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition disabled:bg-gray-400"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Thank you! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Contact Information</h2>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">🇦🇺 Australia Office</h3>
            <p className="text-gray-700 mb-2"><strong>Address:</strong></p>
            <p className="text-gray-700 mb-4">419 Malvern Rd<br/>South Yarra VIC 3141<br/>Australia</p>
            
            <p className="text-gray-700 mb-2"><strong>Phone:</strong></p>
            <p className="text-gray-700 mb-4">+61 493 468 123</p>
            
            <p className="text-gray-700 mb-2"><strong>Email:</strong></p>
            <p className="text-gray-700 mb-4">admin@machplastech.com.au</p>
            
            <p className="text-gray-700 mb-2"><strong>Business Hours:</strong></p>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM AEDT</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">🇰🇷 Korea Headquarters</h3>
            <p className="text-gray-700 mb-2"><strong>Address:</strong></p>
            <p className="text-gray-700 mb-4">경상남도 양산시 상북면 석계산단 2길 113 A<br/>Korea</p>
            
            <p className="text-gray-700 mb-2"><strong>Phone:</strong></p>
            <p className="text-gray-700 mb-4">+82 10 7671-8123</p>
            
            <p className="text-gray-700 mb-2"><strong>Email:</strong></p>
            <p className="text-gray-700 mb-4">admin@machplastech.com</p>
            
            <p className="text-gray-700 mb-2"><strong>Business Hours:</strong></p>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM KST</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Prefer to talk?</h2>
        <p className="text-xl mb-8">Call us directly and we'll be happy to discuss your needs</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div>
            <p className="text-blue-200 mb-2">Australia</p>
            <a href="tel:+61493468123" className="text-2xl font-bold hover:text-blue-200 transition">+61 493 468 123</a>
          </div>
          <div>
            <p className="text-blue-200 mb-2">Korea</p>
            <a href="tel:+821076718123" className="text-2xl font-bold hover:text-blue-200 transition">+82 10 7671-8123</a>
          </div>
        </div>
      </div>
    </div>
  )
}
