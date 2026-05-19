import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error loading products</h2>;

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="grid">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}