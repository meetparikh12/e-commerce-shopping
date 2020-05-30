import React, { Component } from 'react'
import OrderItems from './OrderItems'
import { connect } from 'react-redux';

class PlaceOrder extends Component {
    render() {
        const {shippingDetails, paymentMethod} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" style={{marginTop: "2%"}}>
                        <div className="row">
                            <div className="card bg-light text-dark" style={{width: "90%", margin: "auto"}}>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Shipping Address</b></h5>
                                    <p className="card-text">{shippingDetails.address}, {shippingDetails.city}, {shippingDetails.country}, {shippingDetails.postalCode}</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="card bg-light text-dark" style={{width: "90%", margin: "auto"}}>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Payment Method</b></h5>
                                    <p className="card-text">{paymentMethod.method}</p>
                                </div>
                            </div>
                        </div>   
                        <br/>
                        <div className="card bg-light text-dark" style={{width: "94%", margin: "auto"}}>   
                            <div className="card-body">
                                    <h5 className="card-title"><b>Order Items</b></h5>
                                    <OrderItems/>
                            </div>     
                            
                        </div>
                    </div>
                    <div className="col-lg-4" style={{margin: "2% 0", padding: "0%"}}>
                        <div className="card" style={{"width": "18rem", margin: "auto" }}>
                            <button className="btn btn-warning">Place Order</button>
                            <div className="card-body">
                                <h5 className="card-title"><b>Order Summary</b></h5>
                                <p className="card-text">Items: 3600/- INR</p>
                                <p className="card-text">Shipping: Free</p>                                
                                <p className="card-text">Tax: 130/- INR</p>
                                <h5 className="card-title">Order Total: 3730/- INR</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PlaceOrder.defaultProps = {
    shippingDetails: {},
    paymentMethod: {}
}
const mapStateToProps = state => {
    return {
        shippingDetails: state.shipping.shippingAddress,
        paymentMethod: state.shipping.paymentMethod
    }
}
export default connect(mapStateToProps,null)(PlaceOrder);