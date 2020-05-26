import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = props => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">ONLINE SH<span style={{"color": "crimson"}}>O</span>PIFY</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    
                    <Link  style={{"color": "white"}} className="nav-link" to="/cart/11"><i className="fa fa-shopping-cart" style={{"color": "crimson"}} aria-hidden="true"></i> CART</Link>
                </li>
                <li className="nav-item">
                    <a  style={{"color": "white"}} className="nav-link" href=" ">SIGN IN</a>
                </li>
                
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
