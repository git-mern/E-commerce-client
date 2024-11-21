// import { Product } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// const getProduct = async (id: string): Promise<Product> => {
//   const res = await fetch(`${URL}/${id}`);
//   return res.json();
// };

// export default getProduct;

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    // Handle non-OK responses
    if (!res.ok) {
      console.error(`Failed to fetch product: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }

    // Parse and return the JSON response
    try {
      return await res.json();
    } catch (jsonError) {
      console.error("Failed to parse JSON response:", jsonError);
      throw new Error("Invalid JSON response from the server.");
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Could not fetch the product. Please try again later.");
  }
};

export default getProduct;
