import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import bagSlice from "./bagSlice";
import menItemsSlice from "./menItemsSlice";
import womanItemsSlice from "./womanItemsSlice";
import kidsItemsSlice from "./kidsItemsSlice";
import beautyItemsSlice from "./beautyItemsSlice";
import wishlistSlice from "./wishlistSlice";

const myntraStore=configureStore({
  reducer:{
     products:productsSlice.reducer,
     bag:bagSlice.reducer,
     menProducts:menItemsSlice.reducer,
     womanProducts:womanItemsSlice.reducer,
     kidsProducts:kidsItemsSlice.reducer,
     beautyProducts:beautyItemsSlice.reducer,
     wishlist:wishlistSlice.reducer,
  }
})

export default myntraStore;