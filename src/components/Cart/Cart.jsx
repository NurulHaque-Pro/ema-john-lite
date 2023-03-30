import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = total*5/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='bg-[#FFE0B2] px-3 py-14 sticky top-3 mt-3'>
            <h3 className='text-center text-xl mb-4'>Cart Summary</h3>
            <p>Total item's: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;