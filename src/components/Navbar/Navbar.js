import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { CiSearch, CiHeart, CiShoppingCart } from 'react-icons/ci'
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../contexts/globalContext";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  let { themeState, themeHandler } = useGlobalContext();
  return (
    <>
      <nav className="main-nav" style={themeState}>
        {/* 1st logo part  */}
        <div className="logo">

          <img src="./assets/lo.png" alt="logo" width={250} />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul >
            <li>
              <NavLink to="/" style={themeState}>Home</NavLink>
            </li>
            <li className="cumb">
              <span className="spanNew">New</span>
              <NavLink to="/shop" style={themeState}>Shop</NavLink>
            </li>
            <li style={themeState}>
              <NavLink to="/products" style={themeState}>Products</NavLink>
            </li>
            <li className="cumb">
              <span className="spanSale">Sale</span>
              <NavLink to="/sale-products" style={themeState}>Sale</NavLink>
            </li>
            <li>
              <NavLink to="/about" style={themeState}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={themeState}>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop" >
            <li >
              <Link
                to='/search'
                style={themeState}
                className='nav-icons'

              >
                <CiSearch size={26} style={themeState} />
              </Link>
            </li>
            <li className="cumb">
              <div className="spanCart">0</div>
              <Link
                to='/wishlist'
                style={themeState}
                className="wishlist-icon"

              >
                <CiHeart size={26} style={themeState} />
              </Link>
            </li>
            <li className="cumb">
              <span className="spanCart">0</span>
              <Link
                to='/cart'
                style={themeState}
              >
                <CiShoppingCart size={26} style={themeState} />
                <li onClick={themeHandler}>work</li>
              </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="currentColor"><rect width="30" height="1.5"></rect><rect y="7" width="20" height="1.5"></rect><rect y="14" width="30" height="1.5"></rect></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
