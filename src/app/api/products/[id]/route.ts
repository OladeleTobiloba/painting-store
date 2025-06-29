import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(request: Request, context: any) {
  try {
    const productId = parseInt(context.params.id)
    const body = await request.json()
    const { name, description, hex_code, finish, size, price } = body

    // Validate required fields
    if (!name || !hex_code || !finish || !size || !price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const product = await prisma.product.update({
      where: { product_id: productId },
      data: {
        name,
        description,
        hex_code,
        finish,
        size,
        price: parseFloat(price)
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request, context: any) {
  try {
    const productId = parseInt(context.params.id)

    // Check if product has any orders
    const orders = await prisma.order.findMany({
      where: { product_id: productId }
    })

    if (orders.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete product with existing orders' },
        { status: 400 }
      )
    }

    await prisma.product.delete({
      where: { product_id: productId }
    })

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
} 