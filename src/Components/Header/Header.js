import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
          <div className="header">
          <img src={logo} alt=""/> 
          <div className="menuBar">
            <ul>
              <a href="/Home">Home</a>
              <a href="/Shop">Shop</a>
              <a href="/Review">Review</a>
              <a href="/Contact">Contact</a>
              </ul>
          </div>
          </div>
        </div>
    );
};

export default Header;