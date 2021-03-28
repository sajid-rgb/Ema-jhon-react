import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../App';
import { getDatabaseCart, processOrder } from '../utilities/databaseManager';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const onSubmit = data => {
    const savedCart = getDatabaseCart()
    const orderDetails = {...loggedInUser,products:savedCart,shipment:data}
    fetch('https://cryptic-caverns-92959.herokuapp.com/addOrders',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(orderDetails)
})
.then(res=>res.json())
.then(data=>{
  if(data){
    alert('Success')
    processOrder()
  }
})
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name="email" defaultValue={loggedInUser.email} ref={register} />
    
      

      <input name="" type="password" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;