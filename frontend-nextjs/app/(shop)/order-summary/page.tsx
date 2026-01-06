import Link from 'next/link'

export default function OrderSummaryPage() {
  return (
    <div className="max-w-2xl mx-auto text-center card p-8">
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Thank you for your order. Your ice cream is on its way!
      </p>
      <div className="mb-6">
        <p className="font-semibold">Order #ORD-{Math.floor(Math.random() * 100000)}</p>
        <p className="text-sm text-muted-foreground">Estimated delivery: 2-3 business days</p>
      </div>
      <Link href="/products" className="btn btn-primary px-6 py-2">
        Continue Shopping
      </Link>
    </div>
  )
}