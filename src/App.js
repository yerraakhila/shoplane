import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

import ProductsByCategory from './components/ProductsByCategory';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/productDetailPage/:id' element={<ProductDetailPage />} />
        <Route path='/subcategory/:api' element={<ProductsByCategory />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
