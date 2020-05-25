import React from 'react'

export default function ProductPage(props) {
    const products = [{
        _id: '1',
        name: 'Polo T-shirt (Black)',
        brand: 'Nike',
        price: 1200,
        image: "https://images.sg.content-cdn.io/cdn//in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK618925-010L.jpg",
        description: 'Nice T-shirt',
        stock: 'In Stock'
    }, {
        _id: '2',
        name: 'Polo T-shirt (Blue)',
        brand: 'Nike',
        price: 1200,
        image: "https://images.sg.content-cdn.io/cdn//in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK833592-457.jpg",
        description: 'Nice T-shirt',
        stock: 'In Stock'

    }, {
        _id: '3',
        name: "Running T-Shirt (White)",
        brand: 'Nike',
        price: 1200,
        image: "https://johnbuckleysports.com/wp-content/uploads/2014/11/833591_100_A.jpg",
        description: 'Nice T-shirt',
        stock: 'In Stock'

    }, {
        _id: '4',
        name: 'Polo T-shirt (Light blue)',
        brand: 'Nike',
        price: 1200,
        image: "https://www.hautelookcdn.com/products/AJ8021/large/12062782.jpg",
        description: 'Nice T-shirt',
        stock: 'In Stock'

    }];

    const id = props.match.params.id;
    const product = products.find((product)=> product._id === id);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 pr-2 mt-4">
                     <img class="img-fluid rounded" style={{border: "2px solid black", padding: "5% 0"}} src={product.image} alt="Chania"/> 
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
                        <div class="card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Price: {product.price}/- INR</h5>
                                <h6 class="card-subtitle mb-2 text-muted">State: {product.stock}</h6>
                                <div class="form-group">
                                    <label for="quantity">Quantity:</label>
                                        <select class="form-control" id="quantity">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                </div> 
                                <button className="btn btn-warning" style={{color: "white"}}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
