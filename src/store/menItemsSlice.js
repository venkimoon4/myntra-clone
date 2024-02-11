import { createSlice } from "@reduxjs/toolkit"
import { menItems } from "../data/menItems";

const menItemsSlice=createSlice({
  name:"menProducts",
  initialState:menItems,
  reducers:{
    //using server but we are not doing now!
    addInitialProducts:(state,action)=>{console.log(state,action)}
  }
})


export default menItemsSlice;

export const menProductsActions=menItemsSlice.actions;

