"use client"

import { useState } from "react"
import ProductList from "../components/ProductList"
import ProductFilters from "../components/ProductFilters"
import { products, type Product } from "../data/products"

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  const handleFilterChange = ({ categories, priceRange }: { categories: string[]; priceRange: string }) => {
    let filtered = products

    if (categories.length > 0) {
      filtered = filtered.filter((product) => categories.includes(product.category))
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      filtered = filtered.filter((product) => {
        const lowestPrice = Math.min(...product.variants.map((v) => v.salePrice || v.price))
        if (max) {
          return lowestPrice >= min && lowestPrice < max
        } else {
          return lowestPrice >= min
        }
      })
    }

    setFilteredProducts(filtered)
  }

  const handleSortChange = (sortBy: string) => {
    const sorted = [...filteredProducts]
    switch (sortBy) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "price-asc":
        sorted.sort((a, b) => {
          const aPrice = Math.min(...a.variants.map((v) => v.salePrice || v.price))
          const bPrice = Math.min(...b.variants.map((v) => v.salePrice || v.price))
          return aPrice - bPrice
        })
        break
      case "price-desc":
        sorted.sort((a, b) => {
          const aPrice = Math.min(...a.variants.map((v) => v.salePrice || v.price))
          const bPrice = Math.min(...b.variants.map((v) => v.salePrice || v.price))
          return bPrice - aPrice
        })
        break
    }
    setFilteredProducts(sorted)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductFilters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
        </div>
        <div className="md:w-3/4">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  )
}

