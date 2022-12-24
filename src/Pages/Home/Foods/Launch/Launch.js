import React from 'react';
import SingleLaunch from '../SingleLaunch/SingleLaunch';

const Launch = (props) => {
    const { foods, handlerAddToCart } = props;

    return (
        <div className='row container mx-auto pt-5'>
            {
                foods.slice(6, 12).map(singleLaunch => <SingleLaunch
                    key={singleLaunch.id}
                    singleLaunch={singleLaunch}
                    handlerAddToCart={handlerAddToCart}
                ></SingleLaunch>)
            }
        </div>
    );
};

export default Launch;