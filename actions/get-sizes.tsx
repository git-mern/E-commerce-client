// import { Size } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

// const getSizes = async (): Promise<Size[]> => {
//   const res = await fetch(URL);
//   return res.json();
// };

// export default getSizes;

import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL);

    // Handle non-OK responses
    if (!res.ok) {
      console.error(`Failed to fetch sizes: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch sizes: ${res.statusText}`);
    }

    // Parse and return the JSON response
    try {
      return await res.json();
    } catch (jsonError) {
      console.error("Failed to parse JSON response:", jsonError);
      throw new Error("Invalid JSON response from the server.");
    }
  } catch (error) {
    console.error("Error fetching sizes:", error);
    throw error; // Rethrow error to be handled by caller
  }
};

export default getSizes;
