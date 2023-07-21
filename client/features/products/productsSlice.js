import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//thunk to get all products
export const getAllProducts = createAsyncThunk('products/getAll', async()=>{
    try{
        const { data } = await axios.get('/api/products')
        return data
    }
    catch(err){
        return err.message
    }
})

//thunk to get single product
export const getSingleProduct = createAsyncThunk('products/getOne', async(id)=>{
    try{
        const { data } = await axios.get(`/api/products/${id}`)
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
        singleProduct: {},
    },
    extraReducers(builder) {
        builder
            .addCase(getAllProducts.fulfilled, (state, {payload}) => {
            state.allProducts = payload;
            })
            .addCase(getSingleProduct.fulfilled, (state, {payload}) => {
            state.singleProduct = payload;
            })
    },
})

export default productsSlice.reducer;