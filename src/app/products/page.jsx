import { productRepository } from '../_schema/product'
import { EntityId } from 'redis-om'

// components
import ProductList from '../_components/productList'

const getProducts = async () => {
  let result = await productRepository.search()
    .sortBy('title', 'ASC')
    .return.all()

  result = result.map(p => {
    return {...p, id: p[EntityId]}
  })

  return result
}

export default async function Products() {
  const products = await getProducts()

  return (
    <main>
      <header>
        <h2>All Products</h2>
      </header>

      <ProductList products={products} />
    </main>
  )
}
  