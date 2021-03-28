import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Header/Review/Review';
import Contacts from './Components/Contacts/Contacts';
import Error from './Components/Error/Error';
import ProductDetails from './Components/ProductDetail/ProductDetails';
import Login from './Components/Login/Login';
import Shipment from './Components/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Inventory from './Components/Invwntory/Inventory';
export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  const [loggedIn,setLoggedIn]=useState(false)
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>{loggedInUser.email}</p>
      
              <button type="submit" onClick={()=>setLoggedInUser({})}>Sign Out</button>
      
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/Shop">
          <Shop></Shop>
          </Route>
          <Route path="/Review">
             <Review></Review>
          </Route>
          <PrivateRoute path="/Contact">
            <Contacts></Contacts>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/Home">
          <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
</UserContext.Provider>
  );
}

export default App;
