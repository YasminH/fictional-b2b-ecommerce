"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutForm() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Shipping Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" required />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" required />
          </div>
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input id="address" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" required />
          </div>
          <div>
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input id="postalCode" required />
          </div>
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input id="country" required />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Payment Information</h2>
        <RadioGroup defaultValue="credit-card">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <Label htmlFor="credit-card">Credit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
        </RadioGroup>
        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <Input id="expirationDate" placeholder="MM/YY" required />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" required />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </form>
  );
}
