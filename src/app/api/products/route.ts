import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const finish = searchParams.get('finish')
    const size = searchParams.get('size')
    const color = searchParams.get('color')
    const id = searchParams.get('id')

    const where: Record<string, unknown> = {}
    
    if (id) {
      where.product_id = parseInt(id)
    }
    if (finish) {
      where.finish = finish
    }
    if (size) {
      where.size = size
    }
    if (color) {
      where.hex_code = {
        contains: color
      }
    }

    const products = await prisma.product.findMany({
      where,
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, hex_code, finish, size, price } = body

    // Validate required fields
    if (!name || !hex_code || !finish || !size || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        hex_code,
        finish,
        size,
        price: parseFloat(price)
      }
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
} 