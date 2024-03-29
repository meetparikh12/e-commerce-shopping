import React from 'react';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './pages/Product/SingleProduct/ProductPage';
import CartPage from './pages/Cart/CartPage';
import Register from './pages/UserManagement/Register';
import Login from './pages/UserManagement/Login';
import ProductScreen from './pages/Product/Admin/ProductScreen';
import AddProduct from './pages/Product/Admin/AddProduct';
import UpdateProduct from './pages/Product/Admin/UpdateProduct';
import ShippingPage from './pages/Order/ShippingPage';
import Payment from './pages/Order/Payment';
import PlaceOrder from './pages/Order/PlaceOrder';
import SingleOrder from './pages/Order/SingleOrder';
import OrderList from './pages/Order/OrderList';
import jwt_decode from 'jwt-decode';
import store from './store/store';
import { SET_USER_INFO } from './actions/actionTypes';
import setJwtToken from './components/shared/securityUtils/setJwtToken';
import SecuredRoute from './components/shared/securityUtils/SecuredRoute';

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
        <SecuredRoute exact path='/products' component={ProductScreen}/>
        <SecuredRoute exact path="/products/addNew" component={AddProduct}/>
        <SecuredRoute exact path="/products/:productId" component={UpdateProduct}/>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/product/:productId" component={ProductPage}></Route>
        <Route exact path="/cart" component={CartPage}></Route>
        <SecuredRoute exact path="/shipping" component={ShippingPage}/>
        <SecuredRoute exact path="/payment" component={Payment}/>  
        <SecuredRoute exact path="/placeorder" component={PlaceOrder}/>
        <SecuredRoute exact path="/orders" component={OrderList}/> 
        <SecuredRoute exact path="/order/:orderId" component={SingleOrder}/>      
        <Redirect to="/"/>
        </Switch>
        </main>
      </Router>
    );
}


export default App;
