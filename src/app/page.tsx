import Navigation from '@/components/Navigation'
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white" style={{ backgroundImage: "url('/living-room.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
            Premium paint products with custom color mixing, delivery services, and expert advice for all your painting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 border-2 border-gray-300 shadow-md"
            >
              Explore Colors
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300 shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Our Paint Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="text-center p-6 rounded-lg border hover:shadow-lg transition duration-300 bg-white group">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition">{category.name}</h3>
                <p className="text-gray-700 mb-4 font-medium">{category.description}</p>
                <Link 
                  href={`/products?finish=${category.name}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Products →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Colors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Popular Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredColors.map((color) => (
              <div key={color.name} className="text-center">
                <div 
                  className="w-full h-32 rounded-lg mb-4 shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <h3 className="font-bold mb-1 text-gray-800">{color.name}</h3>
                <p className="text-sm text-gray-700 font-medium">{color.finish}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/products" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              View All Colors
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6 text-gray-900">About Our Store</h2>
              <p className="text-gray-700 mb-6 font-medium">
                We're your local paint experts, providing quality products and personalized service for all your painting projects. 
                From custom color mixing to professional advice, we're here to help you achieve the perfect finish.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-800 font-semibold">Custom color mixing service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-800 font-semibold">Local delivery available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-800 font-semibold">Expert advice and support</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Store Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#f5f5dc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-800">
            Browse our selection of premium paints and place your order today. <br />
            We'll help you find the perfect color for your space.
          </p>
          <Link 
            href="/products" 
            className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 border-2 border-gray-300 shadow-md"
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Paint Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
