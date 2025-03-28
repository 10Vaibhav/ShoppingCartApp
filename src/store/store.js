
import cartReducer from "./Slices/cart-slice.js"
import {configureStore} from "@reduxjs/toolkit";

const store  = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store;
