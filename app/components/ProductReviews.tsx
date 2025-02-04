import { Star } from "lucide-react"
import type { Review } from "../data/products"

type ProductReviewsProps = {
  reviews: Review[]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                star <= Math.round(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-gray-600">
          {averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)
        </span>
      </div>
      <ul className="space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="border-b pb-4">
            <div className="flex items-center mb-1">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="ml-2 font-semibold">{review.username}</span>
            </div>
            <p className="text-gray-600 mb-1">{review.comment}</p>
            <span className="text-sm text-gray-500">{review.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

