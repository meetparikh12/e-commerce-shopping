import React, { Component } from 'react'

export default class OrderItems extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <img className="img-rounded rounded-circle" style={{"width": "5.5rem", "height": "5.5rem"}} src="https://images-na.ssl-images-amazon.com/images/I/61DLuz2Of5L._UY445_.jpg" alt="Cart item"/>
                    </div>
                    <div className="col-lg-8 col-md-8 pl-4">
                        <h6>Casual Formal Shirt</h6>
                        <p>Quantity: 3</p>
                    </div>
                    <div className="col-lg-2 col-md-2 pl-4">
                        <p>2500/-</p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <img className="img-rounded rounded-circle" style={{"width": "5.5rem", "height": "5.5rem"}} src="https://images-na.ssl-images-amazon.com/images/I/61DLuz2Of5L._UY445_.jpg" alt="Cart item"/>
                    </div>
                    <div className="col-lg-8 col-md-8 pl-4">
                        <h6>Casual Formal Shirt</h6>
                        <p>Quantity: 3</p>
                    </div>
                    <div className="col-lg-2 col-md-2 pl-4">
                        <p>2500/-</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
