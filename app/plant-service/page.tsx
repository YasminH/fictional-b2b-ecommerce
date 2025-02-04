"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlantServicePage() {
  const [plantCount, setPlantCount] = useState(10)
  const [subscriptionType, setSubscriptionType] = useState("weekly")

  const calculatePrice = () => {
    const basePrice = plantCount * 50 // $50 per plant
    const subscriptionPrice = subscriptionType === "weekly" ? plantCount * 10 : plantCount * 5 // $10 per plant for weekly, $5 for bi-weekly
    return { basePrice, subscriptionPrice }
  }

  const { basePrice, subscriptionPrice } = calculatePrice()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Office Plant Service</h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1524397057410-1e775ed476f3?auto=format&fit=crop&w=1350&q=80"
            alt="Office with plants"
            width={1350}
            height={900}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
            Transform your office into a green oasis with our premium plant installation and maintenance service. Boost
            productivity, improve air quality, and create a more pleasant work environment for your team.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customize Your Plant Service</CardTitle>
            <CardDescription>Choose the number of plants and maintenance frequency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="plant-count">Number of Plants</Label>
              <Input
                id="plant-count"
                type="number"
                min="5"
                max="100"
                value={plantCount}
                onChange={(e) => setPlantCount(Number(e.target.value))}
              />
            </div>
            <div>
              <Label>Maintenance Frequency</Label>
              <RadioGroup value={subscriptionType} onValueChange={setSubscriptionType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Weekly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bi-weekly" id="bi-weekly" />
                  <Label htmlFor="bi-weekly">Bi-weekly</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <p className="text-lg font-semibold">Installation Cost: ${basePrice}</p>
            <p className="text-lg font-semibold">Monthly Maintenance: ${subscriptionPrice}</p>
            <Button className="mt-4 w-full">Book Consultation</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Why Choose Our Plant Service?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Expert plant selection tailored to your office environment</li>
          <li>Professional installation with minimal disruption</li>
          <li>Regular maintenance to ensure your plants thrive</li>
          <li>Improved air quality and office aesthetics</li>
          <li>Boost in employee productivity and well-being</li>
        </ul>
        <p className="text-lg">
          Contact us today to schedule a free consultation and bring the benefits of nature into your workspace!
        </p>
      </div>
    </div>
  )
}

