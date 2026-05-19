import { useEffect, useState, useMemo } from "react";
import { getProducts } from "../api/products";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!search) return products;

    return products.filter((p) => {
      const text = `${p.brand} ${p.model}`.toLowerCase();
      return text.includes(search.toLowerCase());
    });
  }, [products, search]);

  return {
    products: filteredProducts,
    loading,
    error,
    search,
    setSearch,
  };
}