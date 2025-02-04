"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useLastViewed } from "../contexts/LastViewedContext"
import type { Product } from "../data/products"

const formatPrice = (price: number) => {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
}

export default function ProductCard({ product }: { product: Product }) {
  const { setLastViewedProduct } = useLastViewed()

  const handleClick = () => {
    setLastViewedProduct(product)
  }

  const prices = product.variants
    .map((v) => v.salePrice || v.price)
    .filter((price) => typeof price === "number" && !isNaN(price))

  const minPrice = prices.length > 0 ? Math.min(...prices) : 0
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0
  const hasSale = product.variants.some((v) => v.salePrice != null)

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/product/${product.id}`} onClick={handleClick}>
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 1200px) 50vw, 33vw"
            className="object-cover transition-transform hover:scale-105"
          />
          {hasSale && (
            <div className="absolute top-2 right-2 bg-red-500 text-neutral-50 px-2 py-1 rounded-full text-sm font-bold dark:bg-red-900 dark:text-neutral-50">
              Sale
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center">
          {prices.length > 0 ? (
            minPrice !== maxPrice ? (
              <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {formatPrice(minPrice)} - {formatPrice(maxPrice)}
              </p>
            ) : (
              <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">{formatPrice(minPrice)}</p>
            )
          ) : (
            <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">Price not available</p>
          )}
          {hasSale && <p className="text-sm text-red-500 ml-2 dark:text-red-900">On Sale</p>}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" asChild className="w-full">
          <Link href={`/product/${product.id}`} onClick={handleClick}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

