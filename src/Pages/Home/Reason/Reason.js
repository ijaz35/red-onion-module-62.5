import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Reason = ({ reason }) => {
    const { name, description, img, icon } = reason;
    return (
        <div className='foods-detail col-12 col-md-6 col-lg-4  p-0'>
            <div className="card mx-auto border-0  rounded-3 " style={{ width: '80%' }}>
                <img src={img} className="card-img-top img-fluid " alt="..." />
                <div className="card-body px-4">
                    <div className='d-flex align-items-center my-3'>
                        <img src={icon} alt="" />
                        <h5 className="card-title text-start ms-2">{name}</h5>
                    </div>
                    <p className="card-text text-start">{description}</p>
                    <div className='d-flex align-items-center justify-content-start'>
                        <button className="btn btn-link text-decoration-none pb-2">See more</button>
                        <FontAwesomeIcon className='text-success' icon={faArrowAltCircleRight}></FontAwesomeIcon>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reason;