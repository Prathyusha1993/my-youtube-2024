import { configureStore } from "@reduxjs/toolkit";
import slideAppSlice from "./slideAppSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
   reducer: {
    slidebar: slideAppSlice,
    search: searchSlice,
    chat: chatSlice
   } 
});

export default appStore;