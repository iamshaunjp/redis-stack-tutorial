import { productRepository } from '@/app/_schema/product'
import { EntityId } from 'redis-om'
import { redirect } from 'next/navigation'
import Image from 'next/image'

// components
import DeleteButton from '@/app/_components/deleteButton'

// actions
import { updateProduct } from '@/app/_actions/products'

const getProduct = async (id) => {
  const result = await productRepository.fetch(id)

  result.id = result[EntityId]
  
  return result
}

export default async function UpdateProduct({ params }) {
  const product = await getProduct(params.id)

  if (!product.title) {
    redirect('/products')
  }

  return (
    <main>
      <form action={updateProduct}>
        <h2>Update {product.title}</h2>

        <Image 
          src={`/img/${product.img}`} 
          alt={product.title} 
          width={200}
          height={300}
          className="mx-auto my-4"
        />

        <label>
          <span>Price:</span>
          <input type="number" name="price" step="0.01" 
            defaultValue={product.price} 
          />
        </label>

        <label>
          <span>Stock level:</span>
          <input type="number" name="count"
            defaultValue={product.count}
          />
        </label>

        <input type="hidden" name="id"
          defaultValue={product.id}
        />

        <button>Update Product</button>
      </form>

      <div className="text-center my-8 max-w-xl mx-auto">
        <hr />
        <p className="my-4">Do you want to delete this product?</p>
        <DeleteButton id={product.id} />
      </div>
    </main>
  )
}