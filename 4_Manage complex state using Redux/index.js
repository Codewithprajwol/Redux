import { createStore } from "redux";
import products from "./products";


const ADD_ITEMS='add/cartItems'
const DELETE_ITEMS='delete/cartItems'
const INCREASE_QUANITTY_ITEMS='increase/cartItems'
const DECREASE_QUANTITY_ITEMS='decrease/cartItems'
const ADD_WISHLIST='add/wishList'
const DELETE_WISHLIST='delete/wishList'

const initialState={
   products:products,
   cartItems:[],
   wishList:[]
}
function reducer(state=initialState,action){
  switch(action.type){
    case ADD_ITEMS:
       return {...state,cartItems:[...state.cartItems,action.payload]}
    case DELETE_ITEMS:
        return{...state,cartItems:state.cartItems.filter((cartItem)=>cartItem.productId!==action.payload.productId)}
    case INCREASE_QUANITTY_ITEMS:
        return{...state,cartItems:state.cartItems.map((cartItem)=>{
            if(cartItem.productId===action.payload.productId){
                return {...cartItem,quantity:cartItem.quantity+1}
            }
            return cartItem
        })} 
    case DECREASE_QUANTITY_ITEMS:
        return{...state,cartItems:state.cartItems.map((cartItem)=>{
            if(cartItem.productId===action.payload.productId){
                return {...cartItem,quantity:cartItem.quantity-1}
            }
            return cartItem
        }).filter((filteredCartItems)=>filteredCartItems.quantity > 0)} 
    case ADD_WISHLIST:
        return{...state,wishList:[...state.wishList,action.payload]}
    case DELETE_WISHLIST:
        return {...state,wishList:state.wishList.filter((wish)=>wish.productId!==action.payload.productId)}
       default:
        return state; 
  }

 }
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
   store.subscribe(()=>{//? has been written somewhere else..it only the calling method
       console.log(store.getState())
})
   store.dispatch({type:ADD_ITEMS,payload:{productId:1,quantity:1}})
   store.dispatch({type:ADD_ITEMS,payload:{productId:2,quantity:1}})
   store.dispatch({type:ADD_ITEMS,payload:{productId:3,quantity:1}})
   store.dispatch({type:DELETE_ITEMS,payload:{productId:1}})
   store.dispatch({type:INCREASE_QUANITTY_ITEMS,payload:{productId:2}})
   store.dispatch({type:INCREASE_QUANITTY_ITEMS,payload:{productId:2}})
   store.dispatch({type:DECREASE_QUANTITY_ITEMS,payload:{productId:2}})
   store.dispatch({type:DECREASE_QUANTITY_ITEMS,payload:{productId:2}})
   store.dispatch({type:DECREASE_QUANTITY_ITEMS,payload:{productId:2}})
   store.dispatch({type:ADD_WISHLIST,payload:{productId:2}})
   store.dispatch({type:ADD_WISHLIST,payload:{productId:10}})
   store.dispatch({type:DELETE_WISHLIST,payload:{productId:10}})

