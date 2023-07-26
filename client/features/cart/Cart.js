import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "./cartSlice";
import CartProduct from "./CartProduct";

const Cart = () => {
  const dispatch = useDispatch();
  const savedCart = useSelector(state=> state.savedCart.UserCart)
  const userId = useSelector(state => state.auth.me.id)
  const [numProducts, setNumProducts] = useState(0)
  const [orderTotal, setOrderTotal] = useState(0)


  useEffect(() => {
    console.log("savedCart", savedCart)
    const getTotal = () => {
      let totalQuantity = 0;
      let totalPrice = 0;
      savedCart.products.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      });
      return { totalPrice, totalQuantity };
    };

    if (savedCart && savedCart.products && savedCart.products.length > 0) {
    setOrderTotal(getTotal().totalPrice);
    setNumProducts(getTotal().totalQuantity);
    }

  }, [savedCart])

  // useEffect(() => {
  //   if (userId!=null) dispatch(getUserCart(userId))
  // }, [dispatch, userId])
  


  return (
    <div className="cart-container">
      <h3>Order Items:</h3>
      {savedCart && savedCart.products && savedCart.products.length ? (
        savedCart.products.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))

      ) : (
        <h4>No products in cart</h4>
      )}
      <button>Checkout</button>
      <div>
        <p className="total__p">
          total ({numProducts} items)
          :{" "}
          <strong> ${orderTotal}</strong>
        </p>
        </div>
    </div>
  )
}

export default Cart;
