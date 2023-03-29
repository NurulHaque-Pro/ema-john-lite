import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))

    } , []);

    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 p-14'>
               <h3 className='font-semibold text-3xl text-center'>Total Products: {products.length} </h3> 
               <div className='grid grid-cols-3 gap-7 mt-10'>
                    {
                        products.map(product => <Product product={product} key={product.id}></Product>)
                    }
               </div>
            </div>
            <div className=' px-3 py-14 bg-[#FFE0B2] '>
                <h3 className='text-center text-xl'>Cart Summary</h3>
            </div>
        </div>
    );
};

export default Shop;