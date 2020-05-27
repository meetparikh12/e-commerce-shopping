import React from 'react'
import ProductItem from './ProductItem'
import './ProductList.css';

export default function ProductList(props) {
    return (
        <div className="container mb-5">
            <div className="row">        
                {props.products.map((product) => 
                    <ProductItem key={product._id}
                        id={product._id}
                        name={product.name}
                        brand={product.brand}
                        image={product.image}
                        price={product.price}
                    />
                )}
            </div>
        </div>
    )
}

        
         