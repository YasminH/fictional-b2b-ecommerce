import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-100 text-neutral-900 mt-12 dark:bg-neutral-800 dark:text-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About OfficeVibe</h3>
            <p className="text-sm">Elevating workspaces with innovative and stylish office gear.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-neutral-100 transition-colors dark:hover:text-neutral-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-neutral-100 transition-colors dark:hover:text-neutral-800">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-neutral-100 transition-colors dark:hover:text-neutral-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-neutral-100 transition-colors dark:hover:text-neutral-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm hover:text-neutral-100 transition-colors dark:hover:text-neutral-800">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-neutral-900 transition-colors dark:hover:text-neutral-50">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-neutral-50/10 text-center text-sm dark:border-neutral-900/10">
          © {new Date().getFullYear()} OfficeVibe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

