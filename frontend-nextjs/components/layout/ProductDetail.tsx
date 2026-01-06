'use client'

import Image from 'next/image'
import { useCartStore } from '@/store/cart'
import { toast } from 'react-toastify'
import { notFound } from 'next/navigation'

const products = [
  { id: 1, name: 'Vanilla Dream', price: 4.99, image: '/images/vanilla.jpg', description: 'Classic Madagascar vanilla', flavors: ['Vanilla', 'French Vanilla'] },
  { id: 2, name: 'Chocolate Bliss', price: 5.49, image: '/images/chocolate.jpg', description: 'Rich dark chocolate', flavors: ['Dark Chocolate', 'Milk Chocolate'] },
  { id: 3, name: 'Strawberry Fields', price: 5.99, image: '/images/strawberry.jpg', description: 'Fresh strawberry swirl', flavors: ['Strawberry', 'Strawberry Cheesecake'] },
  { id: 4, name: 'Mint Chip', price: 5.99, image: '/images/mint.jpg', description: 'Cool mint with chocolate chips', flavors: ['Mint', 'Mint Chocolate Chip'] },
  { id: 5, name: 'Salted Caramel', price: 6.49, image: '/images/caramel.jpg', description: 'Sweet and salty perfection', flavors: ['Salted Caramel', 'Caramel Swirl'] },
  { id: 6, name: 'Cookies & Cream', price: 5.99, image: '/images/cookies.jpg', description: 'Oreo cookie chunks', flavors: ['Cookies & Cream', 'Double Cookie'] },
  { id: 7, name: 'Pistachio Delight', price: 6.99, image: '/images/pistachio.jpg', description: 'Premium pistachio nuts', flavors: ['Pistachio', 'Pistachio Crunch'] },
  { id: 8, name: 'Mango Sorbet', price: 4.99, image: '/images/mango.jpg', description: 'Tropical dairy-free', flavors: ['Mango', 'Mango Lime'] },
]

export function ProductDetail({ id }: { id: string }) {
  const product = products.find((p) => p.id === parseInt(id))
  const { addItem } = useCartStore()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 })
    toast.success('Added to cart')
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-muted-foreground mb-6">{product.description}</p>

        <div className="card p-4 mb-6">
          <h3 className="font-semibold mb-2">Available Flavors:</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            {product.flavors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className="btn btn-primary px-6 py-3 flex-1"
          >
            Add to Cart
          </button>
          <button className="btn btn-secondary px-6 py-3">Add to Wishlist</button>
        </div>
      </div>
    </div>
  )
}