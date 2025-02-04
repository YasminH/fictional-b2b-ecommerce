"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import AddToCartButton from "@/app/components/AddToCartButton"
import { useLastViewed } from "@/app/contexts/LastViewedContext"
import { products, type ProductVariant, type Review } from "../../data/products"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductReviews from "@/app/components/ProductReviews"
import ReviewForm from "@/app/components/ReviewForm"

const formatPrice = (price: number) => {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { setLastViewedProduct } = useLastViewed()
  const product = products.find((p) => p.id === Number(params.id))
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (product) {
      setLastViewedProduct(product)
      setSelectedVariant(product.variants[0] || null)
      setReviews(product.reviews)
    }
  }, [product, setLastViewedProduct])

  if (!product) {
    notFound()
  }

  const handleReviewSubmit = (newReview: { rating: number; comment: string; username: string }) => {
    const review: Review = {
      id: reviews.length + 1,
      userId: `user${reviews.length + 1}`,
      username: newReview.username,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
    }
    setReviews([...reviews, review])
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2 relative h-[400px]">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 1200px) 50vw, 33vw"
            className="rounded-lg shadow-lg object-cover"
          />
          {selectedVariant?.salePrice && (
            <div className="absolute top-4 right-4 bg-red-500 text-neutral-50 px-3 py-1 rounded-full text-lg font-bold dark:bg-red-900 dark:text-neutral-50">
              Sale
            </div>
          )}
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-neutral-950 dark:text-neutral-50">{product.name}</h1>
          {selectedVariant && (
            <div className="flex items-center">
              {selectedVariant.salePrice ? (
                <>
                  <p className="text-3xl font-bold text-red-500 dark:text-red-900">{formatPrice(selectedVariant.salePrice)}</p>
                  <p className="text-xl text-neutral-500 line-through ml-3 dark:text-neutral-400">
                    {formatPrice(selectedVariant.price)}
                  </p>
                </>
              ) : (
                <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{formatPrice(selectedVariant.price)}</p>
              )}
            </div>
          )}
          <p className="text-neutral-500 dark:text-neutral-400">{product.description}</p>
          <div className="space-y-2">
            <h3 className="font-semibold">Select Variant:</h3>
            <RadioGroup
              onValueChange={(value) =>
                setSelectedVariant(product.variants.find((v) => v.id === Number(value)) || null)
              }
              defaultValue={product.variants[0]?.id.toString()}
            >
              {product.variants.map((variant) => (
                <div key={variant.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={variant.id.toString()} id={`variant-${variant.id}`} />
                  <Label htmlFor={`variant-${variant.id}`}>{variant.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <AddToCartButton product={product} variant={selectedVariant} className="w-full md:w-auto" />
        </div>
      </div>
      <ProductReviews reviews={reviews} />
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  )
}

