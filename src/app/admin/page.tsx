'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}
      
      {/* Hero Section */}
      <div className="relative w-full h-[220px] md:h-[280px] flex items-center" style={{ backgroundImage: 'url(/living-room.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.7)' }}>
            Admin Panel
          </h1>
          <p className="text-xl text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.7)' }}>
            Manage your paint store operations
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Navigation */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition duration-200 ${
                  activeTab === 'dashboard'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📊 Dashboard
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition duration-200 ${
                  activeTab === 'products'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                🎨 Products
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition duration-200 ${
                  activeTab === 'orders'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📦 Orders
              </button>
            </nav>
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Total Products</h3>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
              <p className="text-4xl font-bold text-blue-600 mb-2">24</p>
              <p className="text-sm text-gray-600">Active paint products</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Pending Orders</h3>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏳</span>
                </div>
              </div>
              <p className="text-4xl font-bold text-yellow-600 mb-2">8</p>
              <p className="text-sm text-gray-600">Awaiting processing</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Completed Orders</h3>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
              <p className="text-4xl font-bold text-green-600 mb-2">156</p>
              <p className="text-sm text-gray-600">This month</p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Actions</h3>
            <div className="space-y-4">
              <Link
                href="/admin/products"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 text-center font-bold shadow-lg"
              >
                🎨 Manage Products
              </Link>
              <Link
                href="/admin/orders"
                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300 text-center font-bold shadow-lg"
              >
                📦 View Orders
              </Link>
              <Link
                href="/admin/products/new"
                className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition duration-300 text-center font-bold shadow-lg"
              >
                ➕ Add New Product
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">New order received</span>
                </div>
                <span className="text-sm text-gray-500">2 min ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Product "Sky Blue" updated</span>
                </div>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Order #123 completed</span>
                </div>
                <span className="text-sm text-gray-500">3 hours ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">New product "Forest Green" added</span>
                </div>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/admin/products"
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 group"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition duration-300">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Product Management</h3>
              <p className="text-gray-600 mb-4">Add, edit, and manage your paint products</p>
              <span className="text-blue-600 hover:text-blue-800 font-bold">Manage Products →</span>
            </div>
          </Link>

          <Link
            href="/admin/orders"
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 group"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition duration-300">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Order Management</h3>
              <p className="text-gray-600 mb-4">View and update order status</p>
              <span className="text-green-600 hover:text-green-800 font-bold">View Orders →</span>
            </div>
          </Link>

          <Link
            href="/admin/products/new"
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 group"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition duration-300">
                <span className="text-3xl">➕</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Add Product</h3>
              <p className="text-gray-600 mb-4">Add new paint products to your inventory</p>
              <span className="text-purple-600 hover:text-purple-800 font-bold">Add Product →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 