import { createSlice } from "@reduxjs/toolkit"
import { items } from "../data/items";

const productsSlice=createSlice({
  name:"products",
  initialState:items,
  reducers:{
    //using server but we are not doing now!
    addInitialProducts:(state,action)=>{console.log(state,action)}
  }
})


export default productsSlice;

export const productsActions=productsSlice.actions;

