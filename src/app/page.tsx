import Hero from "@/components/hero";
import Product from "@/components/product";
import { ProductType } from "@/interface";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  return (
    <>
      <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
        <Hero />
        <section className="flex flex-col space-y-12">
          <h1 className="text-5xl font-bold text-center">Shop Deals</h1>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
