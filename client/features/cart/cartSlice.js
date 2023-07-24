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
    cart: {},
  },
  extraReducers(builder) {
    builder
      .addCase(getUserCart.fulfilled, (state, {payload}) => {
        state.UserCart = payload;
      })
  },
})

export default cartSlice.reducer;
