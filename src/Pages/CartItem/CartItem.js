import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const { cartItem } = props;
    const { img, name, price, quantity } = cartItem;
    // console.log(cartItem)
    return (
        <div className='order-review d-flex align-items-center justify-content-center px-2 py-3 mb-3 w-100 '>
            <img src={img} alt="" />
            <div className="order-review-info mx-2">
                <p title={name} className='fw-bold mb-0'>{name.length > 15 ? name.slice(0, 15) + '...' : name}</p>
                <h4 style={{ color: '#f91944' }} className='my-1'>$ {price}</h4>
                <p className='text-muted mb-0'><small>Delivery free</small></p>
            </div>
            <div className="order-review-control d-flex align-items-center justify-content-center ms-2">
                <button>-</button>
                <input className='review-input bg-white p-2 fs-5' type="number" name="" id="" defaultValue={quantity} />
                <button>+</button>
            </div>
        </div>
    );
};

export default CartItem;