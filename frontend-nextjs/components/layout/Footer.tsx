import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">IceCream Store</h3>
            <p className="text-sm text-muted-foreground">Premium ice cream made with love.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shop</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/products" className="hover:underline">All Products</Link></li>
              <li><Link href="/cart" className="hover:underline">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IceCream Store. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
