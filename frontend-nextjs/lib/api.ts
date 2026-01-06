/**
 * Mock API layer for frontend development
 * Replace with real API calls when backend is ready
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api'

export async function fetchProducts() {
  // Mock response
  return [
    { id: 1, name: 'Vanilla Dream', price: 4.99 },
    { id: 2, name: 'Chocolate Bliss', price: 5.49 },
  ]
}

export async function fetchProductById(id: string) {
  // Mock response
  return { id: Number(id), name: 'Sample Product', price: 5.99 }
}

export async function createOrder(_data: any) {
  // Mock response
  return { id: 'ORD-' + Math.floor(Math.random() * 10000), status: 'processing' }
}