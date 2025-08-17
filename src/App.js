import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './styles/global.css'
import Homepage from './pages/homepage';
import AllProducts from './pages/AllProducts'; // product list
import ProductPage from './pages/ProductPage'; // single product view
import AuthForm from './pages/Login';
import Cart from './pages/Cart'; 
function App() {
  return (
      <Routes>
      <Route path="/" element={<Homepage />} />                       
      <Route path="/allproducts" element={<AllProducts />} />    
      <Route path="/product/:productId" element={<ProductPage />} /> 
      <Route path="/cart" element={<Cart />} />
      <Route path='/login' element={<AuthForm />} />                   
    </Routes>
  );
}

export default App;
