import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart=props.cart;
    const total = cart.reduce((total,price)=>total+price.price,0);
    const shipping = cart.reduce((shipping,pr)=>shipping+pr.shipping,0);
    const shippingAndTotal=shipping+total;
    const tax= total/10;
    const grandTotal=shippingAndTotal + tax;
    return (
        <div className='cart'>
           <h2>Product Summary</h2>
           <p>Items Ordered: {props.cart.length}</p>
           <p>Items: ${total.toFixed(2)}</p>
           <p>Shipping & Handling: {shipping.toFixed(2)}</p>
           <p>Total before tax:{shippingAndTotal.toFixed(2)}</p>
           <p>Estimated Tax: {tax.toFixed(2)}</p>
           <h1 className="grandTotal">Order Total:{grandTotal.toFixed(2)}</h1>
           <button>Review your order</button>
        </div>
    );
};

export default Cart;