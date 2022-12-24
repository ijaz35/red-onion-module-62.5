import React from 'react';
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';

const Breakfast = (props) => {
    const { foods, handlerAddToCart } = props;
    // console.log(foods)

    return (
        <div className='row container mx-auto pt-5'>
            {
                foods.slice(0, 6).map(singleBreakfast => <SingleBreakfast
                    key={singleBreakfast.id}
                    singleBreakfast={singleBreakfast}
                    handlerAddToCart={handlerAddToCart}
                ></SingleBreakfast>)
            }

        </div>
    );
};

export default Breakfast;