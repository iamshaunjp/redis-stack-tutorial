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

}

// delete products
export async function deleteProduct(id) {

}

// search products
export async function searchProducts(formData) {
  
}