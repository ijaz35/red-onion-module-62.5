import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Launch from '../Launch/Launch';
import './Foods.css'

const Foods = (props) => {
    const { foods, handlerAddToCart } = props;

    const [breakFastClick, setBreakfastClick] = useState(true)
    const [launchClick, setLaunchClick] = useState(false)
    const [dinnerClick, setDinnerClick] = useState(false)
    const navigate = useNavigate();

    const handleBreakfast = () => {
        setBreakfastClick(true)
        setLaunchClick(false)
        setDinnerClick(false)
    }

    const handleLaunch = () => {
        setLaunchClick(true)
        setBreakfastClick(false)
        setDinnerClick(false)
    }

    const handleDinner = () => {
        setDinnerClick(true)
        setLaunchClick(false)
        setBreakfastClick(false)
    }

    return (
        <div>
            <Navbar className='pt-5' bg="white" variant="light">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link onClick={handleBreakfast} className='food-link text-dark fw-bold'>Breakfast</Nav.Link>
                        <Nav.Link onClick={handleLaunch} className='food-link text-dark mx-5 fw-bold'>Launch</Nav.Link>
                        <Nav.Link onClick={handleDinner} className='food-link text-dark fw-bold'>Dinner</Nav.Link>
                    </Nav>

                </Container>

            </Navbar>
            <div className='container'>
                {breakFastClick && <Breakfast foods={foods}
                    handlerAddToCart={handlerAddToCart}
                ></Breakfast>}
                {launchClick && <Launch foods={foods}
                    handlerAddToCart={handlerAddToCart}
                ></Launch>}
                {dinnerClick && <Dinner foods={foods}
                    handlerAddToCart={handlerAddToCart}
                ></Dinner>}

                <button onClick={() => navigate('/checkout')} className='checkout-btn fw-bold'> Checkout Your Food</button>
            </div>

        </div>
    );
};

export default Foods;