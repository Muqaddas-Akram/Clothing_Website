import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Home from '../../pages/Home/home';
import About from '../../pages/About/about';
import Product from '../../pages/Product/product';
import ProductDetail from '../../pages/ProductDetail/productDetail';
import Login from '../../components/Login/login';

function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && !isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
