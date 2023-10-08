'use client'


import { configureStore } from "@reduxjs/toolkit";
import  usersSlice  from "./slices/userSlice";
import hamburgerSlice from "./slices/hamburgerSlice";

const store = configureStore({
    reducer: {

        users: usersSlice,
        hambugerhandle: hamburgerSlice,
        
    },
});

export default store;

