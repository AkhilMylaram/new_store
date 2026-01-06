import { ProductDetail } from '@/components/layout/ProductDetail'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetail id={params.id} />
}