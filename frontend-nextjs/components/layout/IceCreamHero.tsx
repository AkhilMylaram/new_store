import Link from 'next/link'
import Image from 'next/image'

export function IceCreamHero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Scoop Happiness
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Indulge in our premium ice cream flavors, crafted with the finest ingredients.
        </p>
        <div className="flex gap-3">
          <Link href="/products" className="btn btn-primary px-6 py-3">
            Shop Now
          </Link>
          <Link href="/login" className="btn btn-secondary px-6 py-3">
            Sign In
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
          <Image
            src="/images/hero-icecream.jpg"
            alt="Premium ice cream scoop"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  )
}