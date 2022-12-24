import React from 'react';
import reason1 from '../../../images/adult-blur-blurred-background-687824.png'
import reason2 from '../../../images/architecture-building-city-2047397.png'
import reason3 from '../../../images/chef-cook-food-33614.png'
import Reason from '../Reason/Reason';
import icon1 from '../../../images/icons/Group 204.png'
import icon2 from '../../../images/icons/Group 245.png'
import icon3 from '../../../images/icons/Group 1133.png'

const Reasons = () => {
    const reasons = [
        { id: 1, name: 'Fast Delivery', description: 'Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future', img: reason1, icon: icon1 },
        { id: 2, name: 'A Good Auto Responder ', description: 'Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future', img: reason2, icon: icon2 },
        { id: 3, name: 'Home Delivery', description: 'Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future', img: reason3, icon: icon3 },
    ]
    return (
        <div className='container row mx-auto'>
            {
                reasons.map(reason => <Reason
                    key={reason.id}
                    reason={reason}
                ></Reason>)
            }
        </div>
    );
};

export default Reasons;