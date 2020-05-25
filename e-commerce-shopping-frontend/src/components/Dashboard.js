import React from 'react'
import ProductList from './Product/ProductList';

export default function Dashboard() {
    const products = [{
        _id: '1',
        name: 'Polo T-shirt',
        brand: 'Nike',
        price: 1200,
        image: 'https://allensolly.imgix.net/img/app/product/2/290068-1240382.jpg'
    }, {
        _id: '2',
        name: 'Regular Fit Polo T-Shirt',
        brand: 'Allen Solly',
        price: 2200,
        image: 'https://allensolly.imgix.net/img/app/product/3/321962-1510640.jpg?auto=format'
    }, {
        _id: '3',
        name: "Casual Formal Shirt",
        brand: 'Nike',
        price: 1200,
        image: "https://images-na.ssl-images-amazon.com/images/I/61DLuz2Of5L._UY445_.jpg"
    }, {
        _id: '4',
        name: 'Polo T-shirt (Black)',
        brand: 'Nike',
        price: 1200,
        image: "https://www.ubexpress.pk/wp-content/uploads/2019/06/Black-Nike-AA-11.jpg"
    }];
        return (
            <ProductList products = {products}/>
        )
}

