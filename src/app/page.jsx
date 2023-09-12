import Link from "next/link"

export default function Home() {
  return (
    <main className="text-center">
      <h2 className="my-7">Welcome to the Ninja Stock Manager</h2>

      <p className="my-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nisi aperiam, placeat veniam vitae commodi distinctio? Enim non pariatur facere, maiores obcaecati, deleniti unde rem illo necessitatibus ad consequatur nobis!</p>

      <Link href="/products">
        <button>View All Products</button>
      </Link>
    </main>
  )
}
