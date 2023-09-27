import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Home';
// import Products from '../../pages/Products/Products';
// import Shop from '../../pages/Shop/Shop';
// import Error from '../Error/Error';
// import SingleTypeProduct from '../SingleTypeProduct/SingleTypeProduct';
// import SingleProduct from '../../pages/SingleProduct/SingleProduct';
// import Wishlist from '../Wishlist/Wishlist';
// import ContactMe from '../ContactMe/ContactMe';
import { Search } from '../Search/Search';
// import About from '../../pages/About/About';
// import Cartpage from '../../pages/Cartpage';
import { AnimatePresence } from 'framer-motion';
// import Login from '../../pages/Register/Login';
// import Register from '../../pages/Register/Register';
// import Signup from '../../pages/Register/Signup';
// import SetAvatar from '../../pages/Register/SetAvatar';
// import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import { isAuthenticated } from '../../utils/checkAuth';
import { lazy } from 'react';

const Products = lazy(() => import('../../pages/Products/Products'));
const Shop = lazy(() => import('../../pages/Shop/Shop'));
const Error = lazy(() => import('../Error/Error'));
const SingleTypeProduct = lazy(() => import('../SingleTypeProduct/SingleTypeProduct'));
const SingleProduct = lazy(() => import('../../pages/SingleProduct/SingleProduct'));
const Wishlist = lazy(() => import('../Wishlist/Wishlist'));
const ContactMe = lazy(() => import('../ContactMe/ContactMe'));
const About = lazy(() => import('../../pages/About/About'));
const Cartpage = lazy(() => import('../../pages/Cartpage'));
const Login = lazy(() => import('../../pages/Register/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Signup = lazy(() => import('../../pages/Register/Signup'));
const SetAvatar = lazy(() => import('../../pages/Register/SetAvatar'));
const ProtectedRoutes = lazy(() => import('../ProtectedRoutes/ProtectedRoutes'));


function AnimatedRoutes() {
  
    let isAuthent = isAuthenticated();
    let location = useLocation();

  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<ProtectedRoutes isAuth={isAuthent}><Home /></ProtectedRoutes>} />
    <Route path='products' element={<ProtectedRoutes isAuth={isAuthent}><Products /></ProtectedRoutes>} />
    <Route path='shop' element={<ProtectedRoutes isAuth={isAuthent}><Shop /></ProtectedRoutes>} />
    <Route path='cart' element={<ProtectedRoutes isAuth={isAuthent}><Cartpage /></ProtectedRoutes>} />
    <Route path='search' element={<ProtectedRoutes isAuth={isAuthent}><Search /></ProtectedRoutes>} />
    <Route path='about' element={<ProtectedRoutes isAuth={isAuthent}><About /></ProtectedRoutes>} />
    <Route path='wishlist' element={<ProtectedRoutes isAuth={isAuthent}><Wishlist /></ProtectedRoutes>} />
    <Route path='contact' element={<ProtectedRoutes isAuth={isAuthent}><ContactMe /></ProtectedRoutes>} />
    <Route path='*' element={<Error />} />
    <Route path='products/:category' element={<ProtectedRoutes isAuth={isAuthent}><SingleTypeProduct /></ProtectedRoutes>} />
    <Route path='single-product-page/:product_id' element={<ProtectedRoutes isAuth={isAuthent}><SingleProduct /></ProtectedRoutes>} />
    <Route path='products/:type/single-product-page/:product_id' element={<ProtectedRoutes isAuth={isAuthent}><SingleProduct /></ProtectedRoutes>} />
    <Route path='products/single-product-page/:product_id' element={<ProtectedRoutes isAuth={isAuthent}><SingleProduct /></ProtectedRoutes>} />
    {/* Register Routes  */}
    <Route path='register' element={<Register />}>
     {/* Its Child routes */}
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />
    <Route path='setAvatar/:userID' element={<SetAvatar />} />
    </Route>
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes