import { useEffect } from "react";
import { getProducts } from "../../api/products";

export default function ProductList() {
  useEffect(() => {
    getProducts().then((res) => {
      console.log("PRODUCTS:", res.data);
    });
  }, []);

  return <h1>Product List Page</h1>;
}