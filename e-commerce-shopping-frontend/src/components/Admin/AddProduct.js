import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class AddProduct extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto" >
                        <Link to="/products" style={{marginTop: "2%"}} className="btn btn-light">Back to List</Link>
                        <h4 className="display-4 text-center">Add Product</h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="name" 
                                value="" placeholder="Product Name"/>
                            </div>
                            
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                name="brand" 
                                value=""  placeholder="Product Brand"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Product Description" 
                                name="description"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                name="price" 
                                value=""  placeholder="Product Price"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                name="quantityInStock" 
                                value=""  placeholder="Quantity in Stock"/>
                            </div>
                            <div className="form-group">
                                <input type="file" className="form-control form-control-lg" placeholder="Product Image" 
                                    name="image"/>
                            </div>
                            
                            <input type="submit" value="Add Product" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}
