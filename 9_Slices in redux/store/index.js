import { combineReducers, createStore } from "redux";
import productReducer from "./slices/productSlice";
import wishListReducer from "./slices/wishListSlice";
import cartItemReducer from "./slices/CartItemSlice";

const reducer=combineReducers({
    products:productReducer,
    cartItems:cartItemReducer,
    wishList:wishListReducer
})

export const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
