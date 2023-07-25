import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cartProduct = useSelector(state => state.cart.UserCart.products)

  return(
    <div className="cart-product-container">
      <h3>{product.name}</h3>
      <h3>Price: ${product.price}</h3>
      <img src={product.imgUrl}/>
      <h3>Quantity: {product.quantity}</h3>
    </div>
  );
};

export default CartProduct;
