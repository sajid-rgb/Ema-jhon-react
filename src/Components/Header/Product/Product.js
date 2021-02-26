import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart,faStar } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const product=props.product;
    console.log(product);
    const {name,seller,price,stock,img,features,url}=product;
    return (
        <div>
            <div className='product-container'>
            <div>
               <img src={img} alt=""/>
            </div>
            <div className='product-detail'>
               
               <h5>{name}</h5>
               <div className='product-des'>
               <div>
                <p><small>by:{seller}</small></p>
                <h4>${price}</h4>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.buttonClick(product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
               </div>
               <div className='features'>
                   <p className='star'><FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <span className='fill'><FontAwesomeIcon icon={faStar}/></span> </p>
                   <h3>Features</h3>
                   <ul>
                       {
                           features.map(value=><li>{value.description} {value.value}</li>)
                       }
                   </ul>
                   <button><a href={product.url} target='_' style={{textDecoration:'none', color:'black'}}>More Detail</a></button>
               </div>
               </div>
            </div>
            
            
        </div>
        </div>
    );
};

export default Product;