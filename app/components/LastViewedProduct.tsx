"use client"

import { useLastViewed } from "../contexts/LastViewedContext"
import ProductCard from "./ProductCard"

export default function LastViewedProduct() {
  const { lastViewedProduct } = useLastViewed()

  if (!lastViewedProduct) {
    return null
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Last Viewed Product</h2>
      <ProductCard product={lastViewedProduct} />
    </div>
  )
}

