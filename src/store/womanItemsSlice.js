import { createSlice } from "@reduxjs/toolkit"
import { womanItems } from "../data/womanItems";

const womanItemsSlice=createSlice({
  name:"womanProducts",
  initialState:womanItems,
  reducers:{
    //using server but we are not doing now!
    addInitialProducts:(state,action)=>{console.log(state,action)}
  }
})


export default womanItemsSlice;

export const womanProductsActions=womanItemsSlice.actions;

