import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPaymentMethod } from '../../actions/actions'
import Cookie from 'js-cookie';

class Payment extends Component {
    constructor(props){
        super(props);
        this.state = {
            paymentMethod: ""
        }
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    componentDidMount(){
        const cartItems = Cookie.getJSON("cartItems");
        if(!(!!cartItems)){
            this.props.history.push('/cart');
        }else if(cartItems.length === 0) {
        }
    }
    submitFormHandler(e){
        e.preventDefault();
        const paymentMethod = {
            method: this.state.paymentMethod
        }
        this.props.addPaymentMethod(paymentMethod, this.props.history);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{width: "18rem", margin: "2% auto"}}>
                            <div className="card-body">
                            <form onSubmit={this.submitFormHandler}>
                                <h5 className="card-title" style={{marginBottom: "2rem"}}><b>Payment</b></h5>
                                <div className="radio">
                                <label><input required type="radio" name="paymentMethod" value="Stripe" onChange={(e)=>this.setState({paymentMethod: e.target.value})}/> Stripe</label>
                                </div>  
                                <input type="submit" value="Continue" className="btn btn-warning"/>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        addPaymentMethod: (method, history) => {
            dispatchEvent(addPaymentMethod(method));
            history.push('/placeorder');
        }
    }
}
export default connect(null,mapDispatchToProps)(Payment);