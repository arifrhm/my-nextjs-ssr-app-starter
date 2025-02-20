// src/components/Products/ProductsList.tsx
import { ProductResponse } from "@/types/product";

interface ProductsListProps {
  products: ProductResponse;
}

export function ProductsList({ products }: ProductsListProps) {
  if (!products.products.length) {
    return <div className="text-red-500">Failed to load products data</div>;
  }

  return (
    <ul className="space-y-3 bg-white/[.02] p-6 rounded-lg border border-white/[.05]">
      {products.products.map((product) => (
        <li
          key={product.id}
          className="p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <h2 className="font-semibold text-lg">{product.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="mt-2 w-full h-auto rounded"
          />
        </li>
      ))}
    </ul>
  );
}