import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserInfo } from '../../actions/actions';
const Navbar = props => {
    const {loggedInUser} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">ONLINE SH<span style={{"color": "crimson"}}>O</span>PIFY</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    
                    <Link  style={{"color": "white"}} className="nav-link" to="/cart/11">
                    <i className="fa fa-shopping-cart" style={{color: "white"}} aria-hidden="true"></i> Cart
                    </Link>
                </li>
                { !loggedInUser.userId && <li className="nav-item">
                    <Link to="/register" style={{"color": "white"}} className="nav-link">
                    <i className="fa fa-sign-in" style={{color: "white"}} aria-hidden="true"></i>Sign In</Link>
                </li>}
               { loggedInUser.userId && <li className="nav-item">
                    <Link className="nav-link" style={{"color": "white"}} to="/">
                        <i className="fa fa-user mr-1" style={{color: "white"}} aria-hidden="true"></i> 
                         {loggedInUser.name}
                    </Link>
                </li>}
                { loggedInUser.userId && <li className="nav-item">
                    <Link to="/" style={{"color": "white"}} onClick={props.logoutUser} className="nav-link">Logout</Link>
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
        logoutUser : ()=> dispatchEvent(setUserInfo({}))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
