"use client";

import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { products } from "../data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const formatPrice = (price: number) => {
  return price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
};

export default function BulkOrderPage() {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (productId: number, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const handleAddToCart = () => {
    Object.entries(quantities).forEach(([productId, quantity]) => {
      const product = products.find((p) => p.id === Number(productId));
      if (product && quantity > 0) {
        addToCart({ product, selectedVariant: product.variants[0], quantity });
      }
    });
    setQuantities({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bulk Order</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Base Price</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{formatPrice(product.variants[0].price)}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  min="0"
                  value={quantities[product.id] || ""}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      Number.parseInt(e.target.value) || 0
                    )
                  }
                  className="w-20"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-6">
        <Button onClick={handleAddToCart}>Add Bulk Order to Cart</Button>
      </div>
    </div>
  );
}
