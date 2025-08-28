import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeCart =(itemId)=>{
    setCart ((prevCart)=>prevCart.filter((item)=>item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
