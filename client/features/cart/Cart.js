import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "./cartSlice";
import CartProduct from "./CartProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.UserCart.products);
  const userId = useSelector((state) => state.auth.me.id);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  if (isLoggedIn) {
    useEffect(() => {
      dispatch(getUserCart(userId));
    }, [dispatch]);
  } else {
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(products));
    }, [products]);
  }

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
    </div>
  );
};

export default Cart;
