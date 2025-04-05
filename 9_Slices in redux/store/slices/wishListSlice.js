//action types
export const ADD_WISHLIST='add/wishList'
export const DELETE_WISHLIST='delete/wishList'

//action creators
export const addWishList=(productId)=>({type:ADD_WISHLIST,payload:{productId}})
export const deleteWishList=(productId)=>({type:DELETE_WISHLIST,payload:{productId}})

//reducer
export default function wishListReducer(state=[],action){
    switch(action.type){
        case ADD_WISHLIST:
            return[...state,action.payload]
        case DELETE_WISHLIST:
            return state.filter((wish)=>wish.productId!==action.payload.productId)
           default:
            return state; 
      }
}

//! this is called Ducks patterns ....as we are writing action types, action creators and reducer in same file