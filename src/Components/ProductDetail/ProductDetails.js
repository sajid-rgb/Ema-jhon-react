import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Header/Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch('https://cryptic-caverns-92959.herokuapp.com/product/'+productKey)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[product])
    console.log(product);
    // const product = fakeData.find(pd=>pd.key === productKey);
    return (
        <div>
           <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetails;