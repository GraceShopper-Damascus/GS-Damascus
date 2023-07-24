import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserCart } from "./cartSlice";
import CartProduct from "./CartProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.UserCart.products)
  // have you considered getting the userId from the redux store instead of from the params?
  const {userId} = useParams()

  useEffect(() => {
    dispatch(getUserCart(userId))
  }, [dispatch])
  console.log(products)

  return(
    <div className="cart-container">
      <h3>Order Items:</h3>
      {/* small suggestion: display a message if there are no products in the cart */}
      {products.map((product) => (
        <CartProduct product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default Cart;
