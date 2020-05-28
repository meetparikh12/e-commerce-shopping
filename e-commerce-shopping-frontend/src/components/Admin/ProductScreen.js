import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';

class ProductScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            productList: []
        }
    }
    
    componentDidMount(){
        Axios.get('http://localhost:5000/api/products')
        .then((res)=> this.setState({productList: res.data.products}))
        .catch((err)=> toast.error(err.response.data, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000}))
    }
    render() {
        return (
            <div className="container">
                <Link to='/products/addNew' style={{marginTop: "2%"}} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Product</i>
                </Link>
                <h2 style={{marginTop: "2%"}}>Products</h2>
                <p></p>            
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Count In Stock</th>
                        <th>Action</th>
                      
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.productList.map((product)=> <tr>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.price}</td>
                        <td>{product.quantityInStock}</td>
                        <td><button>Edit</button><button>Delete</button></td>
                    </tr>)}
                    </tbody>
                </table>
            </div>                        
            
        )
    }
}

export default ProductScreen;