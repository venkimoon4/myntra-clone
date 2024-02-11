import {createSlice} from "@reduxjs/toolkit"

const wishlistSlice=createSlice({
  name:"wishlist",
  initialState:[],
  reducers:{
    addItemToWishList:(state,action)=>{state.push(action.payload)},
    removeItemToWishList:(state,action)=>{return state.filter((wishList)=>wishList!==action.payload)}
  }
});

export default wishlistSlice;

export const wishlistActions=wishlistSlice.actions;