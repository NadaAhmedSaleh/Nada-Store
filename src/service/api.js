const BASE_URL = "https://fakestoreapi.com/";

export const getProducts = async (limit) => {
  try {
    const response = await fetch(`${BASE_URL}products?limit=${limit}}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
