import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import Shop from './pages/Shop/Shop';
import LoadingBar from 'react-top-loading-bar'
import { useGlobalContext } from './contexts/globalContext';
import Error from './components/Error/Error';
import SingleTypeProduct from './components/SingleTypeProduct/SingleTypeProduct';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Wishlist from './components/Wishlist/Wishlist';
import ContactMe from './components/ContactMe/ContactMe';
import { Search } from './components/Search/Search';
import About from './pages/About/About';
import Cartpage from './pages/Cartpage';


function App() {

  let { loadingProgress, setLoadingProgress, themeState, } = useGlobalContext();
  return (
   
    <>

      <NavigationBar />
      {/* <Navbar />  boy boy !  */}

      <LoadingBar
        color={themeState.color}
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)}
        transitionTime={300}
        loaderSpeed={150}
      />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cartpage />} />
        <Route path='/test' element={<Cart />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='*' element={<Error />} />
        <Route path='/products/:category' element={<SingleTypeProduct />} />
        <Route path='/single-product-page/:product_id' element={<SingleProduct />} />
        <Route path='products/:type/single-product-page/:product_id' element={<SingleProduct />} />
        <Route path='products/single-product-page/:product_id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;