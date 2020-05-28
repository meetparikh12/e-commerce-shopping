import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class ProductScreen extends Component {
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Count In Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {}
                    </tbody>
                </table>
            </div>                        
            
        )
    }
}

const mapStateToProps = state => {
    return {
        productList : state.product.productList
    }
}
export default connect(mapStateToProps, null)(ProductScreen);