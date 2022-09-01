import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        expense: cartSlice.reducer
    }
});

export default store;