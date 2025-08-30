import { NextResponse } from 'next/server';

// In-memory storage for sales data (in production, use a database)
let salesData = [];

export async function GET() {
  return NextResponse.json(salesData);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newSale = {
      id: Date.now(),
      ...body,
      timestamp: new Date().toISOString(),
      total: parseFloat(body.total)
    };
    
    salesData.push(newSale);
    return NextResponse.json(newSale, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}