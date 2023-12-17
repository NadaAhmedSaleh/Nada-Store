import products from "../data";

const BASE_URL = "https://fakestoreapi.com/";

export const getProducts = async (limit) => {
  try {
    const response = await fetch(`${BASE_URL}products?limit=${limit}}`);
    return await response.json();
  } catch (error) {
    /* this is fake response incase any failure happened in the fetching from 
     the fake end point to be able to check the design
    as i found it is sometimes not stable*/
    return products;
  }
};
