import React, { useState } from 'react';
import fakeData from '../../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Search from '../Searchbox/Search';
import './Shop.css'
const Shop = () => {
    const data= fakeData;
    const [product,setProduct]=useState(data);
    const [cart,setCart]=useState([]);
    const buttonClick=(product)=>{
        const newCart =[...cart,product]
        setCart(newCart);
    }
 

    return (
        <div>
          <Search cart={cart}></Search>  
        <div className='main-div'>
            <div className='productDiv'>
           
           {
               product.map(item=><Product product={item} buttonClick={buttonClick}></Product>)
           }
       </div>
       <div className='cart'>
           <Cart cart={cart}> </Cart>
       </div>
        </div>
        </div>
    );
};

export default Shop;