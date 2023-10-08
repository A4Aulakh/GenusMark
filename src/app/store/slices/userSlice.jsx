'use client'
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    cssClass: "hidden",
    loginPage: "hidden",
  },
  reducers: {
    
    setCssClass(state, action) {
      state.cssClass = action.payload; 
    },

    setLoginPage(state, action) {
      state.loginPage = action.payload; 
    },

  },
});

console.log(usersSlice.actions);

export const { setCssClass, setLoginPage } = usersSlice.actions;

export default usersSlice.reducer;
