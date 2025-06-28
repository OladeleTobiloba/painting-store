'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
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
      case 'Emulsion': return 'bg-blue-100 text-blue-800'
      case 'Gloss': return 'bg-yellow-100 text-yellow-800'
      case 'Satin': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-xl text-gray-600">Loading products...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-16" style={{ backgroundImage: "url('/living-room.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>Our Paint Collection</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto font-medium text-white drop-shadow" style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
            Discover our premium selection of paints in various finishes, sizes, and colors
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Filter Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Finish Type
              </label>
              <select
                value={filters.finish}
                onChange={(e) => handleFilterChange('finish', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              >
                <option value="">All Finishes</option>
                <option value="Emulsion">Emulsion</option>
                <option value="Gloss">Gloss</option>
                <option value="Satin">Satin</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Container Size
              </label>
              <select
                value={filters.size}
                onChange={(e) => handleFilterChange('size', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              >
                <option value="">All Sizes</option>
                <option value="OneL">1L</option>
                <option value="FourL">4L</option>
                <option value="TwentyL">20L</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Colors
              </label>
              <input
                type="text"
                value={filters.color}
                onChange={(e) => handleFilterChange('color', e.target.value)}
                placeholder="Search by color name..."
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition duration-300 font-medium"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
          </p>
          {Object.values(filters).some(f => f !== '') && (
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              console.log('Product hex_code:', product.hex_code);
              return (
                <div key={product.product_id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200">
                  {/* Color Swatch */}
                  <div 
                    className="h-40 w-full rounded-3xl"
                    style={{ backgroundColor: product.hex_code || '#e5e7eb' }}
                  />
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                    </div>
                    
                    {product.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    )}
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm border ${getFinishColor(product.finish)}`}>
                        {product.finish}
                      </span>
                      <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium">
                        {getSizeLabel(product.size)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <Link
                        href={`/order/${product.product_id}?size=${product.size}`}
                        className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition duration-300 font-medium"
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
    </div>
  )
} 