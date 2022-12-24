import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useFoods from '../../hooks/useFoods';
import CartItem from '../CartItem/CartItem';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const [foods] = useFoods();
    const [cart] = useCart(foods);
    const navigate = useNavigate();

    let total = 0;
    let quantity = 0;
    for (const food of cart) {
        quantity = quantity + food.quantity;
        total = total + food.price * food.quantity;
    }
    const tax = (total * 0.1);
    const grandTotal = total + tax;
    const handleUserDetailForm = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.address.value;
        const flatDetails = event.target.flatDetails.value;
        const businessName = event.target.businessName.value;
        const instructions = event.target.instructions.value;
        console.log(name, address, flatDetails, businessName, instructions);
        navigate('/');

    }
    return (
        <div className=' container order-container mt-5  p-2'>
            <div className="delivery-details p-2">
                <h2 className='form-title fs-4 text-start'>Edit Delivery Details</h2>
                <form onSubmit={handleUserDetailForm}>
                    <input className='d-block w-75 p-3 rounded-3 ' type="text" name="name" id="name" placeholder='Deliver to door' />
                    <input className='d-block p-3 rounded-3 w-75 my-3 ' type="text" name="address" id="address" placeholder='107 Rd No 8' />
                    <input className='d-block p-3 rounded-3  w-75 ' type="text" name="flatDetails" id="flat-details" placeholder='Flat, suite or floor' />
                    <input className='d-block p-3 rounded-3  w-75 my-3 ' type="text" name="businessName" id="business-name" placeholder='Business Name' />
                    <textarea className='d-block p-3 rounded-3  w-75 ' id="instructions" name="instructions" rows="4" cols="50" placeholder='Add delivery instructor'></textarea>
                    <button style={{ backgroundColor: '#f91944', color: 'white' }} className='btn  border-0 mt-3 w-75 me-auto d-block' type="submit">Save &#38; Continue </button>
                </form>
            </div>
            <div className="order-details p-2 w-75 mx-auto">
                <div className='orderer-info text-start '>
                    <p>From <span className='h6 fw-bold'>Gulsan Plaza Restaura GPR</span></p>
                    <p>Ariving In 20-30 min</p>
                    <p>107 Rd No 8</p>
                </div>
                <div className='order-review-container'>
                    {
                        cart.map(cartItem => <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            quantity={quantity}
                        ></CartItem>)
                    }
                </div>
                <div className='order-pricing text-start mt-4 ps-3 d-flex align-items-center justify-content-between'>
                    <div>
                        <h6>SubTotal. {quantity} items</h6>
                        <h6 className='my-3'>Tax:</h6>
                        <h6>Delivery Fee:</h6>
                        <h3 className='my-3'>Total:</h3>
                    </div>
                    <div>
                        <h6>$ {total.toFixed(2)}</h6>
                        <h6 className='my-3 fw-normal'>$ {tax.toFixed(2)}</h6>
                        <h6 className='fw-normal'>$ 0</h6>
                        <h3 style={{ color: '#f91944' }} className='my-3 fw-normal'>$ {grandTotal.toFixed(2)}</h3>

                    </div>
                </div>
                <button style={{ backgroundColor: '#cecece' }} className='w-100 py-3 d-block border-0 rounded-3 mt-3 text-white'>Place order</button>

            </div>
        </div >
    );
};

export default PlaceOrder;