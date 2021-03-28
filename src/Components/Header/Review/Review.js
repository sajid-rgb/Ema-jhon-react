import React, { useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../../utilities/databaseManager';
import ProductReview from '../../ProductReview/ProductReview';
import Cart from '../Cart/Cart';
import happyImage from '../../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart,setCart] = useState([])
    const [placeItemOrder,setPlaceOrder] = useState(false);
    const history = useHistory()
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        fetch('https://cryptic-caverns-92959.herokuapp.com/addProductsByKeys',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(productKey)
        })
        .then(res=>res.json())
        .then(data=>setCart(data))
        // const productCart = productKey.map(key => {
        //     const product = fakeData.find(pd=>pd.key===key);
        //     product.quantity = savedCart[key]
        //     return product;
        // })
        // setCart(productCart);
        // console.log(productCart);
    },[])
    
    const proceedCheckout =()=>{
        setCart([]);
        setPlaceOrder(true);
        processOrder();
        history.push("/shipment")
    }
    const removeItem = (productKey)=>{
        const newCart = cart.filter(pd=> pd.key!=productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    let thankYou;
    if (placeItemOrder){
        thankYou = <img src={happyImage}/>
    }
    return (
        <div className="main-div">
            <div className='productDiv'>
            {
                cart.map(pd=><ProductReview pd={pd} removeItem={removeItem}></ProductReview>)
            }
            {
                thankYou
            }
            </div>
            <div className='cart'>
                <Cart cart={cart} >
                    <button onClick={proceedCheckout}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;