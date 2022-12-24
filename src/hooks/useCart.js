import { useEffect, useState } from "react";
import { getCart } from "../Utilities/storage";

const useCart = (foods) => {
    const [cart, setCart] = useState([]);
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
    }, [foods])
    return [cart, setCart]
}

export default useCart;