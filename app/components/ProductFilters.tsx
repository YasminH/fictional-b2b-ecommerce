"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { products } from "../data/products"

type FilterProps = {
  onFilterChange: (filters: { categories: string[]; priceRange: string }) => void
  onSortChange: (sortBy: string) => void
}

export default function ProductFilters({ onFilterChange, onSortChange }: FilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("name-asc")

  const categories = Array.from(new Set(products.map((product) => product.category)))

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(updatedCategories)
    onFilterChange({ categories: updatedCategories, priceRange })
  }

  const handlePriceRangeChange = (range: string) => {
    setPriceRange(range)
    onFilterChange({ categories: selectedCategories, priceRange: range })
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    onSortChange(value)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleCategoryChange(category)}
            />
            <Label htmlFor={category}>{category}</Label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <RadioGroup value={priceRange} onValueChange={handlePriceRangeChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0-50" id="0-50" />
            <Label htmlFor="0-50">$0 - $50</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50-100" id="50-100" />
            <Label htmlFor="50-100">$50 - $100</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100+" id="100+" />
            <Label htmlFor="100+">$100+</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Sort By</h3>
        <RadioGroup value={sortBy} onValueChange={handleSortChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="name-asc" id="name-asc" />
            <Label htmlFor="name-asc">Name (A-Z)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="name-desc" id="name-desc" />
            <Label htmlFor="name-desc">Name (Z-A)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-asc" id="price-asc" />
            <Label htmlFor="price-asc">Price (Low to High)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-desc" id="price-desc" />
            <Label htmlFor="price-desc">Price (High to Low)</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

