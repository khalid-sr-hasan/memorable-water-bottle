import React, { useEffect, useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";
import "./Bottles.css";
import { addCartToLS, getStoredCard } from "../../utils/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("bottles.json")
            .then((res) => res.json())
            .then((data) => setBottles(data));
    }, []);

    useEffect(() => {
        if (bottles.length > 0) {
            const storeCard = getStoredCard();
            console.log(storeCard);
            const saveCart = [];
            for (const id of storeCard) {
                const bottle = bottles.find((bottle) => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle);
                }
            }
            console.log(saveCart);
            setCart(saveCart);
        }
    }, [bottles]);

    const handleCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addCartToLS(bottle.id);
    };

    return (
        <div>
            <h2>Total Bottles: {bottles.length}</h2>
            <h4>Cart : {cart.length}</h4>

            <div className="bottles-container">
                {bottles.map((bottle) => (
                    <SingleBottle
                        key={bottle.id}
                        handleCart={handleCart}
                        bottle={bottle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottles;
