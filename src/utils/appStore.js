import { configureStore } from "@reduxjs/toolkit";
import slideAppSlice from "./slideAppSlice";

const appStore = configureStore({
   reducer: {
    slidebar: slideAppSlice,
   } 
});

export default appStore;