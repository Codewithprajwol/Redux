import { combineReducers } from "redux";
import productReducer from "./slices/productSlice";
import wishListReducer from "./slices/wishListSlice";
import cartItemReducer from "./slices/CartItemSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store=configureStore({reducer:{
    products:productReducer,
    cartItems:cartItemReducer,
    wishList:wishListReducer
}})
