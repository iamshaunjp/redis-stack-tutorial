"use client"

import { useState } from 'react'

// actions
import { searchProducts } from '@/app/_actions/products'

// product search options
const colors = ['black', 'white', 'gold', 'red', 'purple']

export default function Search() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  async function handleSearch(formData) {
    const result = await searchProducts(formData)

    if (result.error) {
      setError(result.error)
      setProducts([])
    }

    if (!result.error) {
      setError('')
      setProducts(result)
    }
  }

  return (
    <>
      <section className="bg-gray-200">
        <form action={handleSearch}>
          <label>
            <span>Search term:</span>
            <input type="text" name="text" required />
          </label>
          
          <label>
            <span>Filter by color:</span>
            {colors.map(c => (
              <div key={c} className="inline-block">
                <input type="checkbox" name="colors" value={c} />
                <span>{c}</span>
              </div>
            ))}
          </label>

          <button>Search</button>
        </form>
      </section>
      <main>  
        {/* <ProductList products={products} />
        {error && (<div className="text-center text-lg">{error}</div>)} */}
      </main>
    </>
  )
}