import { ProductCard } from '@/components/cards/ProductCard'

export function ProductGrid() {
  const products = [
    { id: 1, name: 'Vanilla Dream', price: 4.99, image: '/images/vanilla.svg', description: 'Classic Madagascar vanilla' },
    { id: 2, name: 'Chocolate Bliss', price: 5.49, image: '/images/chocolate.svg', description: 'Rich dark chocolate' },
    { id: 3, name: 'Strawberry Fields', price: 5.99, image: '/images/strawberry.svg', description: 'Fresh strawberry swirl' },
    { id: 4, name: 'Mint Chip', price: 5.99, image: '/images/mint.svg', description: 'Cool mint with chocolate chips' },
    { id: 5, name: 'Salted Caramel', price: 6.49, image: '/images/caramel.svg', description: 'Sweet and salty perfection' },
    { id: 6, name: 'Cookies & Cream', price: 5.99, image: '/images/cookies.svg', description: 'Oreo cookie chunks' },
    { id: 7, name: 'Pistachio Delight', price: 6.99, image: '/images/pistachio.svg', description: 'Premium pistachio nuts' },
    { id: 8, name: 'Mango Sorbet', price: 4.99, image: '/images/mango.svg', description: 'Tropical dairy-free' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}