import { api } from "./client";

// PLP - list products
export const getProducts = () => {
  return api.get("/api/product");
};

// PDP - product detail
export const getProductById = (id) => {
  return api.get(`/api/product/${id}`);
};

// CART - add product
export const addToCart = (payload) => {
  return api.post("/api/cart", payload);
};