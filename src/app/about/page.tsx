export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="py-20 flex items-center justify-center w-full relative"
        style={{
          background: "red",
          backgroundImage: "url('/living-room.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay removed for debugging */}
        <div className="relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>About Our Store</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-white drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
            Your trusted partner for premium paint products and expert advice
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Company Information */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We are your local paint experts, dedicated to providing quality products and personalized service 
              for all your painting projects. With years of experience in the industry, we understand that 
              choosing the right paint is crucial for achieving the perfect finish.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Our commitment to quality extends beyond just selling paint. We offer custom color mixing, 
              professional advice, and reliable delivery services to make your painting projects as smooth 
              and successful as possible.
            </p>

            <h3 className="text-2xl font-bold mb-8 text-gray-800">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-lg">🎨</span>
                </div>
                <span className="text-gray-800 font-semibold">Custom color mixing</span>
              </div>
              <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-lg">🚚</span>
                </div>
                <span className="text-gray-800 font-semibold">Local delivery</span>
              </div>
              <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-lg">💡</span>
                </div>
                <span className="text-gray-800 font-semibold">Expert advice</span>
              </div>
              <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-lg">⭐</span>
                </div>
                <span className="text-gray-800 font-semibold">Quality products</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-blue-600 font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-blue-600 font-bold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-blue-600 font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition duration-300">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold">123 Paint Street, Color City, CC 12345</span>
                  </div>
                  
                  <a href="tel:+1234567890" className="flex items-center p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition duration-300">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold">+1 (234) 567-890</span>
                  </a>
                  
                  <a href="mailto:info@paintingstore.com" className="flex items-center p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition duration-300">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold">info@paintingstore.com</span>
                  </a>
                  
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition duration-300">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold">WhatsApp: +1 (234) 567-890</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Find Us</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 h-96 rounded-2xl flex items-center justify-center shadow-inner">
              <div className="text-center">
                <div className="text-8xl mb-6">🗺️</div>
                <p className="text-gray-700 text-xl mb-4 font-semibold">Google Maps Embed</p>
                <p className="text-gray-600 max-w-md mx-auto">
                  Replace this placeholder with your actual Google Maps embed code for better user experience
                </p>
                <div className="mt-6 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                  <p className="text-sm text-gray-500 font-mono">
                    &lt;iframe src="https://www.google.com/maps/embed?pb=..."&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-16 rounded-2xl text-center shadow-xl bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto text-blue-100">
            Visit our store or browse our products online. Our team is ready to help you find the perfect paint for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/products" 
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Browse Products
            </a>
            <a 
              href="tel:+1234567890" 
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
} 