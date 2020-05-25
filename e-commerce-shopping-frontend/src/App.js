import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return(
      <Router>
        <Navbar/>
        <main>
        <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Redirect to="/"/>
        </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
