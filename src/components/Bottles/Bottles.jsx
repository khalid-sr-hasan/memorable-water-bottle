import React, { useEffect, useState } from "react";
import SingleBottle from "../SingleBottle/SingleBottle";
import "./Bottles.css";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch("bottles.json")
            .then((res) => res.json())
            .then((data) => setBottles(data));
    }, []);

    console.log(bottles);

    return (
        <div>
            <h2>Total Bottles: {bottles.length}</h2>

            <div className="bottles-container">
                {bottles.map((bottle) => (
                    <SingleBottle bottle={bottle} />
                ))}
            </div>
        </div>
    );
};

export default Bottles;
