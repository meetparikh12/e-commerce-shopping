import React, { Component } from 'react';
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

class App extends Component {
  render(){
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
        <Route exact path="/cart/:userId" component={CartPage}></Route>
        <Redirect to="/"/>
        </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
