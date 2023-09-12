"use client"

import { useTransition } from "react"

// actions
import { deleteProduct } from "../_actions/products"

export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition()

  return (
    <button 
      onClick={() => startTransition(() => deleteProduct())}
      disabled={isPending}
      className="w-36"
    >
      {isPending && <span>Deleting...</span>}
      {!isPending && <span>Delete</span>}
    </button>
  )
}