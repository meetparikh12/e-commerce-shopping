import React from 'react'
import { connect } from 'react-redux';
import { removeCartItem } from '../../actions/actions';

function CartItem(props) {

    const removeItemHandler = productId => {
        props.removeItemFromCart(productId);

    }
    return (
        <React.Fragment>
         <div className="row">
            <div className="col-md-2">
                <img className="img-rounded rounded-circle" style={{"width": "5.5rem", "height": "5.5rem"}} src={props.item.product.image} alt="Cart item"/>
            </div>
            <div className="col-md-8">
                <h6>{props.item.product.name}</h6>
                <p>Quantity: {props.item.quantity}</p>
                <button className="btn btn-outline-danger" onClick={()=>removeItemHandler(props.item.product._id)}><i class="far fa-times-circle"></i> Remove Item </button>
            </div>
            <div className="col-md-2 text-right">
                <p> {props.item.quantity * props.item.product.price}</p>
            </div>
        </div>
        <hr/>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatchEvent => {
    return {
        removeItemFromCart : (productId)=> dispatchEvent(removeCartItem(productId))
    }
}
export default connect(null,mapDispatchToProps)(CartItem);
