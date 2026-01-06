'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

export default function Header() {
  const { items } = useCartStore()
  const [menuOpen, setMenuOpen] = useState(false)

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          IceCream Store
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/products" className="hover:text-primary">Products</Link>
          <Link href="/cart" className="hover:text-primary">Cart ({cartCount})</Link>
          <Link href="/profile" className="hover:text-primary">Profile</Link>
          <Link href="/login" className="hover:text-primary">Login</Link>
          <Link href="/admin/products" className="hover:text-primary">Admin</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-4 py-2 gap-2">
            <Link href="/products" className="py-2">Products</Link>
            <Link href="/cart" className="py-2">Cart ({cartCount})</Link>
            <Link href="/profile" className="py-2">Profile</Link>
            <Link href="/login" className="py-2">Login</Link>
            <Link href="/admin/products" className="py-2">Admin</Link>
          </div>
        </div>
      )}
    </header>
  )
}
