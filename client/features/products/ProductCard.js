import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../cart/addToCartReducer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card-card">
      <div className="product-card">
        <Link to={`/products/${product.id}`}>
          <img src={product.imageUrl} />
          <h3>{product.name}</h3>
        </Link>
      </div>
      <p className="card-price">
        <span>${product.price}</span>
        <span>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
