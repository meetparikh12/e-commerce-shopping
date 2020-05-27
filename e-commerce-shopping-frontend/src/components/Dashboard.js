import React, { useEffect, useState } from 'react'
import ProductList from './Product/ProductList';
import axios from 'axios';

export default function Dashboard() {
    
    const [products,setProducts] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:5000/api/products")
        .then((res)=> setProducts(res.data.products))
        .catch((err)=> console.log(err.response.data));
    },[])
    return (
        <ProductList products = {products}/>
    )
}

