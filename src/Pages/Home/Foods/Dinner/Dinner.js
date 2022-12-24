import React from 'react';
import SingleDinner from '../SingleDinner/SingleDinner';

const Dinner = (props) => {
    const { foods, handlerAddToCart } = props;

    return (
        <div className='row container mx-auto pt-5'>
            {
                foods.slice(12, 18).map(singleDinner => <SingleDinner
                    key={singleDinner.id}
                    singleDinner={singleDinner}
                    handlerAddToCart={handlerAddToCart}
                ></SingleDinner>)
            }
        </div>
    );
};

export default Dinner;