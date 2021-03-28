import React, { useEffect, useState } from 'react';

import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Search from '../Searchbox/Search';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [product,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    let count = 1;
    let newCart;
    useEffect(() => {
        fetch('https://cryptic-caverns-92959.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        if(product.length>0){
            const previousData=productKeys.map(existingKey=>{
                const pr = product.find(pd=>pd.key === existingKey)
                pr.quantity = savedCart[existingKey]
                return pr;
            })
            setCart(previousData);
        }
        
    },[product])
    
    const buttonClick=(product)=>{
        const sameProduct = cart.find(pd=>pd.key=== product.key);
        if (sameProduct){
            const count = sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=>pd.key!== product.key);
            newCart=[...others,sameProduct]
        }
        else{
            product.quantity = 1;
            newCart =[...cart,product]
        } 
        setCart(newCart);
        addToDatabaseCart(product.key,count)
    }
    return (
        <div>
          <Search cart={cart}></Search>  
        <div className='main-div'>
            <div className='productDiv'>
           
           {
               product.map(item=><Product product={item} buttonClick={buttonClick} showAddToCart={true}></Product>)
           }
       </div>
       <div className='cart'>
           <Cart cart={cart}>
           <Link to="/review"><button>Review your order</button></Link>
                </Cart>
       </div>
        </div>
        </div>
    );
};

export default Shop;