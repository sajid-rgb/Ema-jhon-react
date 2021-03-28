import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
          <div className="header">
          <img src={logo} alt=""/> 
          <div className="menuBar">
            <ul>
              <Link to="/Home">Home</Link>
              <Link to="/Shop">Shop</Link>
              <Link to="/Review">Review</Link>
              <Link to="/Inventory">Inventory</Link>
              <Link to="/Contact">Contact</Link>
              </ul>
          </div>
          </div>
        </div>
    );
};

export default Header;