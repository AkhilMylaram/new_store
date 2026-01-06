'use client'

import { useCartStore } from '@/store/cart'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCartStore()

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully!')
    clearCart()
    router.push('/order-summary')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="card p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total().toFixed(2)}</span>
        </div>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>
        <div className="space-y-3">
          <input className="w-full p-2 border rounded" placeholder="Full Name" />
          <input className="w-full p-2 border rounded" placeholder="Address" />
          <input className="w-full p-2 border rounded" placeholder="City" />
          <input className="w-full p-2 border rounded" placeholder="Zip Code" />
        </div>
        <button onClick={handlePlaceOrder} className="btn btn-primary w-full mt-6 py-3">
          Place Order
        </button>
      </div>
    </div>
  )
}