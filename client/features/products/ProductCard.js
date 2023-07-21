import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product})=> {
    return(
        <div className="product-card-card">
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl}/>
            <h3>{product.name}</h3>
            </Link>
        </div>  
            <p className="card-price"><span>${product.price}</span><span><button>Add to Cart</button></span></p>
        </div>

    );
};

export default ProductCard;