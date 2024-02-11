import { createSlice } from "@reduxjs/toolkit"
import { beautyItems } from "../data/beautyItems";

const beautyItemsSlice=createSlice({
  name:"beautyProducts",
  initialState:beautyItems,
  reducers:{
    //using server but we are not doing now!
    addInitialProducts:(state,action)=>{console.log(state,action)}
  }
})


export default beautyItemsSlice;

export const beautyProductsActions=beautyItemsSlice.actions;

