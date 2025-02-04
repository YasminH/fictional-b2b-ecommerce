import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Truck, Shield, Star, TreesIcon as Plant } from "lucide-react"
import ProductList from "./components/ProductList"
import LastViewedProduct from "./components/LastViewedProduct"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "./data/products"

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern office space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to OfficeVibe</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Elevate your workspace with our cool and innovative office gear! Discover premium products designed to boost
            productivity and style.
          </p>
          <Button asChild size="lg" className="text-lg bg-white text-neutral-900 hover:bg-gray-100 dark:text-neutral-50">
            <Link href="/products">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose OfficeVibe section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose OfficeVibe?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Zap className="h-12 w-12 text-neutral-900 mb-4 dark:text-neutral-50" />
              <h3 className="text-xl font-semibold mb-2">Innovative Designs</h3>
              <p className="text-neutral-500 dark:text-neutral-400">Cutting-edge products that combine functionality with style</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Truck className="h-12 w-12 text-neutral-900 mb-4 dark:text-neutral-50" />
              <h3 className="text-xl font-semibold mb-2">Fast & Free Shipping</h3>
              <p className="text-neutral-500 dark:text-neutral-400">Enjoy free shipping on all orders over $50</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Shield className="h-12 w-12 text-neutral-900 mb-4 dark:text-neutral-50" />
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-neutral-500 dark:text-neutral-400">All products backed by our 30-day satisfaction guarantee</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Products section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <ProductList products={products.slice(0, 3)} />
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Plant Service section */}
      <section className="py-12 bg-neutral-100 rounded-lg dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">New: Office Plant Service</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1524397057410-1e775ed476f3?auto=format&fit=crop&w=1350&q=80"
                alt="Office with plants"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Transform Your Workspace with Greenery</h3>
              <p className="text-lg mb-6">
                Elevate your office environment with our new plant installation and maintenance service. Boost
                productivity, improve air quality, and create a more pleasant work atmosphere.
              </p>
              <Button asChild size="lg">
                <Link href="/plant-service">
                  Learn More <Plant className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-12 bg-neutral-100 rounded-lg dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Graphic Designer",
                content:
                  "OfficeVibe's products have transformed my workspace. The ergonomic chair and adjustable desk significantly improved productivity comfort.",
              },
              {
                name: "Sarah Lee",
                role: "Software Engineer",
                content:
                  "I love the sleek design of OfficeVibe's accessories. They not only look great but also function perfectly. The cable management solutions are a game-changer!",
              },
              {
                name: "Michael Brown",
                role: "Marketing Manager",
                content:
                  "The quality of OfficeVibe's products is unmatched. I've recommended them to all my colleagues. Their customer service also top-notch!",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={`https://i.pravatar.cc/60?img=${index === 1 ? "28" : index + 1}`}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400">{testimonial.content}</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action section */}
      <section className="py-12 bg-neutral-900 text-neutral-50 rounded-lg dark:bg-neutral-50 dark:text-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Workspace?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers and experience the OfficeVibe difference today!
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/products">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <LastViewedProduct />
    </div>
  )
}

