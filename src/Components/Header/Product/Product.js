import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart,faStar } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const product=props.product;
    const {name,seller,price,stock,img,features,url}=product;
    return (
        <div>
            <div className='product-container'>
            <div>
               <img src={img} alt=""/>
            </div>
            <div className='product-detail'>
               
            <Link to={"/product/"+product.key}><h5>{name}</h5></Link>
               <div className='product-des'>
               <div>
                <p><small>by:{seller}</small></p>
                <h4>${price}</h4>
                <p><small>Only {stock} left in stock - order soon</small></p>
               {
                   props.showAddToCart &&  <button onClick={()=>props.buttonClick(product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
               }
               </div>
               <div className='features'>
                   <p className='star'><FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <span className='fill'><FontAwesomeIcon icon={faStar}/></span> </p>
                   <h3>Features</h3>
                   
                   <button><a to={product.url} target='_' style={{textDecoration:'none', color:'blue'}}>More Detail</a></button>
               </div>
               </div>
            </div>
            
            
        </div>
        </div>
    );
};

export default Product;