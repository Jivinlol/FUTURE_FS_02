import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/ecommerce/allproducts')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch products:', error);
      });
  }, []);

  return products;
};

export default useProducts;
