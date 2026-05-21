import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../store/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  const location = useLocation();

  const isProductPage = location.pathname.includes("/product/");

  return (
    <header className="header">
      {/* LEFT SIDE */}
      <div className="header-left">
        <Link to="/" className="logo">
          Mobile Shop
        </Link>

        <nav className="breadcrumbs">
          <Link to="/">Products</Link>

          {isProductPage && (
            <>
              <span> / </span>
              <span>Details</span>
            </>
          )}
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="cart">
        Cart: {cartCount}
      </div>
    </header>
  );
}