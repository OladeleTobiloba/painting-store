import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-16" style={{ backgroundImage: "url('/living-room.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>About Our Store</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-white drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
            Your trusted partner for premium paint products and expert advice
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Company Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are your local paint experts, dedicated to providing quality products and personalized service 
              for all your painting projects. With years of experience in the industry, we understand that 
              choosing the right paint is crucial for achieving the perfect finish.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality extends beyond just selling paint. We offer custom color mixing, 
              professional advice, and reliable delivery services to make your painting projects as smooth 
              and successful as possible.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🎨</span>
                </div>
                <span className="text-gray-700 font-medium">Custom color mixing</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🚚</span>
                </div>
                <span className="text-gray-700 font-medium">Local delivery</span>
              </div>
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">💡</span>
                </div>
                <span className="text-gray-700 font-medium">Expert advice</span>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⭐</span>
                </div>
                <span className="text-gray-700 font-medium">Quality products</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Monday - Friday</span>
                    <span className="text-blue-600 font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Saturday</span>
                    <span className="text-blue-600 font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Sunday</span>
                    <span className="text-blue-600 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-200">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">123 Paint Street, Color City, CC 12345</span>
                  </div>
                  
                  <a href="tel:+1234567890" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-200">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">+1 (234) 567-890</span>
                  </a>
                  
                  <a href="mailto:info@paintingstore.com" className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-200">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">info@paintingstore.com</span>
                  </a>
                  
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-200">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">WhatsApp: +1 (234) 567-890</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Find Us</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-96 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 text-lg mb-4">Google Maps Embed</p>
                <p className="text-sm text-gray-500 max-w-md">
                  Replace this placeholder with your actual Google Maps embed code for better user experience
                </p>
                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                  <p className="text-xs text-gray-500 font-mono">
                    &lt;iframe src="https://www.google.com/maps/embed?pb=..."&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-12 rounded-xl text-center shadow-lg" style={{ backgroundColor: '#f5f5dc' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-gray-800">
            Visit our store or browse our products online. Our team is ready to help you find the perfect paint for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition duration-300 shadow-lg border-2 border-gray-300"
            >
              Browse Products
            </a>
            <a 
              href="tel:+1234567890" 
              className="border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 