import React from 'react';

const SingleLaunch = ({ singleLaunch, handlerAddToCart }) => {
    const { name, description, price, img } = singleLaunch;
    return (
        <div className='foods-detail col-12 col-md-6 col-lg-4  p-5'>
            <div className="card border-0 mx-auto w-100" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top img-fluid" alt="breakfastPhoto" />
                <div className="card-body">
                    <p title={name} className="card-title h6">{name.length > 25 ? name.slice(0, 25) + '...' : name}</p>
                    <p className="card-text text-muted">{description}</p>
                    <h3> $ {price}</h3>
                    <button onClick={() => handlerAddToCart(singleLaunch)} className='btn add-btn px-5 mt-3'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleLaunch;