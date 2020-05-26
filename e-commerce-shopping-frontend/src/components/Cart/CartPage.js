import React from 'react'
import { connect } from "react-redux";
import Card from '../shared/UIElements/Card';
import CartItem from './CartItem';

function CartPage(props) {
 
    if(props.cart.length === 0) {
        return (
            <div className="cart-list">  
                <Card style={{width: "max-content", margin:"2%"}}>
                    <h2>Your cart is empty.</h2>
                </Card>  
            </div> 
    )} else {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-md-6 col-sm-12">
                        <h4 style={{marginTop: "2%"}}>Shopping Cart</h4>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right">
                        <h4 style={{marginTop: "2%"}}>Price</h4>
                    </div>
                </div>
                <hr/>
                {props.cart.map((item)=> {
                    return <CartItem key={item.product._id} item={item}/>
                })}
            </div>
        )       
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cartProduct
    }
}
export default connect(mapStateToProps, null)(CartPage);