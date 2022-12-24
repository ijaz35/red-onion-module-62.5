import React, { useEffect, useState } from 'react';
import { addToDb, getCart } from '../../../Utilities/storage';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods/Foods';
import Reasons from '../Reasons/Reasons';

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, []);

    useEffect(() => {
        const storedCart = getCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedFood = foods.find(food => food.id === id);
            if (addedFood) {
                const quantity = storedCart[id];
                addedFood.quantity = quantity;
                savedCart.push(addedFood);
            }
        }
        setCart(savedCart)
    }, [foods]);

    const handlerAddToCart = (selectedFood) => {
        let newCart = [];
        const exists = foods.find(food => food.id === selectedFood.id);
        if (!exists) {
            selectedFood.quantity = 1;
            newCart = [...cart, selectedFood];
        } else {
            const rest = cart.filter(food => food.id !== selectedFood.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedFood.id)
    }



    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Foods foods={foods}
                handlerAddToCart={handlerAddToCart}
            ></Foods>
            <Reasons></Reasons>
            <Footer></Footer>
        </div>
    );
};

export default Home;