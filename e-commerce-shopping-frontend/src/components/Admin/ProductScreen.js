import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { getAllProducts, deleteProduct } from '../../actions/actions';
import { connect } from 'react-redux';

class ProductScreen extends Component {

    constructor(props){
        super(props);
        this.deleteProductHandler = this.deleteProductHandler.bind(this);

    }
    
    componentDidMount(){
        Axios.get('http://localhost:5000/api/products')
        .then((res)=> this.props.getAllProducts(res.data.products))
        .catch((err)=> toast.error(err.response.data, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000}))
    }

    deleteProductHandler(productId){
        if(window.confirm('Do you want to delete this product? This action cannot be undone.')){
            Axios.delete(`http://localhost:5000/api/products/${productId}`)
            .then((res)=> {
                this.props.deleteProduct(productId);
                toast.success(res.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 })
            })
            .catch((err)=> toast.error(err.response.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            }))
        }
    }
    render() {

        const {productList} = this.props;
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
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th className="text-center">Count In Stock</th>
                        <th className="text-center">Action</th>
                      
                    </tr>
                    </thead>
                    <tbody>
                    {productList.map((product)=> <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.price}</td>
                        <td className="text-center">{product.quantityInStock}</td>
                        <td className="text-center">
                        <Link to={`/products/{${product._id}}`} className="btn btn-outline-info mr-1">Edit</Link>
                        <button onClick={()=> this.deleteProductHandler(product._id)} className="btn btn-outline-danger">Delete</button></td>
                    </tr>)}
                    </tbody>
                </table>
            </div>                        
            
        )
    }
}

const mapStateToProps = state => {
    return {
        productList: state.product.productList
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        getAllProducts: (productList) => {
            dispatchEvent(getAllProducts(productList));
        },
        deleteProduct: (productId) => {
            dispatchEvent(deleteProduct(productId));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);