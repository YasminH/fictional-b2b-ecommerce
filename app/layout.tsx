import { CartProvider } from "./contexts/CartContext"
import { LastViewedProvider } from "./contexts/LastViewedContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"
import "./globals.css"
import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <CartProvider>
          <LastViewedProvider>
            <ScrollToTop />
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </LastViewedProvider>
        </CartProvider>
      </body>
    </html>
  )
}

