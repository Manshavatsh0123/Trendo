import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  
  const addtoCart = (product) => {
    
    const existing = cartItem.find((item) => item.id === product.id);
    if (existing) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  
  const increaseQty = (id) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  
  const decreaseQty = (id) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addtoCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const usecart = () => useContext(CartContext);
