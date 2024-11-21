// import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategory = async (id: string): Promise<Category> => {
//   const res = await fetch(`${URL}/${id}`);
//   return res.json();
// };

// export default getCategory;

// import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// const getCategory = async (id: string): Promise<Category> => {
//   try {
//     const res = await fetch(`${URL}/${id}`);

//     // Handle non-OK responses
//     if (!res.ok) {
//       console.error(`Failed to fetch category: ${res.status} ${res.statusText}`);
//       throw new Error(`Failed to fetch category: ${res.statusText}`);
//     }

//     // Parse and return the JSON response
//     try {
//       return await res.json();
//     } catch (jsonError) {
//       console.error("Failed to parse JSON response:", jsonError);
//       throw new Error("Invalid JSON response from the server.");
//     }
//   } catch (error) {
//     console.error("Error fetching category:", error);
//     throw new Error("Could not fetch the category. Please try again later.");
//   }
// };

// export default getCategory;

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    // Handle non-OK responses
    if (!res.ok) {
      console.error(
        `Failed to fetch category (ID: ${id}): ${res.status} ${res.statusText}`
      );
      throw new Error(`Failed to fetch category: ${res.statusText}`);
    }

    // Parse and return the JSON response
    try {
      return await res.json();
    } catch (jsonError) {
      console.error("Failed to parse JSON response:", jsonError);
      throw new Error("Invalid JSON response from the server.");
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    throw new Error("Could not fetch the category. Please try again later.");
  }
};

export default getCategory;
