import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserCart } from "./cartSlice";
import CartProduct from "./CartProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.UserCart.products)
  const userId = useSelector(state => state.auth.me.id)

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
    </div>
  )
}

export default Cart;
