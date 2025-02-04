"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import type { Product, ProductVariant } from "../data/products"

type CartItem = {
  product: Product
  selectedVariant: ProductVariant | null
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: { product: Product; selectedVariant: ProductVariant | null; quantity?: number }) => void
  removeFromCart: (productId: number, variantId: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = useCallback(
    ({
      product,
      selectedVariant,
      quantity = 1,
    }: { product: Product; selectedVariant: ProductVariant | null; quantity?: number }) => {
      setItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) => item.product.id === product.id && item.selectedVariant?.id === selectedVariant?.id,
        )
        if (existingItemIndex > -1) {
          const newItems = [...prevItems]
          newItems[existingItemIndex].quantity += quantity
          return newItems
        }
        return [...prevItems, { product, selectedVariant, quantity }]
      })
    },
    [],
  )

  const removeFromCart = useCallback((productId: number, variantId: number) => {
    setItems((prevItems) =>
      prevItems.filter((item) => !(item.product.id === productId && item.selectedVariant?.id === variantId)),
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  return <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

