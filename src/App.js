import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import NavAndSub from './components/NavAndSub';
import ProductsByCategory from './components/ProductsByCategory';
import CartPage from './pages/CartPage';



function App() {
  return (
    <BrowserRouter>
    <NavAndSub/>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/productDetailPage/:id' element={<ProductDetailPage />} />
        <Route path='/subcategory/:api' element={<ProductsByCategory />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
