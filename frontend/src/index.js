import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import SupportPage from './landing_page/supports/SupportPage'
import SignUp from './landing_page/signup/SignUp'
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
