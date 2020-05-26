import React, {useState} from 'react'
import { connect } from "react-redux";
import { addCartItem } from '../../../actions/actions';
function ProductPage(props) {
    const products = [{
        _id: '1',
        name: 'Polo T-shirt',
        brand: 'Nike',
        price: 1200,
        image: 'https://allensolly.imgix.net/img/app/product/2/290068-1240382.jpg',
        description: 'Nice T-shirt',
        quantity: 5
    }, {
        _id: '2',
        name: 'Regular Fit Polo T-Shirt',
        brand: 'Allen Solly',
        price: 2200,
        image: 'https://allensolly.imgix.net/img/app/product/3/321962-1510640.jpg?auto=format',
        description: 'Nice T-shirt',
        quantity: 3
    }, {
        _id: '3',
        name: "Casual Formal Shirt",
        brand: 'Nike',
        price: 1200,
        image: "https://images-na.ssl-images-amazon.com/images/I/61DLuz2Of5L._UY445_.jpg",
        description: 'Nice Casual Plain Shirt',
        quantity: 7
    }, {
        _id: '4',
        name: 'Polo T-shirt (Black)',
        brand: 'Nike',
        price: 1200,
        image: "https://www.ubexpress.pk/wp-content/uploads/2019/06/Black-Nike-AA-11.jpg",
        description: 'Nice T-shirt',
        quantity: 0
    }];


    const id = props.match.params.id;
    const product = products.find((product)=> product._id === id);
    const [totalPrice, setTotalPrice] = useState(product.price);
    const [quantityOrdered, setQuantityOrdered] = useState(1);
    const quantityHandler = e => {
        setQuantityOrdered(e.target.value);
        setTotalPrice(product.price * e.target.value)
    }

    const addToCartHandler = event => {
        event.preventDefault();
        const cartProduct = {
            _id: product._id,
            name: product.name,
            quantityOrdered: quantityOrdered,
            price: totalPrice,
            image: product.image
        }
        props.addItemToCart(cartProduct);
        props.history.push(`/cart/${props.loggedInUser.userId}`)
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 pr-2 mt-4">
                     <img className="img-fluid rounded" src={product.image} alt="Chania"/> 
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
                        {product.quantity > 0 ? 
                            <div className="card" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Price: {totalPrice}/- INR</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">State: In Stock</h6>
                                    <div className="form-group">
                                        <label>Quantity:</label>
                                            {product.quantity>0 ? <select className="form-control" onChange={quantityHandler}>
                                                {[...Array(product.quantity).keys()].map((quantity)=> 
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
        } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);