"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "../contexts/CartContext"
import { ShoppingCart, Check } from "lucide-react"
import type { Product, ProductVariant } from "../data/products"

type AddToCartButtonProps = {
  product: Product
  variant: ProductVariant | null
  className?: string
}

const formatPrice = (price: number) => {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
}

export default function AddToCartButton({ product, variant, className }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    if (variant) {
      addToCart({ product, selectedVariant: variant })
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 1500) // Reset after 1.5 seconds
    }
  }

  const price = variant?.salePrice || variant?.price || 0
  const isOnSale = variant?.salePrice !== undefined

  return (
    <Button
      onClick={handleAddToCart}
      className={`relative overflow-hidden ${className}`}
      disabled={isAdded || !variant}
      variant="secondary"
    >
      <AnimatePresence mode="wait">
        {isAdded ? (
          <motion.div
            key="added"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Check className="mr-2" />
            Added!
          </motion.div>
        ) : (
          <motion.div
            key="add"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <ShoppingCart className="mr-2" />
            Add to Cart - {formatPrice(price)}
            {isOnSale && <span className="ml-2 text-red-500 font-semibold">Sale</span>}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}

