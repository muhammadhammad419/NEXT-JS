import { NextResponse } from 'next/server';
import { products } from '../../../data/products';

let productsData = [...products];

export async function GET() {
  return NextResponse.json(productsData);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newProduct = {
      id: Date.now(),
      ...body,
      price: parseFloat(body.price),
      rating: parseFloat(body.rating)
    };
    
    productsData.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    const productIndex = productsData.findIndex(p => p.id === id);
    if (productIndex === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    productsData[productIndex] = {
      ...productsData[productIndex],
      ...updateData,
      price: parseFloat(updateData.price),
      rating: parseFloat(updateData.rating)
    };
    
    return NextResponse.json(productsData[productIndex]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));
    
    const productIndex = productsData.findIndex(p => p.id === id);
    if (productIndex === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    productsData.splice(productIndex, 1);
    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}