import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

import ProductsByCategory from './pages/ProductsByCategoryPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import NavbarWithSubcat from './components/NavbarWithSubcat';
import OrderSuccess from './components/OrderSuccess';



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/productDetailPage/:id' element={<ProductDetailPage />} />
        <Route path='/subcategory/:categoryId' element={<ProductsByCategory />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path='/navbarWithSubcat' element={<NavbarWithSubcat />} />
        <Route path='/orderSuccess' element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
