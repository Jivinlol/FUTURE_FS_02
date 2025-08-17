import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const AuthForm = () => {
  const {fetchCart} = useCart();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setError('');
    setForm({ username: '', email: '', password: '' });
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const endpoint = isLogin
      ? 'http://localhost:8080/ecommerce/login'
      : 'http://localhost:8080/ecommerce/SignUp';

    try {
      const response = await axios.post(endpoint, form);
      console.log("Submitted Form Data:", JSON.stringify(form, null, 2));
      if (isLogin) {
        localStorage.setItem('userId', response.data.id);
        alert('Login successful');
        console.log( response.data.id);
        
        await fetchCart(response.data.id);
        navigate("/");
      } else {
        alert('Signup successful. Please login.');
        setIsLogin(true);
      }
    } catch (err) {
      const status = err.response?.status;

    switch (status) {
        
      case 400:
        setError('Missing or invalid input. Please check your entries.');
        break;
      case 401:
        setError('Incorrect username or password.');
        break;
      case 403:
        setError('You are not authorized to access this resource.');
        break;
      case 404:
        setError('User not found. Please sign up first.');
        break;
      case 409:
        setError('Username or email already exists.');
        break;
      case 500:
        setError('Server error. Please try again later.');
        break;
      default:
        setError(err.response?.data?.message || 'An unexpected error occurred.'+endpoint);
    }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-md border">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {!isLogin && (
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        )}

        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          type="button"
          onClick={toggleForm}
          className="text-blue-600 hover:underline font-medium"
        >
          {isLogin ? 'Sign up here' : 'Login here'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
