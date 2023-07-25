import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import addToCartReducer, { addToCart } from "./addToCartReducer";

//thunk to get user Cart
export const getUserCart = createAsyncThunk('user/getCart', async(userId) => {
  try{
    const { data } = await axios.get(`/api/users/${userId}/cart`)
    return data
  }catch(err){
    return err.message
  }
})

export const cartSlice = createSlice({
  name:'cart',
  initialState: {
    UserCart: {
      products: [],
      quantity: 0,
      total: 0.00,
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserCart.fulfilled, (state, {payload}) => {
        state.cart = payload;
      })
      .addCase(addToCart, addToCartReducer)
  },
})

export default cartSlice.reducer;
