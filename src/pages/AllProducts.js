import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../data/product';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
//import { useProducts } from '../context/dataContext';

const AllProducts = () => {
  const products = useProducts();
  console.log(products);
  return (
    <>
    <Navbar/>
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl m-12 font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={"data:image/png;base64,"+product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AllProducts;
