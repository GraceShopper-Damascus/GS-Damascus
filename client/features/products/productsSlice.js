import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//thunk to get products
export const getAllProducts = createAsyncThunk('products/getAll', async()=>{
    try{
        const { data } = await axios.get('/api/products')
        return data
    }
    catch(err){
        return err.message
    }
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state, {payload}) => {
            state.allProducts = payload;
            })
    },
})

export default productsSlice.reducer;