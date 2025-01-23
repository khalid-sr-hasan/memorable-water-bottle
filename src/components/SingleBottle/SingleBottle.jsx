import "./SingleBottle.css";
const SingleBottle = ({ bottle, handleCart }) => {
    const { name, price, img } = bottle;

    return (
        <div className="single-bottle">
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <button onClick={() => handleCart(bottle)}>Parches</button>
        </div>
    );
};

export default SingleBottle;
