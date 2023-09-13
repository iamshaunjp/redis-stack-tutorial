"use client"

import Image from "next/image"
import Link from "next/link"

export default function ProductList({ products }) {
  return (
    <div className="products">
      {products.map(p => (
        <div key={p.title} className="card">
          <Link href={`/products/${p.id}`}>
            <h3>{p.title} - {p.size}</h3>
            <Image 
              src={`/img/${p.img}`} 
              alt={p.title} 
              width={200}
              height={300}
              className="mx-auto my-4"
            />
            <p className="my-3">${p.price}</p>
            <p className="font-semibold">Available in:</p>
            <p>{p.colors.toString()}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}