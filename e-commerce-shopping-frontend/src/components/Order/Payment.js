import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Payment extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{width: "18rem", margin: "2% auto"}}>
                            <div className="card-body">
                                <h5 className="card-title" style={{marginBottom: "2rem"}}><b>Payment</b></h5>
                                <div class="radio">
                                <label><input type="radio" name="paypal" checked/> Paypal</label>
                                </div>  
                                <Link to='/placeorder' className="btn btn-warning">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
