import { combineReducers, createStore } from "redux";
import productReducer from "./slices/productSlice";
import wishListReducer from "./slices/wishListSlice";
import cartItemReducer from "./slices/CartItemSlice";
import { produce } from "immer";

const reducer=combineReducers({
    products:productReducer,
    cartItems:cartItemReducer,
    wishList:wishListReducer
})

export const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );


const users=[
    {
        name:'prajwol',
        age:20
    },
    {
        name:'Krishna',
        age:23
    },
    {
        name:'Ram',
        age:27
    },
]
// users[1].age=21
// console.log(users)
// const newUsers=produce(users,(usersCopy)=>{
//     usersCopy[0].age=21
// })
