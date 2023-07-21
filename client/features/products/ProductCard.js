import React from "react";
import { Link } from "react-router-dom";

const Product = ({product})=> {
    return(
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
            {/* <img src={product.imageUrl}/> */}
            <p>{product.name}</p>
            <p>{product.description}</p>
            </Link>
        </div>
    );
};

export default Product;