import "./SingleBottle.css";
const SingleBottle = ({ bottle }) => {
    const { name, price, img } = bottle;

    return (
        <div className="single-bottle">
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default SingleBottle;
