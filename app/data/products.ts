export type Review = {
  id: number
  userId: string
  username: string
  rating: number
  comment: string
  date: string
}

export type ProductVariant = {
  id: number
  name: string
  price: number
  salePrice?: number
}

export type Product = {
  id: number
  name: string
  image: string
  description: string
  variants: ProductVariant[]
  reviews: Review[]
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Neon Notebook",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Vibrant notebook with premium paper, perfect for brainstorming your next big idea.",
    category: "Stationery",
    variants: [
      { id: 101, name: "Small Blue", price: 12.99, salePrice: 10.99 },
      { id: 102, name: "Small Green", price: 12.99, salePrice: 10.99 },
      { id: 103, name: "Medium Blue", price: 15.99, salePrice: 13.99 },
      { id: 104, name: "Medium Green", price: 15.99, salePrice: 13.99 },
      { id: 105, name: "Large Blue", price: 18.99, salePrice: 16.99 },
      { id: 106, name: "Large Green", price: 18.99, salePrice: 16.99 },
    ],
    reviews: [
      {
        id: 1,
        userId: "user1",
        username: "JohnDoe",
        rating: 5,
        comment: "Great notebook! The paper quality is excellent.",
        date: "2023-06-01",
      },
      {
        id: 2,
        userId: "user2",
        username: "JaneSmith",
        rating: 4,
        comment: "Love the colors, but wish it had more pages.",
        date: "2023-06-15",
      },
    ],
  },
  {
    id: 2,
    name: "Ergonomic Wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    description: "Ultra-comfortable mouse with customizable RGB lighting, designed for long hours of productive work.",
    category: "Electronics",
    variants: [
      { id: 201, name: "Black", price: 29.99 },
      { id: 202, name: "White", price: 29.99 },
    ],
    reviews: [],
  },
  {
    id: 3,
    name: "RGB Mechanical Keyboard",
    image:
      "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    description: "Sleek mechanical keyboard with customizable backlighting and satisfying tactile feedback.",
    category: "Electronics",
    variants: [
      { id: 301, name: "Blue Switches", price: 79.99, salePrice: 69.99 },
      { id: 302, name: "Red Switches", price: 79.99, salePrice: 69.99 },
      { id: 303, name: "Brown Switches", price: 79.99, salePrice: 69.99 },
    ],
    reviews: [],
  },
  {
    id: 4,
    name: "Smart LED Desk Lamp",
    image:
      "https://images.unsplash.com/photo-1570909974804-e38f0c0e2bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Adjustable LED lamp with multiple brightness levels, color temperatures, and smart home integration for the perfect work ambiance.",
    category: "Lighting",
    variants: [
      { id: 401, name: "White", price: 49.99 },
      { id: 402, name: "Black", price: 49.99 },
    ],
    reviews: [],
  },
  {
    id: 5,
    name: "Noise-Cancelling Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    description:
      "High-quality wireless earbuds with active noise cancellation for a distraction-free work environment, even in busy co-working spaces.",
    category: "Electronics",
    variants: [
      { id: 501, name: "White", price: 89.99 },
      { id: 502, name: "Black", price: 89.99 },
      { id: 503, name: "Blue", price: 89.99 },
    ],
    reviews: [],
  },
  {
    id: 6,
    name: "Electric Standing Desk",
    image:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Sleek electric standing desk with memory presets and built-in wireless charging pad for the ultimate flexible workspace.",
    category: "Furniture",
    variants: [
      { id: 601, name: "Oak", price: 299.99, salePrice: 249.99 },
      { id: 602, name: "Walnut", price: 299.99, salePrice: 249.99 },
      { id: 603, name: "White", price: 299.99, salePrice: 249.99 },
    ],
    reviews: [],
  },
]

