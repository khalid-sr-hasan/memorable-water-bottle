import React, { useEffect, useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";
import "./Bottles.css";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("bottles.json")
            .then((res) => res.json())
            .then((data) => setBottles(data));
    }, []);

    const handleCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
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
