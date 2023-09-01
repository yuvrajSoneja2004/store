import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import Shop from '../../pages/Shop/Shop';
import Error from '../Error/Error';
import SingleTypeProduct from '../SingleTypeProduct/SingleTypeProduct';
import SingleProduct from '../../pages/SingleProduct/SingleProduct';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import ContactMe from '../ContactMe/ContactMe';
import { Search } from '../Search/Search';
import About from '../../pages/About/About';
import Cartpage from '../../pages/Cartpage';
import { AnimatePresence } from 'framer-motion';
import Login from '../../pages/Register/Login';
import Register from '../../pages/Register/Register';
import Signup from '../../pages/Register/Signup';


function AnimatedRoutes() {


    let location = useLocation();

  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home />} />
    <Route path='products' element={<Products />} />
    <Route path='shop' element={<Shop />} />
    <Route path='cart' element={<Cartpage />} />
    <Route path='test' element={<Cart />} />
    <Route path='search' element={<Search />} />
    <Route path='about' element={<About />} />
    <Route path='wishlist' element={<Wishlist />} />
    <Route path='contact' element={<ContactMe />} />
    <Route path='*' element={<Error />} />
    <Route path='products/:category' element={<SingleTypeProduct />} />
    <Route path='single-product-page/:product_id' element={<SingleProduct />} />
    <Route path='products/:type/single-product-page/:product_id' element={<SingleProduct />} />
    <Route path='products/single-product-page/:product_id' element={<SingleProduct />} />
    {/* Register Routes  */}
    <Route path='register' element={<Register />}>
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />
    </Route>
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes