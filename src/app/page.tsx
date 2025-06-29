import Link from 'next/link'

export default function Home() {
  const featuredColors = [
    { name: 'Sky Blue', hex: '#87CEEB', finish: 'Emulsion' },
    { name: 'Warm White', hex: '#F5F5DC', finish: 'Emulsion' },
    { name: 'Forest Green', hex: '#228B22', finish: 'Satin' },
    { name: 'Sunset Orange', hex: '#FF7F50', finish: 'Gloss' },
  ]

  const categories = [
    { name: 'Emulsion', description: 'Perfect for walls and ceilings', icon: '🏠' },
    { name: 'Gloss', description: 'High shine for wood and metal', icon: '✨' },
    { name: 'Satin', description: 'Elegant finish for any surface', icon: '🌟' },
  ]

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
        <div className="relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium text-white drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
            Premium paint products with custom color mixing, delivery services, and expert advice for all your painting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 border-2 border-gray-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Colors
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-900">Our Paint Categories</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Choose from our premium selection of paint finishes designed for every surface and style.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 bg-white group hover:border-blue-200">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#a49e94] transition">{category.name}</h3>
                <p className="text-gray-600 mb-6 font-medium">{category.description}</p>
                <Link 
                  href={`/products?finish=${category.name}`}
                  className="inline-flex items-center text-[#a49e94] hover:text-[#8c857a] font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  View Products 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Colors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-900">Popular Colors</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover our most loved colors that bring life to any room.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredColors.map((color) => (
              <div key={color.name} className="text-center group">
                <div 
                  className="w-full h-32 rounded-xl mb-4 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 group-hover:scale-105 transform"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <h3 className="font-bold mb-1 text-gray-800">{color.name}</h3>
                <p className="text-sm text-gray-600 font-medium">{color.finish}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="bg-[#a49e94] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#8c857a] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              View All Colors
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6 text-gray-900">About Our Store</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We&apos;re your local paint experts, providing quality products and personalized service for all your painting projects. 
                From custom color mixing to professional advice, we&apos;re here to help you achieve the perfect finish.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-800 font-semibold">Custom color mixing service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-800 font-semibold">Local delivery available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-800 font-semibold">Expert advice and support</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-80 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-600 font-medium">Your Local Paint Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Browse our selection of premium paints and place your order today. <br />
            We&apos;ll help you find the perfect color for your space.
          </p>
          <Link 
            href="/products" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Order Now
          </Link>
        </div>
      </section>
    </>
  )
}
