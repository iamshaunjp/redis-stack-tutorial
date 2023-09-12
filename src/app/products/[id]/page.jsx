import Image from 'next/image'

// components
import DeleteButton from '@/app/_components/deleteButton'

// actions
import { updateProduct } from '@/app/_actions/products'

const getProduct = async (id) => {

}

export default async function UpdateProduct({ params }) {
  const product = await getProduct(params.id)

  return (
    <main>
      <form action={updateProduct}>
        <h2>Update Product</h2>

        {/* product image here */}

        <label>
          <span>Price:</span>
          <input type="number" name="price" step="0.01" />
        </label>

        <label>
          <span>Stock level:</span>
          <input type="number" name="count" />
        </label>

        <input type="hidden" name="id" />

        <button>Update Product</button>
      </form>

      <div className="text-center my-8 max-w-xl mx-auto">
        <hr />
        <p className="my-4">Do you want to delete this product?</p>
        {/* <DeleteButton id={product.id} /> */}
      </div>
    </main>
  )
}