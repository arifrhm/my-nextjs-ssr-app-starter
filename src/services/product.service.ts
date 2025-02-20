// src/services/product.service.ts
import { ProductResponse } from "@/types/product";

export async function fetchProducts(): Promise<ProductResponse> {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data: ProductResponse = await response.json();

        return data;
    } catch (error) {
        throw error;
    }
}