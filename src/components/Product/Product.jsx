import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='border rounded relative h-[520px]'>
            <img className='w-80 h-80 rounded p-2' src={img} alt="" />
            <div className='p-3'>
                <h2 className='font-semibold'>{name}</h2>
                <p className='mb-3'>Price: ${price}</p>
                <p>Manufacturer: {seller} </p>
                <p>Ratings: {ratings} &#9733;</p>
            </div>
            <button className='bg-[#FFE0B2] w-full p-3 rounded-b absolute bottom-0 hover:bg-[#FF9900]'>Add To Cart</button>
        </div>

    );
};

export default Product;