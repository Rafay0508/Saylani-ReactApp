import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom';


const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img className="logo-image" src="./images/logo.png" alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li onClick={scrollToTop}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/contactUs">contact Us</Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/admin">Admin</Link>
            </li>

          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
          </div>

          <div className="donate-button">
            <button>Donate Now</button>
          </div>
        </div>
      </nav>
     

    </>
  );
};

export default Navbar;