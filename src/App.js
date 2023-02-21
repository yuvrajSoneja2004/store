import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import Products from './pages/Products/Products';
import Shop from './pages/Shop/Shop';
import LoadingBar from 'react-top-loading-bar'
import { useGlobalContext } from './contexts/globalContext';
import Error from './components/Error/Error';
import SingleTypeProduct from './components/SingleTypeProduct/SingleTypeProduct';
function App() {

  let { loadingProgress, setLoadingProgress, themeState, } = useGlobalContext();



  return (
    <>
      <Navbar />
      <LoadingBar
        color={themeState.color}
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)}
        transitionTime={300}
        loaderSpeed={150}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='*' element={<Error />} />
        <Route path='/products/:category' element={<SingleTypeProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;