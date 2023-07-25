import React from "react";

const SingleProductPage = ({product})=> {
    return(
        <div>
            <img src={product.imageUrl}/>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p><button>Add to Cart</button></p>
        </div>

    );
};

export default SingleProductPage;