"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

type ReviewFormProps = {
  onSubmit: (review: { rating: number; comment: string; username: string }) => void
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating && comment && username) {
      onSubmit({ rating, comment, username })
      setRating(0)
      setComment("")
      setUsername("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <h3 className="text-xl font-semibold">Write a Review</h3>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-1">Rating</span>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
              <Star className={`w-6 h-6 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
          Your Review
        </label>
        <Textarea id="comment" rows={4} value={comment} onChange={(e) => setComment(e.target.value)} required />
      </div>
      <Button type="submit" disabled={!rating || !comment || !username}>
        Submit Review
      </Button>
    </form>
  )
}

