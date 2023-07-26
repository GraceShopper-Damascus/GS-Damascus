import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "./cartSlice";
import CartProduct from "./CartProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.UserCart.products)
  const userId = useSelector(state => state.auth.me.id)

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };


  useEffect(() => {
    dispatch(getUserCart(userId))
  }, [dispatch])
  console.log(products)


  return (
    <div className="cart-container">
      <h3>Order Items:</h3>
      {products && products.length ? (
        products.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))

      ) : (
        <h4>No products in cart</h4>
      )}
      <button>Checkout</button>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items)
          :{" "}
          <strong> ${getTotal().totalPrice}</strong>
        </p>
        </div>
    </div>
  )
}

export default Cart;
