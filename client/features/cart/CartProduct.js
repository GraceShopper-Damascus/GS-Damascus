import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return(
    <div className="cart-product-container">
      {/* general feedback: when you're creating components like this that have a bunch of data points, consider adding className properties when you build the component. This will make for fewer merge conflicts when you're working on styling! */}
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <img src={product.imgUrl}/>
      <h3>Quantity: {product.quantity}</h3>
    </div>
  );
};

export default CartProduct;
