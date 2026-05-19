import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductList() {
  const { products, loading, error, search, setSearch } = useProducts();
  const navigate = useNavigate();

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error loading products</h2>;

  return (
    <div className="container">
    
    <div className="plp-header">
      <h1>Products</h1>
      <input
        className="search"
        type="text"
        placeholder="Search by brand or model..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

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