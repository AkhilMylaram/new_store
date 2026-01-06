'use client'

import { useCartStore } from '@/store/cart'
import { toast } from 'react-toastify'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/products" className="btn btn-primary px-6 py-2">
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="card p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                className="w-16 p-1 border rounded text-center"
              />
              <button
                onClick={() => {
                  removeItem(item.id)
                  toast.success('Removed from cart')
                }}
                className="btn btn-secondary px-3 py-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 card p-6">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-xl font-bold">${total().toFixed(2)}</span>
        </div>
        <Link href="/checkout" className="btn btn-primary w-full mt-4 py-3 text-center block">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}