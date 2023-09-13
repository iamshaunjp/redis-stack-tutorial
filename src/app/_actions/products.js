'use server'

import { redirect } from "next/navigation"
import { productRepository } from "../_schema/product"

// create products
export async function createProduct(formData) {
  
  await productRepository.save({
    title: formData.get('title'),
    count: parseInt(formData.get('count')),
    price: parseFloat(formData.get('price')),
    img: formData.get('img'),
    colors: formData.getAll('colors'),
    size: formData.get('size')
  })

  redirect('/products')
}

// update products
export async function updateProduct(formData) {
  const id = formData.get('id')

  let product = await productRepository.fetch(id)

  product.price = parseFloat(formData.get('price'))
  product.count = parseInt(formData.get('count'))

  await productRepository.save(product)

  redirect('/products')
}

// delete products
export async function deleteProduct(id) {
  await productRepository.remove(id)

  redirect('/products')
}

// search products
export async function searchProducts(formData) {
  
}