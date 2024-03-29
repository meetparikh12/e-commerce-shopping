import React from 'react'
import { connect } from 'react-redux';
import { removeCartItem } from '../../actions/actions';
import store from '../../store/store';
import Cookie from "js-cookie";
import config from 'react-global-configuration';

function CartItem(props) {

    const removeItemHandler = productId => {
        props.removeItemFromCart(productId);

    }
    return (
        <React.Fragment>
         <div className="row">
            <div className="col-md-2">
                <img className="img-rounded rounded-circle" style={{"width": "5.5rem", "height": "5.5rem"}} src={`${config.get('backend_asset_url')}/${props.item.image}`} alt="Cart item"/>
            </div>
            <div className="col-md-8">
                <h6>{props.item.name}</h6>
                <p>Quantity: {props.item.quantityOrdered}</p>
                <button className="btn btn-outline-danger" onClick={()=>removeItemHandler(props.item._id)}><i className="far fa-times-circle"></i> Remove Item </button>
            </div>
            <div className="col-md-2 text-right">
                <p> {props.item.price}/- INR</p>
            </div>
        </div>
        <hr/>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatchEvent => {
    return {
        removeItemFromCart : (productId)=> {
            dispatchEvent(removeCartItem(productId))
            const  { cart } = store.getState();
            Cookie.set("cartItems", JSON.stringify(cart.cartProduct));
    
        }
    }
}
export default connect(null,mapDispatchToProps)(CartItem);
