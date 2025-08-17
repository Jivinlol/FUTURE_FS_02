import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total price (assuming prices like "SGD 159.00")
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return total + price * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your cart is empty.</h2>
        <Link to="/allproducts">
          <button className="mt-4 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md">
            Shop Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Your Shopping Cart</h1>
      <div className="flex flex-col gap-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b pb-6 last:border-b-0"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-lg shadow-sm"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-lg text-gray-700">{item.price}</p>
              <p className="text-sm text-gray-500 mt-1">Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-sm"
              aria-label={`Remove ${item.name} from cart`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-2xl font-bold text-gray-900">Total: SGD {totalPrice.toFixed(2)}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition shadow-md"
          >
            Clear Cart
          </button>

          <Link to="/allproducts">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md">
              Shop Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
