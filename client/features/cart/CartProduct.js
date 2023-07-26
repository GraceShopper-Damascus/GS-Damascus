import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "./cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.UserCart.products);

  // const getTotal = () => {
  //   let totalQuantity = 0;
  //   let totalPrice = 0;
  //   cartProduct.forEach((item) => {
  //     totalQuantity += item.quantity;
  //     totalPrice += item.price * item.quantity;
  //   });
  //   return { totalPrice, totalQuantity };
  // };

  return (
    <>
      <div className="cart-product-container">
        <h3>{product.name}</h3>
        <h3>Price: ${product.price}</h3>
        <img src={product.imgUrl} />
        <h3>Quantity: {product.quantity}</h3>
        <button onClick={() => dispatch(decrementQuantity(product.id))}>
          -
        </button>
        <button onClick={() => dispatch(incrementQuantity(product.id))}>
          +
        </button>
      </div>
      <div>
        <button
          className="cartItem__removeButton"
          onClick={() => dispatch(removeItem(product.id))}
        >
          Remove
        </button>
      </div>
      {/* <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>
        </p>
      </div> */}
    </>
  );
};

export default CartProduct;
