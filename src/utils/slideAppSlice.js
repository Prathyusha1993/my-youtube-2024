import { createSlice } from "@reduxjs/toolkit";

const slideAppSlice = createSlice({
    name: 'slidebar',
    initialState:{
        isMenuOpen: true
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export default slideAppSlice.reducer;
export const { toggleMenu, closeMenu } = slideAppSlice.actions;