"use client"

import Link from "next/link"
import { useCart } from "../contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

const formatPrice = (price: number) => {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
}

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart()

  const total = items.reduce((sum, item) => {
    const price = item.selectedVariant?.salePrice || item.selectedVariant?.price || 0
    return sum + price * item.quantity
  }, 0)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => {
              const price = item.selectedVariant?.salePrice || item.selectedVariant?.price || 0
              const isOnSale = item.selectedVariant?.salePrice !== undefined
              return (
                <li
                  key={`${item.product.id}-${item.selectedVariant?.id || "default"}`}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <Link href={`/product/${item.product.id}`} className="font-semibold hover:underline">
                      {item.product.name} {item.selectedVariant ? `- ${item.selectedVariant.name}` : ""}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {formatPrice(price)} x {item.quantity}
                      {isOnSale && <span className="ml-2 text-red-500 font-semibold">Sale</span>}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold mr-4">{formatPrice(price * item.quantity)}</p>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeFromCart(item.product.id, item.selectedVariant?.id || 0)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-2xl font-bold mb-4 md:mb-0">Total: {formatPrice(total)}</p>
            <div className="space-x-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

