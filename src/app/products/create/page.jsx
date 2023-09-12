// actions
import { createProduct } from "@/app/_actions/products"

// product options
const colors = ['black', 'white', 'gold', 'red', 'purple']
const sizes = ['xs', 'sm', 'md', 'lg', 'xl']

export default function CreateProduct() {  
  return (
    <main>
      <form action={createProduct}>

        <label>
          <span>Product Title:</span>
          <input type="text" name="title" />  
        </label>

        <label>
          <span>Available Colors:</span>
          {colors.map(c => (
            <div key={c} className="inline-block">
              <input type="checkbox" name="colors" value={c} />
              <span>{c}</span>
            </div>
          ))}
        </label>

        <label>
          <span>Size:</span>
          {sizes.map(s => (
            <div key={s} className="inline-block">
              <input type="radio" name="size" value={s} />
              <span>{s}</span>
            </div>
          ))}
        </label>

        <label>
          <span>Price:</span>
          <input type="number" step="0.01" name="price" />
        </label>

        <label>
          <span>Stock level:</span>
          <input type="number" name="count" />
        </label>

        <label>
          <span>Image file name:</span>
          <input type="text" name="img" />
        </label>
        
        <button>Create Product</button>
      </form>
    </main>
  )
}