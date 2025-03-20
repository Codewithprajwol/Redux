export const ADD_ITEMS='add/cartItems'
export const DELETE_ITEMS='delete/cartItems'
export const INCREASE_QUANITTY_ITEMS='increase/cartItems'
export const DECREASE_QUANTITY_ITEMS='decrease/cartItems'

export default function cartItemReducer(state=[],action){
    switch(action.type){
        case ADD_ITEMS:
           return [...state,action.payload]
        case DELETE_ITEMS:
            return state.filter((cartItem)=>cartItem.productId!==action.payload.productId)
        case INCREASE_QUANITTY_ITEMS:
            return state.map((cartItem)=>{
                if(cartItem.productId===action.payload.productId){
                    return {...cartItem,quantity:cartItem.quantity+1}
                }
                return cartItem
            })
        case DECREASE_QUANTITY_ITEMS:
            return state.map((cartItem)=>{
                if(cartItem.productId===action.payload.productId){
                    return {...cartItem,quantity:cartItem.quantity-1}
                }
                return cartItem
            }).filter((filteredCartItems)=>filteredCartItems.quantity > 0)
           default:
            return state; 
      }
}