import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

// const getBillboard = async (id: string): Promise<Billboard> => {
//   const res = await fetch(`${URL}/${id}`);
//   return res.json();
// };

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    // Log or throw a meaningful error
    console.error(`Failed to fetch billboard with ID ${id}:`, res.statusText);
    throw new Error(`Failed to fetch billboard. Status: ${res.status}`);
  }

  try {
    return await res.json();
  } catch (error) {
    console.error(`Error parsing JSON for billboard with ID ${id}:`, error);
    throw error;
  }
};

export default getBillboard;
