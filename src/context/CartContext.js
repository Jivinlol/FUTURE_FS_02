import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [lastModified, setLastModified] = useState(null); // ✅ added
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId || !lastModified) return; // ✅ only sync when a product changes
    const syncCart = async () => {
      try {
        
        await axios.post(`http://localhost:8080/ecommerce/cart/add/${userId}`, lastModified); // ✅ send only last modified
        console.log("Cart synced to API:", lastModified);
      } catch (err) {
        console.log(lastModified);
        console.error("Error syncing cart:", err);
        console.log(userId);
      }
    };
    syncCart();
  }, [lastModified, userId]); // ✅ watch lastModified instead of whole cart

  const fetchCart = async (userId) => {
    try {
      const list = [];
      const response = await axios.get(`http://localhost:8080/ecommerce/cart/get/${userId}`);
      response.data.forEach((element) => {
        const productWithQuantity = {...element.product,quantity: element.quantity};
        list.push(productWithQuantity);
      });
      setCart(list);
      console.log("Done");
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      let updatedCart;
      let modifiedItem;
      if (exists) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        modifiedItem = updatedCart.find((item) => item.id === product.id);
      } else {
        modifiedItem = { ...product, quantity: 1 };
        updatedCart = [...prev, modifiedItem];
      }
      setLastModified(modifiedItem); // ✅ track last changed item
      return updatedCart;
    });
    console.log(cart);
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const removedItem = prev.find((item) => item.id === id);
      setLastModified({ ...removedItem, quantity: 0 }); // ✅ send quantity 0 to indicate removal
      return prev.filter((item) => item.id !== id);
    });
  };

  const clearCart = async () => {
    setCart([]);
    try{
      const response = await axios.get(`http://localhost:8080/ecommerce/cart/clear/${userId}`);
    }catch(err){
      console.log("error occured:"+err);
    }
    setLastModified(null); // ✅ nothing to sync
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, fetchCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
