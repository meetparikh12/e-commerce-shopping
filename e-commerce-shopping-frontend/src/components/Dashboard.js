import React, { useEffect, useState } from 'react'
import ProductList from './Product/ProductList';
import axios from 'axios';

export default function Dashboard() {
    
    const [products,setProducts] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false); 
    useEffect(()=> {
        axios.get("http://localhost:5000/api/products")
        .then((res)=> {
            setProducts(res.data.products);
            setIsLoaded(true);
        })
        .catch((err)=> console.log(err.response.data));
    },[])

    if(!isLoaded){
        return <h4 className="text-center mt-5">Loading...</h4>
    }
    return (
        <ProductList products = {products}/>
    )
}

