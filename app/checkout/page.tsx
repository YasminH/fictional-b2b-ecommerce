import type { Metadata } from "next"
import CheckoutForm from "./CheckoutForm"
import OrderSummary from "./OrderSummary"

export const metadata: Metadata = {
  title: "Checkout | OfficeVibe",
  description: "Complete your purchase of office supplies and equipment",
}

export default function CheckoutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CheckoutForm />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

