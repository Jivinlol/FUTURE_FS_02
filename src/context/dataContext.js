// ProductContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create the context
const ProductContext = createContext([]);

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Always start as an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8080/ecommerce/allproducts');
        // Ensure we store an array
        setProducts(Array.isArray(res.data) ? res.data : res.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Block rendering until products are loaded
  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for using products anywhere in the app
export const useProducts = () => useContext(ProductContext);
