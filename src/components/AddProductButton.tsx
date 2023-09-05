"use client"

import { useTransition } from "react"
import { addProduct } from "../../actions/serverActions"

function AddProductButton(){
    const [isPending, startTransition] = useTransition()
    const formData = new FormData();
    formData.append("product", "Macbook")
    formData.append("price", "1299.9")
    return <button onClick={()=> startTransition(() => addProduct(formData))} className="fixed buttom-10 border bg-green-500 text-white p02 rounded-md w-48">{isPending ? "Adding" : "Add MackBook"}</button>
}

export default AddProductButton