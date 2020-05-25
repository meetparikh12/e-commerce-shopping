import React from 'react'
import ProductList from './Product/ProductList';

export default function Dashboard() {
    const products = [{
        _id: '1',
        name: 'Polo T-shirt (Black)',
        brand: 'Nike',
        price: 1200,
        image: "https://images.sg.content-cdn.io/cdn//in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK618925-010L.jpg"
    }, {
        _id: '2',
        name: 'Polo T-shirt (Blue)',
        brand: 'Nike',
        price: 1200,
        image: "https://images.sg.content-cdn.io/cdn//in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK833592-457.jpg"
    }, {
        _id: '3',
        name: "Running T-Shirt (White)",
        brand: 'Nike',
        price: 1200,
        image: "https://johnbuckleysports.com/wp-content/uploads/2014/11/833591_100_A.jpg"
    }, {
        _id: '4',
        name: 'Polo T-shirt (Light blue)',
        brand: 'Nike',
        price: 1200,
        image: "https://www.hautelookcdn.com/products/AJ8021/large/12062782.jpg"
    }];
        return (
            <ProductList products = {products}/>
        )
}

