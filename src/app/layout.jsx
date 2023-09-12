import Link from "next/link"

// fonts & css
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// no-cache for data fetches
export const dynamic = 'force-dynamic'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/products" className="mr-auto text-xl">
              <h1>Net Ninja Stock</h1>
            </Link>
            <Link href="/products/search">
              <button>Search Products</button>
            </Link>
            <Link href="/products/create">
              <button>+ New Product</button>
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
