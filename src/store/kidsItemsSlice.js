import { createSlice } from "@reduxjs/toolkit"
import { kidsItems } from "../data/kidsItems";

const kidsItemsSlice=createSlice({
  name:"kidsProducts",
  initialState:kidsItems,
  reducers:{
    //using server but we are not doing now!
    addInitialProducts:(state,action)=>{console.log(state,action)}
  }
})

export default kidsItemsSlice;

export const kidsProductsActions=kidsItemsSlice.actions;

