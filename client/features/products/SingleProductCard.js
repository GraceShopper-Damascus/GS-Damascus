import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/addToCartReducer";

const SingleProductCard = ({product})=> {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    };

    return(
        <div>
            <img src={product.imageUrl}/>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p><button onClick={handleAddToCart}>Add to Cart</button></p>
        </div>

    );
};

export default SingleProductCard;
