export const ADD_WISHLIST='add/wishList'
export const DELETE_WISHLIST='delete/wishList'

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