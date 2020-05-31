import React from 'react'

export default function OrderItems(props) {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <img className="img-rounded rounded-circle" style={{"width": "5.5rem", "height": "5.5rem"}} src={props.item.image} alt="Ordered item"/>
                    </div>
                    <div className="col-lg-8 col-md-8 pl-4">
                        <h6>{props.item.name}</h6>
                        <p>Quantity: {props.item.quantityOrdered}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 pl-4">
                        <p>{props.item.price}/-</p>
                    </div>
                </div>
                <hr/>
            </React.Fragment>
        )
}