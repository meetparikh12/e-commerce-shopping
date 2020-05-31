import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';

export default class OrderList extends Component {
    constructor(props){
        super(props);
        this.state = {
            orders: []
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:5000/api/orders')
        .then((res)=> {
            this.setState({
                orders: res.data.orders
            })
        })
        .catch((err)=> console.log(err.response.data))
    }

    render() {
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
