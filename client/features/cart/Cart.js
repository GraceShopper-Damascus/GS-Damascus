import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserCart } from "./cartSlice";
import CartProduct from "./CartProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart)
  const {userId} = useParams()

  useEffect(() => {
    dispatch(getUserCart(userId))
  }, [dispatch])
  console.log(products)

  return(
    <div className="cart-container">
      <h3>Order Items:</h3>
      {products.map((product) => (
        <CartProduct product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default Cart;
