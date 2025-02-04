"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingCart, Zap, Search, TreesIcon as Plant, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "../contexts/CartContext"

export default function Header() {
  const { items } = useCart()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="bg-neutral-900 text-neutral-50 shadow-md py-4 dark:bg-neutral-50 dark:text-neutral-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center mb-4 md:mb-0">
          <Zap className="mr-2" />
          OfficeVibe
        </Link>
        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
          <Link href="/" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
            Home
          </Link>
          <Link href="/products" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
            Products
          </Link>
          <Link href="/about" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
            About
          </Link>
          <Link href="/faq" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
            FAQ
          </Link>
          <Link href="/plant-service" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
            <Plant className="inline-block mr-1 h-4 w-4" />
            Plant Service
          </Link>
          <Link href="/bulk-order" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
            <Package className="inline-block mr-1 h-4 w-4" />
            Bulk Order
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-8 bg-neutral-50 text-neutral-900 placeholder-primary/50 dark:bg-neutral-900 dark:text-neutral-50"
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <Button variant="secondary" asChild>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart className="mr-2" />
              Cart ({itemCount})
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

