import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../shared/UIElements/Card';

class OrderList extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: []
        }
    }
    componentDidMount(){
        const {userId} = this.props.loggedInUser;
        Axios.get('http://localhost:5000/api/orders/user/' +userId)
        .then((res)=> {
            this.setState({
                orders: res.data.orders
            })
        })
        .catch((err)=> console.log(err.response.data))
    }

    render() {
        if(this.state.orders.length === 0) {
            return (
                <div className="container"> 
                    <div className="row">
                    <div className="col-md-12">
                    <Card style={{width: "max-content", margin:"5% auto"}}>
                        <h4>Sorry, You have no orders yet.</h4>
                        <Link to="/">Go Shopping</Link>
                    </Card>  
                    </div>
                    </div>
                </div> 
            )
        } else {
            return (
                <div className="container">
                    <h2 style={{marginTop: "2%"}}>Your Orders</h2>
                    <p></p>            
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th className="text-center">Delivered</th>
                            <th className="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.orders.map((order)=> <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.isPaid === true ? <p>Yes</p> : <p>No</p> }</td>
                            <td className="text-center">{order.isDelivered === true ? <p>Yes</p> : <p>No</p>}</td>
                            <td className="text-center">
                            <Link to={`/order/${order._id}`} className="btn btn-outline-info mr-1">Details</Link>
                            </td>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.userInfo
    }
}
export default connect(mapStateToProps, null)(OrderList);

