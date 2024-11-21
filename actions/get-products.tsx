import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId || undefined, // Only include if defined
      sizeId: query.sizeId || undefined,
      categoryId: query.categoryId || undefined,
      isFeatured: query.isFeatured || undefined,
    },
  });

  try {
    const res = await fetch(url);

    // Handle non-OK responses
    if (!res.ok) {
      console.error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    // Parse and return the JSON response
    try {
      return await res.json();
    } catch (jsonError) {
      console.error("Failed to parse JSON response:", jsonError);
      throw new Error("Invalid JSON response from the server.");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Could not fetch products. Please try again later.");
  }
};

export default getProducts;
