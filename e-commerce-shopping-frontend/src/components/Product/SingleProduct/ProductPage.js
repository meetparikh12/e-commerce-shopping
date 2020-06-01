import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import { addCartItem } from '../../../actions/actions';
import Axios from 'axios';
import store from '../../../store/store';
import Cookie from 'js-cookie';
import { toast } from 'react-toastify';

function ProductPage(props) {
    
    const [quantityOrdered, setQuantityOrdered] = useState(1);
    const [product, setProduct] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        const {productId} = props.match.params;
        Axios.get(`http://localhost:5000/api/products/${productId}`)
        .then((res)=> {
            setProduct(res.data.product);
            setTotalPrice(res.data.product.price);
            setIsLoaded(true);
        })
        .catch((err)=> {
            toast.error(err.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        });
    }, [props.match.params]);


    const quantityHandler = e => {
        setQuantityOrdered(e.target.value);
        setTotalPrice(product.price * e.target.value)
    }

    const addToCartHandler = event => {
        event.preventDefault();
        const cartItems = Cookie.getJSON("cartItems");
        let isItemInCart;
        if(!(!!cartItems)){
            isItemInCart = false
        }else {
            isItemInCart = cartItems.find((item)=> item._id === product._id);
        }

        if(isItemInCart){
            alert('This item is already in you cart.');
            return;
        }
        const cartProduct = {
            _id: product._id,
            name: product.name,
            quantityOrdered: quantityOrdered,
            price: totalPrice,
            image: product.image
        }
        props.addItemToCart(cartProduct);
        props.history.push('/cart')
    }

    if(!isLoaded){
        return <h4 className="text-center mt-5">Loading...</h4>
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 pr-2 mt-4">
                     <img className="img-fluid rounded" src={product.image} alt="Product"/> 
                </div>
                
                <div className="col-md-8 my-4" style={{paddingLeft: "10%"}}>
                    <div className="row">
                        <div className="product-details">
                            <h3><b>{product.name}</b></h3> 
                            <h4>Price: <span style={{color: "crimson"}}>{product.price}/-</span> INR</h4>
                            <p>Description: {product.description} </p>
                        </div>
                    </div>
                    <div className="row">
                        {product.quantityInStock > 0 ? 
                            <div className="card" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Price: {totalPrice}/- INR</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">State: In Stock</h6>
                                    <div className="form-group">
                                        <label>Quantity:</label>
                                            {product.quantityInStock > 0 ? <select className="form-control" onChange={quantityHandler}>
                                                {[...Array(product.quantityInStock).keys()].map((quantity)=> 
                                                    <option key={quantity+1} value={quantity+1}>{quantity+1}</option>
                                                )}
                                            </select>: <span> 0</span>}
                                    </div> 
                                    <button className="btn btn-warning" onClick={addToCartHandler} style={{color: "white"}}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</button>
                                </div>
                            </div>
                        : 
                        <h5 className="card-subtitle mb-2 text-muted">State: Out Of Stock</h5>}        
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loggedInUser : state.user.userInfo
    }
}
const mapDispatchToProps = dispatchEvent => {
    return {
        addItemToCart: (product) => {
            dispatchEvent(addCartItem(product));
            const  { cart } = store.getState();
            Cookie.set("cartItems", JSON.stringify(cart.cartProduct));
        } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);