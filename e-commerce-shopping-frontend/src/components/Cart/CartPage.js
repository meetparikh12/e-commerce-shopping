import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import Card from '../shared/UIElements/Card';
import CartItem from './CartItem';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CartPage(props) {
    const [subTotal, setSubTotal] = useState(0);
    const [cartRedirectPage, setCartRedirectPage] = useState("login");

    useEffect(()=>{
        if(props.loggedInUser.userId){
            setCartRedirectPage("shipping");
        }else{
            setCartRedirectPage("login");
        }
    }, [props.loggedInUser]);
    useEffect(() => {
        let cartProduct;
        if(props.cart.length === 0) {
            cartProduct = [{"price": 0}];
        } else {
            cartProduct = props.cart
        }
        const totalCost = cartProduct.reduce((acc,cur)=> ({ price : acc.price + cur.price}));
        setSubTotal(totalCost.price);
    }, [props.cart])

    if(props.cart.length === 0) {
        return (
            <div className="container"> 
                <div className="row">
                <div className="col-md-12">
                <Card style={{width: "max-content", margin:"5% auto"}}>
                    <h4><i className="fa fa-shopping-cart" aria-hidden="true"></i> Sorry, Your Cart is empty.</h4>
                    <Link to="/">Go Shopping</Link>
                </Card>  
                </div>
                </div>
            </div> 
    )} else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{width: "18rem", margin: "2% auto", float: "right"}}>
                            <div className="card-body">
                                <h5 className="card-title">Subtotal: {subTotal}/- INR</h5>
                                
                                <Link to={`/${cartRedirectPage}`} className="btn btn-warning" style={{color: "white"}}>Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 col-sm-6">
                        <h5 style={{marginTop: "2%"}}><b>Shopping Cart </b><i className="fa fa-shopping-cart" aria-hidden="true"></i></h5>
                    </div>
                    <div className="col-md-6 col-sm-6 text-right">
                        <h5 style={{marginTop: "2%"}}><b>Price</b></h5>
                    </div>
                </div>
                <hr/>
                {props.cart.map((item)=> {
                  return (
                        <CartItem key={item._id} item={item}/>
                )
                })}
                
            </div>
        )       
    }
}
CartPage.defaultProps = {
    cart: [],
    loggedInUser: {}
}
CartPage.propTypes = {
    cart: PropTypes.array.isRequired
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cartProduct,
        loggedInUser: state.user.userInfo
    }
}
export default connect(mapStateToProps, null)(CartPage);