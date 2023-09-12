const getProducts = async () => {

}

export default async function Products() {
  const products = await getProducts()

  return (
    <main>
      <header>
        <h2>All Products</h2>
      </header>

      {/* <ProductList products={products} /> */}
    </main>
  )
}
  