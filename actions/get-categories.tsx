// import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategories = async (): Promise<Category[]> => {
//   const res = await fetch(URL);
//   return res.json();
// };

// export default getCategories;

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);

    // Handle non-OK responses
    if (!res.ok) {
      console.error(
        `Failed to fetch categories: ${res.status} ${res.statusText}`
      );
      throw new Error(`Failed to fetch categories: ${res.statusText}`);
    }

    // Parse and return the JSON response
    try {
      return await res.json();
    } catch (jsonError) {
      console.error("Failed to parse JSON response:", jsonError);
      throw new Error("Invalid JSON response from the server.");
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Could not fetch categories. Please try again later.");
  }
};

export default getCategories;
