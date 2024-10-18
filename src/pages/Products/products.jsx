import React, { useState, useEffect } from 'react';
import fetchProducts from "../../api/fetchProducts";


const products = () => {

    const [shopProducts, setShopProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((response)=> {
            setShopProducts(response);
        });
    }, []);

    return(
        <>
        

        {
            shopProducts.map((product) => <p key={product.id} data={product} />)
        }
        </>
    )
}

export default products;