import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))

    } , []);

    // Add to cart button function

    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    

    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 p-14'>
               <h3 className='font-semibold text-3xl text-center'>Total Products: {products.length} </h3> 
               <div className='grid grid-cols-3 gap-7 mt-10'>
                    {
                        products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                    }
               </div>
            </div>
            <div className=''>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;