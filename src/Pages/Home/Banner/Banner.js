import React from 'react';
import './Banner.css'
import banner from '../../../images/bannerbackground.png'

const Banner = () => {
    return (
        <div className=" banner-container">
            <div className='banner-background'>
                <img src={banner} alt="" />
            </div>
            <div className='banner-info'>
                <h1 className='mb-5'>Best food waiting for your belly</h1>
                <input className='banner-search' type="search" name="search" defaultValue="Search food items" />
                <button className='banner-search-btn'>Search</button>
            </div>
        </div>
    );
};

export default Banner;