import React from 'react';
import fakeData from '../../fakeData'
const Inventory = () => {
    const handleAddProduct = ()=>{
        fetch('https://cryptic-caverns-92959.herokuapp.com/addProducts',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(fakeData)
        })
    }

    return (
        <div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Inventory;