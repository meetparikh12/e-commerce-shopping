import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { toast } from 'react-toastify';
toast.configure();
class UpdateProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            brand: '',
            description: '',
            image: '',
            price: '',
            quantityInStock: '',
            isLoaded: false,
            isBtnDisabled: false
        }
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    componentDidMount(){
        const {productId} = this.props.match.params;
        Axios.get(`http://localhost:5000/api/products/${productId}`)
        .then((res)=> {
            const {product} = res.data;
            this.setState({
                name: product.name,
                brand: product.brand,
                description: product.description,
                image: product.image,
                price: product.price,
                quantityInStock: product.quantityInStock,
                isLoaded: true
            })
        })
        .catch((err)=> 
        {      
              
            toast.error(err.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
            this.props.history.push('/products')
        })
    }

    fieldChangeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    formSubmitHandler(event){
        this.setState({
            isBtnDisabled: true
        })
        event.preventDefault();
        const {productId} = this.props.match.params;
        const { name, brand, description, price, image, quantityInStock} = this.state;
        const product = {
            name,
            brand,
            description,
            price,
            image,
            quantityInStock
        }
        Axios.patch(`http://localhost:5000/api/products/${productId}`, product)
        .then((res)=> {
            toast.success(res.data.message, {position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000})
            this.props.history.push('/products')
        })
        .catch((err)=> {
            toast.error(err.response.data.message[0].msg || err.response.data.message , {
                position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000
            })
            this.setState({
                isBtnDisabled: false
            })
        })
    }

    render() {
        if(!this.state.isLoaded){
            return <h4 className="text-center mt-5">Loading...</h4>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto" >
                        <Link to="/products" style={{marginTop: "2%"}} className="btn btn-light">Back to List</Link>
                        <h4 className="display-4 text-center">Update Product</h4>
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
                                <input type="text" onChange={this.fieldChangeHandler} className="form-control form-control-lg" placeholder="Product Image" 
                                    name="image" value={this.state.image}/>
                            </div>
                            
                            <input type="submit" disabled={this.state.isBtnDisabled} value="Update Product" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}


export default UpdateProduct;
