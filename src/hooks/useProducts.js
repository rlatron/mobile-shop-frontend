import { useEffect, useState, useMemo } from "react";
import { getProducts } from "../api/products";
import { loadCache, saveCache } from "../utils/cache";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {

      // TRY CACHE FIRST
      const cachedProducts = loadCache("products");

      if (cachedProducts) {
        setProducts(cachedProducts);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const res = await getProducts();

        setProducts(res.data);

        // SAVE CACHE
        saveCache("products", res.data);

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