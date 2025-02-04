"use client"

import { useCart } from "../contexts/CartContext"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const formatPrice = (price: number) => {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
}

export default function OrderSummary() {
  const { items } = useCart()

  const subtotal = items.reduce((sum, item) => {
    const price = item.selectedVariant?.salePrice || item.selectedVariant?.price || 0
    return sum + price * item.quantity
  }, 0)

  const shipping = 10 // Flat rate shipping
  const tax = subtotal * 0.1 // 10% tax rate
  const total = subtotal + shipping + tax

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={`${item.product.id}-${item.selectedVariant?.id}`} className="flex justify-between">
            <span>
              {item.product.name} - {item.selectedVariant?.name} (x{item.quantity})
            </span>
            <span>
              {formatPrice((item.selectedVariant?.salePrice || item.selectedVariant?.price || 0) * item.quantity)}
            </span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-between w-full">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between w-full">
          <span>Shipping</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between w-full">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between w-full font-bold text-lg">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

