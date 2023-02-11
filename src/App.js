import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import Products from './pages/Products/Products';
import Shop from './pages/Shop/Shop';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;