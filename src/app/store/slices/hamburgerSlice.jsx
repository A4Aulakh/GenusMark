'use client'
import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    HamburgerEase: "hidden",
    darkMode: false,

  },
  reducers: {
    
    setHamburgerEase(state, action) {
      state.HamburgerEase = action.payload; 
    },
    toggleDarkMode(state) {
        state.darkMode = !state.darkMode; 
      },

  },
});

console.log(hamburgerSlice.actions);

export const { setHamburgerEase, HamburgerEase, toggleDarkMode } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
