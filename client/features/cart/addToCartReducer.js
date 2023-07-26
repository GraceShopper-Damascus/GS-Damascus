// import { createAction } from "@reduxjs/toolkit";

// // addToCartReducer.js
// const addToCartReducer = (state, action) => {
//   //defining product as object being sent to cart
//   const product = action.payload;
//   //checking for existing product.id
//   const existingProduct = state.UserCart.products.find((item) => item.id === product.id);
//   if (existingProduct) {
//     //increasing quantity by 1
//     existingProduct.quantity++;
//   } else {
//     //if product is not in cart, add it and set quantity to 1
//     state.UserCart.products.push({ ...product, quantity: 1 });
//   }
// };

// export const addToCart = createAction("cart/addToCart");

// export default addToCartReducer;
