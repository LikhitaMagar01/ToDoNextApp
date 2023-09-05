"use server"

import { revalidateTag } from "next/cache";
import { Product } from "../typings.d";


export const addProduct = async (e: FormData)=> {
    "use server";

    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if(!product || !price) return;

    const newProduct: Product = {
      product,
      price
    };

    await fetch('https://64f6fe599d7754084952ec7e.mockapi.io/products/', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      }
    });
    revalidateTag('products')
  }