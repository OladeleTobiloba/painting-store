'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import Navigation from '@/components/Navigation'

interface Product {
  product_id: number
  name: string
  description: string | null
  hex_code: string
  finish: 'Emulsion' | 'Gloss' | 'Satin'
  size: 'OneL' | 'FourL' | 'TwentyL'
  price: number
}

interface OrderForm {
  product_id: number
  size: string
  quantity: number
  customer_name: string
  phone: string
  address: string
  comment: string
}

function getContrastYIQ(hexcolor: string) {
  hexcolor = hexcolor.replace('#', '');
  if (hexcolor.length !== 6) return '#222';
  const r = parseInt(hexcolor.substr(0,2),16);
  const g = parseInt(hexcolor.substr(2,2),16);
  const b = parseInt(hexcolor.substr(4,2),16);
  const yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? '#222' : '#fff';
}

export default function OrderPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = React.use(params)
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialSize = searchParams.get('size') || 'OneL'
  
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState<OrderForm>({
    product_id: parseInt(productId),
    size: initialSize,
    quantity: 1,
    customer_name: '',
    phone: '',
    address: '',
    comment: ''
  })

  useEffect(() => {
    if (!productId) return;
    fetchProduct();
    setFormData(prev => ({
      ...prev,
      product_id: parseInt(productId),
      size: initialSize
    }));
  }, [productId, initialSize]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products?id=${productId}`)
      const data = await response.json()
      if (data.length > 0) {
        setProduct(data[0])
      }
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const order = await response.json()
        alert('Order submitted successfully! We will contact you soon.')
        router.push('/products')
      } else {
        const error = await response.json()
        alert(`Error: ${error.error}`)
      }
    } catch (error) {
      console.error('Error submitting order:', error)
      alert('Error submitting order. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const calculateTotal = () => {
    if (!product) return 0
    return product.price * formData.quantity
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
            <div className="text-xl text-gray-600">Loading product...</div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <div className="text-xl text-gray-600">Product not found</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Place Your Order</h1>
          <p className="text-xl opacity-90">Complete your purchase and we'll deliver to your doorstep</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Product Details</h2>
            
            <div 
              className="h-48 w-full rounded-xl mb-6 relative group border-2 border-gray-200"
              style={{ backgroundColor: product.hex_code || '#e5e7eb' }}
            >
              <div
                className="absolute bottom-3 right-3 px-3 py-2 rounded-lg text-sm font-mono shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  color: getContrastYIQ(product.hex_code || '#e5e7eb')
                }}
              >
                {product.hex_code}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{product.name}</h3>
            
            {product.description && (
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            )}
            
            <div className="flex justify-between items-center mb-6">
              <span className={`text-sm font-medium px-4 py-2 rounded-full ${getFinishColor(product.finish)}`}>
                {product.finish} Finish
              </span>
              <span className="text-3xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Why choose this paint?</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Premium quality finish</li>
                <li>• Easy to apply and clean</li>
                <li>• Long-lasting durability</li>
                <li>• Environmentally friendly</li>
              </ul>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Container Size
                  </label>
                  <input
                    type="text"
                    value={formData.size === 'OneL' ? '1L' : formData.size === 'FourL' ? '4L' : formData.size === 'TwentyL' ? '20L' : formData.size}
                    disabled
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 text-lg cursor-not-allowed shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    min="1"
                    max="100"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                  placeholder="Enter your complete delivery address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any special requirements, delivery preferences, or notes..."
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per unit:</span>
                    <span className="font-medium text-gray-900">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-medium text-gray-900">{formData.quantity}</span>
                  </div>
                  <div className="border-t border-blue-200 pt-3">
                    <div className="flex justify-between font-bold text-xl text-blue-600">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 transition duration-300 font-bold text-lg shadow-lg"
              >
                {submitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing Order...
                  </div>
                ) : (
                  'Place Order Now'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 