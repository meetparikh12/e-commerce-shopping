import React from 'react';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './components/Product/SingleProduct/ProductPage';
import CartPage from './components/Cart/CartPage';
import Register from './components/UserManagement/Register';
import Login from './components/UserManagement/Login';
import ProductScreen from './components/Admin/ProductScreen';
import AddProduct from './components/Admin/AddProduct';
import UpdateProduct from './components/Admin/UpdateProduct';
import ShippingPage from './components/Order/ShippingPage';
import Payment from './components/Order/Payment';
import PlaceOrder from './components/Order/PlaceOrder';
import SingleOrder from './components/Order/SingleOrder';
import OrderList from './components/Order/OrderList';
import jwt_decode from 'jwt-decode';
import store from './store/store';
import { SET_USER_INFO } from './actions/actionTypes';
import setJwtToken from './components/shared/securityUtils/setJwtToken';

const token = localStorage.getItem("jwt-token");
if(token){
  const deocded_token = jwt_decode(token);
  setJwtToken(token);
  store.dispatch({
    type: SET_USER_INFO,
    payload: deocded_token
  })

  if(deocded_token.exp < Date.now()/1000){
    localStorage.removeItem("jwt-token");
    setJwtToken(false);
    store.dispatch({
      type: SET_USER_INFO,
      payload: {}
    })
    window.location.href = '/login';
  }
}

function App(){
    return(
      <Router>
        <Navbar/>
        <main>
        <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path='/products' component={ProductScreen}></Route>
        <Route exact path="/products/addNew" component={AddProduct}></Route>
        <Route exact path="/products/:productId" component={UpdateProduct}></Route>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/product/:productId" component={ProductPage}></Route>
        <Route exact path="/cart" component={CartPage}></Route>
        <Route exact path="/shipping" component={ShippingPage}></Route>
        <Route exact path="/payment" component={Payment}></Route>  
        <Route exact path="/placeorder" component={PlaceOrder}></Route>
        <Route exact path="/orders" component={OrderList}></Route> 
        <Route exact path="/order/:orderId" component={SingleOrder}></Route>      
        <Redirect to="/"/>
        </Switch>
        </main>
      </Router>
    );
}


export default App;
