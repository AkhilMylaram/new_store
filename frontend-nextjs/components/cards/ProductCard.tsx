'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/cart'
import { toast } from 'react-toastify'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 })
    toast.success('Added to cart')
  }

  return (
    <div className="card overflow-hidden flex flex-col">
      <div className="aspect-square relative bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized={true}
            onError={(e) => {
              // Hide broken image, keep gradient background
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        {!product.image && (
          <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">
            🍦
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground flex-1">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <div className="flex gap-2">
            <Link
              href={`/products/${product.id}`}
              className="px-3 py-1 text-sm border rounded hover:bg-muted"
            >
              View
            </Link>
            <button
              onClick={handleAddToCart}
              className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}