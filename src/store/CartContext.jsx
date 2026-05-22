import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) { // INITIALIZE from localStorage
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem("cartCount");
    return saved ? Number(saved) : 0;
  });

  // SAVE whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);


  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}