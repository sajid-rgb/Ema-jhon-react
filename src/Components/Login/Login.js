import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import userEvent from '@testing-library/user-event';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }


const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider();
    const [user,setUser] = useState({
          email:'',
          password:''

    })
    const history=useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const handleSignIn=(event)=>{
   
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
        if(user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    const newUserInfo = {...user}
    setLoggedInUser(newUserInfo)
    history.replace(from);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });

        }

    }
    const handleBlur=(e)=>{
        let isFormValid = true;
        
        if(e.target.name==="email"){
            console.log(e.target.value);
            isFormValid =e.target.value
             
        }
        if(e.target.name==="password"){
            console.log(e.target.value);
            isFormValid =e.target.value
        }
        if(isFormValid){
            const newUser = {...user}
            newUser[e.target.name] = e.target.value
            setUser(newUser)
        }
    }
    return (
        <div>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <form >
                <input type='email' placeholder='Enter Email' name='email'  onBlur={handleBlur} style={{width:'350px'}} required/> <br/>
                <input type='password' placeholder='Enter password' onBlur={handleBlur} name='password'  style={{width:'350px'}} required/> <br/>
                <input type='button' onClick={handleSignIn} style={{width:'150px',backgroundColor:'red',height:'40px'}} value="Submit" />
            </form>
            <form >
                <input type='email' placeholder='Enter Email' name='email'  onBlur={handleBlur} style={{width:'350px'}} required/> <br/>
                <input type='password' placeholder='Enter password' onBlur={handleBlur} name='password'  style={{width:'350px'}} required/> <br/>
                <input type='button' onClick={handleSignIn} style={{width:'150px',backgroundColor:'red',height:'40px'}} value="Sign In" />
            </form>
            
        </div>
    );
};

export default Login;