import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserInfo } from '../../actions/actions';
import setJwtToken from '../shared/securityUtils/setJwtToken';
import store from '../../store/store';
import { ADD_SHIPPING_DETAILS, ADD_PAYMENT_METHOD, GET_ALL_PRODUCTS } from '../../actions/actionTypes';
const Navbar = props => {

    const logoutUser = () => {
        store.dispatch({
            type: ADD_SHIPPING_DETAILS,
            payload: {}
        })
        store.dispatch({
            type: ADD_PAYMENT_METHOD,
            payload: {}
        })
        store.dispatch({
            type: GET_ALL_PRODUCTS,
            payload: []
        })
        props.logoutUser();
    }
    const {loggedInUser} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">ONLINE SH<span style={{"color": "crimson"}}>O</span>PIFY</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                { loggedInUser.userId && <li className="nav-item mr-2">
                    <Link  style={{"color": "white"}} className="nav-link" to="/orders">
                    <i className="fas fa-list" style={{color: "white"}}></i> My Orders
                    </Link>
                </li>}
                
                <li className="nav-item mr-2">
                    <Link  style={{"color": "white"}} className="nav-link" to="/cart">
                    <i className="fa fa-shopping-cart" style={{color: "white"}} aria-hidden="true"></i> Cart
                    </Link>
                </li>
                { !loggedInUser.userId && <li className="nav-item">
                    <Link to="/login" style={{"color": "white"}} className="nav-link">
                    <i className="fas fa-sign-in-alt" style={{color: "white"}}></i> Sign In</Link>
                </li>}
                { loggedInUser.userId && loggedInUser.isAdmin && <li className="nav-item mr-2">
                    <Link className="nav-link" style={{"color": "white"}} to="/products">
                        <i className="fas fa-dolly-flatbed mr-2" style={{color: "white"}}></i>
                         Manage Products
                    </Link>
                </li>}
               { loggedInUser.userId && <li className="nav-item mr-2">
                    <Link className="nav-link" style={{"color": "white"}} to="/">
                        <i className="fas fa-user-circle mr-1" style={{color: "white"}} aria-hidden="true"></i> 
                         {loggedInUser.name}
                    </Link>
                </li>}
                { loggedInUser.userId && <li className="nav-item">
                    <Link to="/login" style={{"color": "white"}} onClick={logoutUser} className="nav-link">
                    <i className="fas fa-sign-out-alt"  style={{color: "white"}}></i> Logout</Link>
                </li>}
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser : state.user.userInfo
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        logoutUser : ()=> {
            localStorage.removeItem("jwt-token");
            setJwtToken(false);
            dispatchEvent(setUserInfo({}));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
