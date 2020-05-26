import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './components/Product/SingleProduct/ProductPage';
import CartPage from './components/Cart/CartPage';

class App extends Component {
  render(){
    return(
      <Router>
        <Navbar/>
        <main>
        <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/product/:id" component={ProductPage}></Route>
        <Route exact path="/cart/:userId" component={CartPage}></Route>
        <Redirect to="/"/>
        </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
