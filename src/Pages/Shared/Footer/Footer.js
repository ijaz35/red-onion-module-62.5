import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{
            backgroundColor: '#191919', height: '450px'
        }} className='footer-wrapper mt-5 text-start ' >
            <div className="container footer-container h-100">
                <div className="footer-left h-100">
                    <img className='' src={logo} alt="" />
                    <p className='text-muted'>Copyright &#169; {year} Online food</p>
                </div>

                <div className="footer-right text-light d-flex flex-column justify-content-between h-100">
                    <div className="footer-right-top d-flex justify-content-between h-100">
                        <ul>
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                        <ul>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View all cities</li>
                            <li>Restaurants near me  </li>
                        </ul>
                    </div>
                    <div className="footer-right-bottom">
                        <ul className='d-flex justify-content-between'>
                            <li>Privacy Policy. </li>
                            <li>Terms of Use</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Footer;