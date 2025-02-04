"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { products, type Product } from "../data/products"
import ProductCard from "../components/ProductCard"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchResults() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState<Product[]>([])

  useEffect(() => {
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setSearchResults(results)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Update the URL with the new search query
    const url = new URL(window.location.href)
    url.searchParams.set("q", searchQuery)
    window.history.pushState({}, "", url)
  }

  return (
    <>
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <Input
          type="search"
          placeholder="Search products..."
          className="flex-grow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found matching your search.</p>
      )}
    </>
  )
}

