import React, { useEffect, useState } from 'react'
import ProductList from './Product/ProductList';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from 'react-global-configuration';

export default function Dashboard() {
    
    const [products,setProducts] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false); 
    useEffect(()=> {
        axios.get(`${config.get('backend_url_products')}`)
        .then((res)=> {
            setProducts(res.data.products);
            setIsLoaded(true);
        })
        .catch((err)=> {
            toast.error(err.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        });
    },[])

    if(!isLoaded){
        return <h4 className="text-center mt-5">Loading...</h4>
    }
    return (
        <ProductList products = {products}/>
    )
}

