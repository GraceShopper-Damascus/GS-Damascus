import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

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
  },
})

export default cartSlice.reducer;
