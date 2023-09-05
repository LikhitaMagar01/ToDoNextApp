import { Product } from "../../typings.d";
import { addProduct } from "../../actions/serverActions";
import AddProductButton from "@/components/AddProductButton";

export default async function Home(){
  const res = await fetch('https://64f6fe599d7754084952ec7e.mockapi.io/products/', {
    cache: 'no-cache',
    next: {
      tags: ["products"]
    }
  })
  const products: Product[] = await res.json()

  return (
  <main className="">
    <h1 className="text-3xl font-bold text-center">Product Warehouse</h1>
    <form action={addProduct} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
      <input name="product" type="text" placeholder="Enter product here ..." className="border border-gray-300 p-2 rounded-md text-black" />
      <input name="price" type="text" placeholder="Enter price here ..." className="border border-gray-300 p-2 rounded-md text-black" />
      <button className="border bg-blue-500 text-white p-2 rounded-md">Add Product</button>
    </form>

    <h2>List of Products</h2>
    <div className="flex flex-wrap gap-5 text-white">
      {products.map((product)=>(
        <div key={product.id} className="p-5 shadow">
          <p>{product.product}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
    <AddProductButton />
  </main>
  )
}