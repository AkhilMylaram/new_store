import { IceCreamHero } from '@/components/layout/IceCreamHero'
import { ProductGrid } from '@/components/layout/ProductGrid'

export default function Home() {
  return (
    <div className="space-y-12">
      <IceCreamHero />
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Flavors</h2>
        <ProductGrid />
      </section>
      <section className="grid md:grid-cols-3 gap-6 text-center">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-muted-foreground">Made with real ingredients</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-muted-foreground">Delivered fresh to your door</p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
          <p className="text-muted-foreground">Thousands of 5-star reviews</p>
        </div>
      </section>
    </div>
  )
}
