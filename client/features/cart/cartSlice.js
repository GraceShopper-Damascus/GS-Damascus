// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// // import addToCartReducer, { addToCart } from "./addToCartReducer";

// //thunk to get user Cart
// export const getUserCart = createAsyncThunk("user/getCart", async (userId) => {
//   try {
//     const { data } = await axios.get(`/api/users/${userId}/cart`);
//     return data;
//   } catch (err) {
//     return err.message;
//   }
// });

// //thunk to add product to cart
// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async (productId) => {
//     try {
//       const { data } = await axios.put(`/api/products/${productId}`);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     UserCart: {
//       products: [],
//       quantity: 0,
//       total: 0.0,
//     },
//   },
//   reducers: {
//     addToCart(state, action) {
//       const product = action.payload;
//       const existingProduct = state.UserCart.products.find(
//         (item) => item.id === product.id
//       );
//       if (existingProduct) {
//         existingProduct.quantity++;
//       } else {
//         state.UserCart.products.push({ ...product, quantity: 1 });
//       }
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(getUserCart.fulfilled, (state, { payload }) => {
//         state.cart = payload;
//       })
//       .addCase(addToCart, addToCartReducer)
//       // .addCase(addToCart.fulfilled, (state, { payload }) => {
//       //   state.reducers.addToCartReducer(state, { payload });
//       // });
//   },
// });

// export const { addToCartReducer } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

//thunk to get user Cart
export const getUserCart = createAsyncThunk("user/getCart", async (userId) => { 
  try {
    console.log("get user cart is running", userId)
    const { data } = await axios.get(`/api/users/${userId}/cart`);
    console.log ("this is gonna say axios not defined", data)
    return data;
  } catch (err) {
    return err.message;
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    UserCart: {
      products: [],
      quantity: 0,
      total: 0.0,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("YOOOOOO THIS IS THE STATE", current(state))
      let products = state.UserCart.products
      const itemInCart = products.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.UserCart.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.UserCart.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.UserCart.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.UserCart.products.filter((item) => item.id !== action.payload);
      state.UserCart = removeItem;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCart.fulfilled, (state, { payload }) => {
        state.UserCart = payload;
      })  
  }
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
