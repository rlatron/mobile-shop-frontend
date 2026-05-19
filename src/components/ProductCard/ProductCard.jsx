export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.imgUrl}
        alt={product.model}
        width={120}
      />

      <h3>{product.brand}</h3>
      <p>{product.model}</p>
      <p>{product.price}€</p>
    </div>
  );
}