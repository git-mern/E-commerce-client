import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL);

    // Handle non-OK responses
    if (!res.ok) {
      console.error(`Failed to fetch colors: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch colors: ${res.statusText}`);
    }

    // Parse and return the JSON response
    try {
      return await res.json();
    } catch (jsonError) {
      console.error("Failed to parse JSON response:", jsonError);
      throw new Error("Invalid JSON response from the server.");
    }
  } catch (error) {
    console.error("Error fetching colors:", error);
    throw error; // Rethrow error to be handled by the caller
  }
};

export default getColors;
