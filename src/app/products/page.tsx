'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Product {
  product_id: number
  name: string
  description: string | null
  hex_code: string
  finish: 'Emulsion' | 'Gloss' | 'Satin'
  size: 'OneL' | 'FourL' | 'TwentyL'
  price: number
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    finish: '',
    size: '',
    color: ''
  })

  const filterProducts = () => {
    let filtered = products

    if (filters.finish) {
      filtered = filtered.filter(product => product.finish === filters.finish)
    }

    if (filters.size) {
      filtered = filtered.filter(product => product.size === filters.size)
    }

    if (filters.color) {
      filtered = filtered.filter(product => 
        product.hex_code.toLowerCase().includes(filters.color.toLowerCase()) ||
        product.name.toLowerCase().includes(filters.color.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }

  useEffect(() => {
    filterProducts()
  }, [filterProducts])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      finish: '',
      size: '',
      color: ''
    })
  }

  const getSizeLabel = (size: string) => {
    switch (size) {
      case 'OneL': return '1L'
      case 'FourL': return '4L'
      case 'TwentyL': return '20L'
      default: return size
    }
  }

  const getFinishColor = (finish: string) => {
    switch (finish) {
      case 'Emulsion': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Gloss': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Satin': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
          <div className="text-xl text-gray-600 font-medium">Loading products...</div>
        </div>
      </div>
    )
  }

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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Our Paint Collection</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto font-medium text-white drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
            Discover our premium selection of paints in various finishes, sizes, and colors
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-10 border border-gray-100">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Filter Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Finish Type
              </label>
              <select
                value={filters.finish}
                onChange={(e) => handleFilterChange('finish', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
              >
                <option value="">All Finishes</option>
                <option value="Emulsion">Emulsion</option>
                <option value="Gloss">Gloss</option>
                <option value="Satin">Satin</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Container Size
              </label>
              <select
                value={filters.size}
                onChange={(e) => handleFilterChange('size', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
              >
                <option value="">All Sizes</option>
                <option value="OneL">1L</option>
                <option value="FourL">4L</option>
                <option value="TwentyL">20L</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Search Colors
              </label>
              <input
                type="text"
                value={filters.color}
                onChange={(e) => handleFilterChange('color', e.target.value)}
                placeholder="Search by color name..."
                className="w-full p-4 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-[#a49e94] text-white px-6 py-4 rounded-xl hover:bg-[#8c857a] transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-blue-600">{filteredProducts.length}</span> of <span className="font-bold">{products.length}</span> products
          </p>
          {Object.values(filters).some(f => f !== '') && (
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-xl">
            <div className="text-8xl mb-6">🎨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No products found</h3>
            <p className="text-gray-600 text-lg mb-8">Try adjusting your filters to find what you're looking for.</p>
            <button
              onClick={clearFilters}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              console.log('Product hex_code:', product.hex_code);
              return (
                <div key={product.product_id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-200 group">
                  {/* Color Swatch */}
                  <div 
                    className="h-48 w-full relative overflow-hidden"
                    style={{ backgroundColor: product.hex_code || '#e5e7eb' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    </div>
                    
                    {product.description && (
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                    )}
                    
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xs font-bold px-4 py-2 rounded-full shadow-sm border ${getFinishColor(product.finish)}`}>
                        {product.finish}
                      </span>
                      <span className="text-sm bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-semibold border border-gray-200">
                        {getSizeLabel(product.size)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold text-green-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <Link
                        href={`/order/${product.product_id}?size=${product.size}`}
                        className="bg-[#a49e94] text-white px-4 py-2 rounded-lg hover:bg-[#8c857a] transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
} 