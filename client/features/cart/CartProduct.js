import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return(
    <div className="cart-product-container">
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <img src={product.imgUrl}/>
      <h3>Quantity: {product.quantity}</h3>
    </div>
  );
};

export default CartProduct;
