import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, addToCart } from "../../api/products";
import { useCart } from "../../store/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { setCartCount } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await getProductById(id);
        const data = res.data;

        setProduct(data);

        // default selections (important requirement)
        setSelectedColor(data.options?.colors?.[0]?.code);
        setSelectedStorage(data.options?.storages?.[0]?.code);
      } catch (err) {
        console.error("Error loading product", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const res = await addToCart({
        id: id,
        colorCode: selectedColor,
        storageCode: selectedStorage,
      });

      setCartCount(res.data.count);
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  if (loading) return <h2>Loading product...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="pdp-container">
      {/* BACK LINK */}
      <Link to="/">← Back to products</Link>

      <div className="pdp-grid">
        {/* IMAGE COLUMN */}
        <div className="pdp-image">
          <img src={product.imgUrl} alt={product.model} />
        </div>

        {/* DETAILS COLUMN */}
        <div className="pdp-info">
          <h1>{product.brand}</h1>
          <h2>{product.model}</h2>
          <h3>{product.price}€</h3>

          <p><b>CPU:</b> {product.cpu}</p>
          <p><b>RAM:</b> {product.ram}</p>
          <p><b>OS:</b> {product.os}</p>
          <p><b>Screen:</b> {product.displayResolution}</p>
          <p><b>Battery:</b> {product.battery}</p>
          <p>
            <b>Cameras:</b> {product.primaryCamera} / {product.secondaryCmera}
          </p>
          <p><b>Dimensions:</b> {product.dimentions}</p>
          <p><b>Weight:</b> {product.weight}</p>

          {/* STORAGE SELECTOR */}
          <div>
              <label>Storage:</label>

              <select
                value={selectedStorage}
                onChange={(e) => setSelectedStorage(Number(e.target.value))}
              >
                {product.options?.storages?.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
              </select>
          </div>

          {/* COLOR SELECTOR */}
          <div>
              <label>Color:</label>

              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(Number(e.target.value))}
              >
                {product.options?.colors?.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

          {/* ADD TO CART */}
          <button onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}