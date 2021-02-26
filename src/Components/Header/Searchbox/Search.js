import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart,faStar } from '@fortawesome/free-solid-svg-icons'
import './Search.css'
const Search = (props) => {
    return (
        <div className='inputBox'>
            <input type="text" placeholder="Enter your product name"/>
        
                <span className='cartIcon'><FontAwesomeIcon icon={faShoppingCart}/> <span>{props.cart.length}</span></span>
        </div>
    );
};

export default Search;