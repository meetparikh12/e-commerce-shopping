import React, { Component } from 'react'
import OrderItems from './OrderItems'

export default class PlaceOrder extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" style={{marginTop: "2%"}}>
                        <div className="row">
                            <div class="card bg-light text-dark" style={{width: "90%", margin: "auto"}}>
                                <div class="card-body">
                                    <h5 class="card-title"><b>Shipping Address</b></h5>
                                    <p class="card-text">205 Sukun Flats, Arunachal Road, Subhanpura, Vadodara, India-390023</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div class="card bg-light text-dark" style={{width: "90%", margin: "auto"}}>
                                <div class="card-body">
                                    <h5 class="card-title"><b>Payment Method</b></h5>
                                    <p class="card-text">PayPal</p>
                                </div>
                            </div>
                        </div>   
                        <br/>
                        <div class="card bg-light text-dark" style={{width: "94%", margin: "auto"}}>   
                            <div class="card-body">
                                    <h5 class="card-title"><b>Order Items</b></h5>
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
