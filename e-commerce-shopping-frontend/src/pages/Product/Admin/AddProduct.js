import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { toast } from 'react-toastify';
import config from 'react-global-configuration';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            brand: '',
            description: '',
            image: '',
            price: '',
            quantityInStock: '',
            isBtnDisabled: false
        }
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);

    }

    fileChangeHandler(e) {
        console.log(e.target);
        
        this.setState({
            image: e.target.files[0]
        })
    }

    fieldChangeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    formSubmitHandler(event){
        event.preventDefault();
        this.setState({
            isBtnDisabled: true
        })
        const { name, brand, description, price, image, quantityInStock} = this.state;
        
        const product = new FormData();
        product.set('name', name);
        product.set('brand', brand);
        product.set('description', description);
        product.set('price', price);
        product.set('quantityInStock', quantityInStock);
        product.append('image', image);

        Axios.post(`${config.get('backend_url_products')}`, product)
        .then((res)=> {
            toast.success(res.data.message, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000})
            this.props.history.push('/products')
        })
        .catch((err)=> {
            console.log(err);
            toast.error(err.response.data.message[0].msg || err.response.data.message , {
                position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000
            })
            this.setState({
                isBtnDisabled: false
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto" >
                        <Link to="/products" style={{marginTop: "2%"}} className="btn btn-light">Back to List</Link>
                        <h4 className="display-4 text-center">Add Product</h4>
                        <form onSubmit={this.formSubmitHandler}>
                            <div className="form-group">
                                <input type="text" onChange={this.fieldChangeHandler} className="form-control form-control-lg" name="name" 
                                value={this.state.name} placeholder="Product Name"/>
                            </div>
                            
                            <div className="form-group">
                                <input type="text" onChange={this.fieldChangeHandler} className="form-control form-control-lg"
                                name="brand" 
                                value={this.state.brand}  placeholder="Product Brand"/>
                            </div>
                            <div className="form-group">
                                <textarea onChange={this.fieldChangeHandler} className="form-control form-control-lg" placeholder="Product Description" 
                                name="description" value={this.state.description}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={this.fieldChangeHandler} className="form-control form-control-lg"
                                name="price" 
                                value={this.state.price}  placeholder="Product Price"/>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={this.fieldChangeHandler} className="form-control form-control-lg"
                                name="quantityInStock" 
                                value={this.state.quantityInStock}  placeholder="Quantity in Stock"/>
                            </div>
                            <div className="form-group">
                                <input type="file" required accept='.jpg,.png,.jpeg' onChange={this.fileChangeHandler} className="form-control form-control-lg" placeholder="Product Image" 
                                    name="image"/>
                            </div>
                            
                            <input type="submit" disabled={this.state.isBtnDisabled} value="Add Product" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}


export default AddProduct;
