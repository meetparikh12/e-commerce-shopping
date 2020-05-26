import React from 'react'

export default function CartItem(props) {
    return (
        <React.Fragment>
         <div className="row">
            <div className="col-md-2">
                <img className="img-rounded rounded-circle" style={{"width": "5.5rem", "height": "5.5rem"}} src={props.item.product.image} alt="Cart item"/>
            </div>
            <div className="col-md-8">
                <h6><b>{props.item.product.name}</b></h6>
                <p>Quantity: {props.item.quantity}</p>
                <button className="btn btn-outline-danger">Remove Item</button>
            </div>
            <div className="col-md-2 text-right">
                <p> {props.item.quantity * props.item.product.price}</p>
            </div>
        </div>
        <hr/>
        </React.Fragment>
    )
}
