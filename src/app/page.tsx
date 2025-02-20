// src/app/page.tsx
import { LogoHeader } from "@/components/Header/LogoHeader";
import { ProductsList } from "@/components/Products/ProductList";
import { DeployButton } from "@/components/Buttons/DeployButton";
import { ReadDocsButton } from "@/components/Buttons/ReadDocsButton";
import { Footer } from "@/components/Footer/Footer";
import { fetchProducts } from "@/services/product.service";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LogoHeader />

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-2xl font-bold">Products Collection</h1>
          <ProductsList products={products} />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <DeployButton />
          <ReadDocsButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
