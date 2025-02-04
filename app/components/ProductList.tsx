import ProductCard from "./ProductCard"
import type { Product } from "../data/products"

type ProductListProps = {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found matching your criteria.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

