import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo_img from '../../assets/header_1_logo.svg';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Start closing animation
      setIsClosing(true);
      // After animation completes, actually close the menu
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300); // Match this with your animation duration
    } else {
      setIsMenuOpen(true);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.classList.contains('logo_img')) {
        if (isMenuOpen) toggleMenu();
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="logo">
        <img className='logo_img' src={logo_img} alt="" onClick={toggleMenu} />
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className={`side-menu ${isClosing ? 'closing' : ''}`}
        >
          <button className="close-btn" onClick={toggleMenu}>
            &times;
          </button>
          <h2 className="menu-title">Menu</h2>
          <ul className="menu-items">
            <img className='side-menu-img' src="https://www.mypaaltu.com/wp-content/uploads/2023/01/menu-img.png" alt="" />
            <div className="side-menu-routes">
              <Link to={`/`} onClick={toggleMenu}><li>Home</li></Link>
              <Link to={`/blogs`} onClick={toggleMenu}><li>Blogs</li></Link>
              <Link to={`/aboutus`} onClick={toggleMenu}><li>About Us</li></Link>
              <Link to={`/contactus`} onClick={toggleMenu}><li>Contact Us</li></Link>
            </div>
            <li className="connect-message">Let's connect or make our pets connect?</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;