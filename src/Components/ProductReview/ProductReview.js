import React from 'react';

const ProductReview = (props) => {
    const {name,quantity,key,price} = props.pd;
    return (
        <div>
          <h4>{name}</h4>
          <p>Quantity: {quantity}</p>
          <h5>{price}</h5>
          <button style={{backgroundColor:'red',color:'white',marginLeft:'20px'}} onClick={()=>props.removeItem(key)}> Remove</button>
        </div>
    );
};

export default ProductReview;